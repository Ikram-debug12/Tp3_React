function ListeTaches() {
  const taches = [
    { id: 1, titre: "📘 Apprendre React", statut: "En cours" },
    { id: 2, titre: "💻 Créer une application", statut: "À faire" },
    { id: 3, titre: "🧪 Tester le code", statut: "À faire" },
    { id: 4, titre: "🚀 Déployer le projet", statut: "À faire" }
  ];

  return (
    <div style={{ padding: '15px' }}>
      <h3 style={{ color: '#2c3e50' }}>📋 Liste des tâches</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {taches.map((tache) => (
          <li key={tache.id} style={{
            backgroundColor: '#f0f3f4',
            marginBottom: '8px',
            padding: '10px 15px',
            borderRadius: '6px',
            borderLeft: '4px solid #2c3e50',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>{tache.titre}</span>
            <span style={{ color: '#7f8c8d', fontSize: '0.85em' }}>{tache.statut}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;