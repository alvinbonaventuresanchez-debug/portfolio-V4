# Audit du portfolio

Ce document rassemble les points forts, les points a ameliorer et les idees d'ajouts pour faire monter le portfolio en qualite sans perdre son identite actuelle.

## Verdict general

Le portfolio a deja une vraie personnalite visuelle. Il ne donne pas l'impression d'un template : la typographie, le fond sombre, les accents violets, les animations et les visuels donnent une direction graphique reconnaissable.

La base est solide. Les ameliorations a faire concernent surtout la finition : textes plus precis, icones plus coherentes, performance des images, et quelques details SEO/accessibilite.

## Ce qui fonctionne bien

- Identite visuelle forte : ambiance sombre, violet, grain, glow et typographie expressive.
- Structure claire : Hero, A propos, Projets, Expertise, Contact.
- Categories de projets lisibles : Graphisme, Photo, Cours.
- Les case studies ajoutent beaucoup de valeur : ils montrent la demarche, pas seulement le rendu final.
- Les interactions donnent de la vie au site : intro, reveal, lightbox, categories ouvrantes, carousel.
- La section contact est complete : email, telephone, reseaux sociaux et CV.
- L'icone de telechargement du CV ajoute une finition plus professionnelle.

## Ce qui peut etre ameliore

### Textes et formulation

Certains textes sont encore un peu generiques ou trop explicatifs.

Exemples :

- `Quelque chose d'unique, toujours.`
- `Cliquer pour ouvrir la categorie`
- `Publication prochaine`
- `Projet de cours 03`

Ces textes fonctionnent, mais ils donnent parfois une impression de portfolio encore en construction.

Suggestions :

- Remplacer `Cliquer pour ouvrir la categorie` par un texte plus naturel, ou par un chevron visuel.
- Remplacer `Projet de cours 03` par un vrai titre temporaire.
- Remplacer `Publication prochaine` par `Case study en preparation` ou `Projet a venir`.
- Harmoniser la langue : eviter le melange entre francais et anglais.

Termes a harmoniser :

- `Selection` -> `Selection` avec accent si possible : `Selection` ou `Selection de projets`
- `Execution` -> `Execution`
- `case study` -> `etude de cas`

Note : le code utilise beaucoup d'entites HTML sans accents directs, donc il faut rester coherent avec le style actuel.

### Hero

Le hero est visuellement fort, mais le texte pourrait etre plus precis.

Actuel :

```text
Creatif graphique, affiches, identites visuelles,
experimentations. Quelque chose d'unique, toujours.
```

Piste possible :

```text
Identites visuelles, affiches et compositions graphiques
pour des univers visuels forts, lisibles et memorables.
```

Autre piste plus personnelle :

```text
Je compose des images, des affiches et des identites visuelles
qui melangent atmosphere, rythme et impact graphique.
```

### Date du portfolio

Le hero indiquait `Portfolio creatif 2025`.

Statut : fait.

Resultat :

- le badge hero affiche maintenant `Portfolio creatif`, sans annee fixe ;
- les annees des footers sont remplies automatiquement en JavaScript avec l'annee courante.

Comme le projet continue d'evoluer, deux options sont possibles :

- mettre `Portfolio creatif 2026` ;
- enlever l'annee et garder `Portfolio creatif`.

La deuxieme option evite d'avoir a modifier la date chaque annee.

## Icones a ajouter

Le dossier `assets/images/icone/` existe deja avec :

- `book-download.svg`

Il serait utile d'ajouter quelques icones coherentes.

### Priorite haute

- `mail.svg` pour la carte Email.
- `phone.svg` pour la carte Telephone.
- `linkedin.svg` pour LinkedIn.
- `instagram.svg` pour Instagram.
- `arrow-right.svg` pour les liens de type `Voir le case study`.
- `chevron-down.svg` pour les categories ouvrantes.

### Priorite moyenne

- `arrow-left.svg` pour les liens `Retour au portfolio`.
- `external-link.svg` pour les liens externes.
- `image.svg` ou `zoom-in.svg` pour l'action d'agrandir une image.
- `download.svg` si tu veux une icone plus simple que `book-download.svg`.

