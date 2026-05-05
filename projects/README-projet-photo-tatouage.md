# Projet photo tatouage

## C'est quoi

`Mouvement et tatouage` est un projet photo presente dans le portfolio comme un case study complet.

Le sujet de depart etait le tatouage, avec une contrainte simple : montrer quelque chose de fixe a travers une idee de mouvement. Le projet repose donc sur une opposition entre :

- un cadre studio, plus maitrise ;
- un cadre exterieur, plus vivant et plus spontanee.

L'objectif n'est pas seulement de montrer des images, mais d'expliquer une demarche :

- le contexte ;
- la problematique ;
- le process ;
- les decisions prises ;
- le resultat ;
- l'analyse critique.

Autrement dit, cette page sert a montrer le projet comme un vrai raisonnement visuel, pas seulement comme une galerie photo.

## Le code

Le projet est code dans :

- `projects/projet-photo-tatouage.html`

Cette page reutilise les fichiers globaux du portfolio :

- `../assets/css/alvin-portfolio.css`
- `../assets/js/alvin-portfolio.js`

La structure suit la meme logique que les autres pages detaillees du site :

- une `nav` en haut ;
- un hero avec le titre, le contexte et un visuel principal ;
- plusieurs sections detaillees avec des ids pour la navigation interne ;
- une galerie d'images ;
- une conclusion avec resultat et analyse ;
- un lien retour vers `index.html#projects`.

Les classes principales utilisees sont :

- `project-detail-page`
- `detail-shell`
- `detail-hero`
- `detail-section`
- `detail-gallery`
- `reveal`

Les images de ce projet sont stockees dans :

- `assets/images/projects/Des formats pour transmettre, expliquer et accompagner/Projet photo tatoo/`

Le JavaScript ajoute plusieurs comportements sans code specifique a cette page :

- apparition progressive des blocs avec `reveal` ;
- lightbox quand on clique sur les images ;
- mise en avant du lien actif dans la navigation pendant le scroll ;
- scroll horizontal de la galerie sur les pages detaillees.

En resume, le projet n'a pas son propre CSS ou son propre JS : il s'appuie sur la structure commune du portfolio, avec un HTML dedie et des images propres au projet.
