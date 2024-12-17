import React from "react";
import UserAvatar from "../Profilecard/images/UserAvatar.svg";
import car from "../Profilecard/images/car.svg";
import Loc from "../Profilecard/images/location.svg";
export default function Profile() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-96 items-center">
        <div className="flex gap-5 items-center">
          <img src={UserAvatar} alt="User Avatar" className="w-16 h-16" />
          <p>UserName</p>
        </div>
        <button className="border-2 h-9 w-20 border-[#FF9E0C] rounded-xl bg-[#FF9E0C] text-white font-medium">
          View
        </button>
      </div>
      <div className="flex gap-28 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-10">
            <p>Date: dd-mm-yy</p>
            <p>Time: 2:00 pm</p>
          </div>
          <div className="flex gap-2">
            <img src={Loc} width={20} />
            <p>City, Location</p>
          </div>
        </div>
        <div>
          <img src={car} width={190} height={20} />
        </div>
      </div>
    </div>
  );
}
