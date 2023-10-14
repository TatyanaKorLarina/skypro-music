import { AppRoutes } from "./routes";
import { useState } from 'react'
import { AuthProvider } from './Contexts/AuthContext'
import { useNavigate } from "react-router-dom";
import "./App.styles";

function App() {
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }

  
  
  return (
    <AuthProvider>
      <div className="App">
        <div className="App-layout">
          <AppRoutes
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;