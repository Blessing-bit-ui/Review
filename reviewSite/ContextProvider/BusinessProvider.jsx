import {useEffect, useState, useContext, createContext} from "react"

const Business_URL = "http://localhost:8000/businesses";

const BusinessContext = createContext();
function BusinessProvider({children}) {
    const [businesses, setBusinesses] = useState([]);
      const [business, setBusiness] = useState("");
      const [selected, setSelected] = useState(null);

      useEffect(function () {
          async function fetchBusinessURL() {
            const res = await fetch(Business_URL);
            const data = await res.json();
            setBusinesses(data);
            console.log(data);
          }
          fetchBusinessURL();
        }, []);

        async function createBusiness(newBusiness){
            const res = await fetch (`${Business_URL}`,{
                method:"POST",
                body:JSON.stringify(newBusiness),
                headers:{
                    "Content-Type":"application/json",
                }
            });
            const data = await res.json()
            setBusinesses((businesses)=>[...businesses, data])
         }
      return (
        <BusinessContext.Provider
          value={{
            business,
            setBusiness,
            selected,
            setSelected,
            businesses,
            setBusinesses,
            createBusiness, 
          }}
        >
          {children}
        </BusinessContext.Provider>
      );
}
 function useBusiness() {
   const context = useContext(BusinessContext);
   if (context === undefined)
    throw Error("Business is use out of context")
return context
 }


export {useBusiness, BusinessProvider}
 
