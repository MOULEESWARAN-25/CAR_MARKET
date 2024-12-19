import React, { useState } from "react";
import Bellicon from "../Header/image/bellicon.svg";
import Avatar from "../Header/image/avatar.svg";
import { FaTools, FaBell, FaCheck, FaList, FaSignOutAlt } from "react-icons/fa";

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
        <p className="cursor-pointer ">LOGO</p>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Notification and Avatar */}
      <div className="flex items-center gap-10 relative">
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
            <div className="absolute top-full right-0 mt-2 min-w-max bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
              <div
                className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer"
                onClick={onUser}
              >
                <FaTools className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">Pending Works</p>
              </div>
              <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer">
                <FaCheck className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">Completed Works</p>
              </div>
              <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer">
                <FaBell className="text-orange-500 text-xl" />
                <p className="text-gray-700 font-semibold">Notifications</p>
              </div>

              <div
                className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer"
                onClick={onLog}
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
