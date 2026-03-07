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
    <div className=" flex justify-center mr-auto ml-auto">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Find Business"
          className="bg-white p-4 rounded-lg w-[500px]"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
      </form>
      <BusinessDetails
      />
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

