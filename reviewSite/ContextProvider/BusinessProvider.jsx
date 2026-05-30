import {useEffect, useState, useContext, createContext} from "react"
import axios from "axios";

const Business_URL = "http://127.0.0.1:7000/api/businesses";

const BusinessContext = createContext();
function BusinessProvider({children}) {
    const [businesses, setBusinesses] = useState([]);
      const [business, setBusiness] = useState("");
      const [selected, setSelected] = useState(null); 
      const [currentCategory, setCurrentCategory] = useState([])

      useEffect(function () {
          async function fetchBusinessURL() {
            const res = await axios.get(Business_URL);
            //const data = await res.json();
            setBusinesses(res.data.businesses);
            console.log(res.data.businesses);
          }
          fetchBusinessURL();
        }, []);

        async function createBusiness(newBusiness){
            const res = await axios.post(Business_URL, newBusiness)
           // const data = await res.json()
            setBusinesses((businesses)=>[...businesses, res.data])
         }

         async function getCategories(category){
          const res = await axios.get(`${Business_URL}/${category}`)
          //const data = await res.json()
          console.log(res.data)
          setCurrentCategory(res.data)
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
 
