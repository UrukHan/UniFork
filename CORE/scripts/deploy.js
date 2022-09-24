const hre = require("hardhat")
const ethers = hre.ethers

async function main() {
    const [owner] = await ethers.getSigners();

    // address owner
    //const feeSetterAddress = "0x21BB32E907774Fa93AC884bFA064580c8c4288C7"

    const Factory = await ethers.getContractFactory("UniswapV2Factory", owner);
    const factory = await Factory.deploy(owner.address);
    await factory.deployed();

    console.log("Owner address:", owner.address);
    console.log("Factory contract address:", factory.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



