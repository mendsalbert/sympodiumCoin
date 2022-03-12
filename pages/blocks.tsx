import { CreditCardIcon } from "@heroicons/react/outline";
import React from "react";
import CountUp from "react-countup";
type Props = {};

const Blocks = (props: Props) => {
  return (
    <div className="my-16">
      <div className="flex flex-row items-center justify-center space-x-4">
        <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
          <p className="font-extrabold  text-white md:text-transparent  text-[2.5rem] md:text-5xl w-full lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            <CountUp delay={1} end={150} />+
          </p>
          Blocks
        </p>
        <img src="/images/cube.png" className="w-32" />
      </div>
      <div className="grid grid-cols-4 my-12 gap-8">
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CreditCardIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CreditCardIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CreditCardIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
        <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)"></div>
      </div>
    </div>
  );
};

export default Blocks;
