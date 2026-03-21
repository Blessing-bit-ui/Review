import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextProvider/AuthProvider";
import { useBusiness } from "../ContextProvider/BusinessProvider";

function BusinessRegistrationForm() {
const [businessName, setBusinessName] = useState("")
const [email, setEmail] = useState("")
const [country, setCountry] = useState("")
const [city, setCity] = useState("")
const [category, setCategory] =useState("")
const [date, setDate] = useState("")
const [classification, setClassification] = useState("")
const [notes, setNotes] = useState("")
const [password, setPassword] =useState("")
const [justRegistered, setJustRegistered] =useState(false)

const {createBusiness, businesses} = useBusiness()
const { forceLogin} = useAuth() 

const navigate=useNavigate()
async function handleRegistrationForm(e){
    e.preventDefault()
    const newBusiness={
        businessName,
        email,
        country,
        city,
        category,
        date, 
        classification,
        notes,
        password,
    }
    await createBusiness(newBusiness)
    forceLogin()
      navigate("/review")    
    } 
    return (
      <div>
        <form onSubmit={handleRegistrationForm}>
          <label>Business Name :</label>
          <input
            placeholder="Enter Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <label> Business Email </label>
          <input
            placeholder="Enter Business Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Country</label>
          <input
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label>City</label>
          <input
            placeholder="Enter City or Town"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Choose Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Agriculture">Agriculture & Farming</option>
            <option value="Food">Food & Beverage</option>
            <option value="Tech">Technology</option>
            <option value="HealthCare">Healthcare & Medical</option>
            <option value="Finance">Finance & Insurance</option>
            <option value="Education">Education</option>
          </select>
          <label> Business Creation Date</label>
          <input
            placeholder="Enter date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Blessing Classification</label>
          <select
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
          >
            <option value="Large">Big</option>
            <option value="Meduim">Medium</option>
            <option value="Small">Small</option>
            <option value="Micro">Micro</option>
          </select>
          <label>Description</label>
          <input
            placeholder="Enter Description"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <label>Password</label>
          <input
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register Business</button>
        </form>
      </div>
    );
}

export default BusinessRegistrationForm
