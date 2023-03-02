
subgraph.yaml 
  Assign the desired address of the Uniswap Factpry (Core) contract and the block number from which we start tracking transactions for the graph

helpers.ts
  replace the value of the FACTORY_ADDRESS variable
  
pricing.ts
  replace the values of the WETH_ADDRESS and USD_WETH_PAIR variables.  (correct the list of addresses in the WHITELIST variable)
  correct the list of addresses in the WHITELIST variable  (token where amounts should contribute to tracked volume and liquidity)
  
tokenDefinition.ts
  Write/replace all data tokens with a static defintion in function getStaticDefinitions
  
  
