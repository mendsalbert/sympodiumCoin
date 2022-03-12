import React from "react";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div>
      <div className=" my-9 flex flex-col justify-center items-center">
        <div className=" text-black font-bold p-6 flex flex-col justify-between w-6/12 relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
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
        <div className="w-6/12 flex space-x-5 my-5 flex-row items-center justify-between">
          <div className="uppercase  rounded-md text-center py-2 px-5 text-white text-lg w-full cursor-default bg-gradient-to-r from-pink-500 to-yellow-500 ">
            TRANSFER
          </div>
          <div className="uppercase  rounded-md text-center py-2 px-5 text-white text-lg w-full cursor-default bg-gradient-to-r from-pink-500 to-yellow-500 ">
            WITHDRAW
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
