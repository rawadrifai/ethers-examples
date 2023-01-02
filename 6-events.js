const { ethers } = require("ethers");

const goerli =
  "https://eth-goerli.g.alchemy.com/v2/OxRePE1iLqRDoEwKgitJCEs56xXj4qgu";
const provider = new ethers.providers.JsonRpcProvider(goerli);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0x5CD15cA8F891aAe0bF0B333679431DCB851916F8";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    8244891,
    8244892
  );
  console.log(transferEvents);
};

main();
