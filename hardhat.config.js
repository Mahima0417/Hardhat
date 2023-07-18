require("@nomicfoundation/hardhat-toolbox");

// Go to Alchemy, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const ALCHEMY_API_KEY = "Nv9tC4f69gjyYp4yeo9rC8Vflqa7P7d2";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "58085c9ff8a4c4128d4bd08ede51e7938ec34503614697cd99dd1610f5a30931";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};