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
exports.DelegateCallMock__factory = void 0;
var ethers_1 = require("ethers");
var DelegateCallMock__factory = /** @class */ (function (_super) {
    __extends(DelegateCallMock__factory, _super);
    function DelegateCallMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    DelegateCallMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DelegateCallMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DelegateCallMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DelegateCallMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DelegateCallMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return DelegateCallMock__factory;
}(ethers_1.ContractFactory));
exports.DelegateCallMock__factory = DelegateCallMock__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_val",
                type: "uint256"
            },
        ],
        name: "Readed",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_key",
                type: "uint256"
            },
        ],
        name: "read",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "_revertFlag",
                type: "bool"
            },
        ],
        name: "setRevertFlag",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_key",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_val",
                type: "uint256"
            },
        ],
        name: "write",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506102ad806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063381ba140146100465780639c0e3f7a1461005b578063ed2e5a971461006e575b600080fd5b610059610054366004610213565b610081565b005b61005961006936600461023c565b6100e1565b61005961007c36600461025e565b6101cf565b8061008d576000610090565b60015b7f6108217547eb0f6456375f9cad1dc0e5578e94c4334120e3e36fa8a89e5462ce600090815260205260ff167f462254436fc6d6fc89769c1be7cfba1d2f72eac77695d0f0241c9f493adcf1465550565b7f6108217547eb0f6456375f9cad1dc0e5578e94c4334120e3e36fa8a89e5462ce60009081526020527f462254436fc6d6fc89769c1be7cfba1d2f72eac77695d0f0241c9f493adcf14654156101bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f44656c656761746543616c6c4d6f636b2377726974653a205245564552545f4660448201527f4c41470000000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b60009182526020829052604090912055565b600081815260208181526040918290205491519182527fbc729c7b482904bbcfeab92d0354ccfb7a805b45b9c1f13b723d751d99ac70ff910160405180910390a150565b60006020828403121561022557600080fd5b8135801515811461023557600080fd5b9392505050565b6000806040838503121561024f57600080fd5b50508035926020909101359150565b60006020828403121561027057600080fd5b503591905056fea2646970667358221220c672c300f0b27923d54fa0bb48adfd150579d2fb8970dffdd1dc7a60b3169dd364736f6c634300080e0033";
