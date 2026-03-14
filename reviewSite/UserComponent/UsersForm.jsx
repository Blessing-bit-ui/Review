import { useUsers } from "../ContextProvider/UsersProvider"
import { useState } from "react"

function UsersForm() {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userNationality, setuserNationality] = useState("")
    const [password, setPassword] = useState("")  
const {registerUser} = useUsers()

function handleSubmit(e){
    e.preventDefault()
    const newUser={
        userName,
        userEmail,
        userNationality,
        password
    }
    registerUser(newUser)
}
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input
            placeholder=" Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Select Nationality</label>
          <select
            value={userNationality}
            onChange={(e) => setuserNationality(e.target.value)}
          >
            <option value="Cameroonian">Cameroonian</option>
            <option value="Nigerian">Nigerian</option>
            <option value="Ghanian">Ghana</option>
          </select>
          <label>Password</label>
          <input
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    );
}

export default UsersForm
