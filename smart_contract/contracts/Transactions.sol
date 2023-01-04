// SPDX-License-Identifier

pragma solidity ^0.8.17;

contract Transaction {
    uint256 transactionCount;

    event Transfer(address from, address to, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address from;
        address to;
        uint amount;
        string message; 
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBloackchain(address payable to, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, to, amount, message, block.timestamp, keyword);

        transactions.push(TransferStruct(msg.sender, to, amount, message, block.timestamp, keyword));
        transactionCount += 1;
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCounter() public view returns (uint256) {
        return transactionCount;
    }
} 