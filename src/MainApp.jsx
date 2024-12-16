import React, { useState } from "react";
import LoginPage from "./LoginSignUp/LoginPage";
import SignUp from "./LoginSignUp/SignUp";
import SellCarOne from "./SellCarOnline/SellCarOne";
import SellCarTwo from "./SellCarOnline/SellCarTwo";
import SellCarThree from "./SellCarOnline/SellCarThree";
import Header from "./Header/header";
import "./index.css";
import Notification from "./UserProfile/Notifications"
import UserProfile from "./UserProfile/UserProfile";
import MyFavourites from "./UserProfile/MyFavourites";
import Appointments from "./UserProfile/Appointments";

export default function MainApp() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const [Log, SetLog] = useState(false);
  function Loging() {
    SetLog(true);
    SetUser(false);
    setFavorites(false);
    SetAppoint(false);
  }

  const [Notifications, SetNotifications] = useState(false)
  function Notify(){
    SetNotifications(true);
    setFavorites(false);
    SetLog(false);
  }
  const [User, SetUser] = useState(false);
  function Userpage() {
    SetUser(true);
    SetLog(false);
    setFavorites(true);
  }

  const [Favorites, setFavorites] = useState(false);
  function Favourite() {
    setFavorites(true);
    SetLog(false);
    SetNotifications(false);
  }

  const[Appoint, SetAppoint] = useState(false);
  function Appointment(){
    SetAppoint(true);
    SetNotifications(false);
    SetLog(false);
  }

  return (
    <div>
      <Header onUser={Userpage} onLog={Loging} />
      <div className="flex ">
        {User ? <UserProfile onFavourites = {Favourite} onNotify = {Notify} onAppoint = {Appointment}/> : null}
        {Favorites ? <MyFavourites /> : null}
        {Notifications ? <Notification/> : null}
        {Appoint ? <Appointments/> : null}
      </div>
      {Log ? <LoginPage /> : null}
      {/* Uncomment the components you want to render */}
      {/* <LoginPage/> */}
      {/* <SignUp/> */}
      {/* <SellCarOne /> */}
      {/* <SellCarTwo/> */}
      {/* <SellCarThree/> */}
    </div>
  );
}
