import { useState } from 'react'
import FindBusiness from '../businessesComponent/FindBusiness';
import BusinessRegistrationForm from '../BusinessesComponent/BusinessRegistrationForm';
import BusinessCategoriesList from '../BusinessesComponent/BusinessCategoriesList';
import BusinessCategory from '../BusinessesComponent/BusinessCategory';
import BusinessPage from '../BusinessesComponent/BusinessPage';
import UsersForm from '../UserComponent/UsersForm';
import Applayout from '../Applayout';
import Aboutus from '../InformationComponent.jsx/Aboutus';
import { BusinessProvider } from '../ContextProvider/BusinessProvider';
import { UsersProvider } from '../ContextProvider/UsersProvider';
import { ReviewProvider } from '../ContextProvider/ReviewProvider';
import { AuthProvider } from '../ContextProvider/AuthProvider';
import { useAuth } from '../ContextProvider/AuthProvider';
import Login from '../Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './App.css'
import ProtectedApp from '../ProtectedApp';
import Africanmap from "./assets/Africanmap.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UsersProvider>
          <BusinessProvider>
            <ReviewProvider>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/category/:category"
                  element={
                    <ProtectedApp>
                      <BusinessCategory />
                    </ProtectedApp>
                  }
                />
                <Route
                  path="business_registration_form"
                  element={<BusinessRegistrationForm />}
                />
                <Route
                path="/name/:name"
                element={<BusinessPage/>}
                />
                <Route path="user_signup_form" element={<UsersForm />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="review"
                  element={
                    <ProtectedApp>
                      <Applayout />
                    </ProtectedApp>
                  }
                />
                <Route path="about_us" element={<Aboutus/>}/>
              </Routes>
            </AuthProvider>
            </ReviewProvider>
          </BusinessProvider>
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}
export default App

function Home(){
  return (
    <div className="bg-rgb(255,255,255)">
      <div className=" relative shadow-[0_2px_2px_rgba(0,0,0,0.4)] bg-[#020617] md:h-[150px]">
        <Header />
        <div className="absolute bottom-2 left-0 w-full">
          <Discover />
        </div>
      </div>
      <div className=" w-screen h-screen mt-1">
        
          <Vision />
    

        <FindBusiness />
        <BusinessCategoriesList />
      </div>
    </div>
  );
}




function Header(){
const { Login, auth } = useAuth();
  return (
    <div>
      <div className="p-2 flex justify-between items-center">
        <div>
          <h1 className="text-[30px] text-[#ffff] font-[PT_Sans] font-bold">
            African Business Directory
          </h1>
        </div>
        <div className="flex justify-around w-6/12">
          <NavLink
            to="/about_us"
            className="text-[#22c55e] hover:underline decoration-[#ffffff] "
          >
            {" "}
            About Us
          </NavLink>
          <p className="text-[#22c55e] hover:underline decoration-[#ffffff] ">
            Write a review
          </p>
          <RegisterBusiness />
          <UserSignUp />
          <div>
            {auth ? (
              <p className="text-[#ffffff]">Welcome User</p>
            ) : (
              <NavLink
                to="/login"
                className="text-[#22c55e] hover:underline decoration-[#ffffff] "
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function Discover(){
  return (
    <div>
      <p className="text-green-700 font-bold text-center">
        Discover Africa's MarketPlace
      </p>
    </div>
  );
}

function Vision(){
  return (
    <div className="flex w-11/12 justify-between items-center">
      <div>
        <h1 className="text-[50px]  text-[#22c55e]  w-1\12 font-[Rubik] tracking-[-2pt] leading-tight font-style: italic">
          Shining a Spotlight <br /> on African Businesses <br /> to Increase
          Visibility,
          <br />
          Build Credibility <br /> and Foster Trust.
        </h1>
      </div>
      <div>
        <img src={Africanmap} className="w-[400px] h-[400px]" />
      </div>
    </div>
  );
}

function RegisterBusiness(){
  return (
    <div>
      <NavLink
        to="/business_registration_form"
        className="text-[#22c55e] hover:underline decoration-[#ffffff]"
      >
        Register Business
      </NavLink>
    </div>
  );
}

function UserSignUp(){
  return (
    <div>
      <NavLink
        to="/user_signup_form"
        className="text-[#22c55e] hover:underline decoration-[#ffffff] "
      >
        Signup
      </NavLink>
    </div>
  );
}

function Review(){
  return (
    <div>
      <NavLink
        to="/review"
        className="text-[#22c55e] hover:underline decoration-[#ffffff]"
      >
        Review
      </NavLink>
    </div>
  );
}







