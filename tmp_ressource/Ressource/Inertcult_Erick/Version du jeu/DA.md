---
tags:
  - jeu/projet
  - DA
  - design/direction-artistique
  - style/far-west
  - style/precolombien
  - cours/Inertcult_Erick
type: direction-artistique
statut: V1
aliases:
  - DA Rails & Savoirs
liens:
  - "[[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]"
  - "[[cours_1/Inertcult_Erick/version final du jeux/Règle du jeu]]"
  - "[[cours_1/Inertcult_Erick/Principale]]"
---

# Direction Artistique _Rails & Savoirs_

> _"Entre les cuivres rouillés d'une locomotive et les pierres gravées d'un temple maya, la même soif de conquête."_

---

## Concept Directeur

La DA de _Rails & Savoirs_ fusionne **deux imaginaires américains** souvent opposés mais profondément liés dans l'histoire du continent :

| Imaginaire                      | Références visuelles                                                | Époque            |
| ------------------------------- | ------------------------------------------------------------------- | ----------------- |
| **Far-West / Pionniers**        | Westerns, lignes de chemin de fer, affiches de compagnies 1850–1900 | XIX–début XX e    |
| **Mésoamérique / Précolombien** | Art maya, aztèque, inca glyphes, calendriers, temples               | Antiquité – XVI e |

Ces deux univers coexistent dans le jeu **comme ils coexistent sur le continent** : sur le même territoire, à des millénaires d'écart, avec la même ambition de cartographier, de relier, de conquérir.

> [!quote] Intention Le plateau de jeu est une carte de l'Amérique qui **respire les deux epochs à la fois** : les rails en métal brûlé traversent des terres ornées de symboles mayas. Les cartes ressemblent à des affiches de saloon _et_ à des codex anciens.

---

## Palette Chromatique

### Couleurs principales

| Nom                        | Usage                                   | Code hex approx. |
| -------------------------- | --------------------------------------- | ---------------- |
| **Terre de Sienne brûlée** | Fond général, plateau                   | `#8B4513`        |
| **Or patiné / Ambre**      | Accents, ressources, gares              | `#C8860A`        |
| **Turquoise maya**         | Zone Amérique Centrale, décorations     | `#2E8B8A`        |
| **Rouge sang de taureau**  | Zone Amérique du Nord, cartes Vol/Malus | `#8B1A1A`        |
| **Ivoire jauni**           | Textes, parchemin, arrière-plans cartes | `#F5E6C8`        |
| **Vert jungle / Mousse**   | Zone Amérique du Sud                    | `#3B5A2F`        |
| **Anthracite fumée**       | Rails, contours, typography lourde      | `#2C2C2C`        |

### Couleurs secondaires (compagnies)

|Compagnie|Couleur|Teinte|
|---|---|---|
|🟦 Pacific North|Bleu ardoise|`#4A6FA5`|
|🟥 Atlantic East|Rouge brique|`#A5341A`|
|🟨 Southern Gold|Or soleil|`#C8A400`|
|🟩 Amazon Green|Vert emeraude|`#2D7A4F`|

> {palette_couleurs_swatches.png planche de couleurs du jeu}

---

## Typographie

### Logique typographique

Le jeu utilise **deux familles** en tension constante :

#### 1. Police "Pionnière" titres & noms de compagnies

Style **western serif** avec empattements larges, inspiration presse du XIX e, affiches de chemin de fer.

- Exemples de références : _Wanted_, _Rye_, _Playfair Display Black_, _Coustard_
- Usage : titre du jeu, nom des compagnies, titres de sections sur le plateau
- Casse : MAJUSCULES ou petites capitales

> {typo_pionniere_specimen.png exemple de rendu du titre "Rails & Savoirs" en typo western}

#### 2. Police "Codex" corps de texte & questions

Style **inspiré des glyphes et de l'épigraphie mésoaméricaine** retravaillé pour la lisibilité. Géométrique, anguleux, sans empattement mais avec des détails gravés.

- Exemples de références : _Josefin Slab_, _Cinzel_, _Trajan Pro_
- Usage : textes des questions, descriptions de cartes, glossaire
- Casse : mixte, lisible

