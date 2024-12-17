import React from "react";
import Carcard from "../Carcard/carcard";
import Tick from "../UserProfile/images/tick.svg";
import Profile from "../Profilecard/ProfileCard";
export default function Appointment() {
  return (
    <div className="w-[1100px] h-[640px] sticky left-96 mt-12 border-2 border-gray-300 p-10 shadow-md flex flex-col rounded-lg gap-10">
      <div className="flex">
        <div className="flex justify-center items-center bg-[#F89620] h-10 w-56 rounded-xl text-white font-medium">
          <p>Appointments</p>
        </div>
        <div className="flex justify-center items-center h-10 w-56 rounded-r-xl text-black font-medium border-2">
          <p>Mechanic Inspections</p>
        </div>
      </div>
      <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px] h-[220px]">
        <Profile />
      </div>
      <div className="border-2 border-gray-300 pl-6 pt-6 shadow-custom rounded-lg w-[700px]">
        <Profile />
      </div>
    </div>
  );
}
