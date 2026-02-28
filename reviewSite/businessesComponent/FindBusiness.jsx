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

  function handleSelect(e) {
   e.preventDefault()
   const displayInfo={
    name :businesses.name,
    location: businesses.location,
   }
  }

  return (
    <div className=" flex justify-center mr-auto ml-auto">
      <form onSubmit={handleSelect}>
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
      />
    </div>
  );
}
export default FindBusiness;

function BusinessDetails({ business, selected, businesses }) {
  if (selected === business.id)
    return (
      <div>
       

        <h1>jjjj</h1>
      </div>
    );
}

