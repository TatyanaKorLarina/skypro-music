import { AppRoutes } from "./routes";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./App.styles";
import { getTracks } from "./api";
function App() {
  const [user, setUser] = useState(null);
  const [musicTracks, setMusicTracks] = useState([]);
  const navigate = useNavigate();

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }

  useEffect(() => {
    
    getTracks()
      .then((musicTracks) => setMusicTracks(musicTracks.musicTracks));
      
      
  }, []);
  
  return (
    <div className="App">
      <div className="App-layout">
        <AppRoutes  
          musicTracks={musicTracks}
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin} />
      </div>
    </div>
  );
}

export default App;