/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LibBytesImpl } from "../LibBytesImpl";

export class LibBytesImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibBytesImpl> {
    return super.deploy(overrides || {}) as Promise<LibBytesImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibBytesImpl {
    return super.attach(address) as LibBytesImpl;
  }
  connect(signer: Signer): LibBytesImpl__factory {
    return super.connect(signer) as LibBytesImpl__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBytesImpl {
    return new Contract(address, _abi, signerOrProvider) as LibBytesImpl;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
    ],
    name: "readBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readBytes66",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "readFirstUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "readUint8Uint8",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bb1806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063afa3102d1161005b578063afa3102d146100e8578063ca9cd01d14610109578063e8a7c08a1461011c578063f0e9da231461014f57600080fd5b8063285badc214610082578063a23ccef6146100b4578063af500fb7146100c7575b600080fd5b610095610090366004610984565b61018e565b6040805161ffff90931683526020830191909152015b60405180910390f35b6100956100c23660046109c6565b6101dc565b6100da6100d53660046109c6565b61022f565b6040519081526020016100ab565b6100fb6100f6366004610a12565b61027c565b6040516100ab929190610a63565b6100fb6101173660046109c6565b6102d2565b61012f61012a3660046109c6565b610319565b6040805160ff9485168152939092166020840152908201526060016100ab565b61016261015d3660046109c6565b610370565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152016100ab565b6000806101d084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103b692505050565b915091505b9250929050565b6000806102228386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506104609050565b915091505b935093915050565b60006102748285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061050e9050565b949350505050565b606060006102c5848488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294939250506105c39050565b9150915094509492505050565b606060006102228386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506106e89050565b60008060006103618487878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107d69050565b92509250925093509350939050565b6000806102228386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506108949050565b6020810151815160f09190911c9060029081111561045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4c696242797465732372656164466972737455696e7431363a204f55545f4f4660448201527f5f424f554e44530000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b915091565b8082016020015160f01c6002820182811161047d5761047d610ade565b83518111156101d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624279746573237265616455696e7431363a204f55545f4f465f424f554e60448201527f44530000000000000000000000000000000000000000000000000000000000006064820152608401610452565b600061051b826020610b0d565b835110156105ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f5245515549524544000000006064820152608401610452565b60006105b8836020610b0d565b909301519392505050565b606060008267ffffffffffffffff8111156105e0576105e0610b4c565b6040519080825280601f01601f19166020018201604052801561060a576020820181803683370190505b509150838501602001600060205b8581101561063157908201518482015260208101610618565b848601602001805193909201519085015252508282018381101561065757610657610ade565b8451811115610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4c69624279746573237265616442797465733a204f55545f4f465f424f554e4460448201527f53000000000000000000000000000000000000000000000000000000000000006064820152608401610452565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905082811161074557610745610ade565b83518111156101d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164427974657336363a204f55545f4f465f424f5560448201527f4e445300000000000000000000000000000000000000000000000000000000006064820152608401610452565b8082016020015160f881901c9060f01c60ff16600283018381116107fc576107fc610ade565b845181111561088d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4c69624279746573237265616455696e743855696e74383a204f55545f4f465f60448201527f424f554e445300000000000000000000000000000000000000000000000000006064820152608401610452565b9250925092565b8082016020015160601c601482018281116108b1576108b1610ade565b83518111156101d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164416464726573733a204f55545f4f465f424f5560448201527f4e445300000000000000000000000000000000000000000000000000000000006064820152608401610452565b60008083601f84011261095457600080fd5b50813567ffffffffffffffff81111561096c57600080fd5b6020830191508360208285010111156101d557600080fd5b6000806020838503121561099757600080fd5b823567ffffffffffffffff8111156109ae57600080fd5b6109ba85828601610942565b90969095509350505050565b6000806000604084860312156109db57600080fd5b833567ffffffffffffffff8111156109f257600080fd5b6109fe86828701610942565b909790965060209590950135949350505050565b60008060008060608587031215610a2857600080fd5b843567ffffffffffffffff811115610a3f57600080fd5b610a4b87828801610942565b90989097506020870135966040013595509350505050565b604081526000835180604084015260005b81811015610a915760208187018101516060868401015201610a74565b81811115610aa3576000606083860101525b50602083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601606001919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60008219821115610b47577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220b982e35d1f10811d2a64dc6c21515ffd6283231c5799d5afae6ccb6291ef2f5b64736f6c634300080e0033";
