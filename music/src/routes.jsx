import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main";
import { CategoryPage } from "./pages/category";
import { FavoritesPage } from "./pages/favorites";
import { NotFoundPage } from "./pages/not-found";
import { LoginPage } from "./pages/login/LoginPage";
//import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { ProtectedRoute } from './components/protected-route';


export const AppRoutes = ({ user, setUser}) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPage
          isLoginMode={true}
          user={user}
          setUser={setUser}
          />
        }
      />
      <Route 
        path="/register" 
        element={
          <LoginPage
            isLoginMode={false}
            
            user={user}
            setUser={setUser}
            
          ></LoginPage>
        }/>
      <Route
        path="/category/:id"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <CategoryPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />

<Route
        path="/main"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/favorites"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <FavoritesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};