### Comment les utiliser

Pour garder un HTML propre, le mieux est de stocker les icones en fichiers SVG dans :

```text
assets/images/icone/
```

Puis de les utiliser :

- soit avec des balises `img` ;
- soit avec des masques CSS si on veut que l'icone prenne automatiquement la couleur du texte.

Le lien CV utilise deja une bonne approche avec un masque CSS :

```css
.contact-cv-icon {
  background: currentColor;
  -webkit-mask: url("../images/icone/book-download.svg") center / contain no-repeat;
  mask: url("../images/icone/book-download.svg") center / contain no-repeat;
}
```

## Performance

Le plus gros point technique concerne le poids des images.

Certaines images sont tres lourdes pour le web :

- `fly-visual.png` : environ 96 Mo.
- `koichi-sato-material-study.png` : environ 60 Mo.
- `japan-visual-direction.png` : environ 48 Mo.
- `spider-poster.png` : environ 35 Mo.
- `fall-festival-poster.png` : environ 24 Mo.

Pour un portfolio en ligne, ces fichiers peuvent ralentir fortement le chargement, surtout sur mobile.

### Recommandations

- Utiliser les versions optimisees quand elles existent dans `assets/images/projects/web/`.
- Convertir les gros PNG sans transparence en JPG ou WebP.
- Garder une version haute qualite dans un dossier source separe si besoin, mais ne pas la charger dans le site.
- Viser environ :
  - 200 Ko a 700 Ko pour une image de carte ;
  - 800 Ko a 1,5 Mo pour une grande image importante ;
  - eviter les images au-dessus de 3 Mo sauf cas exceptionnel.

## SEO et partage

Les pages ont des titres, mais il manque quelques balises utiles.

### A ajouter dans chaque page HTML

```html
<meta name="description" content="Portfolio d'Alvin Bonaventure-Sanchez, creatif graphique specialise en affiches, identites visuelles, photographie et experimentations visuelles." />
```

### A ajouter pour le partage

```html
<meta property="og:title" content="Alvin Bonaventure-Sanchez - Portfolio" />
<meta property="og:description" content="Affiches, compositions graphiques, photographie et projets de cours." />
<meta property="og:type" content="website" />
<meta property="og:image" content="assets/images/og-cover.jpg" />
```

Il faudrait aussi ajouter un favicon :

```html
<link rel="icon" href="assets/images/icone/favicon.svg" type="image/svg+xml" />
```

## UX et lisibilite

### Categories de projets

Les categories sont bien presentees, mais le texte `Cliquer pour ouvrir la categorie` est un peu scolaire.

Pistes :

- remplacer par `Explorer`;
- remplacer par `Voir les projets`;
- utiliser seulement un chevron qui tourne quand la categorie est ouverte.

### Case studies

Les deux case studies sont une vraie force.

Pour les renforcer :

- ajouter une mini phrase de contexte sur ton role exact ;
- afficher rapidement les livrables ;
- ajouter une section `Ce que j'ai appris` si ce n'est pas deja clair ;
- rendre les CTA plus visibles.

### Contact

La section contact est claire.

Ameliorations possibles :

- ajouter des icones pour Email, Telephone, Reseaux et CV ;
- rendre les liens sociaux un peu plus distincts ;
- ajouter un etat hover plus visible sur les liens.

## Accessibilite

Points positifs :

- presence d'attributs `aria-expanded` et `aria-hidden` sur les categories ;
- lightbox avec `role="dialog"` et fermeture via Escape ;
- textes alternatifs presents sur beaucoup d'images.

Points a verifier :

- les images decoratives peuvent garder `alt=""`, c'est correct ;
- les boutons de carousel utilisent encore des fleches texte, des icones avec `aria-label` seraient plus propres ;
- les contrastes sont globalement bons, mais certains textes en gris peuvent etre un peu faibles selon les ecrans.

## Checklist prioritaire

Cette partie classe les actions dans l'ordre le plus utile. L'idee est de traiter d'abord ce qui change le plus la qualite percue du portfolio, puis de passer aux finitions.

