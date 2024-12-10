import React from "react";
import Loan1 from "../../assets/Landing/Loans/personal.png";
import Loan2 from "../../assets/Landing/Loans/edu.png";
import Loan3 from "../../assets/Landing/Loans/bridge.png";
import { Link as DomLink } from 'react-router-dom';
import dots from "../../assets/Landing/Loans/dots.png";
import { SIGNIN } from "constants/urls";

const LoanTypes = [
  {
    img: Loan1,
    h3: "Public Sector Loan",
    p: "Pay bills, manage unexpected expenses, cover gaps and major life purchases.",
  },
  {
    img: dots,
    h3: "dots",
    p: "dots1",
  },
  {
    img: Loan3,
    h3: "SME Loan",
    p: "Access the funding you need to grow and sustain your small or medium-sized business.",
  },
  {
    img: dots,
    h3: "dots",
    p: "dots2",
  },
  {
    img: Loan2,
    h3: "Tetiary Institutions",
    p: "Secure loans to support your education and achieve your academic goals seamlessly.",
  },
];

function LoansForYou() {
  return (
    <div name="Loans" className="p-4 text-black bg-white">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mt-10">
        <h1 className="font-NexaBold text-[36px]">Our Loan Products</h1>
        <p className="text-[16px] text-[#4D4D4D]">
          At Accello, we make it easier, and we take you many steps closer to
          reaching your goals with our simple lending solutions designed to meet
          your needs.
        </p>
      </div>

      <div className=" flex md:flex-wrap lg:flex-nowrap md:flex-row flex-col mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 justify-between mt-8 gap-8  lg:gap-2 mb-10">
        {LoanTypes.map((item) => (
          <div
            className={`relative ${
              item.h3 === "dots"
                ? "w-64 -m-6 object-contain lg:flex flex-col items-center hidden "
                : "w-full mx-auto bg-white p-6 rounded-[15px] border z-10 max-w-[320px]"
            } `}
          >
            <div
              className={`p-2 ${item.p === "dots1" && " mt-14"} ${
                item.p === "dots2" && " mt-48"
              }`}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt="Accello Hero"
                  className={`m-auto object-cover ${
                    (item.p === "dots1" || "dots2") && "abs"
                  }`}
                />
                {/* <div
                  className={` ${
                    (item.p === "dots1") && "hidden"
                  }  ${
                    item.p === "dots2" && "hidden"
                  }  ${
                    item.h3 === "Personal Loan" && "hidden"
                  }  absolute text-white bg-accelloBlue rounded-[5px] font-dmsans py-[3px] px-[6px] -top-4 -right-5  `}
                >
                  coming soon
                </div> */}
              </div>
            </div>
            {item.h3 !== "dots" && (
              <div className="2xl:p-4 md:p-2 px-8 py-4">
                <h3 className="font-NexaBold  text-[22px] font-bold">
                  {item.h3 === "dots" ? "" : item.h3}
                </h3>
                <p className="text-[#4D4D4D] text-[16px] font-dmsans">
                  {item.p}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-2xl w-full flex items-center justify-center">
      <DomLink to={SIGNIN} >
        <button
          type="button"
          className="hidden sm:block rounded-lg  font-dmsans  bg-accelloBlue py-3 px-10 text-white hover:text-white gap-2 mt-10 text-[16px] sm:w-auto w-[100%] mb-10 text-center items-center mx-auto"
        >
          Get a Loan Today
        </button>
       </DomLink>
      </div>
    </div>
  );
}

export default LoansForYou;
