$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$repoRoot = Split-Path -Parent $PSScriptRoot
$maxLongEdge = 1800
$jpegQuality = 82L
$graphicJpegQuality = 88L
$minimumSavingsRatio = 0.97
$reportPath = Join-Path $PSScriptRoot "image-optimization-report.json"

function Get-RepoRelativePath {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Path
  )

  $absolutePath = [System.IO.Path]::GetFullPath($Path)

  if (-not $absolutePath.StartsWith($repoRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Path '$absolutePath' is outside of the repository root."
  }

  return $absolutePath.Substring($repoRoot.Length).TrimStart("\", "/")
}

function Get-ReferencedAssetPaths {
  $filesToScan = @(
    Join-Path $repoRoot "index.html"
  )

  $projectFiles = Get-ChildItem -Path (Join-Path $repoRoot "projects") -Filter *.html -File -ErrorAction SilentlyContinue
  $cssFiles = Get-ChildItem -Path (Join-Path $repoRoot "assets/css") -Filter *.css -File -ErrorAction SilentlyContinue

  $filesToScan += $projectFiles.FullName
  $filesToScan += $cssFiles.FullName

  $assetPaths = New-Object System.Collections.Generic.HashSet[string] ([System.StringComparer]::OrdinalIgnoreCase)

  foreach ($file in $filesToScan | Where-Object { $_ -and (Test-Path $_) }) {
    $directory = Split-Path -Parent $file
    $content = Get-Content -Path $file -Raw

    $matches = @(
      [regex]::Matches($content, '(?:src|data-src)\s*=\s*["'']([^"'']+)["'']', 'IgnoreCase')
      [regex]::Matches($content, 'url\((?:"|'')?([^)"'']+)(?:"|'')?\)', 'IgnoreCase')
    )

    foreach ($matchCollection in $matches) {
      foreach ($match in $matchCollection) {
        $rawPath = $match.Groups[1].Value.Trim()

        if ([string]::IsNullOrWhiteSpace($rawPath)) {
          continue
        }

        if ($rawPath.StartsWith("http", [System.StringComparison]::OrdinalIgnoreCase) -or
            $rawPath.StartsWith("//") -or
            $rawPath.StartsWith("data:") -or
            $rawPath.StartsWith("#")) {
          continue
        }

        $decodedPath = [System.Uri]::UnescapeDataString($rawPath.Replace("/", "\"))
        $resolvedPath = [System.IO.Path]::GetFullPath((Join-Path $directory $decodedPath))

        if (-not $resolvedPath.StartsWith($repoRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
          continue
        }

        if (-not (Test-Path -LiteralPath $resolvedPath -PathType Leaf)) {
          continue
        }

        $extension = [System.IO.Path]::GetExtension($resolvedPath).ToLowerInvariant()

        if ($extension -notin @(".jpg", ".jpeg", ".png")) {
          continue
        }

        [void]$assetPaths.Add($resolvedPath)
      }
    }
  }

  return @($assetPaths) | Sort-Object
}

function Get-JpegCodec {
  return [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" } |
    Select-Object -First 1
}

function Set-ImageOrientation {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Image
  )

  $orientationId = 0x0112

  if ($Image.PropertyIdList -notcontains $orientationId) {
    return
  }

  $orientation = [System.BitConverter]::ToUInt16($Image.GetPropertyItem($orientationId).Value, 0)

  switch ($orientation) {
    2 { $Image.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
    3 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    4 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
    5 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
    6 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
    7 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
    8 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
  }

  try {
    $Image.RemovePropertyItem($orientationId)
  } catch {
    # Some formats do not let us remove metadata cleanly; it is safe to continue.
  }
}

function New-ScaledBitmap {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Source,

    [Parameter(Mandatory = $true)]
    [int]$MaxLongEdge
  )

  $longEdge = [Math]::Max($Source.Width, $Source.Height)
  $scale = [Math]::Min(1.0, $MaxLongEdge / [double]$longEdge)
  $targetWidth = [Math]::Max(1, [int][Math]::Round($Source.Width * $scale))
  $targetHeight = [Math]::Max(1, [int][Math]::Round($Source.Height * $scale))

  $bitmap = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  try {
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.DrawImage($Source, 0, 0, $targetWidth, $targetHeight)
  } finally {
    $graphics.Dispose()
  }

  return $bitmap
}

function Get-HasAlpha {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Image
  )

  $pixelFormat = $Image.PixelFormat.ToString()
  return $pixelFormat -match "Alpha|PAlpha"
}

function Save-AsJpeg {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Image,

    [Parameter(Mandatory = $true)]
    [string]$DestinationPath,

    [Parameter(Mandatory = $true)]
    [long]$Quality
  )

  $codec = Get-JpegCodec

  if (-not $codec) {
    throw "JPEG codec not available on this system."
  }

  $qualityEncoder = [System.Drawing.Imaging.Encoder]::Quality
  $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters 1
  $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($qualityEncoder, $Quality)

  try {
    $Image.Save($DestinationPath, $codec, $encoderParameters)
  } finally {
    $encoderParameters.Dispose()
  }
}

function Save-AsPng {
  param(
    [Parameter(Mandatory = $true)]
    [System.Drawing.Image]$Image,

    [Parameter(Mandatory = $true)]
    [string]$DestinationPath
  )

  $Image.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
}

$referencedAssets = Get-ReferencedAssetPaths
$reportRows = New-Object System.Collections.Generic.List[object]
$generatedMappings = New-Object System.Collections.Generic.List[object]

foreach ($assetPath in $referencedAssets) {
  $extension = [System.IO.Path]::GetExtension($assetPath).ToLowerInvariant()
  $originalInfo = Get-Item -LiteralPath $assetPath
  $sourceImage = [System.Drawing.Image]::FromFile($assetPath)
  $generatedBitmap = $null
  $candidatePath = $null
  $temporaryPath = $null
  $action = "unchanged"
  $originalWidth = $null
  $originalHeight = $null
  $finalWidth = $null
  $finalHeight = $null
  $finalOutputPath = $assetPath

  try {
    Set-ImageOrientation -Image $sourceImage
    $originalWidth = $sourceImage.Width
    $originalHeight = $sourceImage.Height
    $generatedBitmap = New-ScaledBitmap -Source $sourceImage -MaxLongEdge $maxLongEdge
    $hasAlpha = Get-HasAlpha -Image $sourceImage
    $quality = if ($extension -eq ".png") { $graphicJpegQuality } else { $jpegQuality }

    if ($extension -eq ".png" -and -not $hasAlpha) {
      $candidatePath = [System.IO.Path]::ChangeExtension($assetPath, ".jpg")
      $temporaryPath = "$candidatePath.tmp"
      Save-AsJpeg -Image $generatedBitmap -DestinationPath $temporaryPath -Quality $quality
    } elseif ($extension -eq ".png") {
      $candidatePath = $assetPath
      $temporaryPath = "$assetPath.tmp"
      Save-AsPng -Image $generatedBitmap -DestinationPath $temporaryPath
    } else {
      $candidatePath = $assetPath
      $temporaryPath = "$assetPath.tmp"
      Save-AsJpeg -Image $generatedBitmap -DestinationPath $temporaryPath -Quality $quality
    }
  } finally {
    if ($sourceImage) {
      $sourceImage.Dispose()
    }
  }

  $optimizedInfo = Get-Item -LiteralPath $temporaryPath
  $savedEnough = $optimizedInfo.Length -lt ($originalInfo.Length * $minimumSavingsRatio)
  $wasResized = $generatedBitmap.Width -ne $originalWidth -or $generatedBitmap.Height -ne $originalHeight

  if ($generatedBitmap) {
    $finalWidth = $generatedBitmap.Width
    $finalHeight = $generatedBitmap.Height
    $generatedBitmap.Dispose()
  }

  if ($candidatePath -ne $assetPath) {
    if ($savedEnough) {
      Move-Item -LiteralPath $temporaryPath -Destination $candidatePath -Force
      $action = "converted"
      $finalOutputPath = $candidatePath
      $generatedMappings.Add([PSCustomObject]@{
        From = (Get-RepoRelativePath -Path $assetPath).Replace("\", "/")
        To = (Get-RepoRelativePath -Path $candidatePath).Replace("\", "/")
      }) | Out-Null
    } else {
      Remove-Item -LiteralPath $temporaryPath -Force
      $finalOutputPath = $assetPath
    }
  } elseif ($savedEnough -or $wasResized) {
    Move-Item -LiteralPath $temporaryPath -Destination $assetPath -Force
    $action = "optimized"
    $finalOutputPath = $assetPath
  } else {
    Remove-Item -LiteralPath $temporaryPath -Force
    $finalOutputPath = $assetPath
  }

  $finalInfo = Get-Item -LiteralPath $finalOutputPath

  $reportRows.Add([PSCustomObject]@{
    Path = Get-RepoRelativePath -Path $assetPath
    OutputPath = Get-RepoRelativePath -Path $finalInfo.FullName
    Action = $action
    OriginalBytes = $originalInfo.Length
    FinalBytes = $finalInfo.Length
    OriginalWidth = $originalWidth
    OriginalHeight = $originalHeight
    FinalWidth = $finalWidth
    FinalHeight = $finalHeight
  }) | Out-Null
}

$report = [PSCustomObject]@{
  GeneratedAt = (Get-Date).ToString("s")
  MaxLongEdge = $maxLongEdge
  Rows = $reportRows
  PathMappings = $generatedMappings
}

$report | ConvertTo-Json -Depth 5 | Set-Content -Path $reportPath -Encoding UTF8

$beforeBytes = ($reportRows | Measure-Object -Property OriginalBytes -Sum).Sum
$afterBytes = ($reportRows | Measure-Object -Property FinalBytes -Sum).Sum

[PSCustomObject]@{
  ReferencedImages = $reportRows.Count
  BeforeMB = [math]::Round($beforeBytes / 1MB, 2)
  AfterMB = [math]::Round($afterBytes / 1MB, 2)
  SavedMB = [math]::Round(($beforeBytes - $afterBytes) / 1MB, 2)
  Report = (Get-RepoRelativePath -Path $reportPath)
} | Format-List | Out-String
