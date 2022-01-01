const MarketPlace = artifacts.require(
    "NFTMarket"
  );
  module.exports = function (deployer) {
    deployer.deploy(MarketPlace);
  };
  