## Feuille de route conseillee

### Etape 1 - Optimiser les images lourdes

Priorite : tres haute.

Statut : fait.

Resultat :

- les pages HTML ne chargent plus les gros PNG de graphisme ;
- les visuels Raily utilises par le site pointent maintenant vers des versions JPG optimisees ;
- les images referencees par le site sont passees d'environ 13,07 Mo a 9,12 Mo apres optimisation ;
- les plus gros originaux PNG restent dans le projet comme fichiers source, mais ne sont pas appeles par les pages.

Pourquoi :

- c'est le point qui peut le plus ralentir le site ;
- plusieurs images depassent largement le poids conseille pour le web ;
- un portfolio visuel doit charger vite, sinon les meilleurs visuels perdent de leur impact.

A faire :

- remplacer les gros PNG utilises dans le site par des versions optimisees ;
- utiliser les images du dossier `assets/images/projects/web/` quand elles existent ;
- convertir les PNG sans transparence en JPG ou WebP ;
- garder les fichiers originaux lourds hors du chemin charge par le site.

Objectif :

- aucune image affichee sur le site ne devrait faire plusieurs dizaines de Mo ;
- viser moins de 1,5 Mo pour les grandes images importantes ;
- viser moins de 700 Ko pour les images de cartes.

### Etape 2 - Corriger les textes qui font moins professionnel

Priorite : haute.

Statut : fait.

Resultat :

- `Portfolio creatif 2025` a ete remplace par `Portfolio creatif` ;
- les libelles `Cliquer pour ouvrir la categorie` ont ete remplaces par `Voir les projets` ;
- `case study` a ete harmonise en `etude de cas` sur les textes visibles ;
- `Publication prochaine` et `Projet de cours 03` ont ete remplaces par des formulations plus propres ;
- `Selection`, `Execution` et `Process` ont ete francises dans l'interface.

Pourquoi :

- c'est visible immediatement ;
- cela donne une impression plus mature ;
- ca ne demande pas de gros changement technique.

A faire :

- remplacer `Portfolio creatif 2025` ;
- harmoniser `case study` en `etude de cas` ;
- remplacer `Cliquer pour ouvrir la categorie` par un libelle plus elegant ;
- remplacer `Publication prochaine` et `Projet de cours 03` par des formulations plus propres ;
- corriger `Selection` et `Execution` si on choisit de tout franciser.

Objectif :

- donner l'impression d'un portfolio termine ;
- garder un ton personnel, mais plus net.

### Etape 3 - Ajouter les bases SEO et partage

Priorite : haute.

Statut : fait.

Resultat :

- une `meta description` a ete ajoutee sur la home et sur les deux pages projet ;
- les balises Open Graph principales ont ete ajoutees ;
- les balises Twitter Card ont ete ajoutees pour les apercus de lien ;
- un favicon SVG a ete cree dans `assets/images/icone/favicon.svg` ;
- une image de partage `og-cover.jpg` a ete creee dans `assets/images/`.

Pourquoi :

- c'est rapide a faire ;
- ca rend le site plus propre quand il est partage ;
- ca aide les moteurs de recherche et les apercus de lien.

A faire :

- ajouter une `meta description` sur la home ;
- ajouter des descriptions adaptees sur les deux pages projet ;
- ajouter un favicon ;
- preparer une image `og-cover.jpg` ;
- ajouter les balises Open Graph principales.

Objectif :

- avoir un site qui presente bien dans un navigateur, un lien partage et un resultat de recherche.

### Etape 4 - Ajouter les icones vraiment utiles

Priorite : moyenne haute.

Statut : fait.

Resultat :

- les icones locales `mail.svg`, `phone.svg`, `linkedin.svg`, `instagram.svg`, `book-download.svg`, `arrow-right.svg`, `arrow-left.svg`, `chevron-down.svg` et `zoom-in.svg` sont disponibles dans `assets/images/icone/` ;
- les cartes Contact utilisent maintenant des icones pour Email, Telephone, Reseaux et CV ;
- les liens sociaux affichent les icones LinkedIn et Instagram ;
- les CTA `Voir l'etude de cas` utilisent une icone `arrow-right.svg` au lieu d'une fleche texte ;
- les images ouvrables en lightbox affichent un indicateur discret `zoom-in.svg`.

