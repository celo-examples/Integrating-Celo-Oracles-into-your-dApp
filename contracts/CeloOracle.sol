// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@celo/contractkit/contracts/stabletoken/IStableToken.sol";

contract CeloOracle is Ownable {
    address public stableTokenAddress;

    constructor(address _stableTokenAddress) {
        stableTokenAddress = _stableTokenAddress;
    }

    function getAssetPrice() public view returns (uint256) {
        IStableToken stableToken = IStableToken(stableTokenAddress);
        return stableToken.inflationFactor();
    }
}