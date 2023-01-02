const { ethers } = require("ethers");

const mainnet =
  "https://eth-mainnet.g.alchemy.com/v2/mMuLqNr0bWxuXlxnkKc8LBEEX1kl-Kiv";
const provider = new ethers.providers.JsonRpcProvider(mainnet);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const main = async () => {
  const contract = new ethers.Contract(address, ERC20_ABI, provider);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = ethers.utils.formatUnits(await contract.totalSupply());
  const balance = await contract.balanceOf(
    "0xf977814e90da44bfa03b6295a0616a897441acec"
  );
  console.log(name);
  console.log(symbol);
  console.log(totalSupply);
  console.log(parseInt(balance._hex, 16));
};

main();
