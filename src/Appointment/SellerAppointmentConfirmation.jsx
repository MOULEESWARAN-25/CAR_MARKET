import React from "react";
import Profile from "../Mechanic/image/profileImage.png";
import Car from "../Carcard/images/car.svg";
import Location from "../Carcard/images/location.svg";

export default function SellerAppointmentConfirmation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg min-w-[700px] max-h-fit p-6 m-6">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center mb-4">
          <img
            src={Profile}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h3 className="text-lg font-semibold">Seller123</h3>
        </div>
        <div className="flex items-center justify-between">
          {/* Left content */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-20">
              <p>
                <span className="font-semibold">Date: </span>25-11-2024
              </p>
              <p>
                <span className="font-semibold">Time: </span>2:00 pm
              </p>
            </div>
            <p className="flex gap-2 py-3 mt-3">
              <img src={Location} width={22} alt="Location icon" />
              Location is yet to be decided by seller123
            </p>
            <div className="flex gap-5">
            <button className="bg-red-700 text-white font-semibold py-2 px-5 rounded-lg mt-5 w-[180px] text-sm">
              Cancel Appointment
            </button>
            <button className="bg-yellow-300 text-white font-semibold py-2 px-5 rounded-lg mt-5 w-[180px]">
              Reschedule
            </button>
            </div>
          </div>
          {/* Car image */}
          <img src={Car} alt="Car" className="w-65 h-100 mb-5" />
        </div>
      </div>
    </div>
  );
}
