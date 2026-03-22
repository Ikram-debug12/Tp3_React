<div align="center">

# ⚛️ TP Navigation React 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Status](https://img.shields.io/badge/Status-✅%20Terminé-success?style=for-the-badge)

> 🌐 Application React avec navigation SPA utilisant React Router DOM

</div>

## L'exécution


https://github.com/user-attachments/assets/d93106b3-c545-4924-847f-c8593c95eae1


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
