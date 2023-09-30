import { AppRoutes } from "./routes";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import "./App.styles";
import AudioPlayer from "./components/audioPlayer/AudioPlayer"
import { UserContext } from "./contexts/user";
import { getTracks } from "./api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [tracksError, setTracksError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
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

  useEffect(() => {
    setIsLoading(true); 
    setTracksError(null); 
    getTracks()
      .then((tracks) => setTracks(tracks))
      .catch((error) => {
        setTracksError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
      
  }, []);
  
  return (
    <>
    <div className="App">
      <div className="App-layout">
      <UserContext.Provider value={user}>
            <AppRoutes
              isLoading={isLoading}
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
              user={user}
              setUser={setUser}
              tracksError={tracksError}
            />
          </UserContext.Provider>
      </div>
    </div>
      {currentTrack ? (
        <AudioPlayer
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      ) : null}
    </>
  );
}

export default App;