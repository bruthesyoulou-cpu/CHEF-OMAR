# 📜 DOCUMENT DE SPÉCIFICATIONS TECHNIQUES & FEUILLE DE ROUTE
**Projet :** CHEF OMAR — Vitrine Gastronomique & PWA  
**Développeur / Organisation :** Novakorax Corporation  
**Version :** 1.0.0  

---

## 1. ACQUIS & ARCHITECTURE ACTUELLE

* **Framework & Core :** Next.js 15 (App Router) + TypeScript.
* **Moteur de Design :** Tailwind CSS v4 configuré en mode **Noir Miroir** (fond sombre épuré #0a0a0c et accents dynamiques).
* **Thématisation :** Dynamic Theme Switcher avec 7 couleurs d'accentuation (Bleu Nuit, Or, Rouge Piment, Vert Afrique, Terracotta, Violet Royal, Cyan Miroir) et effet **Glassmorphism** (glass-miroir).
* **Versionnage & Déploiement :** Dépôt Git connecté au remote GitHub ruthesyoulou-cpu/CHEF-OMAR.git.

---

## 2. ÉVOLUTIONS ET NOUVELLES FONCTIONNALITÉS À DÉVELOPPER

### 📄 SECTION 1 : Carte de Présentation du Chef & Panel Admin
* **Module "Voir Plus" (Biographie & Portfolio)** :
  * Intégration d'un bouton stylisé "Voir plus" ouvrant une vue détaillée.
  * Section **Biographie & Bibliographie** complète du Chef.
  * Section **Points Forts** (Techniques de cuisine, gastronomie fusion).
  * Section **Grades, Diplômes & Formations**.
  * Section **KYC & Certifications** (Identité et accréditations certifiées du Chef).
  * Section **Réseaux Sociaux** : Liens d'accès directs (Instagram, WhatsApp, TikTok, YouTube).
* **Application & Panel Administration** :
  * Espace d'administration réservé au propriétaire pour la gestion dynamique des contenus.
  * **Gestion des Fichiers & Médias** :
    * Téléversement jusqu'à **8 images simultanées** (taille max : **12 Mo** par image).
    * Téléversement de vidéos / réels (taille max : **30 Mo** par vidéo).
  * **Lecteur Média Universel & Performance** :
    * Support de tous les formats vidéo pris en charge par le lecteur VLC.
    * Système d'optimisation / streaming pour éliminer les latences de lecture.

---

### 🎥 SECTION 2 : Menus Vidéo, Réels & Stories
* **Gestion des Durées & Visibilité** :
  * Masquage de la durée des vidéos pour les visiteurs.
  * Affichage de la durée réservé exclusivement au panel administrateur.
* **Engagements & Statistiques** :
  * Badge discret de notification du **nombre de vues en vignette** au bas de chaque réel.
* **Module Interaction & Communauté** :
  * Espace **Mur de Commentaires** sous chaque vidéo/réel.
  * Bouton **Partager** (copie de lien / partage social).
  * Bouton **Télécharger** la vidéo directement depuis l'interface.

---

### 3D SECTION 3 : Expérience 360° VR & Fiches Gastronomiques
* **Hotspots Interactifs sur la Vue 360°** :
  * Ajout de puces cliquables marquant les points clés directement sur l'image/le plat.
* **Modes de Visionnage** :
  * Bascule fluide entre **Visionnage en Temps Réel** et **Mode Casque VR**.
* **Fiches Gastronomiques (Sans Notion de Prix)** :
  * Retrait des prix sur les cartes de plats (orientation expérience & dégustation, non-commerciale).
  * Détails poussés sur les **temps de cuisson**, la provenance des **ingrédients** et la préparation.

---

### 📅 SECTION 4 : Réservations, Formations & Abonnements
* **Système de Réservation Sur Mesure** :
  * Formulaire combinant sections prédéfinies (Dîner VIP, Masterclass, Traiteur) et **champs d'écriture libre**.
  * Sections dédiées pour indiquer les **interdits alimentaires**, accompagnements souhaités et demandes spéciales.
* **Gestion Dynamique des Créneaux** :
  * Créneaux mis à jour par le Chef depuis son Panel Admin.
  * Possibilité pour le client de **proposer un créneau personnalisé** en texte libre.
* **Formations & Ateliers** :
  * Espace de contenu proposant des vidéos de cours, fiches téléchargeables et réservation de **séances de cuisine à domicile (payantes)**.
* **Espace "Abonnement aux Exclusivités du Chef"** :
  * Formulaire de capture de coordonnées (Nom complet / Pseudo, Adresse Email, Numéro Téléphone/WhatsApp, Adresse/Quartier).
