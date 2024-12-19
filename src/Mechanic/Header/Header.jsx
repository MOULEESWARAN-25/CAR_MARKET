import React, { useState } from "react";
import Bellicon from "../Header/image/bellicon.svg";
import Avatar from "../Header/image/avatar.svg";
import { FaTools, FaBell, FaCheck, FaList, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({setActiveComponent}) {
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
    <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 h-16 flex items-center px-6 shadow-lg">
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
          className="w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer drop-shadow-md"
          alt="Bell Icon"
          onClick={() => setActiveComponent("notifications")}        />
        

        {/* Avatar Dropdown */}
        <div
          className="relative"
          onMouseEnter={showDropdown}
        >
          <img
            src={Avatar}
            className="w-9 h-9 hover:scale-110 transition-transform duration-200 cursor-pointer rounded-full border-2 border-white shadow-lg"
            alt="Avatar Icon"
            onClick={toggleDropdown}
          />

          {drop && (
            <div className="absolute top-full right-0 mt-2 min-w-max bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
              <button><div
                className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={() => {
                  setActiveComponent("pending");
                  hideDropdown();
                 }}

                
              >
                <FaTools className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">Pending Works</p>
              </div></button>
              {/* <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer">
                <FaCheck className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">Completed Works</p>
              </div> */}
              <button onClick={() => 
              {setActiveComponent("notifications");
              hideDropdown();
              }}
              >
              <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer">
                <FaBell className="text-orange-500 text-xl" />
                <p className="text-gray-900 font-medium">Notifications</p>
              </div>
              </button>
             
              <Link to = "/">
              <div
                className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded cursor-pointer"
                // onClick={onLog}
              >
                <FaSignOutAlt className="text-orange-500 text-xl" />
               
                <p className="text-red-600 font-medium">Logout</p>
                
              </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
