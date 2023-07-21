import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="flex-no-wrap mt-24">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md ml-28">
      <form onSubmit={handleSubmit} className="bg-stone-300 shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <h2 className=" font-bold text-gray-700 mx-24">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="ml-5 font-bold text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="password" className="ml-5 font-bold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-bewteen">
          <button type="submit" className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focuse:outline-none focus:shadow-outline ">Login</button>
        </div>
      </form>
    </div>

  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-xs  ">
    <form onSubmit={handleSubmit} className="bg-stone-300 shadow-xl rounded px-8 pt-6 pb-8 mb-96">
      <h2 className="ml-20 font-bold text-gray-700">Register</h2>
      <div className="mb-4">
        <label htmlFor="username" className="ml-5 font-bold text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="ml-5 font-bold text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-bewteen">
        <button type="submit" className="bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focuse:outline-none focus:shadow-outline ">Register Now</button>
      </div>
    </form>
  </div>
  );
};