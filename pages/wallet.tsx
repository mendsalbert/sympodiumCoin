import {
  CashIcon,
  ClockIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import Layout from "../components/Layout";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <Layout complete={true}>
      <div className="  flex flex-col lg:flex-col justify-between w-full items-start lg:space-x-0">
        <div
          className="py-12 bg-[#0000009f] w-full h-full transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg "
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <div className="w-full flex justify-start text-gray-600 mb-3">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_form-svg1.svg"
                  alt="icon"
                />
              </div>
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Enter Billing Details
              </h1>

              <div className="relative mb-5 mt-2">
                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_form-svg2.svg"
                    alt="icon"
                  />
                </div>
                <input
                  type="text"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                  placeholder="0xab xxxx xxxx xxxx xxxx"
                />
              </div>
              <input
                id="name"
                type="number"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Amount"
              />

              <div className="flex items-center justify-start w-full">
                <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button className=" w-full focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-12 mb-5 lg:mb-0 lg:my-14 w-full lg:w-6/12 lg:flex lg:flex-col lg:self-center ">
          <div className=" text-black font-bold  p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="flex flex-row justify-between items-center space-y-4">
              <div className="sm:w-6/12">
                <p className="text-md lg:text-xl">0aB3 XXXX XXXX XXXX XXXX</p>
                <p className="text-md lg:text-xl">MENDS ALBERT</p>
              </div>
              <p className="text-xl lg:text-3xl ">1000SC </p>
            </div>
          </div>
          <div className=" flex space-x-0 space-y-4 md:space-x-3 md:space-y-0 lg:space-y-0 lg:space-x-5 my-5 flex-col w-full md:flex-row lg:flex-row items-center justify-between">
            <div className="uppercase cursor-pointer text-md  rounded-md w-full text-center py-2 px-5 text-white lg:text-lg  lg:w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
              TRANSFER
            </div>
            <div className="uppercase cursor-pointer text-md  rounded-md w-full text-center py-2 px-5 text-white lg:text-lg  lg:w-full  bg-gradient-to-r  from-[#FF1E1E] to-[#5200FF] ">
              WITHDRAW
            </div>
          </div>
        </div>
        <div className="my-8  lg:my-14 text-white w-full">
          <p className="text-2xl mb-4">Transactions (3)</p>

          <div className="w-full space-y-4">
            <div className="w-full p-2 bg-white dark:bg-gray-600 rounded flex">
              {/* <TicketIcon className="h-8 text-gray-700" /> */}
              <div className="pl-3  space-y-0">
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <UserIcon className="h-6 text-gray-700 dark:text-gray-400  pr-3" />
                  0x5ffafd54fadf56afeh65665
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <CashIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />
                  50 SC
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <ClockIcon className="h-6 text-gray-700 dark:text-gray-400  pr-3" />
                  Date
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-white dark:bg-gray-600 rounded flex">
              {/* <TicketIcon className="h-8 text-gray-700" /> */}
              <div className="pl-3  space-y-0">
                <p className="dark:text-gray-300  focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <UserIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />
                  <span>0x5ffafd54fadf56afeh65665</span>
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <CashIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />{" "}
                  <span>50 SC</span>
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <ClockIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />

                  <span>Date</span>
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-white dark:bg-gray-600 rounded flex">
              {/* <TicketIcon className="h-8 text-gray-700" /> */}
              <div className="pl-3  space-y-0">
                <p className="dark:text-gray-300  focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <UserIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />
                  <span>0x5ffafd54fadf56afeh65665</span>
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <CashIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />{" "}
                  <span>50 SC</span>
                </p>
                <p className="dark:text-gray-300 focus:outline-none text-md flex flex-row items-center  leading-3 pt-1 text-gray-500">
                  <ClockIcon className="h-6 text-gray-700 dark:text-gray-400 pr-3" />

                  <span>Date</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
