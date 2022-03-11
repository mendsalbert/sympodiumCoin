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
        <div className="flex flex-row justify-between items-start mt-20">
          <div className="flex flex-col space-y-4 text-white ">
            <p className="font-bold text-6xl ">WC3</p>
            <p className="text-xl">
              WeCoin 3. World Frist Community Based Cryptocurrency.
            </p>
            <div className="rounded-full text-center py-2 px-5 text-lg w-6/12 bg-[#5F6FFB]">
              Get Started
            </div>
          </div>

          <div></div>
        </div>
      </Layout>
    );
  }
};

export default IndexPage;
