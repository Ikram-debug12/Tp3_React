import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div style={{ padding: '15px', margin: '10px', backgroundColor: connecte ? '#d5f5e3' : '#fadbd8', borderRadius: '8px' }}>
      {connecte ? (
        <h3 style={{ color: '#27ae60' }}>✅ Vous êtes connecté</h3>
      ) : (
        <h3 style={{ color: '#e74c3c' }}>❌ Vous êtes déconnecté</h3>
      )}
      <button
        onClick={() => setConnecte(!connecte)}
        style={{
          backgroundColor: connecte ? '#e74c3c' : '#27ae60',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {connecte ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

export default Connexion;