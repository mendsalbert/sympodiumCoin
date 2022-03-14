import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Layout from "../components/Layout";

export default function ResellNFT() {
  const [formInput, updateFormInput] = useState({ price: "", image: "" });
  const router = useRouter();
  const { id, tokenURI }: any = router.query;
  const { image, price } = formInput;

  useEffect(() => {
    fetchNFT();
  }, [id]);

  async function fetchNFT() {
    if (!tokenURI) return;
    const meta = await axios.get(tokenURI);
    updateFormInput((state) => ({ ...state, image: meta.data.image }));
  }

  async function listNFTForSale() {
    if (!price) return;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(formInput.price, "ether");
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    let transaction = await contract.resellToken(id, priceFormatted, {
      value: listingPrice,
    });
    await transaction.wait();

    router.push("/nft");
  }

  return (
    <Layout complete={true}>
      <div className="flex justify-center">
        <div className=" w-full lg:w-6/12 flex flex-col pb-12">
          <input
            type="text"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
            className="bg-white dark:text-white focus:outline-none  rounded-xl text-lg font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2  bg-opacity-30 shadow-lg backdrop-filter: blur(20px)"
            placeholder="Asset Price in Eth"
          />

          {image && <img className="rounded mt-4" width="250" src={image} />}

          <div className=" flex space-x-2 my-1 flex-row items-center W-full justify-between">
            <div
              onClick={listNFTForSale}
              className="uppercase cursor-pointer  rounded-full text-center py-2 px-4 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] "
            >
              LIST NFT
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
