import { useBusiness } from "../ContextProvider/BusinessProvider"
import { NavLink } from "react-router-dom"


function BusinessCategoriesList() {
const { business, setBusiness, businesses} = useBusiness();
const businessCategory = businesses.map((bus)=> bus.category)
const businessWithoutDuplicates = [...new Set(businessCategory)]


  return (
    <div className="mt-2">
      <h1 className="text-center text-[30px] font-bold">Business Categories</h1>
      <ul class="grid grid-cols-3 gap-6 text-justify">
        {businessWithoutDuplicates.map((bus, index) => (
          <li key={index}>
            <NavLink
              className=" text-[17px] whitespace-nowrap hover:underline "
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
