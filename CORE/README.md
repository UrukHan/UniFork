# UNISWAP CORE

UNISWAP core fork

---
Deploy:
```shell
npx hardhat run scripts\deploy.js
```
---
Verify:
```shell
npx hardhat verify {address_contract} {address_owner}
```
---
Tasks:
```
get_hash       - getting the hash of the router required for deploying (hash of the pair contract, written manually in the pairFor 
                                    function of the UniswapV2Library library to create the address of the pairs)
get_pair       - getting the address of the contract of a pair of tokens, by the addresses of the pair
get_reserves   - receiving reserves of tokens in the exchanger at the address of the contract of a pair of these tokens
```
---


