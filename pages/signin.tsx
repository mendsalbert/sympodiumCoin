import React from "react";
import Layout from "../components/Layout";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Layout complete={false}>
      <div className="w-full h-screen flex flex-col mt-12 lg:mt-0 lg:justify-center items-center ">
        <div>
          <img className="w-20" src="/images/logo.png" />
        </div>
        <p className="text-white text-xl pb-5 font-bold">Sympodium</p>
        <div className=" w-full md:w-8/12 lg:w-6/12 space-y-6 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-md backdrop-filter: blur(20px)">
          <div>
            <input
              id="email"
              aria-labelledby="email"
              type="email"
              className="bg-white dark:text-white focus:outline-none  rounded-xl text-lg font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2  bg-opacity-30 shadow-lg backdrop-filter: blur(20px)"
              placeholder="e.g: john@gmail.com "
            />
          </div>

          <div>
            <input
              id="email"
              aria-labelledby="password"
              type="password"
              className="bg-white dark:text-white focus:outline-none  rounded-xl text-lg font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2  bg-opacity-30 shadow-lg backdrop-filter: blur(20px)"
              placeholder="password "
            />
          </div>

          <div className="uppercase  rounded-xl text-center py-2 px-5 text-white text-lg w-full cursor-pointer bg-gradient-to-r from-pink-500 to-yellow-500 ">
            SIGN IN
          </div>
        </div>
        <p className="text-white text-lg  pt-5">
          Haven't signed up ?{" "}
          <a href="/signin" className="underline text-blue-200">
            Sign In
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default SignIn;
