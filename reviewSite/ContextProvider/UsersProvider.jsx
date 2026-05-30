import {useEffect, useState, createContext, useContext} from "react"
import axios from "axios";


const base_UsersUrl = "http://127.0.0.1:7000/api/users";

const UsersContext = createContext()

function UsersProvider({children}) {
const [users, setUsers] = useState([])

useEffect(function(){
    async function fetchUser() {
    const res = await axios.get(base_UsersUrl)
   // const data = await res.json()
    setUsers(res.data.users)
    }
    fetchUser()
},[])

async function registerUser(newUser){
    const res= await axios.post(base_UsersUrl, newUser)
   setUsers((users)=> [...users, res.data.users]) 
}
    return (
       <UsersContext.Provider value={{
        users,
        registerUser
       }}>
        {children}
       </UsersContext.Provider>
    )
}


function useUsers(){
    const context = useContext(UsersContext)
    if (context === undefined)
        throw Error ("useUser is used out of context")
        return context
}
export  {UsersProvider, useUsers}

