import { NavLink } from "react-router-dom";
function Header() {
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
          <h3 className="text-[#22c55e] hover:underline decoration-[#ffffff]">
            Categories
          </h3>

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