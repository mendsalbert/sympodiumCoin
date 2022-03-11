import React from "react";

type Props = {};

const Blocks = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row">
        <p className="font-extrabold  text-center text-white text-5xl w-full lg:text-6xl ">
          Sympodium
        </p>
        <img src="/images/cube.png" className="w-16" />
      </div>
    </div>
  );
};

export default Blocks;
