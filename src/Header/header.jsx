import React, { useState } from "react";
import Bellicon from "D:/SSG-FINAL/CAR_MARKET/car_market_place/src/Header/image/bellicon.svg";
import Avatar from "../Header/image/avatar.svg";
import {
  FaHeart,
  FaBell,
  FaCalendarAlt,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Header({ onLog, onUser, onBell, onSearch }) {
  const [drop, setDrop] = useState(false);

  function toggleDropdown() {
    setDrop(!drop);
  }

  function showDropdown() {
    setDrop(true);
  }

  function hideDropdown() {
    setDrop(false);
  }

  return (
    <div className="bg-orange-400 h-16 flex items-center px-4">
      {/* Navigation Links */}
      <div className="flex items-center gap-10 text-white">
        <p className="font-medium text-3xl">Logo</p>
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline" onClick={onSearch}>
          Search Cars
        </p>
        <select className="cursor-pointer text-black bg-white border border-orange-400 rounded-md px-2 py-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200">
          <option>Buyer</option>
          <option>Seller</option>
        </select>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Notification and Avatar */}
      <div className="flex items-center gap-10 relative mr-8">
        {/* Bell Icon */}
        <img
          src={Bellicon}
          className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200 cursor-pointer"
          alt="Bell Icon"
          onClick={onBell}
        />

        {/* Avatar Dropdown */}
        <div
          className="relative"
          onMouseEnter={showDropdown}
          // onMouseLeave={hideDropdown}
        >
          <img
            src={Avatar}
            className="w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200 cursor-pointer rounded-full"
            alt="Avatar Icon"
            onClick={toggleDropdown}
          />
          {drop && (
            <div className="absolute top-full right-0 mt-6 w-48 bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
              <div
                className="flex items-center gap-4 hover:bg-white p-2 rounded cursor-pointer"
                onClick={() => {
                  onUser();
                  hideDropdown();
                }}
              >
                <FaHeart className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">My Favourites</p>
              </div>
              <div className="flex items-center gap-4 hover:bg-white p-2 rounded cursor-pointer" onClick={hideDropdown}>
                <FaBell className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">Notifications</p>
              </div>
              <div className="flex items-center gap-4 hover:bg-white p-2 rounded cursor-pointer" onClick={hideDropdown}>
                <FaCalendarAlt className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">Appointments</p>
              </div>

              <div
                className="flex items-center gap-4 hover:bg-white p-2 rounded cursor-pointer"
                onClick={() => {
                  onLog();
                  hideDropdown();
                }}
              >
                <FaSignOutAlt className="text-orange-500 text-xl" />
                <p className="text-red-500 font-semibold">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
