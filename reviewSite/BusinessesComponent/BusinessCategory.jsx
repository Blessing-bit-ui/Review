import { useParams } from "react-router-dom"
import { useBusiness } from "../ContextProvider/BusinessProvider"
import { useState, useEffect } from "react"

function BusinessCategory() {
const {category} = useParams()
const { businesses, getCategories, currentCategory } = useBusiness();
//const businessCategory = businesses.find((bus)=> bus.category === category)

/*useEffect(function(){
getCategories(category)
}, [category])*/

useEffect(() => {
  if (category)getCategories(category);
}, [category]);

    return (
      <div>
        <h1>Business in {category} category</h1>
        <ul>
          {currentCategory.map((curr) => (
           <div key={curr.id}>
            <h1>{curr.name}</h1>
            <h2>{curr.email}</h2>
            <h1>Location {curr.country} <span>{curr.city}</span></h1>
           </div>
          ))}
        </ul>
      </div>
    );
}

export default BusinessCategory
