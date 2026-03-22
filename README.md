# TP Navigation React
## Description
Application React avec navigation SPA utilisant React Router DOM.

## Technologies utilisées

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## L'exécution





### 1. Lancement
Quand on lance `npm start`, React démarre un serveur local
et ouvre automatiquement `http://localhost:3000`.

### 2. index.js
C'est le point d'entrée de l'application.
Il enveloppe toute l'app dans `<BrowserRouter>` pour
activer la navigation, et monte `<App />` dans le DOM.

### 3. App.js
C'est le composant principal. Il contient :
- La navbar avec les liens `<Link>`
- Le composant `<Notifications />`
- Le composant `<Connexion />`
- Le système de routes `<Routes>` avec `<Route>`

### 4. Navigation
Quand l'utilisateur clique sur un lien :
- L'URL change sans recharger la page
- React affiche le composant correspondant à la route

### 5. Page Accueil
Affiche dans l'ordre :
- Le logo importé depuis src/
- Le lecteur audio
- La liste des tâches
- La liste de courses
- La galerie d'images

### 6. useState
Utilisé dans Connexion.js et Notifications.js
pour gérer un état local qui change dynamiquement
sans recharger la page.
