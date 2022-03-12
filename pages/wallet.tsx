import React from "react";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div>
      <div className=" my-9 flex flex-row justify-center items-center">
        <div className=" text-black font-bold p-6 flex flex-col justify-between w-6/12 relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
            <img src="/images/cardlogo.png" className="w-16" />
            <p className="uppercase text-lg">Sympodium</p>
          </div>
          <div className="space-y-4">
            <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
            <p className="text-xl">MENDS ALBERT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
