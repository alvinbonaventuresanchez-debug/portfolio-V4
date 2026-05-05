---
tags:
  - jeu/projet
  - jeu/developpement
  - phase/v2
  - mecanique/quiz
  - mecanique/rails
  - mecanique/tycoon
  - mecanique/ressources
  - mecanique/sabotage
  - mecanique/duel
  - mecanique/gares
  - cours/Inertcult_Erick
type: idée-projet
statut: en-developpement
version: 2
aliases:
  - Val Idée Dev V2
  - Val Idee Dev V2
  - Rails & Savoirs  V2
liens:
  - "[[cours_1/Inertcult_Erick/Principale]]"
  - "[[cours_1/Inertcult_Erick/Jeux/Val Idee]]"
  - "[[Ressource/Inertcult_Erick/Version du jeu/Val Idee dev V1]]"
  - "[[cours_1/Inertcult_Erick/note and more/note/Note 1]]"
  - "[[cours_1/Inertcult_Erick/note and more/more/to-do/to-do V1]]"
---

> [!success] Version 2 enrichissement tycoon
> Version la plus aboutie à ce jour. Intègre les décisions de [[cours_1/Inertcult_Erick/note and more/note/Note 1]] : système de ressources, gares-checkpoints, cartes Gain/Vol/Bonus/Malus, double objectif (vitesse vs optimisation).
> ⚠️ À confronter à la critique MVP de [[cours_1/Inertcult_Erick/note and more/more/to-do/to-do V1]] avant implémentation.

# "Rails & Savoirs "

> _Un jeu de plateau interculturel où la connaissance trace la voie._

---

## Objectif

Chaque joueur incarne une **compagnie ferroviaire** qui part d'un point de départ unique et doit accomplir un **tour complet de la carte** pour rentrer à son point d'origine.

Le jeu repose sur un **double objectif en tension** :

> **Rentrer en premier** → bonus de ressources garanti **Optimiser son parcours** → maximiser ses ressources avant de rentrer

Le vainqueur est le joueur qui termine la partie avec le **maximum de ressources**, pas nécessairement celui qui rentre en premier.

---

## Carte du Monde Les 3 Grandes Zones

Le plateau est divisé en trois grandes régions, chacune associée à une **pile de cartes dédiée** :

| Zone                  | Pile de cartes | Thèmes des questions                                      |
| --------------------- | -------------- | --------------------------------------------------------- |
| **Amérique du Nord**  | Pile A         | Histoire, géographie, cultures amérindiennes, modernité   |
| **Amérique Centrale** | Pile B         | Civilisations précolombiennes, biodiversité, langues      |
|  **Amérique du Sud**  | Pile C         | Amazonie, empires andins, diversité culturelle, politique |

> Le nombre de cartes par pile reste à définir. La zone où l'on se trouve détermine dans quelle pile on pioche.

---

##  Compagnies & Points de Départ

- **4 compagnies ferroviaires** (noms, couleurs et capacités spéciales à définir)
- **4 points de départ fixes**, répartis aux quatre coins du continent

### Points de départ envisagés

- 🟦 Nord-Ouest = Vancouver / Alaska
- 🟥 Nord-Est = New York / Québec
- 🟨 Sud-Est = Buenos Aires / Rio de Janeiro
- 🟩 Sud-Ouest = Lima / Santiago

---

## Déplacement & Rails

- Le plateau propose des **chemins multiples et non prédéfinis** : chaque joueur choisit sa route librement.
- Pour poser un rail et avancer, le joueur doit **répondre correctement à une question** tirée de la pile correspondant à sa zone.
- En cas d'échec → le joueur ne bouge pas.
- Les **avancées** (nombre de rails posés en un tour) sont attribuées de manière variable selon les cartes, effets ou ressources disponibles plus selon un niveau de difficulté choisi.

### Sabotage

Un joueur peut **emprunter le trajet d'un autre joueur** pour :

- Détruire ou perturber ses rails
- Déclencher des effets négatifs sur son parcours

---

##  Gares Checkpoints

Des **gares fixes** jalonnent la carte et servent de points de passage structurants.

- Les distances entre gares sont **inégales**
- Plus une gare est éloignée de la précédente → plus la récompense est importante, mais le risque aussi
- Les gares peuvent offrir : bonus de ressources, cartes spéciales, protections temporaires…

> Les gares constituent les nœuds stratégiques du plateau : elles guident les choix de route sans les imposer.

---

##  Système de Ressources Mode Tycoon

Le cœur du jeu repose sur la **gestion et l'accumulation de ressources**.

### Types de cartes ressources

