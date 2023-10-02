import { Navigate } from 'react-router-dom'
import { useAuth } from "../../WithAuth";
export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const { auth } = useAuth();
  if (!auth) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return children
}
