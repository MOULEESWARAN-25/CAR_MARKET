import React from 'react'
import Header from './Header/Header'
import LoginPage from './Header/LoginPage';
import SignUp from './Header/SignUp';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function MechanicRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
        path:"/profile",
        element:<Profile/>
    }
    
  ]);
  return (
    <div>
            <RouterProvider router = {router}/>

      {/* <Header/> */}
      {/* <LoginPage/> */}
      {/* <SignUp/> */}
    </div>
  )
}