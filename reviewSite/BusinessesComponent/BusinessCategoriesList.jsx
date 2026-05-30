import { useBusiness } from "../ContextProvider/BusinessProvider"
import { NavLink } from "react-router-dom"


function BusinessCategoriesList() {
const { business, setBusiness, businesses} = useBusiness();
const businessCategory = businesses.map((bus)=> bus.category)
const businessWithoutDuplicates = [...new Set(businessCategory)]


  return (
    <div class="w-full h-px bg-red-200 mt-2">
      <h1 className= "text-center text-[20px]">Business Categories</h1>
      <ul class="flex justify-between">
        {businessWithoutDuplicates.map((bus, index) => (
          <li key={index}>
            <NavLink
              className="text-white text-[17px] hover:underline "
              to={`/category/${bus}`}
            >
              {bus}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BusinessCategoriesList
