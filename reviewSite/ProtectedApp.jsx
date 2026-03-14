import { useNavigate } from "react-router-dom"
import { useAuth } from "./ContextProvider/AuthProvider"
import { useEffect } from "react"

function ProtectedApp({children}) {
    const {auth} =useAuth()
    const navigate = useNavigate()

    useEffect(function(){
        if(!auth) navigate("/")
    }, [auth, navigate])
    return auth ? children : null
}

export default ProtectedApp
