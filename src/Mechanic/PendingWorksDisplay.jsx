import React,{useState} from "react";
import Header from "../Header/header";
import UserProfile from "../UserProfile/UserProfile";
import Profile from "../Mechanic/image/profileImage.png";
import Location from "./image/location.svg";
import Car from "../Carcard/images/car.svg";
import InspectionDetailsPopup from "./InspectionDetailsPopup";
export default function PendingWorksDisplay() {
  const [isModalOpen,setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  } 
  const closeModal = () =>{
    setModalOpen(false);
  }
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <UserProfile />
        <div className="w-[1100px] h-[660px] sticky left-96 border-2 mt-8 border-gray-300 px-6 py-2 shadow-md flex flex-col rounded-lg gap-8">
          <h1 className="text-3xl font-medium">Pending Works</h1>
          <div className="w-[1020px] min-h-[250px] bg-white shadow-lg rounded-lg  flex">
            <div className="flex-grow p-6">
              <div className="flex flex-col">
                <div className="flex gap-x-96 items-center">
                  <div className="flex gap-5 items-center">
                    <img src={Profile} alt="Profile" className="w-16 h-16" />
                    <p>UserName</p>
                  </div>

                </div>
                <div className="flex gap-28 items-center">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-10">
                      <p>Date: dd-mm-yy</p>
                      <p>Time: 2:00 pm</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={Location} width={20} />
                      <p>City, Location</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 ml-2 mb-6 mt-4">
                <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg w-[80px]">
                  View
                </button>
                <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg w-[180px]" onClick={openModal}>
                  Inspection Details
                </button>
              </div>
            </div>
            <img src={Car} className="mr-4"></img>
          </div>
          <div className="w-[1020px] min-h-[250px] bg-white shadow-lg rounded-lg flex">
            <div className="flex-grow p-6">
              <div className="flex flex-col">
                <div className="flex gap-x-96 items-center">
                  <div className="flex gap-5 items-center">
                    <img src={Profile} alt="Profile" className="w-16 h-16" />
                    <p>UserName</p>
                  </div>

                </div>
                <div className="flex gap-28 items-center">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-10">
                      <p>Date: dd-mm-yy</p>
                      <p>Time: 2:00 pm</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={Location} width={20} />
                      <p>City, Location</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 ml-2 mb-6 mt-4">
                <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg w-[80px]">
                  View
                </button>
                <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 rounded-lg w-[180px]" onClick={openModal}>
                  Inspection Details
                </button>
              </div>
            </div>
            <img src={Car} className="mr-4"></img>
          </div>
        </div>
        {isModalOpen && <InspectionDetailsPopup closeModal={closeModal} />}

      </div>
      
    </div>
  );
}