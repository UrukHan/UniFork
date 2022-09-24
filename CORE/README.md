# UNISWAP CORE

UNISWAP core fork

Deploy and verify:
```shell
npx hardhat run scripts\deploy.js
npx hardhat verify _address_contract _input_data_for_constructor             (_input_data_for_constructor: address_owner)
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

get_hash       - getting the hash of the router required for deploying (hash of the pair contract, written manually in the pairFor 
                                    function of the UniswapV2Library library to create the address of the pairs)
get_pair       - getting the address of the contract of a pair of tokens, by the addresses of the pair
get_reserves   - receiving reserves of tokens in the exchanger at the address of the contract of a pair of these tokens
```

Используемые библиотеки:
```shell
npx hardhat
npm install @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
npm install dotenv
```




