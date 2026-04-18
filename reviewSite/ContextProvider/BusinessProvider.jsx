import {useEffect, useState, useContext, createContext} from "react"

const Business_URL = "http://localhost:4000/businesses";

const BusinessContext = createContext();
function BusinessProvider({children}) {
    const [businesses, setBusinesses] = useState([]);
      const [business, setBusiness] = useState("");
      const [selected, setSelected] = useState(null); 
      const [currentCategory, setCurrentCategory] = useState([])

      useEffect(function () {
          async function fetchBusinessURL() {
            const res = await fetch(Business_URL);
            const data = await res.json();
            setBusinesses(data);
            console.log(data)
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

         async function getCategories(category){
          const res = await fetch(`${Business_URL}?category=${category}`)
          const data = await res.json()
          setCurrentCategory(data)
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
            currentCategory,
            getCategories 
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
 
