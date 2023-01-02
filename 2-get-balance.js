const crypto = require("crypto");
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/OxRePE1iLqRDoEwKgitJCEs56xXj4qgu"
);

const main = async () => {
  const balance = await provider.getBalance(
    "0x5a2c2504caDA178086E6C5DAeA67EB1956b38B95"
  );
  console.log(ethers.utils.formatEther(balance));
};

main();
