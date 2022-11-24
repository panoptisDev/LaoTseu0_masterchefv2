// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {



  // const ClubContract = new web3.eth.Contract(contract_club.abi);
  // ClubContract.options.data = contract_club.bytecode;

  // const Club = ClubContract.deploy({}).send({ from: devAddr }, function (error, transactionHash) {});

  // console.log("CLUB deployed to:", (await Club).options.address);


  
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("CakeToken");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Lock deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
