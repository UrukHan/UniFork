import {
    Address,
    BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
/*
export class TokenDefinition {

    address : Address
    symbol: string
    name: string
    decimals: BigInt

    // Initialize a Token Definition with its attributes
    constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
        this.address = address
        this.symbol = symbol
        this.name = name
        this.decimals = decimals
    }

    // Get all tokens with a static defintion
    static getStaticDefinitions(): Array<TokenDefinition> {
        let staticDefinitions = new Array<TokenDefinition>(2)

        // Add USD
        let tokenUSD = new TokenDefinition(
            Address.fromString('0x4e14D516D64cb8470A5bA233d71F0c953bB80744'),
            'USD',
            'Dollar',
            BigInt.fromI32(9)
        )
        staticDefinitions.push(tokenUSD)

        // Add Test48
        let tokenTest48 = new TokenDefinition(
            Address.fromString('0xaD3eb83C636FC8e09BcC915dEa72f359706E942E'),
            'Test48',
            'Test48',
            BigInt.fromI32(18)
        )
        staticDefinitions.push(tokenTest48)

        // Add Test52
        let tokenTest52 = new TokenDefinition(
            Address.fromString('0xE63e44ee093fa30e5A51AD66953B49e410C2B001'),
            'Test52',
            'Test52',
            BigInt.fromI32(18)
        )
        staticDefinitions.push(tokenTest52)

        return staticDefinitions
    }

    // Helper for hardcoded tokens
    static fromAddress(tokenAddress: Address) : TokenDefinition | null {
        let staticDefinitions = this.getStaticDefinitions()
        let tokenAddressHex = tokenAddress.toHexString()

        // Search the definition using the address
        for (let i = 0; i < staticDefinitions.length; i++) {
            let staticDefinition = staticDefinitions[i]
            if(staticDefinition.address.toHexString() == tokenAddressHex) {
                return staticDefinition
            }
        }

        // If not found, return null
        return null
    }

}
*/