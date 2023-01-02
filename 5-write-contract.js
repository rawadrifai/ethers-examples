const { ethers } = require("ethers");

const goerli =
  "https://eth-goerli.g.alchemy.com/v2/OxRePE1iLqRDoEwKgitJCEs56xXj4qgu";
const provider = new ethers.providers.JsonRpcProvider(goerli);

const account1 = "0x5a2c2504caDA178086E6C5DAeA67EB1956b38B95"; // Your account address 1
const account2 = "0xF79AcFB604d3EC2b561A4F2D547bd5Ff1DB4a525"; // Your account address 2

const privateKey1 = ""; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "0x5CD15cA8F891aAe0bF0B333679431DCB851916F8";
const contract = new ethers.Contract(address, ERC20_ABI, provider);
const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReciever = await contract.balanceOf(account2);

  console.log(`\nBalance of sender: ${balanceOfSender}`);
  console.log(`Balance of reciever: ${balanceOfReciever}\n`);
};

main();