| Type de carte | Effet                                                              |
| ------------- | ------------------------------------------------------------------ |
| **Gain**      | Obtenir des ressources (réponse correcte, passage en gare, bonus…) |
| **Vol**       | Dérober des ressources à un autre joueur                           |
| **Bonus**     | Effet positif ponctuel (avancer, protéger, piocher…)               |
|  **Malus**    | Effet négatif (bloquer, perdre des ressources, reculer…)           |

---

## Duel entre Joueurs

Quand deux joueurs se **croisent ou occupent la même zone** :

1. Un **duel de 3 questions** est déclenché
2. Les questions viennent de la **pile de la zone du croisement**
3. Le vainqueur obtient un avantage (ressources, rail bonus, effet de sabotage…)

---

## Fin de Partie

1. Le **premier joueur à rentrer** à son point de départ reçoit un **bonus de ressources**.
2. Les autres joueurs ont alors un nombre limité de **tours restants (X à définir)** pour rentrer à leur tour.
3. Une fois tous rentrés (ou les tours épuisés), on **comptabilise les ressources**.
4. Le joueur avec le **total de ressources le plus élevé** remporte la partie.

### Dilemme stratégique central

```
Rentrer vite      → bonus assuré, mais moins de ressources accumulées
Rentrer plus tard → plus de ressources potentielles, mais risque de manquer de tours
```

---

## Liens avec le Cadre du Séminaire

Ce jeu s'inscrit dans les **7 variables** du séminaire _À la rencontre du monde_ :

|Variable|Incarnation dans le jeu|
|---|---|
|**Temps**|Évolution historique des Amériques, gestion des tours|
|**Espace**|Géographie du plateau, zones, routes|
|**Société**|Peuples, civilisations, questions culturelles|
|**Savoir**|Questions de culture générale par zone|
|**Pouvoir**|Sabotage, duels, domination des gares|
|**Économie**|Système de ressources, logique tycoon|
|**Communication**|Langues des zones, systèmes d'écriture sur les cartes|

---

## Pistes de Développement

- [ ] Définir les 4 compagnies (couleur, pouvoir spécial)
	- [ ] 
		- [[Ressource/Inertcult_Erick/Version du jeu/lore/Les Russes]]
		- [[Ressource/Inertcult_Erick/Version du jeu/lore/Royaume-Uni]]
		- [[Ressource/Inertcult_Erick/Version du jeu/lore/Guarani]]
		- [[Ressource/Inertcult_Erick/Version du jeu/lore/Incas]]
- [ ] Fixer le nombre de cartes par pile (A / B / C)
- [ ] Définir le nombre de tours restants après l'arrivée du premier joueur
- [ ] Cartographier les gares et leurs récompenses
- [ ] Créer la banque de questions par zone
- [ ] Equilibrer les cartes Gain / Vol / Bonus / Malus
- [ ] Dessiner le plateau (carte des Amériques stylisée)
- [ ] Penser la grammaire visuelle interculturelle
- [ ] Relier aux systèmes d'écriture (cases en langues amérindiennes, quechua, nahuatl…)
- [ ] Intégrer le système de cartes des _Dialogues du 21_

---

## 🔗 Liens & filiation

- **MOC parent** : [[cours_1/Inertcult_Erick/Principale]]
- **Filiation** :
	- V0 (brute) : [[cours_1/Inertcult_Erick/Jeux/Val Idee]]
	- V1 (structurée) : [[Ressource/Inertcult_Erick/Version du jeu/Val Idee dev V1]]
	- V2 (actuelle, tycoon) : *cette note*
	- V finale (à rédiger) : [[cours_1/Inertcult_Erick/version final du jeux/Règle du jeu]] · [[cours_1/Inertcult_Erick/version final du jeux/Glossaire]]
- **Notes-sources de cette version** :
	- [[cours_1/Inertcult_Erick/note and more/note/Note 1]] pivot conceptuel (piles de cartes, tycoon, gares, sabotage)
	- [[cours_1/Inertcult_Erick/note and more/more/to-do/to-do V1]] ⚠️ recommande de **dé-scoper** pour un MVP testable
- **Inspirations héritées** :
	- [[cours_1/Inertcult_Erick/Jeux/Risk]] cartes combinables, effet boule de neige (à surveiller)
	- [[cours_1/Inertcult_Erick/Jeux/ttmc]] auto-évaluation de la difficulté (à réintégrer)
	- [[cours_1/Inertcult_Erick/Jeux/trivial poursuite]] catégories par zone
	- [[cours_1/Inertcult_Erick/Jeux/12 coup de midi]] format duel 3 questions
	- [[cours_1/Inertcult_Erick/Jeux/Jeux de lois]] cases spéciales / gares-checkpoints
