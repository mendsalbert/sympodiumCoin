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
        <div className="flex flex-row justify-between items-start mt-20 w-full">
          <div className="flex flex-col space-y-5 text-white  ">
            <p className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Sympodium
            </p>
            <p className="text-xl">
              WeCoin 3. World Frist Community Based Cryptocurrency.
            </p>
            <div className="rounded-full text-center py-2 px-5 text-lg w-6/12 bg-[#5F6FFB]">
              Get Started
            </div>
          </div>

          <div className=" text-white font-bold p-6 flex flex-col justify-between w-7/12 relative  bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-14 justify-between ">
              <img src="/images/logo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="space-y-4">
              <p>0aB3 xxxx xxxx xxxx</p>
              <p className="text-xl">SYMPODIUM COIN</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default IndexPage;
