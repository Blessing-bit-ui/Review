import { useParams } from "react-router-dom"
import { useBusiness } from "../ContextProvider/BusinessProvider"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../ContextProvider/AuthProvider"
import { NavLink } from "react-router-dom"

function BusinessCategory() {

const {category} = useParams()
const { businesses, getCategories, currentCategory } = useBusiness();
const navigate = useNavigate()
const { forceLogin } = useAuth();
//const businessCategory = businesses.find((bus)=> bus.category === category)

/*useEffect(function(){
getCategories(category)
}, [category])*/

useEffect(() => {
  if (category)getCategories(category);
},[category]);

    return (
      <div>
        <div className="shadow-[0_5px_0_rgba(0,0,0,0.4)] bg-white p-2 flex justify-between items-center ">
          <div>
            <h1 className="text-[30px] text-lime-700 font-bold">
              African Business Directory
            </h1>

          </div>
        </div>
        <div className="bg-lime-600 w-screen h-screen">
          <h1 class="text-[30px] text-white font-bold ">
            Businesses in {category} category
          </h1>
          <ul>
            {currentCategory.map((curr) => (
              <div key={curr.id}>
                <NavLink to={`/name/${curr.name}`}>
                  <h1>{curr.name}</h1>
                  <h2>{curr.email}</h2>
                  <h1>
                    Location {curr.country} <span>{curr.city}</span>
                  </h1>
                  <p>Write a review</p>
                </NavLink>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default BusinessCategory
