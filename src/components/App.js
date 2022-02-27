import React, { Component, useState, useEffect } from "react";
import CharityChainSmartContract from "../abis/CharityChainSmartContract.json";
import getWeb3 from "../web3.0/getWeb3";

const App = () => {
  const[web3, setWeb3] = useState(null);
  const[account, setAccount] = useState([]);
  const[contract, setContract] = useState(null);
  const[name, setName] = useState("Loading...");

  useEffect(() => {
    init();
  });

  const init = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      let deployedNetwork = CharityChainSmartContract.networks[networkId];

      const CharityChainSmartContractInstance = new web3.eth.Contract(
        CharityChainSmartContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      console.log("Working 1");

      setWeb3(web3);
      setAccount(accounts);
      setContract(CharityChainSmartContractInstance);
      const contractName = await CharityChainSmartContractInstance.methods.name().call();
      setName(contractName);

    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );

      console.log(error);
    }
  }

  const changeName = async () => {
    const newName = await contract.methods.setName("Abhijeet").call();
    setName(newName);
  }

  return (
    <div className="App">
      <h1> {name} </h1>
      <h1> {account[0]} </h1>
      <button onClick={ changeName }>Change Name</button>
    </div>
  );

};

export default App;