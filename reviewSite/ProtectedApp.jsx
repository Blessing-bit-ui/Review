import { useNavigate } from "react-router-dom"
import { useAuth } from "./ContextProvider/AuthProvider"
import { useEffect } from "react"
import { Navigate } from "react-router-dom";

function ProtectedApp({children}) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedApp
