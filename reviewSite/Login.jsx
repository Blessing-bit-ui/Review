import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./ContextProvider/AuthProvider"
import { useUsers } from "./ContextProvider/UsersProvider"
import { useBusiness } from "./ContextProvider/BusinessProvider"


function Login() {
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] =useState("")
const {users}=useUsers()
const {businesses} = useBusiness()

const navigate= useNavigate()
const {Login, auth} = useAuth()

function handleLoginForm(e){
    e.preventDefault()
    Login(loginEmail, loginPassword);
    navigate("/review")
}

    return (
        <form onSubmit={handleLoginForm}>
          <label>User Email</label>
          <input placeholder="Enter Email" value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
          <label>Password</label>
          <input placeholder="Enter Password" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
          <button type="submit">Login</button>  
        </form>
            
    )
}

export default Login
