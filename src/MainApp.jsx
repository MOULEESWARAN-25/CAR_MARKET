import React from "react";
import Header from "./Header/header";
import './index.css';
import UserProfile from "./UserProfile/UserProfile";
export default function MainApp() {
  return (
    <div>
      <Header />
      <UserProfile />
    </div>
  );
}
