import { useState, useEffect } from "react";

const businessURL = "http://localhost:7000/businesses";

function FindBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [business, setBusiness] = useState("");
  const [businessInfo, setBusinessInfo] = useState({})
  const [selected, setSelected] = useState(null);

  useEffect(function () {
    async function fetchBusinessURL() {
      const res = await fetch("http://localhost:7000/businesses");
      const data = await res.json();
      setBusinesses(data);
      console.log(data);
    }
    fetchBusinessURL();
  }, []);

  useEffect(function(){
    if(!selected) return;
    async function fetchBusiness(id) {
       const res = await fetch (`${businessURL}/${id}`);
       const data = await res.json() 
       setBusinessInfo(data)
    }
    fetchBusiness()
  }, [selected])

  function handleSubmit(e){
    e.preventDefault()
    const found = businesses.find((bus)=>bus.name === business )
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
        business={business}
        selected={selected}
        businesses={businesses}
        businessInfo={businessInfo}
      />
    </div>
  );
}
export default FindBusiness;

function BusinessDetails({selected, businessInfo}) {
if(selected)
    return (
      <div>  
     <h1>{selected.name}</h1>
     <p>{selected.location}</p>
      </div>
    );
}

