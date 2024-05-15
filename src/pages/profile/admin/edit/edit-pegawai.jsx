import React from "react";

const editPegawai = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Edit Data Pegawai
        </h1>
        <form action="#">
          <div class="mb-4">
            <input
              type="id"
              id="id"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ID pegawai"
              required
            />
          </div>
          <div class="mb-4">
            <input
              id="username"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Username"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="password"
              id="password"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              required
            />
          </div>
          <div class="mb-4">
            <input
              id="name"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Nama Lengkap"
              required
            />
          </div>
          <div class="mb-4">
            <input
              id="address"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Alamat"
              required
            />
          </div>
          <div class="mb-4">
            <input
              id="position"
              class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Jabatan"
              required
            />
          </div>
          <div class="flex justify-between mb-5">
            <button
              class="w-full mx-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
          </div>
          <div class="flex justify-between ">
            <button
              class="w-full mx-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Simpan
            </button>
            <button
              onClick={handleGoBack}
              class="w-full mx-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editPegawai;
