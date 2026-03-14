import { useBusiness } from "./BusinessProvider";
import { useUsers } from "./UsersProvider";

import { useContext, useState, useEffect, createContext} from "react";
const AuthContext = createContext()
function AuthProvider({children}) {
    const [auth, setAuth] = useState(false)
    const {businesses} = useBusiness()
    const {users}= useUsers()

 function Login(email, password) {
   const emailfound = businesses.find(
     (bus) => bus.email === email && bus.password === password
   );
   if (emailfound) {
     setAuth(true);
   } else {
     setAuth(false);
   }
 }
    return (
        <AuthContext.Provider value={{
          Login,
          auth
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
