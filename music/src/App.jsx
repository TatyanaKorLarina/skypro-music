import { AppRoutes } from "./routes";
import { useState } from 'react'
//import { useNavigate } from "react-router-dom";
import "./App.styles";
//import { getTracks } from "./api";
function App() {
  const [user, setUser] = useState(null);
  //const [email, setEmail] = useState("");
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [repeatPassword, setRepeatPassword] = useState("");
  //const [musicTracks, setMusicTracks] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const navigate = useNavigate();

 // const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
 // const handleLogout = () => {
  //  setUser(localStorage.clear())
  //  navigate('/login', { replace: true })
 // }

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
          setUser={setUser}
          //email={email}
          //setEmail={setEmail}
          //username={username}
          //setUsername={setUsername}
          //password={password}
          //setPassword={setPassword}
          //repeatPassword={repeatPassword}
          //setRepeatPassword={setRepeatPassword}
           />
      </div>
    </div>
  );
}

export default App;