import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function Galerie() {
  const images = [
    { src: img1, legende: 'Image 1' },
    { src: img2, legende: 'Image 2' },
    { src: img3, legende: 'Image 3' },
  ];

  return (
    <div style={{ padding: '15px' }}>
      <h3 style={{ color: '#2980b9' }}>🖼️ Galerie d'images</h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={image.src}
              alt={image.legende}
              width="150"
              style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
            />
            <p style={{ color: '#7f8c8d', fontSize: '0.85em' }}>{image.legende}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galerie;