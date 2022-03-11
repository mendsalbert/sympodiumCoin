import React from "react";
import CountUp from "react-countup";
type Props = {};

const Blocks = (props: Props) => {
  return (
    <div className="my-32">
      <div className="flex flex-row items-center justify-center space-x-4">
        <p className="font-extrabold  text-center text-white text-5xl  lg:text-6xl ">
          Blocks
        </p>
        <img src="/images/cube.png" className="w-32" />
      </div>
      <div className="text-center">
        <p className="font-bold  text-white md:text-transparent  text-[2.5rem] md:text-5xl w-full lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          <CountUp delay={1} end={150} />+
        </p>
      </div>
    </div>
  );
};

export default Blocks;
