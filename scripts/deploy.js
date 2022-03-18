const hre = require("hardhat");
const fs = require("fs");

// async function main() {
//   const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
//   const nftMarketplace = await NFTMarketplace.deploy();
//   await nftMarketplace.deployed();
//   console.log("nftMarketplace deployed to:", nftMarketplace.address);

//   fs.writeFileSync(
//     "./config.js",
//     `
//   export const marketplaceAddress = "${nftMarketplace.address}"
//   `
//   );
// }

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress;

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();

  txHash = nft.deployTransaction.hash;
  // console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined...`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress;

  console.log("nft deployed to:", nftAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
