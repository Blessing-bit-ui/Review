import { useBusiness } from "../ContextProvider/BusinessProvider"


function BusinessCategories() {
const {business, setBusiness, businesses} = useBusiness()
const businessCategory = businesses.map((bus)=> bus.category)
const businessWithoutDuplicates = [...new Set(businessCategory)]

  return (
    <div class="w-full h-px bg-red-200">
      Business Categories
      <ul class="flex gap-2">
        {businessWithoutDuplicates.map((bus, index)=>(
            <li key={index}>{bus}</li>
        ))}
      </ul>
    </div>
  );
}
export default BusinessCategories
