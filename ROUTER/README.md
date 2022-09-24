# UNISWAP ROUTER

UNISWAP router fork

Deploy:
```shell
1. replace the hash to get the address of the contract pair in pairFor function of the UniswapV2Library 
            to the hash obtained from the contract function of the exchanger core - INIT_CODE_PAIR_HASH
2. in the configuration file, replace the addresses of the contracts of the core of the exchanger and 
            the wrapped ether with the actual ones using the "addressContracts" key
npx hardhat run scripts\deploy.js
npx hardhat verify _address_contract _input_data_for_constructor_1 _input_data_for_constructor_2     (_input_data_for_constructor_1: address_core, _input_data_for_constructor_2: address_weth)
```

Таски:
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help

addliquid trading pair creation function
```

Используемые библиотеки:
```shell
npx hardhat
npm install @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
npm install dotenv
npm install @uniswap/lib @uniswap/v2-core
```




