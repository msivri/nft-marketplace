const marketAddress = require("../../ethereum/build/contracts/NFTMarket.json").networks[4].address;
const NFT = artifacts.require("NFT");
module.exports = function (deployer) {
  deployer.deploy(NFT, marketAddress);
};
