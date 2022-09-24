require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/task");

module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    version: "0.6.6",
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
      },
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
  addressContracts: {
    core: {
      rinkeby: '0xCE494E87f75FA7F3516500A820bad85De8eA9d08',
      default: '0xCE494E87f75FA7F3516500A820bad85De8eA9d08',
      goerli: '0x8B68e9DAa7d5Fb1993812321c51c9549A60db1A2',
    },
    wrapeth: {
      rinkeby: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      default: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      goerli: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
    }
  }
}