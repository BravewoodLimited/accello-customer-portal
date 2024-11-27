import React from 'react'
import cbnlogo from "../assets/Landing/cbnlogo.png";


const Regulated = () => {
  return (
    <div> <div className="mx-auto text-center mt-16  font-dmsans">
    <p className="text-[12px] text-white flex lg:flex-row flex-col justify-center items-center ">
      © {new Date().getFullYear()} Accello Limited is licensed and regulated by the <img src={cbnlogo} alt="" />{" "}
      <span className="font-semibold  mr-1"> Central Bank of Nigeria (CBN) </span>
      - Powered by
      <a href="https://bravewood.ng/" className="text-[#077DBB] ml-1">Bravewood Finance Limited</a>
    </p>
  </div></div>
  )
}

export default Regulated