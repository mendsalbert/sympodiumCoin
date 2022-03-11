import React from "react";

type Props = {};

const Blocks = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <p className="font-extrabold  text-center text-white text-5xl  lg:text-6xl ">
          Blocks
        </p>
        <img src="/images/cube.png" className="w-32" />
      </div>
    </div>
  );
};

export default Blocks;
