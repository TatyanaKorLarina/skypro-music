import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main";
import { CategoryPage } from "./pages/category";
import { FavoritesPage } from "./pages/favorites";
import { NotFoundPage } from "./pages/not-found";
import { LoginPage } from "./pages/login/login";
import { RegisterPage } from "./pages/register/register";
import { ProtectedRoute } from './components/protected-route';
import { Layout } from './pages/layout'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route 
        path="/register" 
        element={<RegisterPage />} />


      <Route
        path="/"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Layout />
          </ProtectedRoute>
        }
      >


        <Route
          index
          element={
            <ProtectedRoute user={user} isAllowed={Boolean(user)}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRoute user={user} isAllowed={Boolean(user)}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
      </Route>





      <Route
        path="/category/:id"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <CategoryPage />
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