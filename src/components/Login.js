import React, { useContext, useState } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { loggedInUser,setusername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");  // Navigate to home page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
          value={loggedInUser}
          onChange={(e) => setusername(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
