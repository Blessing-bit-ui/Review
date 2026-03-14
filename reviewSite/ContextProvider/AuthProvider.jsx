import { useBusiness } from "./BusinessProvider";
import { useUsers } from "./UsersProvider";

import { useContext, useState, useEffect, createContext} from "react";
const AuthContext = createContext()
function AuthProvider({children}) {
    const [auth, setAuth] = useState(false)
    const {businesses} = useBusiness()
    const {users}= useUsers()

 function Login(email, password) {
   const businessfound = businesses.find(
     (bus) => bus.email === email && bus.password === password
   );
   const userFound = users.find((user)=>user.email === email && user.password === password)
   if (businessfound || userFound) {
     setAuth(true);
   } else {
     setAuth(false);
   }
 }
    return (
        <AuthContext.Provider value={{
          Login,
          auth,
          setAuth
        }}>
  {children}
        </AuthContext.Provider>
    )

}

function useAuth(){
    const context = useContext(AuthContext)
    if(context === undefined)
        throw Error("useAuth is used out of Context")
    return context
}
export {useAuth, AuthProvider}
