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
     if (!selected) return;
    async function fetchBusiness(id) {
       const res = await fetch (`${businessURL}/${id}`);
       const data = await res.json() 
       setBusinessInfo(data)
    }
    fetchBusiness(selected)
  }, [selected])

  function viewInfo(){
    setBusinessInfo((businessInfo)=>({
        ...businessInfo, name: businessInfo.name, location:businessInfo.location, id:businessInfo.id,
    }))
  }

  function handleBusinessInfo(e) {
   e.preventDefault()
   const displayInfo={
    location:businessInfo.location,
    name:businessInfo.name,
    id:businessInfo.id
   }
   viewInfo(displayInfo)
   setSelected(businessInfo.id)
  }

  return (
    <div className=" flex justify-center mr-auto ml-auto">
      <form onSubmit={handleBusinessInfo}>
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

function BusinessDetails({ business, selected, businesses, businessInfo }) {
  if (selected === businessInfo.id)
    return (
      <div>  
     <h1>{businessInfo.name}</h1>
     <p>{businessInfo.location}</p>
      </div>
    );
}

