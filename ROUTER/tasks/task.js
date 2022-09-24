require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

//const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Pair.json').bytecode

// npx hardhat addliquid --contract 0xc23E2DD7CC17e232414436520C7cDB7b4aB5c15E --a 0x97472Bb24756e9b53B18b0c0543033528d25A76e --b 0xcCFb87a75eD87adE5b70F520FD8421db6BE4E8A2 --amount 3
task("addliquid", "balance (contract address, recipient address, amount send token) =>")
    .addParam("contract", "Contract address")
    .addParam("a", "a token address")
    .addParam("b", "b token address")
    .addParam("amount", "b token address")
    .setAction(async (taskArgs) => {
        const signer = await ethers.getSigner();
        console.log("SINGER ADDRESS: ", signer.address)
        const Router = await ethers.getContractFactory("UniswapV2Router02");
        const router = Router.attach(taskArgs.contract);
        const AcoinArtifact = require('../Acoin.json')
        const BcoinArtifact = require('../Bcoin.json')
        const aCoin = new ethers.Contract(taskArgs.a, AcoinArtifact.abi, signer)
        const bCoin = new ethers.Contract(taskArgs.b, BcoinArtifact.abi, signer)
        const a = await taskArgs.amount.toString()
        await aCoin.approve(taskArgs.contract, ethers.utils.parseEther(a));
        await bCoin.approve(taskArgs.contract, ethers.utils.parseEther(a));

        console.log("Transaction: ", await router.addLiquidity(taskArgs.a, taskArgs.b, ethers.utils.parseEther(a), ethers.utils.parseEther(a), ethers.utils.parseEther(a), ethers.utils.parseEther(a), signer.address, Date.now(), {gasLimit: 5000000}));
    })










