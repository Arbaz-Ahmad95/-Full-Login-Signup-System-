import React from 'react'
import { useState } from 'react';
const Login =()=>{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const inputHandler=(value)=>{
        console.log(value);
        setEmail(value);
    }

   const  passwordHandler=(value)=>{
        console.log(value);
        setPassword(value);
    }

   const submitHandler=(e)=>{
      e.preventDefault();

        console.log("email", email);
        console.log("password", password);
        if(email && password){
            alert("Login Successful");
        }
        else{
            alert("Please fill all the fields");
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg w-full max-w-sm">
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
