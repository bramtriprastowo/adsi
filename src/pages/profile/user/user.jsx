import React, { useState } from "react";
import image1 from "../../../assets/An-example-of-QR-code.png";

const User = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  const handleBackButtonClick = () => {
    setShowImage(false);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center w-full ${
        showImage
          ? "bg-gray-900 bg-opacity-50 backdrop-blur-md"
          : "dark:bg-gray-950"
      }`}
    >
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Selamat Datang, Bintang
        </h1>
        {!showImage && (
          <div className="flex justify-center mb-4">
            <button
              onClick={handleButtonClick}
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              QR Code
            </button>
          </div>
        )}
        {showImage && (
          <div className="flex flex-col justify-center items-center m-10">
            <img
              src={image1}
              alt="Example QR Code"
              className="max-w-full h-auto mb-4"
            />
            <p className="text-center mb-4 text-gray-700 dark:text-gray-300">
              Gunakan QR Code diatas untuk melakukan absensi dengan mesin
              absensi
            </p>
            <button
              onClick={handleBackButtonClick}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
