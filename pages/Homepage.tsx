import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

type Props = {};

const Homepage = (props: Props) => {
  const listInnerRef = useRef();
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex lg:flex-row justify-between space-x-0 lg:space-x-16 items-start my-20 w-full">
        <div className="flex flex-col lg:space-y-5 space-y-5 text-white  ">
          <p className="font-extrabold text-transparent  text-[2.5rem] md:text-5xl w-full lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Sympodium
          </p>
          <p className="text-xl">
            WeCoin 3. World Frist Community Based Cryptocurrency.
          </p>
          <div className="rounded-full text-center py-2 px-5 text-lg w-6/12 cursor-default bg-gradient-to-r from-pink-500 to-yellow-500 ">
            Get Started
          </div>
        </div>
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
      <div className="relative ">
        <Waypoint onEnter={onVWEnter}>
          <div></div>
        </Waypoint>
        <img
          src="/images/circle1.png"
          className="w-64 absolute top-0 left-60 -z-0"
        />
        <img
          src="/images/circle2.png"
          className="w-64 absolute top-12 ml-32 left-96 -z-0"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 gap-12 lg:my-32 my-24 ">
          <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative  bg-gradient-to-r from-[#ffffff8c] to-[#fff7007a] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl   backdrop-filter: blur(20px)">
            <div className="text-center  mb-7 justify-between ">
              <p className="uppercase text-5xl font-bold py-4 ">
                {viewPortEntered ? (
                  <CountUp delay={1} end={300} />
                ) : (
                  <CountUp delay={1} end={0} />
                )}
                +
              </p>
            </div>
            <div className="space-y-0">
              <p className="text-xl">TRANSACTIONS MADE</p>
            </div>
          </div>

          <div className=" text-center text-white font-bold p-6 flex flex-col justify-between  relative bg-gradient-to-r from-[#ff0606ab] to-[#5100ffa6] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)">
            <div className="text-center  mb-7 justify-between ">
              <p className="uppercase text-5xl font-bold py-4">
                {viewPortEntered ? (
                  <CountUp delay={1} end={150} />
                ) : (
                  <CountUp delay={1} end={0} />
                )}
                +
              </p>
            </div>
            <div className="space-y-0">
              <p className="text-xl">BLOCKS MINED</p>
            </div>
          </div>

          <div className="text-center text-white font-bold p-6 flex flex-col justify-between  relative  bg-gradient-to-r from-[#0a7abfaf] to-[#acff26af] shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl  backdrop-filter: blur(20px)">
            <div className="text-center  mb-7 justify-between ">
              <p className="uppercase text-5xl font-bold py-4">
                {viewPortEntered ? (
                  <CountUp delay={1} end={120} />
                ) : (
                  <CountUp delay={1} end={0} />
                )}
                +
              </p>
            </div>
            <div className="space-y-0">
              <p className="text-xl">WALLETS</p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="my-20 flex flex-col items-center">
        <div className="uppercase  rounded-full text-center py-2 px-5 text-white text-lg w-6/12 lg:w-4/12 cursor-default bg-gradient-to-r from-pink-500 to-yellow-500 ">
          About us
        </div>

        <p className="text-center py-5 text-white text-xl">
          WeCoin 3. World Frist Community Based Cryptocurrency. WeCoin 3. World
          Frist Community Based Cryptocurrency.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
