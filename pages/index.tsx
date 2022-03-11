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
          <div className="flex flex-col space-y-5 text-white ">
            <p className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-400">
              Sympodium
            </p>
            <p className="text-xl">
              WeCoin 3. World Frist Community Based Cryptocurrency.
            </p>
            <div className="rounded-full text-center py-2 px-5 text-lg w-6/12 bg-[#5F6FFB]">
              Get Started
            </div>
          </div>

          <div
            className="w-40 h-32 background: linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%) 
backdrop-filter: blur(100px)
border-radius: 25px"
          ></div>
          <div className="grad"></div>
        </div>
      </Layout>
    );
  }
};

export default IndexPage;
