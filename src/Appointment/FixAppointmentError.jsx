import React from 'react'
import Profile from "../Mechanic/image/profileImage.png";
import Car from "../Carcard/images/car.svg";

export default function FixAppointment() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg min-w-[700px] max-h-fit p-6 m-6 flex">
        <div className="flex-1">
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
            <h3 className="text-lg font-semibold">Buyer123</h3>
          </div>
          <div>
            <p>Date: dd-mm-yyyy</p>
            <p>Time: 2:00 pm</p>
            <p>Confirmation status: Pending</p>
          </div>
          <div className="mt-4">
            <p>Select Location</p>
            <input
              type="text"
              placeholder="Enter Address"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="ml-4 flex flex-col">
          <Car />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4">
            Fix Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
