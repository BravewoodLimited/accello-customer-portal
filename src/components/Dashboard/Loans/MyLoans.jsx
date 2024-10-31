import { useState, React } from "react";
import { Tab } from "@headlessui/react";
import PersonalLoanImage from "../../../assets/Dashboard/personal_loan.png";
// import EducationLoanImage from '../../../assets/Dashboard/education_loan.png'
import BusinessLoanImage from "../../../assets/Dashboard/business_loan.png";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyLoans() {
  let [categories] = useState({
    Active: [
      {
        id: 1,
        title: "Personal",
        percentComplete: 20,
        amountPaid: 20000,
        repayment: 580000,
        loanAmount: 500000,
        tenure: 3,
        fees: 2.5,
        installments: 41667,
        status: "Active",
        due: false,
      },
      {
        id: 2,
        title: "Business",
        percentComplete: 20,
        amountPaid: 20000,
        repayment: 580000,
        loanAmount: 500000,
        tenure: 3,
        fees: 2.5,
        installments: 41667,
        status: "Active",
        due: true,
      },
    ],
    Pending: [
      {
        id: 1,
        title: "Business",
        percentComplete: 20,
        amountPaid: 20000,
        repayment: 580000,
        loanAmount: 500000,
        tenure: 3,
        fees: 2.5,
        installments: 41667,
        status: "Pending",
        due: true,
      },
      {
        id: 2,
        title: "Business",
        percentComplete: 20,
        amountPaid: 20000,
        repayment: 580000,
        loanAmount: 500000,
        tenure: 3,
        fees: 2.5,
        installments: 41667,
        status: "Pending",
        due: true,
      },
    ],
    Rejected: [
      {
        id: 1,
        title: "Personal",
        percentComplete: 20,
        amountPaid: 10000,
        repayment: 380000,
        loanAmount: 200000,
        tenure: 4,
        fees: 2.5,
        installments: 41667,
        status: "Rejected",
        due: false,
      },
      {
        id: 2,
        title: "Business",
        percentComplete: 50,
        amountPaid: 20000,
        repayment: 580000,
        loanAmount: 500000,
        tenure: 3,
        fees: 2.5,
        installments: 41667,
        status: "Rejected",
        due: true,
      },
    ],
  });
  return (
    <div className="w-full py-1">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-[24px] bg-[#04265F]/5 p-1 md:max-w-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-[24px] py-2.5 text-sm font-medium leading-5 text-black",
                  "focus:border-none",
                  selected
                    ? "bg-white shadow-difference"
                    : "hover:bg-white/[0.5] hover:text-black/[0.5]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 ">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl  p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
              )}
            >
              <div className="md:mx-auto my-8 grid sm:grid-cols-3 2xl:gap-x-[30px] md:gap-x-[30px] sm:gap-0">
                {posts.map((item) => (
                  <div className="bg-white p-8 2xl:max-w-[500px] rounded-[15px] xs:my-2 my-6 hover:-translate-y-3">
                    <div className="text-left">
                      <Link to="/loans/1">
                        <div className="h-16">
                          {item.title === "Personal" ? (
                            <img
                              src={PersonalLoanImage}
                              alt=""
                              className="mb-2"
                            />
                          ) : (
                            <img
                              src={BusinessLoanImage}
                              alt=""
                              className="mb-2"
                            />
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <h2 className="font-NexaBold font-bold mb-2 text-[18px]">
                            {item.title} Loan
                          </h2>
                          <p className="mb-2 font-NexaLight font-extrabold">
                            {item.percentComplete}%
                          </p>
                        </div>

                        {item.status === "Active" ? (
                          <LinearProgress
                            variant="determinate"
                            value={item.percentComplete}
                            color={
                              item.title === "Personal" ? "success" : "error"
                            }
                          />
                        ) : (
                          <hr />
                        )}

                        <div className="flex justify-between mt-6">
                          <div className="space-y-6">
                            <div>
                              <p className="text-sm">Amount Paid</p>
                              <p className="font-bold">₦ {item.amountPaid}</p>
                            </div>
                            <div>
                              <p className="text-sm">Loan Amount</p>
                              <p className="font-bold">₦ {item.loanAmount}</p>
                            </div>
                            <div>
                              <p className="text-sm">Fees</p>
                              <p className="font-bold">{item.fees}%</p>
                            </div>
                          </div>

                          <div className="space-y-6 text-right">
                            <div>
                              <p className="text-sm">Total Payment</p>
                              <p className="font-bold">₦ {item.repayment}</p>
                            </div>
                            <div>
                              <p className="text-sm">Tenure</p>
                              <p className="font-bold">{item.tenure} yrs</p>
                            </div>
                            <div>
                              <p className="text-sm">Monthly Installments</p>
                              <p className="font-bold">₦ {item.installments}</p>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="flex flex-col mt-14">
                        {item.status === "Active" ? (
                          <>
                            <button
                              className={classNames(
                                " text-white font-extrabold rounded-md my-2 py-1.5 border  hover:bg-transparent hover:text-accelloBlue",
                                item.due
                                  ? "bg-[#ED4F4F] hover:text-[#ED4F4F] border-[#ED4F4F]"
                                  : "bg-accelloBlue hover:text-accelloBlue border-accelloBlue"
                              )}
                            >
                              Pay Now
                            </button>
                            <p className="text-center text-sm">
                              Next Payment Date: 23rd, Jun 2023
                            </p>
                          </>
                        ) : item.status === "Pending" ? (
                          <button className="text-[#D48305] font-extrabold rounded-md my-2 py-1.5 border hover:bg-transparent bg-[#D483051A] hover:border-2 border-[#D483051A] ">
                            Loan Application Pending
                          </button>
                        ) : (
                          <button className="text-[#ED4F4F] font-extrabold rounded-md my-2 py-1.5 border  hover:bg-transparent hover:text-accelloBlue bg-[#ED4F4F1A] border-[#ED4F4F1A]">
                            Loan Application Rejected
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="sm:mt-2 mt-6">
                  <button className="p-5 border-2 border-accelloBlue rounded-2xl text-accelloBlue">
                    <span className="rounded-full px-2 py-1 border-2 border-accelloBlue">
                      +
                    </span>
                    <p className="text-2xl w-3/4 mx-auto mt-2">
                      Apply for new loan
                    </p>
                  </button>
                </div>
              </div>
              {/* <ul className=''>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>
                  </li>
                ))}
              </ul> */}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyLoans;
