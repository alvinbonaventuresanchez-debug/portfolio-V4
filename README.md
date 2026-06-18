# Portfolio Alvin Bonaventure-Sanchez

Portfolio creatif statique realise en `HTML`, `CSS` et `JavaScript` vanilla. Le site presente un univers graphique personnel, des series photo, ainsi que des projets de cours avec des pages d'etude de cas plus detaillees.

## Objectif du projet

Ce portfolio a ete pense pour :

- presenter une identite visuelle forte ;
- organiser les travaux par categories claires ;
- montrer a la fois les visuels finaux et la reflexion derriere certains projets ;
- rester simple a maintenir, sans framework ni etape de build.

## Stack utilisee

- `HTML` pour la structure des pages
- `CSS` pour la direction artistique, les animations et le responsive
- `JavaScript` vanilla pour les interactions
- `PowerShell` pour l'optimisation des images

## Structure du projet

```text
portfolio V4/
|-- index.html
|-- README.md
|-- assets/
|   |-- css/
|   |   `-- alvin-portfolio.css
|   |-- js/
|   |   `-- alvin-portfolio.js
|   `-- images/
|       |-- Alvin_CV.pdf
|       |-- icone/
|       |-- textures/
|       |-- og-cover.jpg
|       `-- projects/
|-- projects/
|   |-- projet-photo-tatouage.html
|   `-- rails-et-savoirs.html
`-- scripts/
    |-- optimize-portfolio-images.ps1
    `-- image-optimization-report.json
