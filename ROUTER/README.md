# UNISWAP ROUTER

UNISWAP router fork

---
Deploy:
```
1. replace the hash to get the address of the contract pair in pairFor function of the UniswapV2Library
   to the hash obtained from the contract function of the exchanger core - INIT_CODE_PAIR_HASH
2. in the configuration file, replace the addresses of the contracts of the core of the exchanger and
   the wrapped ether with the actual ones using the "addressContracts" key
```
```shell
npx hardhat run scripts\deploy.js
```
---
Verify:
```
npx hardhat verify {address_contract} {address_core} {address_weth}
```
---
Tasks:
```shell
addliquid trading pair creation function
```
---







