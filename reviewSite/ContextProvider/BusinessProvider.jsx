import {useEffect, useState, useContext, createContext} from "react"

const businessURL = "http://localhost:7000/businesses";

const BusinessContext = createContext();
function BusinessProvider({children}) {
    const [businesses, setBusinesses] = useState([]);
      const [business, setBusiness] = useState("");
     // const [businessInfo, setBusinessInfo] = useState({})
      const [selected, setSelected] = useState(null);
      useEffect(function () {
          async function fetchBusinessURL() {
            const res = await fetch("http://localhost:7000/businesses");
            const data = await res.json();
            setBusinesses(data);
            console.log(data);
          }
          fetchBusinessURL();
        }, []);
      
        /*useEffect(function(){
          if(!selected) return;
          async function fetchBusiness(id) {
             const res = await fetch (`${businessURL}/${id}`);
             const data = await res.json() 
             setBusinessInfo(data)
          }
          fetchBusiness()
        }, [selected])*/
      

      return (
        <BusinessContext.Provider
          value={{
            business,
            setBusiness,
            selected,
            setSelected,
            businesses,
            setBusinesses,
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
 
