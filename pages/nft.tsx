import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import React from "react";
import CountUp from "react-countup";
import Layout from "../components/Layout";
type Props = {};

const Blocks = (props: Props) => {
  return (
    <Layout>
      <div className="my-16">
        <div className="  flex flex-col lg:flex-col items-center justify-center space-x-4">
          <img src="/images/nft.png" className="w-32" />
          <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
            NFT
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  my-12 gap-4 lg:gap-8">
          <div className="rounded-tr-xl bg-white rounded-tl-xl ">
            <div>
              <img
                src="/images/0x0.png"
                className="w-full rounded-bl-none rounded-br-none h-3/5"
              />
            </div>
            <div className="p-2">
              <p className="text-xl font-bold text-black">Cat</p>
              <p className="text-lg font-bold text-gray-600">Some short dec</p>
              <p>0.01ETH</p>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-8xl mx-auto container py-10">
            <ul className="flex justify-center items-center">
              <li>
                <ChevronLeftIcon className="h-6 text-white" />
              </li>
              <li>
                <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                  1
                </span>
              </li>
              <li>
                <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                  2
                </span>
              </li>
              <li>
                <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 ">
                  ...
                </span>
              </li>
              <li>
                <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                  6
                </span>
              </li>
              <li>
                <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                  7
                </span>
              </li>
              <li>
                <ChevronRightIcon className="h-7 text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blocks;
