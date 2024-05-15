import React from 'react'
import { Link } from 'react-router-dom'

const Manage = () => {
  
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
        Kelola Profil Admin
      </h1>
      <div className="m-10">
        <Link to={`/admin/kelola-profil/input-profil-admin`}>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Input Data
          </button>
        </Link>
      </div>
      <div className="m-10">
        <Link to={`/admin/kelola-profil/edit-profil-admin`}>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           Edit Data
          </button>
        </Link>
      </div>
      <div className="m-10">
        <button
          onClick={handleGoBack}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
  )
}

export default Manage