> {typo_codex_specimen.png exemple de rendu d'une question de jeu en typo codex}

#### Règle d'or typographique

```
Titre principal → Police Pionnière, grandes capitales, couleur Or patiné
Sous-titres     → Police Pionnière, taille réduite, Terre de Sienne
Corps de texte  → Police Codex, ivoire jauni sur fond sombre
Légendes        → Police Codex, petite taille, italique
```

---

## Style Graphique Général

### Registre visuel

**Gravure sur bois rencontre codex précolombien.**

Chaque élément graphique doit pouvoir se lire comme :

- une illustration tirée d'un _journal illustré des années 1870_ (lignes de taille, hachures, encrage fort)
- **ET** comme un fragment de _stèle ou de codex maya_ (motifs géométriques, borders répétitifs, symboles iconiques)

> {moodboard_style_general.png planche d'inspiration : gravures western + codex maya/aztèque}

### Textures à employer

|Texture|Application|
|---|---|
|Parchemin vieilli, taches de café|Arrière-plan des cartes|
|Bois brûlé / planche de sapin|Bordures du plateau|
|Pierre gravée / basalte|Zones précolombiens du plateau|
|Métal rouillé / fonte|Rails, icônes de compagnies|
|Papier journal jauni|Cartes de questions|

> {texture_parchemin.png} {texture_bois_brule.png} {texture_pierre_gravee.png}

---

## Le Plateau

### Concept visuel

La carte est une **vue en plan des Amériques** stylisée ni trop réaliste, ni trop abstraite. Elle ressemble à une **carte d'explorateur du XIX e** avec des zones décorées de motifs précolombiens selon la région.

### Découpage visuel des zones

| Zone                  | Style dominant                  | Éléments décoratifs                                                  |
| --------------------- | ------------------------------- | -------------------------------------------------------------------- |
| **Amérique du Nord**  | Far-West, sécheresse, canyons   | Cow-skulls, cactus stylisés, fils télégraphiques, étoiles de shériff |
| **Amérique Centrale** | Jungle dense, temples émergents | Glyphes mayas, serpents à plumes, motifs calendrier aztèque          |
|  **Amérique du Sud**  | Forêt amazonienne + Andes       | Condors, masques incas, terrasses de culture en altitude             |

> {carte_plateau_esquisse.png esquisse du plateau avec zones colorées et décors indicatifs}

### Les Gares (checkpoints)

Chaque gare est représentée par une **icône mixte** :

- Une **locomotive à vapeur** (profil, style gravure 1880)
- Encadrée d'un **glyphe circulaire** d'inspiration précolombienne

> {icone_gare_concept.png concept d'icône de gare fusion locomotive / glyphe}

### Les Rails

- Tracés en **fonte noire** avec une légère patine rouille
- Quand un joueur pose un rail : il place une **pièce en bois teinté** à la couleur de sa compagnie sur le tracé
- Les rails sabotés sont marqués d'un symbole **croix aztèque** (motif destruction/feu)

> {rail_rendu_concept.png rendu d'un tronçon de rail posé sur le plateau}

---

## Les Cartes

### Format & Structure

Toutes les cartes suivent un **format identique** : 63×88mm (format poker standard), coins arrondis.

Structure d'une carte :

```
┌─────────────────────────────┐
│  [ZONE / TYPE]  en-tête   │  ← bandeau couleur zone + icône pile
│                             │
│   [ILLUSTRATION CENTRALE]   │  ← gravure style western ou codex
│                             │
│  "Texte de la question ou   │  ← police Codex, ivoire sur sombre
│   de l'effet de la carte"   │
│                             │
│  [VALEUR / DIFFICULTÉ ★☆☆]  │  ← bas de carte, étoiles aztèques
└─────────────────────────────┘
```

> {template_carte_vierge.png template de carte au propre}

### Cartes Questions (Piles A / B / C)

Chaque pile a une **couleur de bandeau distincte** :

|Pile|Zone|Couleur bandeau|Motif de fond|
|---|---|---|---|
|**Pile A**|Amérique du Nord|Rouge brique|Étoiles & coyote|
|**Pile B**|Amérique Centrale|Turquoise maya|Plumes & serpent|
|**Pile C**|Amérique du Sud|Vert jungle|Condor & feuilles|

> {cartes_questions_mockup_ABC.png mockup des 3 piles côte à côte}

### Cartes Ressources (Gain / Vol / Bonus / Malus)

| Type      | Illustration centrale                   | Ambiance                |
| --------- | --------------------------------------- | ----------------------- |
| **Gain**  | Coffre de diligence ouvert, rempli d'or | Western, richesse       |
| **Vol**   | Silhouette de bandit de grand chemin    | Western, tension        |
| **Bonus** | Soleil aztèque rayonnant                | Précolombien, puissance |
| **Malus** | Crâne orné de motifs mayas (calavera)   | Hybride, danger         |

> {cartes_ressources_mockup_4types.png mockup des 4 types de cartes ressources}

---

## Les Compagnies Ferroviaires

Chaque compagnie a une **identité visuelle propre** inspirée d'une vraie compagnie ferroviaire historique des Amériques :

|Compagnie|Inspiration historique|Logo|Couleur|
|---|---|---|---|
|**Pacific North Railway**|Union Pacific / Canadian Pacific|Aigle aux ailes déployées|Bleu ardoise|
|**Atlantic & East Co.**|Baltimore & Ohio Railroad|Rose des vents stylisée|Rouge brique|
|**Southern Gold Line**|Southern Pacific Railroad|Soleil aztèque|Or soleil|
|**Amazon & Andes Corp.**|Ferrocarril Central Andino|Condor des Andes|Vert emeraude|

> {logos_compagnies_4.png planche des 4 logos de compagnies}

Chaque compagnie a aussi un **blason de pion** : un petit disque en bois gravé du logo, peint à sa couleur.

> {pions_compagnies_photo.png photo ou rendu des 4 pions en bois}

---

## Iconographie & Symboles Récurrents

Un **vocabulaire iconographique partagé** court à travers tout le jeu :

| Symbole           | Signification ludique  | Inspiration culturelle           |
| ----------------- | ---------------------- | -------------------------------- |
| Soleil à 8 rayons | Ressource gagnée       | Calendrier aztèque               |
| Crâne fleuri      | Malus / danger         | Calavera mexicaine               |
| Aigle             | Compagnie / puissance  | USA + Mexique (aigles nationaux) |
| Serpent à plumes  | Zone Amérique Centrale | Quetzalcóatl maya                |
| Cactus stylisé    | Zone Amérique du Nord  | Far-West iconique                |
| Lama              | Zone Amérique du Sud   | Culture andine                   |
| Étoile de shériff | Duel / confrontation   | Ouest américain                  |
| Glyphe circulaire | Gare / checkpoint      | Épigraphie mésoaméricaine        |

> {planche_iconographie.png planche des symboles du jeu, propre et au trait}

---

## Matériel Physique Vision DA

### Le Boîte du Jeu

- Format : carré, 30×30cm, hauteur ~7cm
- Illustration de couverture : une locomotive à vapeur qui perce à travers un temple maya dans la jungle fond coucher de soleil ocre/rouge
- Titre en relief doré, police Pionnière
- Dos : carte des Amériques stylisée, minimale

> {boite_couverture_concept.png concept de la couverture de boîte}

### L'Insert

- Séparations en carton recyclé kraft
- Pictogrammes de rangement en glyphes mayas simplifiés

### Le Livret de Règles

- Format A5, 12–16 pages
- Couverture : même univers graphique que la boîte
- Intérieur : fond ivoire/parchemin, illustrations en gravure sur bois
- En-têtes de chapitre : alternance western & précolombien

> {livret_regles_couverture.png} {livret_regles_double_page.png exemple d'une double page intérieure}

---

## Moodboard de Référence

> {moodboard_complet.png collage regroupant : affiches de chemin de fer vintage, codex mayas, gravures de l'Ouest américain, photos de plateaux Ticket to Ride, détails de céramiques aztèques}

### Références clés à étudier

**Côté Far-West / Pionniers**

- Affiches Union Pacific Railroad (1869–1900)
- Illustrations de Frederic Remington (cowboys, cavalerie)
- Esthétique de _Deadwood_ (série HBO) pour les textures
- Jeu _Ticket to Ride_ (plateau) pour la lisibilité des rails

**Côté Mésoamérique / Précolombien**

- Codex Borgia (manuscrit aztèque)
- Bas-reliefs de Palenque (art maya classique)
- Calendrier aztèque (Piedra del Sol) pour les motifs circulaires
- Art de Diego Rivera (synthèse des deux mondes)

**Côté Hybride / Fusion**

- Artiste _El Mac_ (graffiti / murales fusion cultures)
- Couvertures de _Wunderkammer_ (presse illustrée XIX e + ethnographie)
- Jeu _Spirit Island_ (plateau + cartes richement illustrés)

---

## Checklist DA

### Production graphique à réaliser

- [ ] Palette couleurs finalisée + charte graphique PDF
- [ ] Choix typographique définitif (Pionnière + Codex)
- [ ] Iconographie complète (16–20 symboles au trait)
- [ ] Template carte vierge (Piles A/B/C + Ressources)
- [ ] 4 logos de compagnies
- [ ] Esquisse du plateau (zones + gares + routes)
- [ ] Couverture de boîte (concept)
- [ ] Livret de règles (maquette)
- [ ] Moodboard consolidé (présentation groupe)

### À valider en équipe

- [ ] Choix des 4 compagnies (noms définitifs)
- [ ] Style des pions (bois gravé ? plastique ? carton épais ?)
- [ ] Niveau de détail des illustrations cartes (photo, dessin, IA ?)
- [ ] Grammaire visuelle interculturelle à présenter au séminaire

---

## 🔗 Liens

- **Game design** : [[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]
- **Règles** : [[cours_1/Inertcult_Erick/version final du jeux/Règle du jeu]]
- **Glossaire** : [[cours_1/Inertcult_Erick/version final du jeux/Glossaire]]
- **MOC** : [[cours_1/Inertcult_Erick/Principale]]
- **Séminaire** : [[Invariants d'Eric]] Pantopie, Diversité, Dialogue

---

_DA rédigée dans le cadre du séminaire « À la rencontre du monde » Eric & Martine © 2026_