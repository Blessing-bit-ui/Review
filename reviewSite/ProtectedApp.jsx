import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "./ContextProvider/AuthProvider"
import { useEffect } from "react"
import { Navigate } from "react-router-dom";

function ProtectedApp({children}) {
  const { auth } = useAuth();
  const location = useLocation()
  const navigate = useNavigate();
  if (!auth) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}

export default ProtectedApp
