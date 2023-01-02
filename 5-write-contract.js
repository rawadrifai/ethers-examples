const { ethers } = require("ethers");

const goerli =
  "https://eth-goerli.g.alchemy.com/v2/OxRePE1iLqRDoEwKgitJCEs56xXj4qgu";
const provider = new ethers.providers.JsonRpcProvider(goerli);

const sender_private_key = "";
const sender_wallet = new ethers.Wallet(sender_private_key, provider);
const recipient = "0xF79AcFB604d3EC2b561A4F2D547bd5Ff1DB4a525";

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
