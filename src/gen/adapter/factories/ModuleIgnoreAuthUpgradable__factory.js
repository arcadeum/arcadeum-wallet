"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.ModuleIgnoreAuthUpgradable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "ImageHashIsZero",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "InvalidNestedSignature",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "bytes32",
                name: "_s",
                type: "bytes32"
            },
        ],
        name: "InvalidSValue",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_flag",
                type: "uint256"
            },
        ],
        name: "InvalidSignatureFlag",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "InvalidSignatureLength",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_type",
                type: "uint256"
            },
        ],
        name: "InvalidSignatureType",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_v",
                type: "uint256"
            },
        ],
        name: "InvalidVValue",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "_self",
                type: "address"
            },
        ],
        name: "OnlySelfAuth",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadAddressOutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadBytes32OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadBytes66OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_datam",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_length",
                type: "uint256"
            },
        ],
        name: "ReadBytesOutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "ReadFirstUint8OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadUint16OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "ReadUint8Uint8OutOfBounds",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
        ],
        name: "SignerIsAddress0",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "_type",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "_recoverMode",
                type: "bool"
            },
        ],
        name: "UnsupportedSignatureType",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "newImageHash",
                type: "bytes32"
            },
        ],
        name: "ImageHashUpdated",
        type: "event"
    },
    {
        inputs: [],
        name: "imageHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_imageHash",
                type: "bytes32"
            },
        ],
        name: "updateImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var ModuleIgnoreAuthUpgradable__factory = /** @class */ (function () {
    function ModuleIgnoreAuthUpgradable__factory() {
    }
    ModuleIgnoreAuthUpgradable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ModuleIgnoreAuthUpgradable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ModuleIgnoreAuthUpgradable__factory.abi = _abi;
    return ModuleIgnoreAuthUpgradable__factory;
}());
exports.ModuleIgnoreAuthUpgradable__factory = ModuleIgnoreAuthUpgradable__factory;
