const marketPlaceAddress =  require("../ethereum/build/contracts/NFTMarket.json").networks[4].address;
const marketPlaceABI = require("../ethereum/build/contracts/NFTMarket.json").abi;
const nftAddress =  require("../ethereum/build/contracts/NFT.json").networks[4].address;
const nftABI =  require("../ethereum/build/contracts/NFT.json").abi;

export default {marketPlaceAddress, marketPlaceABI, nftAddress, nftABI};
