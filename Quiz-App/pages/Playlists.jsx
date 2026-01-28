import playlists from '../data/playlists';

function Playlists() {

  return (
    <div>
      <h2>Select a Playlist</h2>
      {playlists.map((playlist) => (
        <div key={playlist.id} 
        style={{border: '1px solid #ccc',
          padding: '10px', marginBottom: '10px'
        }}>
        </div>
      ))}
    </div>
  );
}

