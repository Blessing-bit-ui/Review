import { useState } from 'react'
import FindBusiness from '../businessesComponent/FindBusiness';
import BusinessRegistrationForm from '../BusinessesComponent/BusinessRegistrationForm';
import BusinessCategoriesList from '../BusinessesComponent/BusinessCategoriesList';
import BusinessCategory from '../BusinessesComponent/BusinessCategory';
import UsersForm from '../UserComponent/UsersForm';
import Applayout from '../Applayout';
import { BusinessProvider } from '../ContextProvider/BusinessProvider';
import { UsersProvider } from '../ContextProvider/UsersProvider';
import { AuthProvider } from '../ContextProvider/AuthProvider';
import { useAuth } from '../ContextProvider/AuthProvider';
import Login from '../Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './App.css'
import ProtectedApp from '../ProtectedApp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UsersProvider>
          <BusinessProvider>
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
              </Routes>
            </AuthProvider>
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
      <FindBusiness/>
      <BusinessCategoriesList/>
    </div>
  )
}

function Header(){
const { Login, auth } = useAuth();
  return (
    <div>
      <div className="shadow-[0_5px_0_rgba(0,0,0,0.4)] bg-white p-2 flex justify-between items-center ">
        <div>
          <h1 className="text-[30px] text-lime-700 font-bold">
            African Business Directory
          </h1>
          <p class="text-green-700 font-bold">Discover Africa's MarketPlace</p>
        </div>
        <div className="flex justify-around w-6/12">
          <p>About us</p>
          <p>Write a review</p>
          <RegisterBusiness />
          <UserSignUp />
          <div>
            {Login ? <p>Welcome User</p> :
          <NavLink to="/login">
          Login
          </NavLink>
}
          </div>
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
      <NavLink to="/business_registration_form">
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









