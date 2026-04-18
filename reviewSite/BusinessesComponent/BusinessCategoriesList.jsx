import { useBusiness } from "../ContextProvider/BusinessProvider"
import { NavLink } from "react-router-dom"


function BusinessCategoriesList() {
const { business, setBusiness, businesses} = useBusiness();
const businessCategory = businesses.map((bus)=> bus.category)
const businessWithoutDuplicates = [...new Set(businessCategory)]

  return (
    <div class="w-full h-px bg-red-200">
      Business Categories
      <ul class="flex justify-between">
        {businessWithoutDuplicates.map((bus, index) => (
          <li key={index}>
            <NavLink to={`/category/${bus}`}>{bus}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BusinessCategoriesList
