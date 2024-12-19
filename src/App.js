import React from "react";
// import MainApp from "./MainApp";
import LoginPage from "./LoginSignUp/LoginPage";
import SignUp from "./LoginSignUp/SignUp";
import SellCarOne from "./SellCarOnline/SellCarOne";
import SellCarTwo from "./SellCarOnline/SellCarTwo";
import SellCarThree from "./SellCarOnline/SellCarThree";
import PendingWorks from "./Mechanic/PendingWorks";
import FillInspectionDataForm from "./Mechanic/FillInspectionDataForm";
import InspectionDetailsPopup from "./Mechanic/InspectionDetailsPopup";
import PendingWorksDisplay from "./Mechanic/MechProfile";
import LoginHeader from "./Header/LoginHeader";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppointmentCompletedCard from "./Appointment/AppointmentCompletedCard";
import AppointmentCardCar from "./Appointment/AppointmentCardCar";
import FeedbackCard from "./Appointment/FeedbackCard";
// import FixAppointmentError from "./Appointment/FixAppointmentError";
import AppointmentFix from "./Appointment/AppointmentFix";
import SellerAppointmentConfirmation from "./Appointment/SellerAppointmentConfirmation";
import UserProfile from "./UserProfile/UserProfile";
import MyFavourites from "./UserProfile/MyFavourites";
import MechHeader from "./Mechanic/Header/LoginPage";
import MechanicRouting from "./Mechanic/MechanicRouting";
import MecchanicInspection from "./Inspection/MechanicInspection"
import MechanicStatus from "./Inspection/MechanicStatus";
import MechProfile from "./Mechanic/MechProfile";
import Pending from "./Mechanic/Pending"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LoginPage/>
    },
    {
      path: "/signup",
      element:<SignUp/>
    },
    
  ]);
  return (
    <div>
      {/* <RouterProvider router = {router}/> */}
      {/* <MyFavourites/> */}
{/* <MechHeader/> */}
<MechanicRouting/>
{/* <MecchanicInspection/> */}
{/* <MechanicStatus/> */}
{/* <AppointmentCompletedCard/> */}
{/* <MechProfile/> */}
{/* <Pending/> */}
{/* <PendingWorks/> */}
    </div>
  );
}

export default App;
