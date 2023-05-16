const ethers = require('ethers');
const contractABI = require('./artifacts/contracts/CeloOracle.sol/CeloOracle.json').abi;

// Celo network config
const provider = new ethers.providers.JsonRpcProvider('https://alfajores-forno.celo-testnet.org');

// Contract address
const contractAddress = '0x...'; // Replace with your contract address

async function fetchPrice() {
  const wallet = ethers.Wallet.createRandom().connect(provider); // Use a random wallet for this example
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);

  try {
    const price = await contract.getAssetPrice();
    console.log(`Price: ${price}`);
  } catch (err) {
    console.error(err);
  }
}

fetchPrice();