import logo from './logo.png';

function Logo() {
  return (
    <div style={{ textAlign: 'center', margin: '15px 0' }}>
      <img
        src={logo}
        alt="Logo du site"
        width="150"
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
}

export default Logo;