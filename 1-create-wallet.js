const crypto = require("crypto");
const ethers = require("ethers");

const privateKey = crypto.randomBytes(32).toString("hex");

console.log("0x" + privateKey);

const wallet = new ethers.Wallet(privateKey);
console.log(wallet.address.length);
