import {useEffect, useState, createContext, useContext} from "react"
const base_UsersUrl = "http://localhost:12000/users";

const UsersContext = createContext()

function UsersProvider({children}) {
const [users, setUsers] = useState([])
useEffect(function(){
    async function fetchUser() {
    const res = await fetch (base_UsersUrl)
    const data = await res.json()
    setUsers(data)
    }
    fetchUser()
},[])
async function registerUser(newUser){
    const res= await fetch (`${base_UsersUrl}`,{
        method :"POST",
        body:JSON.stringify(newUser),
        headers:{ 
            "Content-Type":"application/json"
        }     
    }
)
const data = await res.json()
   setUsers((users)=> [...users, data]) 
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

