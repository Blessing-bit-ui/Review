import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./ContextProvider/AuthProvider";
import { useUsers } from "./ContextProvider/UsersProvider";
import { useBusiness } from "./ContextProvider/BusinessProvider";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { users } = useUsers();
  const { businesses } = useBusiness();

  const navigate = useNavigate();
  const { Login, auth } = useAuth();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/review";

  function handleLoginForm(e) {
    e.preventDefault();
    Login(loginEmail, loginPassword);
    // navigate("/review");
    navigate(from, { replace: true });
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
              Welcome back User.Login
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
            <form onSubmit={handleLoginForm} className="space-y-4">
              <div>
                <label className="block mb-1 font-bold">
                  User Email/Business Email
                </label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder="Enter Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">Password</label>
                <input
                  className="w-full rounded-md border border-lime-600 px-4 p-2 outline-none hover:border-2 hover:border-black"
                  placeholder="Enter Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-lime-600 flex items-center
                   justify-center p-3 border rounded-lg 
                   font-bold hover:bg-black hover:text-lime-600"
                type="submit"
              >
                Login
              </button>
              <div className="text-[10px] md:text-[15px]">
                Dont have an account ?
                <NavLink
                  to="/user_signup_form"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  Signup as User
                </NavLink>
                <span> or </span>
                <NavLink
                  to="/business_registration_form"
                  className="
                  text-blue-600
                  hover:underline"
                >
                  Register Business
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
