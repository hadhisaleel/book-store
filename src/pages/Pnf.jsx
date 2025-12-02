import React from 'react'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Pnf() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 to-green-100"
    >

      <div className="mb-6">
        <img
          src="https://cdn.svgator.com/images/2024/04/walking-investigator-animation-in-404-error-page.gif"
          alt="Not Found"
          className="w-[260px] rounded-xl illustration"
        />
      </div>

      <h1 className="font-bold text-8xl text-red-600">404</h1>
      <h2 className="font-bold text-2xl mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-5 text-lg px-3 max-w-[500px]">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white text-lg px-5 py-2 rounded shadow flex items-center gap-2"
      >
        <FaHome /> Go Back Home
      </Link>

      <style>
        {`
          .illustration {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  )
}

export default Pnf
