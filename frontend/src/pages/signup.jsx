import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = (value) => {
    setEmail(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Signup failed: " + data.message);
      } else {
        alert("Signup successful: " + data.message);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg w-full max-w-sm">
           <h2 className='text-center justify-center  text-black text-2xl '>Signup</h2>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => inputHandler(e.target.value)}
            type="text"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            value={password}
            onChange={(e) => passwordHandler(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
