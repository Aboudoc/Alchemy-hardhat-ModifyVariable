async function main() {
  const ModifyVariable = await hre.ethers.getContractFactory("ModifyVariable");
  const modifyVariable = await ModifyVariable.deploy(10, "Alchemy");

  await modifyVariable.deployed();

  console.log(`Contract deployed to ${modifyVariable.address}`);

  await modifyVariable.modifyLeet();
  const newVariable = await modifyVariable.x();

  console.log(`Variable modified to ${newVariable}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
