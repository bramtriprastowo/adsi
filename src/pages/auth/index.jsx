import React from "react";
import imageProfile from "../../assets/pngtree-male-gender-profile-circle-user.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={imageProfile}
            alt="Profile"
            className="w-40 h-40 rounded-full"
          />
        </div>
        <form action="#">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className="text-center mb-6 mt-6 text-gray-700 dark:text-gray-300">
            Note: Jika belum memiliki Akun, harap mendaftar di ke Admin (HRD)
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
