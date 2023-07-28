const hre = require("hardhat")
//const {networks} = require("../hardhat.config");
const ethers = hre.ethers
const {addressContracts} = require("../hardhat.config");

const core = addressContracts.core[hre.network.name];
const wrapeth = addressContracts.wrapeth[hre.network.name];

async function main() {
    const [owner] = await ethers.getSigners();

    const WETH = await ethers.getContractFactory("WETH");
    const weth = WETH.attach(wrapeth);

    const Router = await ethers.getContractFactory("UniswapV2Router02", owner);
    const router = await Router.deploy(core, weth.address);
    await router.deployed();

    console.log("Owner address:", owner.address);
    console.log("Router contract address:", router.address);

}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



