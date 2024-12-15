import React from "react";
import AvatarUser from "../UserProfile/images/Avatar.svg";
import { FaUser, FaPhone, FaEnvelope, FaHeart, FaBell, FaCalendarAlt, FaList, FaSignOutAlt } from "react-icons/fa";

export default function UserProfile() {
  return (
    <div className="mt-8 sticky left-10 w-72 h-[710px] rounded-lg border-2 border-gray-300 p-4 shadow-md flex flex-col items-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-center">
          <img src={AvatarUser} className="h-28" alt="User Avatar" />
        </div>
        <div className="flex flex-col gap-7 ml-5">
          <div className="flex items-center gap-3 text-lg">
            <FaUser className="text-orange-500 text-xl" />
            <p className="text-lg">User Name</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-orange-500 text-xl" />
            <p className="text-lg">987654321</p>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-orange-500 text-xl" />
            <p className="text-lg">user@gmail.com</p>
          </div>
        </div>
        <hr className="border-gray-300 my-3 w-full" />
        <div className="flex flex-col gap-3">
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-center mt-3">
            <FaHeart className="text-orange-500 text-xl mr-2" />
            <p className="text-lg">My Favourites</p>
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-center mt-3">
            <FaBell className="text-orange-500 text-xl mr-2" />
            <p className="text-lg">Notifications</p>
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-center mt-3">
            <FaCalendarAlt className="text-orange-500 text-xl mr-2" />
            <p className="text-lg">Appointments</p>
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-center mt-3">
            <FaList className="text-orange-500 text-xl mr-2" />
            <p className="text-lg">My Listings</p>
          </div>
          <div className="bg-gray-200 w-full h-12 rounded-lg flex items-center justify-center mt-3">
            <FaSignOutAlt className="text-orange-500 text-xl mr-2" />
            <p className="text-lg">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
