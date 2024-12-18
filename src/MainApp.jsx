import React, { useState } from "react";
import LoginPage from "./LoginSignUp/LoginPage";
import SignUp from "./LoginSignUp/SignUp";
import SellCarOne from "./SellCarOnline/SellCarOne";
import SellCarTwo from "./SellCarOnline/SellCarTwo";
import SellCarThree from "./SellCarOnline/SellCarThree";
import Header from "./Header/header";
import "./index.css";
import Notification from "./UserProfile/Notifications";
import UserProfile from "./UserProfile/UserProfile";
import MyFavourites from "./UserProfile/MyFavourites";
import Appointments from "./UserProfile/Appointments";
import MyListings from "./UserProfile/MyListings";
import Report from "./Inspection/MechanicStatus";
import pendingSvg from "./Inspection/image/pending.svg";

export default function MainApp() {
  const [Log, SetLog] = useState(false);
  const [Notifications, SetNotifications] = useState(false);
  const [User, SetUser] = useState(true);
  const [Favorites, setFavorites] = useState(false);
  const [Appoint, SetAppoint] = useState(false);
  const [Listing, SetListing] = useState(false);
  const [Bell, SetBell] = useState(false);
  const [SearchCar, SetSearch] = useState(false);
  const [Select, SetSelect] = useState(false);
  const [CarPrice, SetCarPrice] = useState(false);

  function DisplayToggle() {
    SetStatusReport(false);
  }

  function carPrice() {
    SetCarPrice(true);
    SetSearch(false);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSelect(false);
  }
  function Searchcar() {
    SetCarPrice(false);
    SetSearch(true);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSelect(false);
  }
  function Loging() {
    SetCarPrice(false);
    SetLog(true);
    SetUser(false);
    setFavorites(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Notify() {
    SetCarPrice(false);
    SetNotifications(true);
    setFavorites(false);
    SetLog(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Userpage() {
    SetCarPrice(false);
    SetUser(true);
    SetLog(false);
    setFavorites(true);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Favourite() {
    SetCarPrice(false);
    setFavorites(true);
    SetLog(false);
    SetNotifications(false);
    SetAppoint(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Appointment() {
    SetCarPrice(false);
    SetAppoint(true);
    SetNotifications(false);
    setFavorites(false);
    SetLog(false);
    SetListing(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Listings() {
    SetCarPrice(false);
    SetListing(true);
    SetNotifications(false);
    setFavorites(false);
    SetLog(false);
    SetAppoint(false);
    SetSearch(false);
    SetSelect(false);
  }

  function Bellicon() {
    SetCarPrice(false);
    SetNotifications(true);
    SetListing(false);
    SetAppoint(false);
    SetLog(false);
    setFavorites(false);
    SetSearch(false);
    SetSelect(false);
    SetUser(true);
  }
  function SelectCar() {
    SetCarPrice(false);
    SetSelect(true);
    SetSearch(false);
    SetNotifications(false);
    SetListing(false);
    SetAppoint(false);
    SetLog(false);
    SetUser(false);
    setFavorites(false);
    SetSearch(false);
  }

  const [StatusReport, SetStatusReport] = useState(false);
  function ViewStatus() {
    SetStatusReport(true);
  }

  return (
    <div>
      <Header
        onUser={Userpage}
        onLog={Loging}
        onBell={Bellicon}
        onSearch={Searchcar}
      />
      {StatusReport ? <Report onDisplay = {DisplayToggle}/> : null}
      <div className="flex ">
        {User ? (
          <UserProfile
            onFavourites={Favourite}
            onNotify={Notify}
            onAppoint={Appointment}
            onList={Listings}
          />
        ) : null}
        {Favorites ? <MyFavourites /> : null}
        {Notifications ? <Notification /> : null}
        {Appoint ? <Appointments onView={ViewStatus} onDisplay = {DisplayToggle}/> : null}
        {Listing ? <MyListings /> : null}
      </div>
      {Log ? <LoginPage /> : null}
      {SearchCar ? <SellCarOne onSubmit={SelectCar} /> : null}
      {Select ? <SellCarTwo onsubmit={carPrice} /> : null}
      {CarPrice ? <SellCarThree /> : null}
      {/* Uncomment the components you want to render */}
      {/* <LoginPage/> */}
      {/* <SignUp/> */}
    </div>
  );
}
