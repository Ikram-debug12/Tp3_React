import { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState(3);

  return (
    <div style={{ padding: '10px', margin: '10px 0', backgroundColor: '#fef9e7', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}>
      {notifications > 0 ? (
        <p style={{ color: '#e67e22', fontWeight: 'bold' }}>
          🔔 Vous avez <span style={{ fontSize: '1.2em' }}>{notifications}</span> notification(s)
        </p>
      ) : null}
      <button
        onClick={() => setNotifications(notifications - 1)}
        disabled={notifications === 0}
        style={{ backgroundColor: '#f39c12', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Lire une notification
      </button>
    </div>
  );
}

export default Notifications;