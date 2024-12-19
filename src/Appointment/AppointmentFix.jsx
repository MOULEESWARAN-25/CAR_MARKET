import React from 'react'
import Profile from "../Mechanic/image/profileImage.png";
import Car from "./car.png";
import Search from "./search.svg";
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
            <div className='flex gap-10 mb-5'>
            <p>Date: dd-mm-yyyy</p>
            <p>Time: 2:00 pm</p>
            </div>
          </div>
          <div className="mt-4">
            <p className = "mb-2">Select Location</p>
            <div className="relative">
            <select
        style={{
          appearance: "none", // Standard
          WebkitAppearance: "none", // Safari and Chrome
          MozAppearance: "none", // Firefox
          width: "70%",
          padding: "6px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          background: "white",
          marginBottom: "10px",
          color:"grey",
          
        }}
      >
        <option>Region</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="absolute right-24 top-1/2 transform -translate-y-1/2 pointer-events-none pr-4 pt-3 pb-5">
        <img src={Search} alt="Custom Dropdown Icon" className="w-6 h-6 opacity-50" />
      </div>
    </div>
            <textarea
              type="text"
              placeholder="Enter Address"
              className="border border-gray-300 rounded-md px-4 py-2 w-[300px] h-[110px] mt-2"
            />
          </div>
        </div>
        <div className="ml-4 flex flex-col">
        <img src={Car} alt="Car" width={290} className='mb-12 pt-10'/>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md mt-1">
            Fix Appointment
          </button>
        </div>
      </div>
    </div>
  )
}