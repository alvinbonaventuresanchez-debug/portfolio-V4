# Raily

## C'est quoi

`Raily` est un projet de groupe presente dans le portfolio comme un deuxieme case study.

Le projet a d'abord circule sous le nom de travail `Rails & Savoirs`, puis a ete renomme `Raily`.

Le principe du projet est de transformer un sujet large, l'interculturalite dans les Ameriques, en jeu de plateau lisible et jouable. Le coeur de l'idee est simple :

- le joueur avance grace a la connaissance ;
- les Ameriques sont decoupees en zones ;
- les questions, les cartes et les ressources structurent le parcours.

Le projet montre surtout :

- une logique de game design ;
- un travail de structuration du contenu ;
- une simplification vers un MVP plus testable ;
- une mise en forme portfolio qui raconte le projet comme une etude de cas.
- une identite plus claire grace au nom final, au logo et aux cartes visibles.

Comme pour le projet photo, l'objectif n'est pas seulement de dire "voila le projet", mais d'expliquer comment il a ete pense.

## Le code

Le projet est code dans :

- `projects/rails-et-savoirs.html`

Le fichier conserve ce nom pour la route interne du site, meme si le projet s'affiche maintenant comme `Raily`.

Cette page reutilise elle aussi les fichiers globaux du site :

- `../assets/css/alvin-portfolio.css`
- `../assets/js/alvin-portfolio.js`

La structure reste volontairement la meme que pour le premier case study :

- une navigation haute ;
- un hero avec titre, contexte et visuel principal ;
- des sections `Cadrage`, `Concept`, `Process`, `Decisions`, `Selection visuelle`, `Resultat` et `Analyse critique` ;
- un lien de retour vers le portfolio.

Les classes principales sont les memes que sur l'autre projet :

- `project-detail-page`
- `detail-shell`
- `detail-hero`
- `detail-section`
- `detail-gallery`
- `reveal`

Les visuels de ce projet sont stockes dans :

- `assets/images/projects/Des formats pour transmettre, expliquer et accompagner/Rails et savoirs/`

Les assets principaux utilises par la page sont maintenant :

- `raily-project-logo.png`
- `raily-question-cards-by-zone.png`
- `raily-bonus-malus-cards.png`
- `raily-game-board.pdf`

Le JavaScript commun du portfolio gere automatiquement :

- les animations d'apparition ;
- la lightbox sur les visuels ;
- la navigation active pendant le scroll ;
- le comportement de la galerie detaillee.

En resume, le projet est une page HTML dediee qui repose sur la meme base technique que le reste du portfolio, avec son propre contenu et ses propres visuels.
