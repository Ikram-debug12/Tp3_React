import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

const mesCoursess = ['🍎 Pommes', '🥛 Lait', '🍞 Pain', '🧀 Fromage', '🥚 Oeufs'];

function Accueil() {
  return (
    <div style={{ padding: '20px', color: '#2c3e50' }}>
      <h2>🏠 Bienvenue sur la page d'accueil</h2>
      <p>C'est ici que tout commence !</p>
      <Logo />
      <LecteurAudio />
      <ListeTaches />
      <ListeCourses courses={mesCoursess} />
      <Galerie />
    </div>
  );
}

export default Accueil;