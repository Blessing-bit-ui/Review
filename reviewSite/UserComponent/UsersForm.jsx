import { NavLink } from "react-router-dom"
import { useUsers } from "../ContextProvider/UsersProvider"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../ContextProvider/AuthProvider"

function UsersForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNationality, setuserNationality] = useState("");
  const [password, setPassword] = useState("");
  const [justRegistered, setJustRegistered] = useState(false);

  const navigate = useNavigate();
  const { registerUser, users } = useUsers();
  const { Login, auth, setAuth, forceLogin } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      userName,
      email: userEmail,
      userNationality,
      password,
    };
    registerUser(newUser);
    forceLogin()
    navigate("/review")
  }
  
  return (
    <div className="min-h-screen bg-stone-100  flex justify-center px-4 mt-6 mb-6">
      <div
        className="w-full max-w-5xl overflow-hidden
         bg-lime-600 md:flex rounded-xl shadow-lg"
      >
        <div className="relative flex-1 p-10 md:p-14">
          <div className="realtive z-10 flex h-full flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-6">
              WELCOME TO VIEW AFRICA. SIGN UP NOW!{" "}
            </h1>
          </div>
        </div>

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-bold"> Name</label>

                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder=" Enter Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">Email</label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder="Enter email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">
                  Select Nationality
                </label>
                <select
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  value={userNationality}
                  onChange={(e) => setuserNationality(e.target.value)}
                >
                  <option value="Cameroonian">Cameroonian</option>
                  <option value="Nigerian">Nigerian</option>
                  <option value="Ghanian">Ghana</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-bold">Password</label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-lime-600 flex items-center
                   justify-center p-3 border rounded-lg 
                   font-bold hover:bg-black hover:text-lime-600"
              >
                Sign Up
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

export default UsersForm
