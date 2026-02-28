import { useState, useEffect } from "react";

const businessURL = "http://localhost:7000/businesses"

function FindBusiness() {
   const [businesses, setBusinesses] = useState([]) 
   const [business, setBusiness] = useState("")

  useEffect(function(){
    async function fetchBusinessURL() {
    const res = await fetch("http://localhost:7000/businesses")
    const data= await res.json();  
 setBusinesses(data)
 setBusiness(data.name)
console.log(data)
    }
    fetchBusinessURL()
  }, [businesses])

  return (
    <div className=" flex justify-center mr-auto ml-auto">
      <form>
        <input
          placeholder="Find Business"
          className="bg-white p-4 rounded-lg w-[500px]"
          value={business}
          onChange={(e)=>setBusiness(e.target.value)}
        />
      </form>
    </div>
  );
}
export default FindBusiness