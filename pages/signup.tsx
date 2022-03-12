import React from "react";
import Layout from "../components/Layout";

type Props = {};

const Signup = (props: Props) => {
  return (
    <Layout>
      <div className="  flex flex-col justify-center items-center ">
        <div className=" text-white font-bold p-6 flex flex-col justify-between w-full lg:w-7/12 relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl backdrop-filter: blur(20px)">
          <div>
            <input
              id="email"
              aria-labelledby="email"
              type="email"
              className="bg-white  focus:outline-none  rounded text-lg font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2  bg-opacity-30 shadow-lg backdrop-filter: blur(20px)"
              placeholder="e.g: john@gmail.com "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
