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
  const [ businessSlide, setBusinessSlide] = useState(0);
  const [transition, setTransition] = useState(true)
   // Will use this to create a function which
  // onClick i will be able to move to the next business
  //const businessCategory = businesses.find((bus)=> bus.category === category)

  /*useEffect(function(){
getCategories(category)
}, [category])*/


function nextSlide(){
const maxSlide = Math.floor(currentCategory.length * 0.8);
const halfSlide = Math.floor(currentCategory.length * 0.2)
setBusinessSlide(
  (businessSlide + halfSlide) % maxSlide
);
}


function prevSlide() {
  const maxSlide = Math.floor(currentCategory.length * 0.8);
  const halfSlide = Math.floor(currentCategory.length * 0.2);
  setBusinessSlide((businessSlide - halfSlide) % maxSlide);
}

  useEffect(() => {
    if (category) getCategories(category);
  }, [category]);

  return (
    <div>
      <Header />


      <div className="bg-lime-600 w-screen min-h-screen ml-4">
        <h1 className="text-[30px] text-white font-bold">
          Businesses in {category} category
        </h1>

        <div>
          <div
            className="flex gap-1 transition-transform duration-500"
            style={{
              transform: `translateX(-${businessSlide * 250}px)`,
              transition: transition ? "transform 0.5s ease" : "none",
            }}
          >
            {currentCategory.map((curr) => (
              <div
                key={curr.id}
                className="bg-white p-3 border rounded-lg w-[250px]"
              >
                <NavLink to={`/name/${curr.name}`}>
                  <h1 className="text-red-900 font-bold">{curr.name}</h1>

                  <h2>{curr.email}</h2>

                  <h1>
                    Location {curr.country} <span>{curr.city}</span>
                  </h1>

                  <p className="underline decoration-pink-900 hover:text-green-600 hover:decoration-green-600">
                    Write a review
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {currentCategory.length > 4 && (
          <div>
            <button onClick={nextSlide}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button onClick={prevSlide}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );}
export default BusinessCategory
