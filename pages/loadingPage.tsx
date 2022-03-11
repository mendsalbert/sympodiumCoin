import React from "react";
type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <>
      <div className="  bg-main-background flex flex-col justify-center items-center w-full h-screen bg-cover bg-center">
        <div>
          <img src="/images/logo.png" className="w-32" />
          <p>Sympodium</p>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
