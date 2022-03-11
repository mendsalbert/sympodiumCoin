import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import LoadingPage from "./loadingPage";

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="flex flex-row justify-between items-start my-20 w-full">
          <div className="flex flex-col space-y-5 text-white  ">
            <p className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {/* <p className="font-extrabold  text-7xl bg-clip-text text-white"> */}
              Sympodium
            </p>
            <p className="text-xl">
              WeCoin 3. World Frist Community Based Cryptocurrency.
            </p>
            <div className="rounded-full text-center py-2 px-5 text-lg w-6/12 cursor-default bg-gradient-to-r from-pink-500 to-yellow-500 ">
              Get Started
            </div>
          </div>

          <div className=" text-white font-bold p-6 flex flex-col justify-between w-7/12 relative  bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">SYMPODIUM COIN</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between space-x-16 my-28">
          <div className=" text-white font-bold p-6 flex flex-col justify-between  relative  bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">SYMPODIUM COIN</p>
            </div>
          </div>

          <div className=" text-white font-bold p-6 flex flex-col justify-between  relative  bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">SYMPODIUM COIN</p>
            </div>
          </div>

          <div className=" text-white font-bold p-6 flex flex-col justify-between  relative  bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">SYMPODIUM COIN</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default IndexPage;
