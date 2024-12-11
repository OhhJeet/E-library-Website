import React, { useState } from "react";
import axios from "axios";
import '../Login/login.css'
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // To display feedback to the user
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && name) {
      try {
        const response = await axios.post("http://localhost:5001/api/signup", {
          name,
          email,
          password,
        }, {
          headers: {
            "Content-Type": "application/json",
          }});
        if (response.status === 201) {
          navigate('/')
          setMessage("Sign in successful!");
          // Clear form fields
          setName("");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={'login-boxcontainer'}>
      <div 
      style={{width:'100%'}} 
      className="login-container">
      <h2 style={{
        color:'white'
      }}>Sign In</h2>
      <form style={{
        color:'white',width:'100%'
      }} onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name" >User Name:</label><br></br>
          <input
          style={{
            width:'100%'
          }}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
          />
        </div>
        <div>
          <label htmlFor="email" >Email:</label><br></br>
          <input
          style={{
            width:'100%'
          }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
        </div>
        <div>
          <label htmlFor="password" >Password:</label><br></br>
          <input
          style={{
            width:'100%'
          }}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {message && <p >{message}</p>}
      </div>
    </div>
  );
};

export default SignInForm;
