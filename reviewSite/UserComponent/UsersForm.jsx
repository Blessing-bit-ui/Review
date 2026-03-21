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
