import { useState } from "react";
import { useBusiness } from "../ContextProvider/BusinessProvider";
import { NavLink } from "react-router-dom";


function Header() {
    const [displayCategory, setDisplayCategory]=useState(false)
    function togoDisplay(){
        setDisplayCategory(displayCategory === false ?  true : false )
        console.log(displayCategory)
    }
  return (
    <div className=" relative shadow-[0_2px_2px_rgba(0,0,0,0.4)] bg-[#020617] md:h-[100px]">
      <div className="p-2 flex justify-between items-center">
        <div>
          <h1 className="text-[30px] text-[#ffff] font-[PT_Sans] font-bold">
            African Business Directory
          </h1>
        </div>
        <div className="flex justify-around w-6/12">
          <h3 className="text-[#22c55e] hover:underline decoration-[#ffffff] ">
            Write a review
          </h3>
          <div className="relative">
            <h3
              className="text-[#22c55e] hover:underline decoration-[#ffffff]"
              onClick={togoDisplay}
            >
              Categories
            </h3>
            <>
              {displayCategory && (
                <div className="absolute top-full left-0 mt-2 w-48
                 z-50 bg-white shadow-lg">
                  <DisplayList />
                </div>
              )}
            </>
          </div>

          <NavLink
            to="/"
            className="text-[#22c55e] hover:underline decoration-[#ffffff]"
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header

function DisplayList(){
const { businesses } = useBusiness();
const businessCategory = businesses.map((bus) => bus.category);
const businessWithoutDuplicates = [...new Set(businessCategory)];
return(
    <div className="relative shadow-[0_2px_2px_rgba(0,0,0,0.4)] bg-[#fffff] md:h-[100px] ">
        <ul className="text-[#22c55e] hover:underline decoration-[#ffffff]" >
            {businessWithoutDuplicates.map((bus, index)=>(
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
)

}