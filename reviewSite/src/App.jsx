import { useState } from 'react'
import FindBusiness from '../businessesComponent/FindBusiness';
import { BusinessProvider } from '../ContextProvider/BusinessProvider';
import './App.css'

function App() {
  return (
    <div className="bg-lime-600 w-screen h-screen ">
      <div>
        <Header />
        <Vision />
        <BusinessProvider>
          <FindBusiness />
        </BusinessProvider>
        <RegisterBusiness />
      </div>
    </div>
  );
}
export default App


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
  return(
    <div>
      <button>Register Business</button>
    </div>
  )
}






