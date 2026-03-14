import { useState } from 'react'
import FindBusiness from '../businessesComponent/FindBusiness';
import BusinessRegistrationForm from '../businessesComponent/BusinessRegistrationForm';
import UsersForm from '../UserComponent/UsersForm';
import { BusinessProvider } from '../ContextProvider/BusinessProvider';
import { UsersProvider } from '../ContextProvider/UsersProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <UsersProvider>
        <BusinessProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="business_registration_form"
              element={<BusinessRegistrationForm />}
            />
            <Route path="user_signup_form" element={<UsersForm />} />
          </Routes>
        </BusinessProvider>
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}
export default App

function Home(){
  return(
    <div className="bg-lime-600 w-screen h-screen"  >
      <Header/>
      <Vision/>
      <RegisterBusiness/>
      <FindBusiness/>
      <UserSignUp/>
    </div>
  )
}

function Header(){
  return (
    <div>
      <div className="shadow-[0_5px_0_rgba(0,0,0,0.4)] bg-white p-2 flex justify-between items-center ">
        <div>
          <h1 className="text-[30px] text-lime-700 font-bold">
            African Business Directory
          </h1>
          <p class="text-green-700 font-bold">
            Discover Africa's MarketPlace
          </p>
        </div>
        <div className="flex justify-around w-6/12">
          <p>Write a review</p>
          <p> Industries</p>
          <p>About us</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}

function Vision(){
  return(
<div className="text-[40px] text-center text-white font-bold  mr-auto ml-auto">
 <h1> Shining a Spotlight on African Businesses to Increase Visibility,<br/>Build Credibility and Foster Trust.</h1>
</div>
  )
}

function RegisterBusiness(){
  return (
    <div>
      <NavLink to="/business_registration_form ">
        Register Business
      </NavLink>
    </div>
  );
}

function UserSignUp(){
  return(
    <div>
      <NavLink to="/user_signup_form">
        Signup
      </NavLink>
    </div>
  )
}






