import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate= useNavigate()
  const [data, setData] = useState({
    username: "",
    email: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    // const {name,value}=e.target
    console.log(e.target.value);
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {username,email,city,password}=data
    if(!username || !email || !city || !password){
        alert("Please fill the details")
    }else{

        const getData=JSON.parse(localStorage.getItem('user') || "[]")
        let arr=[];
        arr=[...getData]
        arr.push(data)
    
        localStorage.setItem("user", JSON.stringify(arr))
        alert("Regsiter succesfully")
        navigate('/')
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name: </label>&nbsp;
            <input type="text" name="username" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email: </label>&nbsp;
            <input type="email" name="email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>City: </label>&nbsp;
            <input type="text" name="city" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Password: </label>&nbsp;
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>
          <p>
            Already have an account <Link to="/">Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
