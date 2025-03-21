import React, { useEffect, useMemo, useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
import CryptoJS from "crypto-js";
// import { Dimensions, StyleSheet } from "react-native";

import image from "./../assets/imgs/accello.png";
import { Input, notification, Space, Switch } from "antd";
import {
  DownloadOutlined,
  ArrowLeftOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

import axios from "axios";
import { Link } from "react-router-dom";
import { THOMPSON } from "constants/env";
import LoanApi from "apis/LoanApi";

// type NotificationType = "success" | "info" | "warning" | "error";

// const { width } = Dimensions.get("window");
// const imageWidth = width > 500 ? 400 : width * 0.8;
// const imageHeight = imageWidth * (150 / 400);

const LoanBalance = () => {
  const [loanId, setLoanId] = useState(null);
  const [bvn, setBvn] = useState("");
  const [staff, setStaff] = useState("");
  const [staffData, setStaffData] = useState("");
  const [bvnData, setBvnData] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loanData, setLoanData] = useState({});
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [useStaffNumber, setUseStaffNumber] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const loanQueryResult = LoanApi.useGetLoanBalanceQuery(
    useMemo(
      () => ({
        path: { id: loanId },
      }),
      [loanId]
    ),
    { skip: !loanId }
  );
  // const data = loanQueryResult.data;
  // console.log(data);

  // const openNotification = (type: NotificationType, data: any) => () => {
  //   api[type](data);
  // };

  // Helper to format time (mm:ss)
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };
  const [timeLeft, setTimeLeft] = useState(299); // 4:59 = 4*60 + 59 = 299 seconds

  useEffect(() => {
    if (timeLeft <= 0 && current != 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  function encrypt(obj) {
    if (!obj) return null;

    return CryptoJS.AES.encrypt(
      JSON.stringify(obj),
      CryptoJS.enc.Utf8.parse("pbMtcB2Pp05c43av4VAmIQ=="),
      {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse("Cr@Fn7i4i3dW!T>?"),
      }
    ).toString();
  }

  /**
   *
   * @param {string} obj
   * @returns
   */
  function decrypt(obj) {
    if (!obj) return null;

    const decryptedString = CryptoJS.AES.decrypt(
      obj,
      CryptoJS.enc.Utf8.parse("pbMtcB2Pp05c43av4VAmIQ=="),
      {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse("Cr@Fn7i4i3dW!T>?"),
      }
    ).toString(CryptoJS.enc.Utf8);

    return decryptedString?.length ? JSON.parse(decryptedString) : null;
  }

  const handleBVNSubmit = async () => {
    setIsLoading(true);
    if (useStaffNumber) {
      if (!staff.length) {
        notification["info"]({
          message: "Info",
          description: "Staff/IPPIS number is required",
          showProgress: true,
        });
        setIsLoading(false);
        return;
      }
      try {
        const a = await axios.post(
          `${THOMPSON}/thompson-wrapper/api/v1/otp/employee/send?staffId=${staff}&legalForm=1`,
          { request: encrypt({}) }
        );
        const result = decrypt(a.data?.data);
        console.log(result);

        if (a.data?.status) {
          setStaffData(result);
          setIsLoading(false);
          setIsOtpSent(true);
          setTimeLeft(299);
          notification["success"]({
            message: "Successful",
            description: (
              <>
                {" "}
                An OTP has been sent to your phone number XXXX{" "}
                {result?.clients?.mobileNo?.substring(7)}
              </>
            ),
            showProgress: true,
          });
          setCurrent(1);
          console.log(contextHolder);
        }
      } catch (error) {
        notification["error"]({
          message: "Failed",
          description:
            error?.response?.data?.message ||
            "Unable to validate your BVN, check if input is correct",
          showProgress: true,
        });

        setIsLoading(false);
      }
    } else {
      if (bvn.length !== 11) {
        notification["info"]({
          message: "Info",
          description: "BVN must be 11 digits",
          showProgress: true,
        });
        setIsLoading(false);
        return;
      }
      try {
        const data = await axios.post(
          "http://192.64.82.236:4005/api/bvn_lookup/",
          { bvn }
        );
        console.log(data);
        if (data?.data?.status == "failed") {
          notification["error"]({
            message: "Failed",
            description:
              data?.data?.message ??
              "Unable to validate your BVN, check if input is correct",
            showProgress: true,
          });
        }

        if (data.data?.data?.msisdn) {
          setBvnData(data.data.data);
          const a = await axios.post(
            `${THOMPSON}/thompson-wrapper/api/v1/otp/request/${data.data?.data?.msisdn}`,
            { request: encrypt({}) }
          );
          setIsOtpSent(true);
          setTimeLeft(299);
          notification["success"]({
            message: "Successful",
            description: (
              <>
                {" "}
                An OTP has been sent to your phone number XXXX{" "}
                {data.data.data?.msisdn?.substring(7)}
              </>
            ),
            showProgress: true,
          });
          setCurrent(1);
          console.log(contextHolder);
        }
        setIsLoading(false);
      } catch (error) {
        notification["error"]({
          message: "Failed",
          description:
            JSON.stringify(error) ||
            "Unable to validate your BVN, check if input is correct",
          showProgress: true,
        });

        setIsLoading(false);
      }
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    next();
  };

  const handleOtpSubmit = async () => {
    console.log(otp);
    setIsLoading(true);

    // if (otp.join("").length !== 6) {
    //   alert("OTP must be 6 digits");
    //   return;
    // }
    try {
      const a = await axios.post(
        `${THOMPSON}/thompson-wrapper/api/v1/clients/otp/verify/${
          staffData?.clients?.mobileNo || bvnData?.msisdn
        }?token=${otp}`,
        { request: encrypt({}) }
      );

      console.log(0);
      console.log(a.data);
      console.log(a.data.data);

      // if (a.data?.data) {
      const authData = decrypt(a.data.data);
      const loanreq = await axios.post(
        `${THOMPSON}/thompson-wrapper/api/v1/loans/business/info?clientId=${authData.id}&limit=1&offset=0`,
        { request: encrypt({}) }
      );
      const loandetails = decrypt(loanreq.data.data);
      console.log(loandetails);
      setLoanId(loandetails?.pageItems[0]?.id);

      // }
      setIsOtpSent(true);
      next();
      const sampleLoanData = loandetails.pageItems[0];
      // {
      //   displayName: "Shuaibu Imam Zakari",
      //   loanTenor: 15,
      //   staffId: "FCT14875",
      //   currentDate: "28 February 2025",
      //   disbursedOnDate: "September 12, 2023",
      //   loanAmount: "225,000.00",
      //   deductionsTillDate: "2",
      //   durationTillDate: "15",
      //   interestPaid: "116,437.50",
      //   repaymentTillDate: "45,525.00",
      //   loanValue: "295,912.50",
      //   amountOutstandingTillDate: "295,912.50",
      //   loanBalanceValidity: "28 February 2025",
      //   preLiquidationCharge: ".00",
      //   wacsLiquidationCharges: ".00",
      // };

      setLoanData(sampleLoanData);
      notification["success"]({
        message: "Successful",
        description: "Loan Balance Retrieved",
        showProgress: true,
      });
      //   alert("Loan Balance Retrieved");
      next();
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      notification["error"]({
        message: "Failed",
        description:
          error.response.data.message ||
          "Something went wrong, check your input",
        showProgress: true,
      });
      setIsLoading(false);
    }
  };

  // const downloadPDF = async () => {
  //   try {
  //     const pdfDoc = await PDFDocument.create();
  //     const page = pdfDoc.addPage([600, 400]);
  //     const { width, height } = page.getSize();

  //     page.drawText("Hello, PDF!", {
  //       x: 50,
  //       y: height - 100,
  //       size: 30,
  //       color: rgb(0, 0, 0),
  //     });

  //     const pdfBytes = await pdfDoc.save();
  //     const blob = new Blob([pdfBytes], { type: "application/pdf" });
  //     // blob.
  //     // saveAs(blob, "test-document.pdf");
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //   }
  // };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="flex text-small md:text-md flex-col h-screen items-center justify-center w-full bg-[linear-gradient(354.87deg,#FFFFFF_-35.5%,#95B0DA_156.32%)] overflow-scroll">
      {contextHolder}

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
          </div>
        </div>
      )}
      <div className=" pb-5 px-20">
        <img
          className="max-w-[300px] md:!max-w-[700px] md:max-h-[150px]"
          src={image}
          //   resizeMode="contain"
        />
      </div>
      <div className="flex flex-col items-center sm:px-8 bg-white max-w-[300px] sm:max-w-[400px] md:max-w-[700px] md:w-[700px] rounded-lg relative">
        {current != 2 ? (
          <>
            <div className="flex items-center mt-8 mb:pt-12 w-full justify-center md:justify-between ">
              <div className="hidden md:flex"></div>
              <div className="text-xl md:text-3xl text-accelloBlue font-bold ">
                Loan Balance Inquiry
              </div>
              {current == 1 ? (
                <div className=" right-4 hidden md:flex" onClick={() => {
                  setBvnData("")
                  setStaffData("")
                  setLoanData({})
                prev()}}>
                  <ArrowLeftOutlined />
                  Back
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="w-full p-8  h-max-[700px] overflow-y-scroll">
              <div className="flex items-center justify-center md:p-6 pb-4 md:pb-10 w-full">
                <div className="hidden w-full items-center justify-between space-x-2 text-xs md:flex">
                  {["Enter BVN", "Verify OTP", "View Balance"].map(
                    (step, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          index < 3 - 1 ? "flex-1" : ""
                        } items-center gap-2`}
                      >
                        <div className="flex gap-1 items-center">
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                              index < current + 1
                                ? "bg-accelloBlue"
                                : "bg-gray-400"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className=" text-md text-nowrap ">{step}</span>
                        </div>
                        {index < 3 - 1 && (
                          <div className="flex h-[2px] w-full bg-gray-300"></div>
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="flex md:hidden w-full items-center justify-between space-x-2 text-xs">
                  {["Enter BVN", "Verify OTP", "View Balance"].map(
                    (step, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          index < 3 - 1 ? "flex-1" : ""
                        } items-center gap-2`}
                      >
                        <div className="flex  flex-col md:flex-row gap-1 items-center">
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                              index < current + 1
                                ? "bg-accelloBlue"
                                : "bg-gray-400"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className=" text-nowrap ">{step}</span>
                        </div>
                        {index < 3 - 1 && (
                          <div className="flex h-[2px] w-full bg-gray-300 mb-4"></div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>{" "}
              {
                current == 0 ? (
                  <>
                    {useStaffNumber ? (
                      <div className="font-semibold  mb-2">Staff ID</div>
                    ) : (
                      <span className="flex text-nowrap mt-2  gap-1 font-semibold">
                        BVN
                        <span className=" font-normal mb-2">
                          (Dial <span className="font-semibold">*560*0#</span>{" "}
                          on your registered <br className="md:hidden" /> number
                          to get your BVN)
                        </span>
                      </span>
                    )}
                    {useStaffNumber ? (
                      <Input
                        className="mb-6 p-3  md:text-lg border-2 border-gray-300 rounded-md"
                        inputMode="numeric"
                        value={staff}
                        onChange={(t) => setStaff(t.currentTarget.value)}
                        // size="large"

                        rootClassName="h-[46px] md:h-[64px] !border-accelloBlue !bg-[#EEF5FF] "
                        placeholder="Enter StaffNumber"
                      />
                    ) : (
                      <Input
                        className="mb-6 p-3  md:text-lg border-2 border-gray-300 rounded-md"
                        count={{
                          show: true,
                          max: 11,
                        }}
                        value={bvn}
                        onChange={(t) => setBvn(t.currentTarget.value)}
                        // size="large"

                        rootClassName="h-[46px] md:h-[64px] !border-accelloBlue !bg-[#EEF5FF] "
                        placeholder="Enter BVN"
                      />
                    )}

                    {!useStaffNumber ? (
                      <div className="flex gap-1  mb-2">
                        Verify with{" "}
                        <strong
                          onClick={() => setUseStaffNumber(true)}
                          className="font-semibold cursor-pointer"
                        >
                          Staff ID
                        </strong>{" "}
                        instead
                      </div>
                    ) : (
                      <div className="flex gap-1  mb-2">
                        Verify with{" "}
                        <strong
                          onClick={() => setUseStaffNumber(false)}
                          className="font-semibold  cursor-pointer"
                        >
                          BVN
                        </strong>{" "}
                        instead
                      </div>
                    )}
                    {/* <TouchableOpacity
                onPress={handleBVNSubmit}
                className="w-full text-lg py-3 cursor-pointer bg-accelloBlue hover:bg-green-700 text-white font-bold rounded-md"
              >
                Submit
              </TouchableOpacity> */}
                  </>
                ) : (
                  //   current == 1 ?
                  <>
                    <div className="hidden md:block mb-4 bg-[#EEFFF9] text-[#1D7658] py-4 px-8 rounded-lg">
                      <div className=" text-sm text-center">
                        An OTP has been sent to your phone number XXXX{" "}
                        {staffData?.clients?.mobileNo?.substring(7) ||
                          bvnData?.msisdn?.substring(7)}
                      </div>
                    </div>
                    <div className="md:block h-5"></div>
                    {/* OTP Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="otp"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        One-Time Password (OTP)
                      </label>
                      <Input
                        className="mb-6 p-3 md:text-lg border-[1px] border-gray-300 rounded-md"
                        count={{
                          show: true,
                          max: 6,
                        }}
                        suffix={
                          timeLeft ? (
                            <div className="text-sm text-accelloBlue flex gap-1">
                              <span className="hidden md:flex">
                                OTP expires in
                              </span>
                              <span className="font-semibold">
                                {formatTime(timeLeft)}
                              </span>
                            </div>
                          ) : (
                            <div
                              onClick={handleBVNSubmit}
                              className="text-center text-sm py-1 px-3 cursor-pointer bg-accelloBlue hover:opacity-35 text-white font-semibold rounded-md"
                            >
                              Resend
                            </div>
                          )
                        }
                        value={otp}
                        onChange={(t) => setOtp(t.currentTarget.value)}
                        // size="large"

                        rootClassName="h-[46px] md:h-[64px] !border-accelloBlue !bg-[#EEF5FF] "
                        placeholder="Enter OTP"
                      />
                      {/* <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mb-6 p-3 text-lg border-2 border-gray-300 rounded-md w-full"
                  defaultValue=""
                  // size="large"
                  placeholder="Enter OTP"
                /> */}
                    </div>
                    {/* Timer */}
                  </>
                )
                //   :
                //   (

                //   )
              }
              <div
                style={{ marginTop: 24 }}
                className="flex gap-4 items-center"
              >
                {current == 1 && (
                  <div
                    onClick={handleOtpSubmit}
                    className="text-center  w-full  py-3 px-5  cursor-pointer bg-accelloBlue hover:opacity-35 text-white font-bold rounded-md"
                  >
                    Verify
                  </div>
                )}
                {current == 0 && (
                  <div
                    onClick={handleBVNSubmit}
                    className="text-center  w-full py-3 px-5 cursor-pointer bg-accelloBlue hover:opacity-35 text-white font-bold rounded-md"
                  >
                    Procced
                  </div>
                )}
              </div>
              <div className="text-sm md:text-lg font-semibold text-accelloBlue mt-4 mb-2 text-center">
                Need a new loan?{" "}
                <a
                  target="_blank"
                  href="https://wa.me/2348107258837"
                  className="font-bold cursor-pointer hover:!opacity-50"
                >
                  Click here
                </a>
              </div>
              <div className="text-sm md:text-lg font-semibold text-accelloBlue  mb-2 text-center">
                For Support, feel free to reach us at{" "}
                <a
                  target="_blank"
                  href="https://wa.me/message/ZFTNV4DXMSJ3G1"
                  className="font-bold cursor-pointer hover:!opacity-50"
                >
                  +2348001234898
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full max-h-[500px] md:max-h-[70vh] overflow-y-scroll">
            <div className="flex flex-col m-4 md:m-8">
              <div className="flex font-semibold justify-between mb-8 mt-6">
                <div className="text-accelloBlue flex flex-col gap-2">
                  <div className="capitalize text-4xl ">
                    Hello, {loanData?.clientName?.split(" ")[0]?.toLowerCase()}
                  </div>
                  <div className="text-sm">Find bellow your loan details</div>
                </div>
                <div
                  className="font-semibold text-sm text-[#333333] cursor-pointer flex"
                  onClick={() => {
                    setCurrent(0);
                    setOtp("");
                    setBvn("");
                    setBvnData("")
                    setStaffData("")
                  }}
                >
                  <span>
                    {" "}
                    <ArrowLeftOutlined />
                  </span>
                  <span className="hidden md:block">Start over</span>{" "}
                </div>
              </div>
              <div className="border-[#AAB1BB] border-2 bg-[#F9FBFF] py-8 px-4 md:px-10 rounded-lg  ">
                {loanData?.status?.id ? (
                  <>
                    <h2 className="text-lg font-bold mb-6 text-center">
                      Outstanding Balance - ₦{loanData?.principal}
                    </h2>
                    {Object.entries(loanQueryResult?.data || {})
                      .filter(
                        ([key]) =>
                          ![
                            "currentDate",
                            "disbursedOnDate",
                            "displayName",
                            "loanBalanceValidity",
                            "preLiquidationCharge",
                            "wacsLiquidationCharges",
                            "data",
                          ].includes(key)
                      )
                      .map(([key, value]) => (
                        <p
                          key={key}
                          className="text-sm py-1 text-gray-700 flex flex-row justify-between"
                        >
                          <span className="text-[#666666] font-semibold text-[10px] md:text-base">
                            {key.replace(/([A-Z])/g, " $1")}:
                          </span>{" "}
                          <span className="text-[#444444] font-semibold text-[10px] md:text-base">
                            {value?.toString()}
                          </span>
                        </p>
                      ))}

                    <a
                      target="_blank"
                      href={`${THOMPSON}/thompson-wrapper/api/v1/document/loan_balance/${loanData?.id}`}
                      // onPress={downloadPDF}
                      className="mt-6 w-full flex flex-row items-center justify-center gap-2 text-xs md:text-lg py-3 cursor-pointer bg-accelloBlue hover:bg-[#01183b] text-white font-semibold rounded-md text-nowrap"
                    >
                      <DownloadOutlined /> {/* <Download size={18} />  */}
                      <span>Download Statement</span>
                    </a>
                  </>
                ) : (
                  <>
                    <div className="text-xl font-bold">
                      You do not have an active loan
                    </div>
                    <div className="mt-8">
                      Kindly contact our customer service team for further
                      assistance or to inquire about new loan opportunities that
                      may be available to you.
                    </div>
                    <Link to="/">
                      <div className="text-center text-sm  mt-8 py-2 px-4 cursor-pointer bg-[#AAB1BB]  hover:opacity-35 text-white font-semibold rounded-md">
                        OK
                      </div>
                    </Link>
                  </>
                )}
              </div>

              <div className=" text-sm md:text-lg font-semibold text-accelloBlue mt-4 mb-2 text-center">
                Need a new loan?{" "}
                <a
                  target="_blank"
                  href="https://wa.me/2348107258837"
                  className="font-bold cursor-pointer hover:!opacity-50"
                >
                  Click here
                </a>
              </div>
              <div className="text-sm md:text-lg font-semibold text-accelloBlue  mb-2 text-center">
                For Support, feel free to reach us at{" "}
                <a
                  target="_blank"
                  href="https://wa.me/message/ZFTNV4DXMSJ3G1"
                  className="font-bold cursor-pointer hover:!opacity-50"
                >
                  +2348001234898
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanBalance;
