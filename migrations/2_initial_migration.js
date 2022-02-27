const CharityChainSmartContract = artifacts.require("CharityChainSmartContract");

module.exports = function(deployer) {
  deployer.deploy(CharityChainSmartContract);
};
