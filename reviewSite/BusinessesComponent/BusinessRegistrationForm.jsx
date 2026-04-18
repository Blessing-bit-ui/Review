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
      <div className="min-h-screen bg-stone-100 w-screen h-screen flex justify-center">
        <div className="w-full max-w-5xl overflow-hidden
         bg-lime-600 md:flex rounded-xl shadow-lg">
           {/*left side*/}
          <div class="flex flex-col w-[100%] max-w-[800px] min-h-[500px] bg-lime-600 mx-auto overflow-hidden  ">
            {" "}
            <h1>
              WELCOME TO VIEW AFRICA. REGISTER YOUR BUSINESS AND GAIN MORE
              VISIBILITY
            </h1>
          </div>

          
          <div class="before:content-[''] before:absolute before:w-[200%] before:h-[200%] bg-white rounded-full  before:-translate-x-[18%] before:-translate-y-[10%] ">
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
        </div>
      </div>
    );
}

export default BusinessRegistrationForm

/*return (
  <div className="min-h-screen bg-stone-100 flex items-center justify-center px-4">
    <div className="w-full max-w-5xl overflow-hidden bg-lime-600 md:flex rounded-xl shadow-lg">
      
      {/* Left side */
     // <div className="relative flex-1 p-10 md:p-14">
       // <div className="relative z-10 flex h-full flex-col justify-center">
         // <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
           // WELCOME TO VIEW AFRICA. REGISTER YOUR BUSINESS AND GAIN MORE
            //VISIBILITY
          //</h1>
          //<p className="text-stone-200 text-base">
            //Here you can register your business and help more people discover it.
          //</p>
        //</div>
      //</div>

      //{/* Right side */}
      /*<div
        className="
          relative flex-1 p-10 md:p-14
          before:content-['']
          before:absolute
          before:w-[200%]
          before:h-[200%]
          before:bg-white
          before:rounded-full
          before:-translate-x-[18%]
          before:-translate-y-[10%]
          before:top-0
          before:left-0
        "
      >
        <div className="relative z-10">
          <form onSubmit={handleRegistrationForm} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Business Name
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Business Email
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Country
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                City
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter City or Town"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Choose Category
              </label>
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
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
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Business Creation Date
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Business Classification
              </label>
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
              >
                <option value="Large">Big</option>
                <option value="Meduim">Medium</option>
                <option value="Small">Small</option>
                <option value="Micro">Micro</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Description
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter Description"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Password
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-rose-500 py-3 font-semibold text-white transition hover:bg-gray-900"
            >
              Register Business
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);*/
