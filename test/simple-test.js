const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("TestModifyVariable", function () {
  it("Should modify the variable to 1337", async function () {
    const Contract = await ethers.getContractFactory("ModifyVariable");
    const contract = await Contract.deploy(10);
    await contract.deployed();
    await contract.modifyLeet();
    const value = await contract.x();
    assert.equal(value.toNumber(), 1337);
  });
});
