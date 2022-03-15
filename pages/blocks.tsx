import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Layout from "../components/Layout";
import dateFormat, { masks } from "dateformat";
import { getNodeOne, getNodeTwo, setUrl } from "../components/utils/helpers";

type Props = {};

const Blocks = (props: Props) => {
  const [block, setBlock] = useState([]);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  let url = setUrl(2);

  useEffect(() => {
    axios
      .get(`https://sympodiumcoin.herokuapp.com/api/blocks`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        let response = res.data;
        // console.log(response.blockchain.chain);
        setBlock(response.blockchain.chain);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Layout complete={true}>
      <div className="my-16">
        <div className="  flex flex-col lg:flex-row items-center justify-center space-x-4">
          <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
            <p className="font-extrabold   text-transparent   md:text-5xl w-full lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              <CountUp delay={1} end={block.length} />+{" "}
            </p>
            Blocks
          </p>
          <img src="/images/cube.png" className="w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  my-12 gap-4 lg:gap-8">
          {block
            .map((chain, index) => {
              if (chain.data === "any") {
                return false;
              } else {
                return (
                  <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
                    <div className="flex flex-row items-center cursor-pointer space-x-3">
                      <HashtagIcon className="h-9 text-white" />
                      <p className="text-white md:text-lg">{index + 1}</p>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer space-x-3">
                      <ClockIcon className="h-9 text-white" />
                      <p className="text-white md:text-lg text-left">
                        {dateFormat(chain.timestamp, "dd:mm:yy - h:MM:ss ")}
                      </p>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer space-x-3">
                      <CubeTransparentIcon className="h-9 text-white" />
                      <p className="text-white md:text-lg">
                        {truncateString(chain.hash, 7)}
                      </p>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer space-x-3">
                      <CreditCardIcon className="h-9 text-white" />
                      <p className="text-white md:text-lg">
                        {chain.data.map((transaction) => (
                          <div className="">
                            {Object.keys(transaction.outputMap).map((key) => (
                              <div className="flex flex-row space-x-3">
                                <p>To: {truncateString(key, 8)}</p>

                                <p>Sent: {transaction.outputMap[key]}</p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              }
            })
            .reverse()}
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </Layout>
  );
};

export default Blocks;
