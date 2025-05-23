import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login =()=>{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

 const navigate = useNavigate(); // ✅ put this inside component

    const inputHandler=(value)=>{
        console.log(value);
        setEmail(value);
    }

   const  passwordHandler=(value)=>{
        console.log(value);
        setPassword(value);
    }

   const submitHandler = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all the fields");
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message); // Show error message from backend
    } else {
      alert("Login Successful");
      console.log("Token:", data.token);
      navigate('/profile'); // ✅ redirect to profile
      // you can save token or redirect user here
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong");
  }
};

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
        
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg w-full max-w-sm">
        <h2 className='text-center justify-center  text-black text-2xl '>Login</h2>
        <form 
         onSubmit={submitHandler}
        action="">
          <input
              value={email}
            onChange={(e)=>inputHandler(e.target.value)}
           

            type="text"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
          value={password}
          onChange={(e)=>passwordHandler(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
           type='submit'
          
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
