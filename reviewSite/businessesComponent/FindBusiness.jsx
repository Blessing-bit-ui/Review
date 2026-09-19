import { useState, useEffect } from "react";
import { useBusiness } from "../ContextProvider/BusinessProvider";


function FindBusiness() {
  const {
    business,
    setBusiness,
    setSelected,
    businesses,
  } = useBusiness();
 
  function handleSubmit(e){
    e.preventDefault()
   const found = businesses.find((bus)=> bus.name === business)
   setSelected(found)
  }

  return (
    <div className="flex items-center w-full">
      <div className="flex-1 h-px bg-[#020617]/50"></div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Find Business"
          className="bg-white p-4 rounded-2xl w-[500px] border-1 border-[#020617] shadow-[0_0_10px_rgba(0,0,0,0.25)]"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
      </form>
      <BusinessDetails />
      <div className="flex-1 h-px bg-[#020617]/50"></div>
    </div>
  );
}
export default FindBusiness;

function BusinessDetails() {
  const {selected} = useBusiness()
if(selected)
    return (
      <div>  
     <h1>{selected.name}</h1>
     <p>{selected.location}</p>
      </div>
    );
}

