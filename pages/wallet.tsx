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
    <Layout>
      <div className="flex flex-col lg:flex-col justify-between w-full items-start lg:space-x-0">
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
          <div className=" flex space-x-5 my-5 flex-row items-center justify-between">
            <div className="uppercase cursor-pointer  rounded-md text-center py-2 px-5 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
              TRANSFER
            </div>
            <div className="uppercase cursor-pointer  rounded-md text-center py-2 px-5 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] ">
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
