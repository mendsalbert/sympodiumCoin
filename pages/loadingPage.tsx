import React from "react";
type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <>
      <div className="  bg-main-background flex flex-col justify-center items-center w-full h-screen bg-cover bg-center">
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" className="w-40 animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
