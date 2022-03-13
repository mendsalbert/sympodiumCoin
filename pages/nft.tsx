import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarket.sol/NFTMarketplace.json";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    loadNFTs();
  }
  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img src={nft.image} />
              <div className="p-4">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  {nft.name}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p className="text-gray-400">{nft.description}</p>
                </div>
              </div>
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ClockIcon,
//   CreditCardIcon,
//   CubeTransparentIcon,
//   HashtagIcon,
// } from "@heroicons/react/outline";
// import React from "react";
// import CountUp from "react-countup";
// import Layout from "../components/Layout";
// type Props = {};

// const Blocks = (props: Props) => {
//   return (
//     <Layout complete={true}>
//       <div className="my-16">
//         <div className="flex flex-col lg:flex-col items-center justify-center space-x-4">
//           <img src="/images/nft.png" className="w-24" />
//           <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
//             NFT
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  my-12 gap-6 lg:gap-8">
//           <div className="rounded-tr-xl  bg-white rounded-tl-xl ">
//             <div className="bg-yellow-300 rounded-tr-xl  rounded-tl-xl">
//               <img
//                 className="object-cover h-48 w-96  rounded-tr-xl  rounded-tl-xl"
//                 src="/images/0x0.png"
//               />
//             </div>
//             <div className="p-2">
//               <p className="text-xl font-bold text-black">Cat</p>
//               <p className="text-lg  text-gray-700">Some short dec</p>
//               <p className="text-lg font-bold text-red-600">0.01ETH</p>
//               <div className=" flex space-x-2 my-1 flex-row items-center justify-between">
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
//                   MINT
//                 </div>
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] ">
//                   TRANSFER
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-tr-xl  bg-white rounded-tl-xl ">
//             <div className="bg-yellow-300 rounded-tr-xl  rounded-tl-xl">
//               <img
//                 className="object-cover h-48 w-96  rounded-tr-xl  rounded-tl-xl"
//                 src="/images/01.jpg"
//               />
//             </div>
//             <div className="p-2">
//               <p className="text-xl font-bold text-black">Cat</p>
//               <p className="text-lg  text-gray-700">Some short dec</p>
//               <p className="text-lg font-bold text-red-600">0.01ETH</p>
//               <div className=" flex space-x-2 my-1 flex-row items-center justify-between">
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
//                   MINT
//                 </div>
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] ">
//                   TRANSFER
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-tr-xl  bg-white rounded-tl-xl ">
//             <div className="bg-yellow-300 rounded-tr-xl  rounded-tl-xl">
//               <img
//                 className="object-cover h-48 w-96  rounded-tr-xl  rounded-tl-xl"
//                 src="/images/02.png"
//               />
//             </div>
//             <div className="p-2">
//               <p className="text-xl font-bold text-black">Cat</p>
//               <p className="text-lg  text-gray-700">Some short dec</p>
//               <p className="text-lg font-bold text-red-600">0.01ETH</p>
//               <div className=" flex space-x-2 my-1 flex-row items-center justify-between">
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
//                   MINT
//                 </div>
//                 <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] ">
//                   TRANSFER
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="max-w-8xl mx-auto container py-10">
//             <ul className="flex justify-center items-center">
//               <li>
//                 <ChevronLeftIcon className="h-6 text-white" />
//               </li>
//               <li>
//                 <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
//                   1
//                 </span>
//               </li>
//               <li>
//                 <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
//                   2
//                 </span>
//               </li>
//               <li>
//                 <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 ">
//                   ...
//                 </span>
//               </li>
//               <li>
//                 <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
//                   6
//                 </span>
//               </li>
//               <li>
//                 <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
//                   7
//                 </span>
//               </li>
//               <li>
//                 <ChevronRightIcon className="h-7 text-white" />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Blocks;
