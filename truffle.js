var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache!
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 10);
      },
      network_id: '*',
      gas: 9999999
    },
    mocha: {
      // timeout: 100000
    },
      // Configure your compilers
    compilers: {
          solc: {
            version: "0.4.25", //<==========CHANGED THAT from "0.5.1"
            docker: true,
            settings: {
                optimizer: {
                  enabled: false,
                  runs: 200
                },
                evmVersion: "byzantium"
            }
          }
      }
    }
};