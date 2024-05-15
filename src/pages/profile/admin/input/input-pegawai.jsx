import React, { useState } from "react";

const InputPegawai = () => {
  const [show, setShow] = useState(false);
  const [qrCodeCreated, setQrCodeCreated] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
    setQrCodeCreated(true);
  };

  const handleBackButtonClick = () => {
    setShow(false);
    setQrCodeCreated(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md relative">
        {show && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-md"></div>
        )}
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Input Data Pegawai
        </h1>
        <form action="#">
          <div className="mb-4">
            <input
              id="id"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
          <div className="flex justify-between ">
            <button
              type="button"
              onClick={handleButtonClick}
              className="w-full mx-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buat QR Code
            </button>
            <button
              onClick={handleGoBack}
              className="w-full mx-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kembali
            </button>
          </div>
        </form>
        {qrCodeCreated && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md z-10">
            <p className="text-center text-xl font-semibold dark:text-gray-200 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
              QR code telah dibuat
            </p>
            <button
              type="button"
              className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleBackButtonClick}
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPegawai;
