import { AppRoutes } from "./routes";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./App.styles";
//import { getTracks } from "./api";
function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [musicTracks, setMusicTracks] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }
  /*useEffect(() => {
    setIsLoading(true);  
    getTracks()
      .then((musicTracks) => setMusicTracks(musicTracks.musicTracks));
    setIsLoading(false); 
      
  }, []);*/
  
  return (
    <div className="App">
      <div className="App-layout">
        <AppRoutes  
          //musicTracks={musicTracks}
          //isLoading={isLoading}
          user={user}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onAuthButtonClick={user ? handleLogout : handleLogin} />
      </div>
    </div>
  );
}
export default App;