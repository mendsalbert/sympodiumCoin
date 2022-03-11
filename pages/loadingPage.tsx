import React from "react";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <>
      <div className=" relative bg-main-background w-full h-screen bg-cover bg-center">
        <div className="fixed left-0 right-0  w-full h-screen bg-[#0a7abf62]"></div>
      </div>
      <div className="z-auto text-white">LoadingPage</div>
    </>
  );
};

export default LoadingPage;
