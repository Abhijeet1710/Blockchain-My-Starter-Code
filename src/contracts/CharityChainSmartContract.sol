pragma solidity ^0.5.0;

contract CharityChainSmartContract {
  string public name = "CharityChain - A Blockchain based charity Application";

  
  function setName(string memory _name) public returns (string memory) {
    name = _name;
    return name;
  }

}