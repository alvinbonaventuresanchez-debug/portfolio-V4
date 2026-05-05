---
tags:
  - todo
  - note/travail
  - jeu/projet
  - phase/mvp
  - priorite/haute
  - cours/Inertcult_Erick
type: feuille-de-route
statut: actif
aliases:
  - to-do V1
  - TODO V1
  - Roadmap V1
liens:
  - "[[cours_1/Inertcult_Erick/Principale]]"
  - "[[cours_1/Inertcult_Erick/Version du jeu/Val Idee dev V1]]"
  - "[[cours_1/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]"
  - "[[cours_1/Inertcult_Erick/note and more/note/Note 1]]"
---

> [!warning] Feuille de route critique
> Cette note est une **critique structurée** de [[cours_1/Inertcult_Erick/Version du jeu/Val Idée Dev V2]]. Elle recommande de **réduire le scope** pour produire un MVP testable rapidement. À lire avant toute nouvelle itération.

# 1. FIGER LE CORE GAME LOOP (priorité absolue)

Vous devez stabiliser ça sans débat interminable :

> Répondre à une question → poser un rail → avancer → gagner/perdre des ressources → interaction (vol/duel)

### Ce que vous devez décider maintenant :

- Combien de **questions pour avancer 1 case ?**  
    → 1 question = 1 avancée (simple, testable)
- Est-ce que le déplacement est :
    - case par case (recommandé)
    - ou "segments de rail" (plus complexe)
- Combien de ressources par action correcte ?

 Objectif : **une boucle jouable en 10 minutes de prototype papier**

---

# 2. STOP AU SCOPE FANTASY → FAIRE UN MVP

Vous avez beaucoup trop de systèmes "riches" en parallèle.

Tu dois réduire à :

### MVP obligatoire :

- Plateau simple (3 zones OK)
- 4 joueurs
- 1 type de ressource principale (pas 4 types)
- 1 type de carte interaction (vol OU bonus, pas tout)
- 1 système de duel simple

### À mettre en BACKLOG (pas maintenant) :

- langues / écriture
- gares ultra différenciées
- tycoon avancé
- sabotage complexe
- effets multiples de cartes

 Sinon vous n'aurez jamais de version testable.

---

# 3. DESIGN DES CARTES = PROCHAINE GROSSE TÂCHE

Votre jeu dépend à 70% des cartes.

Vous devez produire vite :

### Minimum viable deck :

- 30 cartes par zone (donc 90 total)
- Répartition simple :
    - 60% questions
    - 20% bonus/malus
    - 20% interaction (vol/duel/light sabotage)

### Important :

- Les questions doivent être **graduées en difficulté**
- Pas besoin d'être parfait culturellement au début → test gameplay d'abord

---

# 4. BALANCE ÉCONOMIQUE (TRÈS IMPORTANT)

Votre jeu est un **jeu de ressources + timing** → donc risque classique :

> "effet boule de neige" (un joueur en avance devient ingérable)

### À contrôler :

- Cap de ressources (ou diminution des gains si leader)
- Catch-up mechanics (bonus pour les retardataires)
- Risque sur routes longues = obligatoire

 Sans ça, le jeu sera cassé en 30 minutes de test.

---

# 5. SIMPLIFIER LES GARES (sinon ça va exploser)

Actuellement trop designées.

Faites simple :

- Gare = checkpoint + bonus fixe OU choix
- Pas 15 effets différents

Exemple propre :

- Gare courte distance → +1 ressource
- Gare longue distance → pioche carte bonus
- Gare centrale → protection contre vol

---

# 6. PROTOTYPE PHYSIQUE IMMÉDIAT

C'est là que beaucoup d'équipes se trompent.

Vous devez faire :

- plateau papier
- pions
- cartes imprimées ou écrites à la main

 Test en conditions réelles = priorité sur toute doc

---

# 7. TEST GAMEPLAY (CE QUE VOUS CHERCHEZ VRAIMENT)

Quand vous testez, vous ne cherchez pas "si c'est fun".

Vous cherchez :

- Est-ce qu'un joueur peut revenir après un retard ?
- Est-ce qu'une stratégie domine ?
- Est-ce que le jeu dure 20–40 min max ?
- Est-ce qu'on comprend sans expliquer 20 min ?

---

## 🔗 Liens & contexte

- **MOC parent** : [[cours_1/Inertcult_Erick/Principale]]
- **Cible de la critique** : [[cours_1/Inertcult_Erick/Version du jeu/Val Idée Dev V2]] scope jugé trop large
- **Note déclencheuse** : [[cours_1/Inertcult_Erick/note and more/note/Note 1]] c'est là que le scope a explosé
- **Version de base à préserver** : [[cours_1/Inertcult_Erick/Version du jeu/Val Idee dev V1]] plus simple, plus proche d'un MVP
- **Inspirations à mobiliser pour le MVP** :
	- [[cours_1/Inertcult_Erick/Jeux/Risk]] §Limites **effet boule de neige** à neutraliser (cf. §4 ci-dessus)
	- [[cours_1/Inertcult_Erick/Jeux/ttmc]] auto-évaluation = mécanique simple et testable
	- [[cours_1/Inertcult_Erick/Jeux/Jeux de lois]] §Cases spéciales modèle **minimal** pour les gares (cf. §5)

## ✅ Checklist synthétique MVP

- [ ] §1 Core loop figé (1 question = 1 avancée ?)
- [ ] §2 Scope réduit aux 5 éléments MVP obligatoires
- [ ] §3 Deck de 90 cartes (60% questions / 20% bonus-malus / 20% interaction)
- [ ] §4 Balance économique (cap + catch-up)
- [ ] §5 Gares simplifiées (3 types max)
- [ ] §6 Prototype papier produit
- [ ] §7 Test gameplay mené selon les 4 critères