```

## Role des fichiers principaux

### `index.html`

C'est la page d'accueil du portfolio. Elle contient les grandes sections du site :

- `hero` : introduction visuelle et accroches principales ;
- `about` : presentation du profil et de l'approche creative ;
- `projects` : galerie principale organisee en 3 categories ;
- `skills` : competences, outils et types de projets ;
- `contact` : email, telephone, reseaux sociaux et CV.

La section `projects` est le coeur du portfolio :

- `Graphisme` affiche des affiches, compositions et recherches visuelles ;
- `Photo` regroupe les series photo et plans de travail ;
- `Cours` presente les projets academiques, dont deux etudes de cas deja en ligne.

### `projects/projet-photo-tatouage.html`

Cette page est une etude de cas detaillee. Elle ne montre pas seulement des images : elle explique aussi le contexte, la problematique, le process, les decisions prises, les resultats et l'analyse critique du projet.

L'idee est de montrer une vraie demarche de conception, pas seulement une galerie.

### `projects/rails-et-savoirs.html`

Cette page presente le projet de groupe `Raily`, un jeu de plateau interculturel autour des Ameriques.

Elle rassemble le contexte, les objectifs pedagogiques, la logique de jeu, les supports visuels et le role de la direction graphique dans la construction du projet.

### `assets/css/alvin-portfolio.css`

Feuille de style principale partagee par tout le site.

Elle gere :

- les variables globales de couleur, typo et ambiance ;
- les icones SVG locales via des masques CSS en `currentColor` ;
- la navigation fixe ;
- la mise en page des sections ;
- les cartes de projets ;
- la page de detail ;
- la lightbox ;
- les indicateurs visuels `zoom-in` sur les images ouvrables ;
- les animations d'apparition ;
- les breakpoints responsive.

Le CSS porte une grande partie de l'identite visuelle du portfolio : fond sombre, glow, grain, contrastes, cartes, superpositions, icones violettes et animations.

### `assets/js/alvin-portfolio.js`

Script principal du site. Il gere les interactions et les effets visuels.

Fonctionnalites principales :

- animation d'introduction sur la page d'accueil ;
- desactivation automatique de certains effets si `prefers-reduced-motion` est active ;
- apparition progressive des blocs avec `IntersectionObserver` ;
- amelioration du chargement des images (`loading="lazy"`, `decoding="async"`, priorite basse) ;
- ouverture/fermeture des categories de projets ;
- creation d'un carousel responsive quand une categorie contient beaucoup d'elements ;
- mise a jour des libelles de categories entre `Voir les projets` et `Fermer` ;
- chargement differe des images marquees avec `data-src` ;
- lightbox pour agrandir les visuels ;
- sur la page projet, surlignage du lien de section actif pendant le scroll ;
- scroll horizontal de la galerie au trackpad / molette ;
- halo lumineux qui suit la souris sur desktop ;
- legere variation de la bordure de navigation selon le scroll.

L'animation d'intro de la home ne se joue qu'une fois par session grace a `sessionStorage`.

### `assets/images/`

Ce dossier contient tous les medias du portfolio :

- les images des projets ;
- les icones SVG locales : contact, reseaux sociaux, fleches, chevrons, zoom et telechargement du CV ;
- la texture `grain.svg` utilisee dans le fond ;
- l'image de partage `og-cover.jpg` ;
- le `CV` telechargeable.

Les images sont rangees par categories, ce qui aide a garder une organisation coherente entre le contenu visuel et le HTML.

### `scripts/optimize-portfolio-images.ps1`

Ce script sert a preparer les images pour le web.

Il :

- scanne les fichiers HTML et CSS pour detecter les images reellement utilisees ;
- redimensionne les images trop grandes ;
- compresse les JPEG ;
- convertit certains PNG en JPG quand la transparence n'est pas necessaire ;
- genere un rapport JSON dans `scripts/image-optimization-report.json`.

L'objectif est de garder un portfolio visuel, mais plus rapide a charger.

## Logique du portfolio

Le site repose sur une structure simple :

1. une page d'accueil forte visuellement ;
2. des categories qui permettent de parcourir les travaux ;
3. une ou plusieurs pages de detail pour developper certains projets importants.

Ce choix permet d'avoir :

- une lecture rapide pour un recruteur ;
- une lecture plus approfondie pour un jury ou un client ;
- un code facile a modifier sans dependance externe.

## Lancer le projet

Le projet ne demande aucune installation.

Deux options simples :

1. ouvrir directement `index.html` dans un navigateur ;
2. lancer un petit serveur local si tu veux tester le site dans des conditions plus proches du web.

Note : les polices Google Fonts demandent une connexion internet pour se charger.

## Comment modifier le portfolio

### Modifier les textes

Les contenus sont ecrits directement dans les fichiers HTML :

- `index.html` pour la page principale ;
- `projects/projet-photo-tatouage.html` pour la page projet detaillee.

### Ajouter un nouveau visuel

1. placer l'image dans le bon dossier sous `assets/images/projects/` ;
2. ajouter un bloc HTML de type `project-entry` dans la bonne categorie ;
3. verifier le chemin de l'image dans le `src` ou `data-src`.

### Ajouter un nouveau projet detaille

1. creer une nouvelle page dans `projects/` ;
2. reprendre la structure de `projet-photo-tatouage.html` ;
3. ajouter un lien depuis `index.html` dans la categorie concernee.

## Points techniques utiles

- Le site est volontairement sans framework pour rester leger et facile a relire.
- Le meme CSS et le meme JS sont reutilises entre la home et la page projet.
- Plusieurs elements utilisent des attributs `aria-*` pour ameliorer l'accessibilite.
- Les icones sont stockees dans `assets/images/icone/` et appliquees en CSS avec `.icon-mask`, ce qui permet de les recolorer dans la direction artistique du site.
- Les boutons du carousel gardent des `aria-label`, meme si leur contenu visible est maintenant une icone.
- Les images ouvrables en lightbox sont signalees visuellement par un indicateur `zoom-in`.
- Certains chemins d'images contiennent des espaces et des accents : il faut donc faire attention a leur encodage dans le HTML.

## Etat actuel des finitions

- Images lourdes optimisees et chemins web mis a jour.
- Textes visibles harmonises en francais, notamment `etude de cas`.
- Bases SEO ajoutees : meta descriptions, Open Graph, Twitter Card, favicon et image de partage.
- Icones utiles ajoutees : email, telephone, LinkedIn, Instagram, fleches, chevrons, zoom et CV.
- Interactions projets finalisees : chevrons rotatifs, carousel avec icones accessibles, CTA coherents et indicateurs de lightbox.

## Resume

Ce portfolio est un site statique immersif centre sur l'image. Techniquement, il repose sur une base simple et lisible : une structure HTML claire, une grosse feuille de style pour l'identite visuelle, un script JavaScript unique pour les interactions, et un outil d'optimisation pour garder des images adaptees au web.
