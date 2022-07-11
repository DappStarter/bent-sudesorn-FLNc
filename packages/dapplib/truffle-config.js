require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot dance rate noise hospital include immense army gauge'; 
let testAccounts = [
"0x27e53f2664e7af4dab0622fa6ec7830e3fc0c1df317eacbd906b7452af393647",
"0x2e99e61cb91a8171ed53a53ad693c17af6b99dbe6cf51ae76cfdf3d54d286caa",
"0x998615709fde4a52996b4ebb0b0ef9d5ea2580a8bbcbea2f11dce550b3c0d10c",
"0x4828f00dc464299ad8c6fc8ff30a30e9e29c794310695fc8d16a68da26a8b3a9",
"0x24b149843d95ae295c6caf95ead4f452f3e41d403d92f2edba9281fa0a9e5a38",
"0xad999f6840031335cb39de7dcc97d1e82c0c0482cade48eef96156f579def0e2",
"0x0029348802d923ea284385757826eaa0f97fd87197e2105a214176cd5533a6a4",
"0x33a5d865083082de04e22f369ce374879b1d6b0175687eb6e25bff80733dd327",
"0x6a8f9876a37b0406b65559e0668371a8af3548a38e78758190a80c919ea1f551",
"0x09f90616a7a01b54cf4bf77b5f0b40506804bcf6645db0362ae373e27a20dc89"
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


