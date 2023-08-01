# UniFork

fork of Uniswap v2

![plot](Logo.png)

-------
Delpoy DEX:
```
1) Expand DEX Core   
    (contract UniswapV2Factory in "CORE" folder)
2) Get "INIT CODE PAIR HASH"
    (by calling the function get_pair_hash() of the already deployed contract)
3) In the pairFor() function of the UniswapV2Library.sol contract, replace hash
    (to the previously received "INIT CODE PAIR HASH")
4) Expand DEX Router   
    (contract UniswapV2Router02 in"ROUTER" folder)
```
-----------
Delpoy GRAPH:
```
1) Expand graph node
2) Configure parameters for contracts monitored
3) Expand subgraphs
    graph init
    graph codegen 
    graph build
    graph create --node http://127.0.0.1:8020/ UniFork
    graph deploy 
        --product hosted-service \
        --version-label v0.0.1 \
        --node http://127.0.0.1:8020/UniFork \
        --ipfs http://127.0.0.1:5001 UniFork
```
