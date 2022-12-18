const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("TestModifyVariable", function () {
  let contract;
  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("ModifyVariable");
    contract = await Contract.deploy(10, "Alchemy");
    await contract.deployed();
  });
  it("Should modify the variable to 1337", async function () {
    // const Contract = await ethers.getContractFactory("ModifyVariable");
    // const contract = await Contract.deploy(10, "Alchemy");
    // await contract.deployed();
    await contract.modifyLeet();
    const value = await contract.x();
    assert.equal(value.toNumber(), 1337);
  });
  it("Should modify the string", async function () {
    // const Contract = await ethers.getContractFactory("ModifyVariable");
    // const contract = await Contract.deploy(10, "Alchemy");
    // await contract.deployed();
    await contract.modifyString();
    const value = await contract.y();
    assert(value, "Morocco");
  });
});
