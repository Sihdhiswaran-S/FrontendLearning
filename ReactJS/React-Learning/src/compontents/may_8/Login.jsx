import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import "./logingemini.css"
import "./login.css"
function Login() {
  const [username,setUsername]=useState("");
  const [userpassword,setuserpassword]=useState("");
  const [useremail,setuseremail]=useState("");
  const navigate = useNavigate();
  const handleUser=(e)=>{
    setUsername(e.target.value );
  }
  
  const handlepassword=(e)=>{
    setuserpassword(e.target.value );
  }
  const hemail=(e)=>{
    setuseremail(e.target.value);
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("submitting the value")
    navigate("/home")
  }
  return (
    <div className="main">
      <form onSubmit={handlesubmit}>
        <h4 className="input-label">user name</h4>
        <input
          type="text"
          className="input-text"
          id="un"
          value={username}
          onChange={handleUser}
        />
        <input
          type="password"
          className="input-text"
          id="pw"
          value={userpassword}
          onChange={handlepassword}
        />
        <input type="email" className="input-text" id="em" value={useremail} onChange={hemail} />
        <input type="submit" className='login-btn' value="Submit" />
      </form>
    </div>
  );
}

export default Login;
