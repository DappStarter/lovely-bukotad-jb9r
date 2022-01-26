require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name raise stick hospital inner arctic army gentle'; 
let testAccounts = [
"0x2fc31f8da4cb59b0e116f7db397a598e2d23275f3069d89066657ae76ab36ffa",
"0xf8da30b1acf587860f6e92f551f1b45bb80d0dc2c5d701965d939b80f12ef5de",
"0x95f826477b04c59fc559b500efa0b970776f44cd15552a4382e70918ad9d3f0b",
"0x45f0f7e99876b9fb7fc67df45150effefa8907b39b9a1fdcac9eda74b4b338ad",
"0xc7787d7742786370ffe510c1ecd74cf2d7c26800415dfd45e9b23b4714fa4afd",
"0xb8ad7aeb25557bda74d6c3fbbf805b92a994265a3ff0f2ffac4676643aab59ea",
"0x194d1c2006d21256b986200a289995fb519225bbae3c800f9a2b779595acf23e",
"0x5f2b9050b928695cd146a6fbe1f9619e3169fa4d8e2867f157509d5b75b1ce0a",
"0x3d2ed7771f04f12386a4c4fffe4014b65d45630179f7c18f77981ad5583cda99",
"0xd5409e222049104f594d2ee1cfb4f2310d54869d0b974c8c00cd7d29f9d0bde1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


