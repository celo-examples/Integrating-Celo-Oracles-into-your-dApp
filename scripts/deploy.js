async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const CeloOracle = await ethers.getContractFactory("CeloOracle");
  const stableTokenAddress = '0x...'; // Replace with your stable token address
  const oracle = await CeloOracle.deploy(stableTokenAddress);

  console.log(`CeloOracle contract address: ${oracle.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});