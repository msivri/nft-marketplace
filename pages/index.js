import NFT from "../ethereum/nft";
import MarketPlace from "../ethereum/market";
import { Component } from "react";
import axios from "axios";
import web3 from "web3";
import marketPlaceAddress from '../ethereum/configuration'

class MarketPlaceIndex extends Component {
  static async getInitialProps() {
    let items = await getNFTItems();
    return { items };
  }

  async getNFTItems(){
    //get market items from current contract.
    const data = await MarketPlace.methods.fetchMarketItems().call();
    // fetch each NFT information by token id.
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await NFT.methods.tokenURI(i.tokenId).call();
        const meta = await axios.get(tokenUri);
        let price = web3.utils.fromWei(i.price.toString(), "ether");
        let item = {
          price,
          itemId: i.itemId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    return items;
  }

  async buyNFT(nft){

    let price = web3.utils.fromWei(nft.price.toString(), "ether");

    const transaction = await MarketPlace.methods.createMarketSale(n)
  }

  render() {
    return (
      <div>
        {/* {this.props.items[0]} */}
      </div>
    )
  }
}

export default MarketPlaceIndex;
