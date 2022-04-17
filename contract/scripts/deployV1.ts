import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import { ethers, run } from "hardhat";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

// CONSTANTS
const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
const KEY_HASH =
  "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
const FEE = ethers.utils.parseEther("0.0001");

async function main() {
  /*
   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
   so randomWinnerGame here is a factory for instances of our RandomWinnerGame contract.
   */
  const randomWinnerGame = await ethers.getContractFactory("LotteryDAppV1");
  // deploy the contract
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );

  await deployedRandomWinnerGameContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedRandomWinnerGameContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(150);

  // Verify the contract after deploying
  await run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}

function sleep(secs: number) {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
}

// Call the main function and catch if there is any error
main().then(() => {});
