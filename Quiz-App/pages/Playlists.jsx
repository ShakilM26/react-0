import playlists from '../data/playlists';
import { useNavigate } from 'react-router-dom';

function Playlists() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Select a Playlist</h2>
      {playlists.map((playlist) => (
        <div key={playlist.id} 
        style={{border: '1px solid #ccc',
          padding: '10px', marginBottom: '10px'
        }}>
          <h3>{playlist.title}</h3>
          <p>{playlist.description}</p>
          <button onClick={() => navigate(`/quiz/${playlist.id}`)}>
            Start Quiz
          </button>
          </div>
      ))}
    </div>
  );
}

export default Playlists;