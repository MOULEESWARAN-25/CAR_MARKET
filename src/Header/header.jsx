import React, { useState } from "react";
// import Bellicon from 'D:/SSG-FINAL/CAR_MARKET/car_market_place/src/Header/image/bellicon.svg';

import Bellicon from 'C:/Users/sugan/OneDrive/Documents/Desktop/Other stuff/CAR_MARKET/src/Header/image/bellicon.svg'
import Avatar from "../Header/image/avatar.svg";

export default function Header() {
  const [drop, setDrop] = useState(false);
  function toggleDropdown() {
    setDrop(!drop);
  }

  return (
    <div className="bg-orange-400 h-16 flex items-center px-4">
      <div className="flex items-center gap-10 text-white">
        <p>Home</p>
        <p>Search Cars</p>
        <p>Sell Cars</p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-10 relative">
        <img src={Bellicon} className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200" alt="Bell Icon" />
        <img src={Avatar} className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200 cursor-pointer rounded-full" onClick={toggleDropdown} alt="Avatar Icon" />
        {drop && (
          <div className="absolute top-16 right-0 w-36 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 border border-gray-300"> 
            <p className="mb-2 text-gray-700 font-semibold">My Favourites</p>
            <p className="mb-2 text-gray-700 font-semibold">Notifications</p>
            <p className="mb-2 text-gray-700 font-semibold">Appointments</p>
            <p className="mb-2 text-gray-700 font-semibold">My Listings</p>
            <p className="text-red-500 font-semibold cursor-pointer">Logout</p>
          </div>
        )}
      </div>
    </div>
  );
}