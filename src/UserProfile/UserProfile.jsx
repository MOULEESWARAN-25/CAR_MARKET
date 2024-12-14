import React from "react";
import AvatarUser from "../UserProfile/images/Avatar.svg";

export default function UserProfile() {
  return (
    <div className="mt-10 sticky left-10 w-60 h-60 rounded-lg border-2 border-gray-300 p-4 shadow-md flex items-center justify-center">
      <img src={AvatarUser} className="h-28" alt="User Avatar" />
    </div>
  );
}
