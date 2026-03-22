import son from './audio.mp3';

function LecteurAudio() {
  return (
    <div style={{ padding: '10px', margin: '10px 0' }}>
      <h4 style={{ color: '#2c3e50', marginBottom: '8px' }}>🎵 Lecteur audio</h4>
      <audio
        controls
        src={son}
        style={{ width: '100%', borderRadius: '8px' }}
      >
      </audio>
    </div>
  );
}

export default LecteurAudio;