import React from "react";
import UserAvatar from "../Profilecard/images/UserAvatar.svg";
import Pending from "../Inspection/image/pending.svg";
import { FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import closeIcon from "../Inspection/image/close.svg";

export default function StatusMechanic({onDisplay}) {
  const Data = {
    Name: "Mechanic",
    Email: "Mechanic@gmail.com",
    Phone: 987654321,
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-[840px] bg-white shadow-lg h-[430px] rounded-xl">
        <img src={closeIcon} onClick={onDisplay} width={35} className="absolute top-3 right-3 cursor-pointer" alt="Close" />
        <div className="flex flex-col gap-5 p-12">
          <div className="flex items-center gap-5 justify-between">
            <div className="flex gap-4 items-center text-xl">
              <img
                src={UserAvatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <p className="font-semibold">{Data.Name}</p>
            </div>
            <div className="flex gap-4 text-xl items-center">
              <p className="font-semibold">Inspection Status</p>
              <img src={Pending} width={24} alt="Pending" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-medium ml-3 text-xl flex items-center gap-3">
              <FaInfoCircle className="w-6 h-6" /> Details
            </p>
            <p className="ml-12 text-lg flex items-center gap-3">
              <FaEnvelope className="w-5 h-5" />
              <span className="font-medium">Email:</span> {Data.Email}
            </p>
            <p className="ml-12 text-lg flex items-center gap-3">
              <FaPhone className="w-5 h-5" />
              <span className="font-medium">Phone No: </span>
              {Data.Phone}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium ml-3 text-xl flex items-center gap-3">
              <FaInfoCircle className="w-6 h-6" /> Details From Car Inspection
            </p>
            <p className="ml-12 text-lg leading-10">
              The mechanic has been sent for inspection, and we kindly ask for
              your patience for two days while the evaluation is completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
