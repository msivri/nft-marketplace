import web3 from "./web3";
import contractModel from "../ethereum/configuration";

const instance = new web3.eth.Contract(
  contractModel.nftABI,
  contractModel.nftAddress
);
export default instance;