Pourquoi :

- les icones rendent l'interface plus lisible ;
- elles donnent une finition plus professionnelle ;
- il faut les ajouter avec moderation pour ne pas decorer inutilement.

A faire en premier :

- `mail.svg`
- `phone.svg`
- `linkedin.svg`
- `instagram.svg`
- `arrow-right.svg`
- `chevron-down.svg`

A faire ensuite :

- `arrow-left.svg`
- `zoom-in.svg`

Objectif :

- clarifier les actions sans surcharger le design.

### Etape 5 - Ameliorer les interactions des projets

Priorite : moyenne.

Statut : fait.

Resultat :

- les categories gardent le libelle `Voir les projets` / `Fermer` ;
- chaque categorie affiche un chevron `chevron-down.svg` qui tourne quand la categorie est ouverte ;
- les boutons du carousel utilisent `arrow-left.svg` et `arrow-right.svg` tout en conservant leurs `aria-label` ;
- les CTA de projet ont un alignement, un hover et un focus-visible coherents avec les autres interactions ;
- la logique existante du carousel, des categories, du lazy loading et de la lightbox n'a pas ete modifiee.

Pourquoi :

- les categories fonctionnent deja ;
- l'objectif est surtout de rendre l'experience plus intuitive.

A faire :

- remplacer le texte d'ouverture des categories par un chevron ou un libelle plus court ;
- faire tourner le chevron quand une categorie est ouverte ;
- remplacer les fleches texte du carousel par des icones ;
- rendre les CTA `Voir l'etude de cas` plus coherents visuellement.

Objectif :

- garder la meme structure, mais rendre les interactions plus naturelles.

### Etape 6 - Finitions de contenu

Priorite : moyenne basse.

Pourquoi :

- important pour la qualite globale ;
- mais a faire apres les points visibles et techniques les plus urgents.

A faire :

- donner un vrai titre au troisieme projet de cours ;
- ajouter un court resume du role exact dans chaque case study ;
- relire les textes pour retirer les formulations trop generales ;
- verifier que les descriptions de projets sont toutes utiles et non repetitives.

Objectif :

- renforcer la posture professionnelle et la clarte du parcours.

## Ordre de travail recommande

1. Optimisation des images.
2. Textes visibles et harmonisation francais/anglais.
3. SEO, favicon et image de partage.
4. Icones contact et CTA.
5. Interactions des categories et carousel.
6. Finitions des contenus de projets.

Si on avance etape par etape, je conseille de commencer par l'etape 1. C'est la plus importante techniquement et celle qui peut faire la plus grosse difference sur l'experience du site.

### Priorite 1

- Optimiser les tres grosses images.
- Remplacer `Portfolio creatif 2025`.
- Ajouter une `meta description`.
- Ajouter un favicon.

### Priorite 2

- Ajouter les icones contact : mail, phone, LinkedIn, Instagram.
- Ajouter une icone fleche pour les CTA.
- Remplacer les textes trop explicatifs des categories par des libelles plus elegants.
- Harmoniser `case study` en `etude de cas`.

### Priorite 3

- Creer une image de partage `og-cover.jpg`.
- Ajouter des icones de carousel.
- Ajouter un vrai titre pour le troisieme projet de cours.
- Relire tous les textes pour rendre le ton plus professionnel et plus personnel.

## Direction recommandee

Ne pas refaire le design. L'identite actuelle fonctionne deja.

La meilleure direction est :

```text
Garder l'ambiance actuelle, mais rendre chaque detail plus net :
moins de texte explicatif, plus de pictogrammes utiles,
des images plus legeres, et des formulations plus professionnelles.
```

Le portfolio doit donner l'impression d'un univers graphique assume, mais aussi d'un travail propre, lisible et pret a etre montre a un jury, un recruteur ou un client.
