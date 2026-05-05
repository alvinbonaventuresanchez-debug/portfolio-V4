---
tags:
  - jeu/projet
  - jeu/developpement
  - phase/v1
  - mecanique/quiz
  - mecanique/rails
  - mecanique/auto-evaluation
  - mecanique/duel
  - cours/Inertcult_Erick
type: idée-projet
statut: en-developpement
version: 1
aliases:
  - Val Idee dev V1
  - Rails & Savoirs  V1
liens:
  - "[[cours_1/Inertcult_Erick/Principale]]"
  - "[[cours_1/Inertcult_Erick/Jeux/Val Idee]]"
  - "[[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]"
  - "[[cours_1/Inertcult_Erick/note and more/note/Note 1]]"
  - "[[cours_1/Inertcult_Erick/note and more/more/to-do/to-do V1]]"
---

> [!info] Version 1 structuration initiale
> Première mise au propre de [[cours_1/Inertcult_Erick/Jeux/Val Idee|l'idée brute]]. Objectif : stabiliser les règles de base avant l'enrichissement tycoon de [[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]].

### Autre chose
[[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]
[[cours_1/Inertcult_Erick/note and more/note/Note 1]]

---
# "Rails & Savoirs "

> _Un jeu de plateau interculturel où la connaissance trace la voie._

---

## Objectif

Chaque joueur incarne une **compagnie ferroviaire** et doit traverser les Amériques en posant des rails. Le but ultime est d'être le **premier à accomplir un tour complet de la carte**.

Pour avancer, il faut **répondre correctement à des questions** : chaque bonne réponse permet de poser un rail et de progresser. En cas d'échec, le joueur ne bouge pas.

---

## Carte du Monde Les 3 Grandes Zones

Le plateau est divisé en trois grandes régions, chacune avec ses propres catégories de questions :

| Zone                  | Thèmes associés                                           |
| --------------------- | --------------------------------------------------------- |
| **Amérique du Nord**  | Histoire, géographie, cultures amérindiennes, modernité   |
| **Amérique Centrale** | Civilisations précolombiennes, biodiversité, langues      |
|  **Amérique du Sud**  | Amazonie, empires andins, diversité culturelle, politique |

> La zone où l'on se trouve **influence directement les questions posées**.

---

## Types de Joueurs & Départ

- **4 types de compagnies ferroviaires** (à définir ex. : Pacific, Atlantic, Continental, Southern)
- **4 points de départ différents** sur la carte, répartis stratégiquement

### Exemples de points de départ possibles

- Nord-Ouest (ex. Vancouver / Alaska)
- Nord-Est (ex. New York / Québec)
- Sud-Est (ex. Buenos Aires / Rio)
- Sud-Ouest (ex. Lima / Santiago)

---

## Mécanique de Duel

Quand deux joueurs se **croisent sur la même case** :

1. Un **duel de 3 questions** est déclenché
2. Les questions sont tirées de la **zone géographique du croisement**
3. Le vainqueur du duel obtient un avantage (rail bonus, blocage adverse, etc.)

---

## Système de Difficulté des Questions

Le niveau de difficulté est lié au **nombre de rails que le joueur souhaite poser en un tour** :

| Rails à poser | Niveau de question |
| ------------- | ------------------ |
| 1 rail        | X Facile           |
| 2 rails       | XX Moyen           |
| 3 rails       | XXX Difficile      |
| 4 rails +     | XXXX Expert        |

> Plus l'ambition est grande, plus la question est ardue. Le joueur choisit son niveau de risque.

---

## Liens avec le Cadre du Séminaire

Ce jeu s'inscrit dans les **7 variables** du séminaire _À la rencontre du monde_ :

- **Temps**  évolution historique des Amériques
- **Espace**  géographie, frontières, territoires
- **Société**  peuples, civilisations, diversité
- **Savoir**  culture générale, encyclopédagogie
- **Pouvoir**  politiques, empires, indépendances
- **Économie**  ressources, routes commerciales
- **Communication**  langues, écritures, médias

---

## Pistes de Développement

- [ ] Définir les 4 compagnies ferroviaires (couleur, capacité spéciale)
- [ ] Créer la banque de questions par zone et par niveau
- [ ] Dessiner le plateau (carte des Amériques stylisée)
- [ ] Définir les règles du duel (départage en cas d'égalité)
- [ ] Penser la « grammaire visuelle » interculturelle du plateau
- [ ] Relier aux systèmes d'écriture (ex. cases spéciales en langues amérindiennes)
- [ ] Intégrer le système de cartes des _Dialogues du 21_

---

## 🔗 Liens & filiation

- **MOC parent** : [[cours_1/Inertcult_Erick/Principale]]
- **Version précédente (idée brute)** : [[cours_1/Inertcult_Erick/Jeux/Val Idee]]
- **Version suivante (enrichie tycoon)** : [[Ressource/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]
- **Notes de travail associées** :
	- [[cours_1/Inertcult_Erick/note and more/note/Note 1]] refonte vers logique tycoon
	- [[cours_1/Inertcult_Erick/note and more/more/to-do/to-do V1]] critique structurée & priorités MVP
- **Mécaniques héritées** :
	- Système de difficulté ← [[cours_1/Inertcult_Erick/Jeux/ttmc]] (auto-évaluation)
	- Zones thématiques ← [[cours_1/Inertcult_Erick/Jeux/trivial poursuite]]
	- Duel 3 questions ← [[cours_1/Inertcult_Erick/Jeux/12 coup de midi]]
	- Territoires/progression ← [[cours_1/Inertcult_Erick/Jeux/Risk]]
