import React from "react";
import Profile from "../Mechanic/image/profileImage.png";
import Car from "../Appointment/AppointmentCardCar";
import Location from "../Carcard/images/location.svg";

export default function AppointmentCompletedCard() {
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
        <div className="flex items-center mb-4 ">
          <img
            src={Profile}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h3 className="text-lg font-semibold">John Doe</h3>
        </div>
        <h2 className="text-xl font-bold mb-4">Appointment Completed!</h2>
        <p className="mb-4">
          Thank you! Please{" "}
          <span className="font-semibold">share your feedback</span> on your
          experience to help us improve!
        </p>
        <div className="flex gap-6 items-center">
          <Car />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-20">
              <p>
                <span className="font-semibold">Date: </span>25-11-2024
              </p>
              <p>
                <span className="font-semibold">Time: </span>2:00 pm
              </p>
            </div>
            <p className="flex gap-2 py-3">
              <img src={Location} width={22} />
              Erode,Sathyamangalam
            </p>
            <p>
              <span className="font-semibold">Contact No: </span>9534671238
            </p>
            <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg mt-5">
              Feedback
            </button>
            <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg mt-5">
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
