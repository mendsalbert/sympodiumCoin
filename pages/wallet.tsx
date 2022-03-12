import { TicketIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div className="flex flex-row justify-between w-full items-start">
      <div className=" my-14 w-full ">
        <div className=" text-black font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
            <img src="/images/cardlogo.png" className="w-16" />
            <p className="uppercase text-lg">Sympodium</p>
          </div>
          <div className="flex flex-row justify-between items-center space-y-4">
            <div>
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">MENDS ALBERT</p>
            </div>
            <p className="text-3xl">1000 SC</p>
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
      <div className="my-14 text-white w-full  text-left ">
        <p>Transactions (2)</p>

        <div className="w-full">
          <div className="h-80 py-8">
            <div className="mx-auto flex justify-center sm:justify-end h-full">
              <div
                role="alert"
                className="sm:mr-6 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col transition duration-150 ease-in-out"
                id="notification"
              >
                <div className="sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center bg-green-700 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
                  <TicketIcon className="h-7 text-white" />
                </div>
                <div className="flex flex-col justify-center xl:-ml-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2">
                  <h1 className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">
                    Action Completed
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                    You have successfully completed the survey. You will soon
                    receive a reward email. Stay tuned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
