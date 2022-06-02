"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Migrations__factory = void 0;
var ethers_1 = require("ethers");
var Migrations__factory = /** @class */ (function (_super) {
    __extends(Migrations__factory, _super);
    function Migrations__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Migrations__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Migrations__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Migrations__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Migrations__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Migrations__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return Migrations__factory;
}(ethers_1.ContractFactory));
exports.Migrations__factory = Migrations__factory;
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "last_completed_migration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "completed",
                type: "uint256"
            },
        ],
        name: "setCompleted",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "new_address",
                type: "address"
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610239806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100665780638da5cb5b14610082578063fdacd576146100c7575b600080fd5b61006461005f3660046101ad565b6100da565b005b61006f60015481565b6040519081526020015b60405180910390f35b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610079565b6100646100d53660046101ea565b610189565b60005473ffffffffffffffffffffffffffffffffffffffff163303610186576001546040517ffdacd576000000000000000000000000000000000000000000000000000000008152829173ffffffffffffffffffffffffffffffffffffffff83169163fdacd576916101529160040190815260200190565b600060405180830381600087803b15801561016c57600080fd5b505af1158015610180573d6000803e3d6000fd5b50505050505b50565b60005473ffffffffffffffffffffffffffffffffffffffff16330361018657600155565b6000602082840312156101bf57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101e357600080fd5b9392505050565b6000602082840312156101fc57600080fd5b503591905056fea2646970667358221220f3c011550c25db791b954201a5bf6812ebecf2cb9f720048fb11b086e9b953a864736f6c634300080e0033";
