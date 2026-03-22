import './App.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';
import Notifications from './Notifications';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1 className="titre">✨ Mon Application React</h1>
      <nav style={{ backgroundColor: '#2c3e50', padding: '10px' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
          🏠 Accueil
        </Link>
        <Link to="/apropos" style={{ color: '#f39c12', marginRight: '15px', textDecoration: 'none' }}>
          👤 À propos
        </Link>
        <Link to="/contact" style={{ color: '#2ecc71', textDecoration: 'none' }}>
          📬 Contact
        </Link>
      </nav>
      <Notifications />
      <Connexion />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;