const { ethers } = require("ethers");

const goerli =
  "https://eth-goerli.g.alchemy.com/v2/OxRePE1iLqRDoEwKgitJCEs56xXj4qgu";
const provider = new ethers.providers.JsonRpcProvider(goerli);

const sender_private_key = "";
const sender_wallet = new ethers.Wallet(sender_private_key, provider);
const recipient = "0xF79AcFB604d3EC2b561A4F2D547bd5Ff1DB4a525";

const main = async () => {
  let senderBalance = ethers.utils.formatEther(
    await provider.getBalance(sender_wallet.address)
  );
  let recipientBalance = ethers.utils.formatEther(
    await provider.getBalance("0xF79AcFB604d3EC2b561A4F2D547bd5Ff1DB4a525")
  );

  console.log("sender:", senderBalance);
  console.log("recipient:", recipientBalance);

  const tx = await sender_wallet.sendTransaction({
    to: recipient,
    value: ethers.utils.parseEther("0.01"),
  });

  await tx.wait();
  console.log("=========== begin tx details ===========");
  console.log(tx);
  console.log("=========== end tx details ===========");

  senderBalance = ethers.utils.formatEther(
    await provider.getBalance(sender_wallet.address)
  );
  recipientBalance = ethers.utils.formatEther(
    await provider.getBalance("0xF79AcFB604d3EC2b561A4F2D547bd5Ff1DB4a525")
  );

  console.log("sender:", senderBalance);
  console.log("recipient:", recipientBalance);
};

main();
