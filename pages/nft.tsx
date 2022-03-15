import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Link from "next/link";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

import Layout from "../components/Layout";
type Props = {};

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

import { NotificationsSharp } from "react-ionicons";
import AddNFTModal from "../components/organisms/addNFTModal.js";
export default function Home() {
  const [modal, setModal] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com"
    );
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
  // if (loadingState === "loaded" && !nfts.length)
  //   return (
  //     <Layout complete={true}>
  //       {modal ? (
  //         <AddNFTModal
  //           onCloseModal={() => {
  //             setModal(false);
  //           }}
  //         />
  //       ) : (
  //         ""
  //       )}
  //       <div className="flex flex-col justify-center items-center space-y-2 my-20">
  //         <p className="font-bold flex flex-row space-x-2 text-center text-white text-3xl  lg:text-4xl ">
  //           No items in marketplace
  //         </p>

  //         <div>
  //           <div
  //             onClick={() => {
  //               setModal(true);
  //             }}
  //             className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg  lg:w-8/12 w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] "
  //           >
  //             UPLOAD NFT
  //           </div>
  //         </div>
  //       </div>
  //     </Layout>
  //   );
  return (
    <Layout complete={true}>
      <div className="my-16">
        {modal ? (
          <AddNFTModal
            onCloseModal={() => {
              setModal(false);
            }}
          />
        ) : (
          ""
        )}

        <div className="flex flex-col lg:flex-col items-center justify-center space-x-4">
          <img src="/images/nft.png" className="w-24" />
          <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
            {loadingState === "loaded" && !nfts.length
              ? `No Items in Marketplace`
              : `NFT Marketplace`}
          </p>

          <div className=" flex overflow-x-scroll  w-full scrollbar-hide space-x-4 pt-4 pb-4 pl-2 pr-3">
            <div
              onClick={() => {
                setModal(true);
              }}
              className="flex-shrink-0 flex flex-row items-center space-x-2 uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg   bg-pink-500 "
            >
              UPLOAD NFT
              <PlusCircleIcon className="text-white h-7" />
            </div>

            <Link href="/my-nft">
              <div className="flex-shrink-0 uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg   bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
                MY ASSETS
              </div>
            </Link>
            <Link href="/nft-dashboard">
              <div className="flex-shrink-0 uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg   bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
                DASHBOARD
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  my-12 gap-6 lg:gap-8">
          {nfts.map((nft, i) => (
            <div className="rounded-tr-xl  bg-white rounded-tl-xl ">
              <div className="bg-yellow-300 rounded-tr-xl  rounded-tl-xl">
                <img
                  className="object-cover h-48 w-96  rounded-tr-xl  rounded-tl-xl"
                  src={nft.image}
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-bold text-black">{nft.name}</p>
                <p className="text-lg  text-gray-700">{nft.description}</p>
                <p className="text-lg font-bold text-red-600">{nft.price}ETH</p>
                <div className=" flex space-x-2 my-1 flex-row items-center W-full justify-between">
                  {/* <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
                MINT
              </div> */}
                  <div
                    onClick={() => buyNft(nft)}
                    className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] "
                  >
                    BUY
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
