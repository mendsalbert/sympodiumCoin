import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="font-Montserrat  flex flex-col justify-center items-center dark:bg-main-background-dark bg-main-background bg-cover overflow-x-hidden  bg-no-repeat  bg-center h-screen">
      <div className="animate-pulse text-white font-bold p-6 flex flex-col justify-between w-full lg:w-7/12 relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
        <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
          <img src="/images/cardlogo.png" className="w-16" />
          <p className="uppercase text-lg">Sympodium</p>
        </div>
        <div className="space-y-4">
          <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
          <p className="text-xl">SYMPODIUM COIN</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
