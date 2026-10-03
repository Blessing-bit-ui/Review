import Header from "../Sections/Header"
import Footer from "../Sections/Footer"
import { useParams } from "react-router-dom"
import { useBusiness } from "../ContextProvider/BusinessProvider"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../ContextProvider/AuthProvider"
import { NavLink } from "react-router-dom"

function BusinessCategory() {
  const { searchbusinee, setSearchBusiness } = useState(""); // to search business
  const { category } = useParams();
  const { businesses, getCategories, currentCategory } = useBusiness();
  const navigate = useNavigate();
  const { forceLogin } = useAuth();
  const [ businessSlide, setBusinessSlide] = useState(0); // Will use this to create a function which
  // onClick i will be able to move to the next business
  //const businessCategory = businesses.find((bus)=> bus.category === category)

  /*useEffect(function(){
getCategories(category)
}, [category])*/

const business = currentCategory[businessSlide]

function nextSlide(){
setBusinessSlide((businessSlide + 1) )
console.log(businessSlide)
}

  useEffect(() => {
    if (category) getCategories(category);
  }, [category]);

  return (
    <div>
      <Header />
      <div className="shadow-[0_5px_0_rgba(0,0,0,0.4)] bg-white p-2 flex justify-between items-center "></div>
      <div className="bg-lime-600 w-screen h-screen ml-4">
        <h1 class="text-[30px] text-white font-bold  ">
          Businesses in {category} category
        </h1>
        <ul>
          <div className="flex justify-between gap-1">
            {currentCategory.length > 0 && (
              <div
                key={business.id}
                className="bg-white p-3 border rounded-lg  w-[250px]"
              >
                <NavLink to={`/name/${business.name}`}>
                  <h1 className="text-red-900 font-bold">{business.name}</h1>
                  <h2>{business.email}</h2>
                  <h1>
                    Location {business.country} <span>{business.city}</span>
                  </h1>
                  <p className="underline decoration-pink-900 hover:text-green-600 hover:decoration-green-600">
                    Write a review
                  </p>
                </NavLink>
              </div>
            )}
          </div>
        </ul>
        <button onClick={nextSlide}>next</button>
      </div>
    </div>
  );
}

export default BusinessCategory
