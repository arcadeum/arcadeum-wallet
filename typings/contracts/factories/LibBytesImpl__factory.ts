/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LibBytesImpl } from "../LibBytesImpl";

export class LibBytesImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LibBytesImpl> {
    return super.deploy(overrides || {}) as Promise<LibBytesImpl>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
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
  "0x608060405234801561001057600080fd5b50610bc7806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063afa3102d1161005b578063afa3102d14610202578063ca9cd01d146102f7578063e8a7c08a14610367578063f0e9da23146103fb5761007d565b8063285badc214610082578063a23ccef614610110578063af500fb714610180575b600080fd5b6100f26004803603602081101561009857600080fd5b8101906020810181356401000000008111156100b357600080fd5b8201836020820111156100c557600080fd5b803590602001918460018302840111640100000000831117156100e757600080fd5b50909250905061049b565b6040805161ffff909316835260208301919091528051918290030190f35b6100f26004803603604081101561012657600080fd5b81019060208101813564010000000081111561014157600080fd5b82018360208201111561015357600080fd5b8035906020019184600183028401116401000000008311171561017557600080fd5b9193509150356104e9565b6101f06004803603604081101561019657600080fd5b8101906020810181356401000000008111156101b157600080fd5b8201836020820111156101c357600080fd5b803590602001918460018302840111640100000000831117156101e557600080fd5b91935091503561053b565b60408051918252519081900360200190f35b6102786004803603606081101561021857600080fd5b81019060208101813564010000000081111561023357600080fd5b82018360208201111561024557600080fd5b8035906020019184600183028401116401000000008311171561026757600080fd5b919350915080359060200135610588565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156102bb5781810151838201526020016102a3565b50505050905090810190601f1680156102e85780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6102786004803603604081101561030d57600080fd5b81019060208101813564010000000081111561032857600080fd5b82018360208201111561033a57600080fd5b8035906020019184600183028401116401000000008311171561035c57600080fd5b9193509150356105de565b6103d76004803603604081101561037d57600080fd5b81019060208101813564010000000081111561039857600080fd5b8201836020820111156103aa57600080fd5b803590602001918460018302840111640100000000831117156103cc57600080fd5b919350915035610625565b6040805160ff94851681529290931660208301528183015290519081900360600190f35b61046b6004803603604081101561041157600080fd5b81019060208101813564010000000081111561042c57600080fd5b82018360208201111561043e57600080fd5b8035906020019184600183028401116401000000008311171561046057600080fd5b91935091503561067c565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091528051918290030190f35b6000806104dd84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506106c292505050565b915091505b9250929050565b60008061052f8386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107309050565b91509150935093915050565b60006105808285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061079d9050565b949350505050565b606060006105d1848488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294939250506108059050565b9150915094509492505050565b6060600061052f8386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506108f09050565b600080600061066d8487878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506109989050565b92509250925093509350939050565b60008061052f8386868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610a129050565b6020810151815160f09190911c9060029081111561072b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610aa36027913960400191505060405180910390fd5b915091565b80820160200151825160f09190911c9060028301908111156104e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610b346022913960400191505060405180910390fd5b600081602001835110156107fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180610b56603c913960400191505060405180910390fd5b50016020015190565b606060008267ffffffffffffffff8111801561082057600080fd5b506040519080825280601f01601f19166020018201604052801561084b576020820181803683370190505b509150600080858701602001600060205b878110156108755790820151868201526020810161085c565b868801602001805193909201519087015252865186860193508311156108e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610b136021913960400191505060405180910390fd5b5050935093915050565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905083518111156104e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610aca6023913960400191505060405180910390fd5b80820160200151825160f882901c9160f01c60ff16906002840190811115610a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610aed6026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c9060148301908111156104e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610a806023913960400191505060405180910390fdfe4c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657336363a204f55545f4f465f424f554e44534c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c69624279746573237265616442797465733a204f55545f4f465f424f554e44534c69624279746573237265616455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a2646970667358221220bc84fc79f5139c87b8a18fc5a2fea463ec00c37cc3ad2b1610752e09d7c2c45864736f6c63430007060033";
