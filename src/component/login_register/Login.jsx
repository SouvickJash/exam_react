import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[message,setMessage]=useState("")
  const navigate=useNavigate()

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if ("email" == name) {
      setEmail(value);
      setMessage('')
    }
    if ("password" == name) {
      setPassword(value);
      setMessage('')
    }
  
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    const getDetails=JSON.parse(localStorage.getItem("user",))
    console.log(getDetails)
    
    getDetails.map((curValue)=>{
      // console.log(curValue.email);
      let storeEmail=curValue.email;
      let storePassword=curValue.password 

      if(storeEmail== email && storePassword==password){
        alert("login successfully")
        navigate('/dashboard')
         setEmail("");       //clear email
         setPassword("");     //clear password
      }else{
         return setMessage("Invalid email and password")
      }
    })
    
  }

  return (
    <div>
      <p>{message}</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>&nbsp;
            <input type="email" name="email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>&nbsp;
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <p>
        don't have an account <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;



// souvick jash 
// my college name is brainwre universit 