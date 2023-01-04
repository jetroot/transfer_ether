require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/tjI_Cj_pXMvOLEHJnzR4fU0o6TxJmr3R",
            accounts: [
                `0x6788eef12910f5e3080db7de67a6302370968ff2fd7c2e3c16b32a52529d59e6`,
            ],
        },
    },
};
