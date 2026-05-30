import {useState, useEffect} from "react"
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextProvider/AuthProvider";
import { useBusiness } from "../ContextProvider/BusinessProvider";

function BusinessRegistrationForm() {
const [name, setBusinessName] = useState("")
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
        id:crypto.randomUUID(),
        name,
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
      <div className="min-h-screen bg-stone-100  flex justify-center px-4 mt-6 mb-6">
        <div
          className="w-full max-w-5xl overflow-hidden
         bg-lime-600 md:flex rounded-xl shadow-lg"
        >
          {/*left side*/}
          <div className="relative flex-1 p-10 md:p-14">
            <div className="realtive z-10 flex h-full flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
                WELCOME TO VIEW AFRICA. REGISTER BUSINESS NOW!
              </h1>
            </div>
          </div>

          {/* Right hand */}
          <div
            class="relative flex-1 p-10 md:p-14 before:content-['']
           before:absolute 
           before:w-[200%]
            before:h-[200%] bg-white rounded-40
            before:-translate-x-[18%] 
            before:-translate-y-[10%] 
            before:top-0
            before:left-0"
          >
            <div className="relative z-10">
              <form onSubmit={handleRegistrationForm} className="space-y-4">
                <div>
                  <label className="block mb-1 font-bold">Business Name </label>
                  <input
                    className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                    placeholder="Enter Business Name"
                    value={name}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">
                    {" "}
                    Business Email{" "}
                  </label>
                  <input
                    className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                    placeholder="Enter Business Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">
                    Country of Business
                  </label>
                  <input
                    className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black "
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">City</label>
                  <input
                    className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                    placeholder="Enter City or Town"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">
                    Choose Category
                  </label>
                  <select
                    className="w-full rounded-md border border-lime-300 px-4 py-2 outline-none hover:border-2  hover:border-black"
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
                </div>
                <div>
                  <label className="block mb-1 font-bold">
                    {" "}
                    Business Creation Date
                  </label>
                  <input
                    className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2  hover:border-black"
                    placeholder="Enter date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">
                    Business Classification
                  </label>
                  <select
                    className="w-full rounded-md border border-lime-600 px-4 py-2 outline-none hover:border-2  hover:border-black"
                    value={classification}
                    onChange={(e) => setClassification(e.target.value)}
                  >
                    <option value="Large">Big</option>
                    <option value="Meduim">Medium</option>
                    <option value="Small">Small</option>
                    <option value="Micro">Micro</option>
                  </select>
                </div>
                <label className="block mb-1 font-bold">Description</label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black "
                  placeholder="Enter Description"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <label className="block mb-1 font-bold">Password</label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-lime-600 flex items-center
                   justify-center p-3 border rounded-lg 
                   font-bold hover:bg-black hover:text-lime-600"
                >
                  Register Business
                </button>
                <div className="text-[10px] md:text-[15px]">
                  Already have an account ?
                  <NavLink
                    to="/login"
                    className="
                  text-blue-600
                  hover:underline"
                  >
                    Login
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BusinessRegistrationForm

