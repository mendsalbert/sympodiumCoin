import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../artifacts/contracts/NFTMarket.sol/NFTMarketplace.json";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import Layout from "../components/Layout";

import AddNFTModal from "../components/organisms/addNFTModal.js";
type Props = {};
export default function CreatorDashboard() {
  const [modal, setModal] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await contract.fetchItemsListed();

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
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <Layout complete={true}>
        {modal ? (
          <AddNFTModal
            onCloseModal={() => {
              setModal(false);
            }}
          />
        ) : (
          ""
        )}
        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="font-bold flex flex-row space-x-2 text-center text-white text-3xl  lg:text-4xl ">
            No NFTs listed
          </p>

          <div>
            <div
              onClick={() => {
                setModal(true);
              }}
              className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg lg:w-6/12 w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] "
            >
              UPLOAD NFT
            </div>
          </div>
        </div>
      </Layout>
    );
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
            NFT listed
          </p>

          <div>
            <div
              onClick={() => {
                setModal(true);
              }}
              className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] "
            >
              UPLOAD NFT
            </div>
            <Link href="/my-nft">
              <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
                MY ASSETS
              </div>
            </Link>
            <Link href="/nft-dashboard">
              <div className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
