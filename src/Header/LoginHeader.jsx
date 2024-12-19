import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  const [isLoginPage,setLoginPage] = useState(false);
  return (
    <div className="bg-orange-400 h-16 flex items-center px-4">
      <div className="flex-grow"></div>

      <div className="flex items-center gap-10 relative">
      <Link to="/">
          <button className="border-2 border-white p-1 w-28 text-white text-lg rounded-lg mr-6">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
  