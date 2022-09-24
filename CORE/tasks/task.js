require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


// npx hardhat get_hash --contract 0x8B68e9DAa7d5Fb1993812321c51c9549A60db1A2
task("get_hash", "balance (contract address, recipient address, amount send token) =>")
    .addParam("contract", "Contract address")
    .setAction(async (taskArgs) => {
        const Factory = await ethers.getContractFactory("UniswapV2Factory");
        const factory = Factory.attach(taskArgs.contract);
        console.log("get pair hash: ", await factory.get_pair_hash());
    })

// npx hardhat get_pair --contract 0x8B68e9DAa7d5Fb1993812321c51c9549A60db1A2 --a 0x52924ac1db15b704284a36af6258bA0824DE61f3 --b 0x829127F4Ae25D135927A36818A8A3959Ca76ee2E
task("get_pair", "balance (contract address, recipient address, amount send token) =>")
    .addParam("contract", "Contract address")
    .addParam("a", "a token address")
    .addParam("b", "b token address")
    .setAction(async (taskArgs) => {
        const Factory = await ethers.getContractFactory("UniswapV2Factory");
        const factory = Factory.attach(taskArgs.contract);
        console.log("get pair address: ", await factory.getPair(taskArgs.a, taskArgs.b));
    })

// npx hardhat get_reserves --contract 0x6A22Ce2e015A7A6A2864831d32FAFDF9f76B9d73
task("get_reserves", "balance (contract address, recipient address, amount send token) =>")
    .addParam("contract", "Contract address")
    .setAction(async (taskArgs) => {
        const Pair = await ethers.getContractFactory("UniswapV2Pair");
        const pair = Pair.attach(taskArgs.contract);
        console.log("get pair reserves: ", await pair.getReserves());
    })