function Contact() {
  return (
    <div style={{ padding: '20px', color: '#2c3e50' }}>
      <h2>📬 Contactez-nous</h2>
      <p>Vous avez une question ? Écrivez-nous !</p>
      <div style={{ backgroundColor: '#f0f3f4', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
        <p>📧 <strong>Email :</strong> contact@monapp.com</p>
        <p>📞 <strong>Téléphone :</strong> +212 6 00 00 00 00</p>
        <p>📍 <strong>Adresse :</strong> Marrakech, Maroc</p>
      </div>
    </div>
  );
}

export default Contact;