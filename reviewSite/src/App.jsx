import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="bg-green-500 w-screen h-screen ">
      <div>
       <Header/>
      </div>
    </div>
  );
}
export default App


function Header(){
  return (
    <div>
      <div className="shadow-[0_5px_0_rgba(0,0,0,0.4)] bg-white p-2 flex justify-between">
        <div>
          <h1 className="text-[30px] text-green-700 font-bold">
            African Business Directory
          </h1>
          <p class="text-green-700 font-bold">
            Shining a spotLight on African Businesses
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




