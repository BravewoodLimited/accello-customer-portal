import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Landing from 'pages/homePage/Landing';

const AppLanding = () => {
  return (
    <div>
        <Landing/>
        <outlet/>
    </div>
  )
}

export default AppLanding