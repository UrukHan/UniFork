require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/task");

module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 5062605,
      }
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_RB}`,
      gasPrice: 3000000000, // 3 gwei
      gas: 3000000,
      timeout: 1000000,
      accounts: [process.env.PRIVATE_KEY_ONE],
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_GRL}`,
      gasPrice: 3000000000, // 3 gwei
      gas: 3000000,
      timeout: 1000000,
      accounts: [process.env.PRIVATE_KEY_ONE],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
    accounts: [process.env.PRIVATE_KEY_ONE],
  },
};