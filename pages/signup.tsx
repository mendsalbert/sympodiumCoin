import React from "react";
import Layout from "../components/Layout";

type Props = {};

const Signup = (props: Props) => {
  return (
    <Layout complete={false}>
      <div className="w-full h-screen dark:bg-main-background-dark bg-main-background flex flex-col justify-center items-center ">
        <div className="w-5/12 space-y-5 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl backdrop-filter: blur(20px)">
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

          <div>
            <input
              id="email"
              aria-labelledby="password"
              type="password"
              className="bg-white dark:text-white focus:outline-none  rounded-xl text-lg font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2  bg-opacity-30 shadow-lg backdrop-filter: blur(20px)"
              placeholder="confirm password "
            />
          </div>
          <div className="uppercase  rounded-xl text-center py-2 px-5 text-white text-lg w-full cursor-pointer bg-gradient-to-r from-pink-500 to-yellow-500 ">
            SIGN UP
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
