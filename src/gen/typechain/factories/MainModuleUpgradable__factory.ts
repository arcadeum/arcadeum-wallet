/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MainModuleUpgradable } from "../MainModuleUpgradable";

export class MainModuleUpgradable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MainModuleUpgradable> {
    return super.deploy(overrides || {}) as Promise<MainModuleUpgradable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MainModuleUpgradable {
    return super.attach(address) as MainModuleUpgradable;
  }
  connect(signer: Signer): MainModuleUpgradable__factory {
    return super.connect(signer) as MainModuleUpgradable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainModuleUpgradable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MainModuleUpgradable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "CreatedContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "newImageHash",
        type: "bytes32",
      },
    ],
    name: "ImageHashUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "ImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
    ],
    name: "TxExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "TxFailed",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "createContract",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "imageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "readHook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readNonce",
    outputs: [
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
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
    ],
    name: "selfExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_imageHash",
        type: "bytes32",
      },
    ],
    name: "updateImageHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506131c3806100206000396000f3fe6080604052600436106101125760003560e01c806351605d80116100a557806390042baf11610074578063b93ea7ad11610059578063b93ea7ad14610428578063bc197c8114610448578063f23a6e611461049057610119565b806390042baf14610400578063affed0e01461041357610119565b806351605d801461037d57806361c2926c146103a05780637a9a1628146103c05780638c3f5563146103e057610119565b80631a9b2337116100e15780631a9b2337146102d857806320c13b0b1461031d578063295614261461033d5780634fcf3eca1461035d57610119565b806301ffc9a7146101ed578063025b22bc14610222578063150b7a02146102425780631626ba7e146102b857610119565b3661011957005b60006101486000357fffffffff00000000000000000000000000000000000000000000000000000000166104d6565b905073ffffffffffffffffffffffffffffffffffffffff8116156101eb576000808273ffffffffffffffffffffffffffffffffffffffff1660003660405161019192919061279d565b600060405180830381855af49150503d80600081146101cc576040519150601f19603f3d011682016040523d82523d6000602084013e6101d1565b606091505b5091509150816101e357805160208201fd5b805160208201f35b005b3480156101f957600080fd5b5061020d6102083660046127db565b61052a565b60405190151581526020015b60405180910390f35b34801561022e57600080fd5b506101eb61023d366004612821565b610535565b34801561024e57600080fd5b5061028761025d36600461287e565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610219565b3480156102c457600080fd5b506102876102d33660046128ed565b6106c2565b3480156102e457600080fd5b506102f86102f33660046127db565b6107b3565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610219565b34801561032957600080fd5b50610287610338366004612939565b6107be565b34801561034957600080fd5b506101eb6103583660046129a5565b61088e565b34801561036957600080fd5b506101eb6103783660046127db565b610a03565b34801561038957600080fd5b50610392610bb5565b604051908152602001610219565b3480156103ac57600080fd5b506101eb6103bb366004612c40565b610be4565b3480156103cc57600080fd5b506101eb6103db366004612c75565b610d48565b3480156103ec57600080fd5b506103926103fb3660046129a5565b610e11565b6102f861040e366004612ce2565b610e3d565b34801561041f57600080fd5b50610392610f27565b34801561043457600080fd5b506101eb610443366004612d17565b610f33565b34801561045457600080fd5b50610287610463366004612d91565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561049c57600080fd5b506102876104ab366004612e4c565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006105247fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff0000000000000000000000000000000000000000000000000000000084166110f8565b92915050565b600061052482611156565b3330146105c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81163b61066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f4d6f64756c6555706461746523757064617465496d706c656d656e746174696f60448201527f6e3a20494e56414c49445f494d504c454d454e544154494f4e0000000000000060648201526084016105c0565b610675813055565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03906020015b60405180910390a150565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016604283015260568083018790528351808403909101815260769092019092528051910120600090610784905b84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111b292505050565b156107ac57507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b6000610524826104d6565b600061085e61074886866040516107d692919061279d565b604080519182900382207f19010000000000000000000000000000000000000000000000000000000000006020808501919091524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850192909252825180850390920182526076909301909152805191012090565b1561088657507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b33301461091d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084016105c0565b806109aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f4d6f64756c654175746855706772616461626c6523757064617465496d61676560448201527f4861736820494e56414c49445f494d4147455f4841534800000000000000000060648201526084016105c0565b6109d37fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8829055565b6040518181527f307ed6bd941ee9fc80f369c94af5fa11e25bab5102a6140191756c5474a30bfa906020016106b7565b333014610a92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084016105c0565b6000610a9d826104d6565b73ffffffffffffffffffffffffffffffffffffffff1603610b40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4d6f64756c65486f6f6b732372656d6f7665486f6f6b3a20484f4f4b5f4e4f5460448201527f5f5245474953544552454400000000000000000000000000000000000000000060648201526084016105c0565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff00000000000000000000000000000000000000000000000000000000841682840152825180830384018152606090920190925280519101206000905550565b50565b6000610bdf7fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf85490565b905090565b333014610c73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084016105c0565b6000610d3882604051602001610c899190612fe7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b9050610d44818361143d565b5050565b610d518261166d565b6000610d698385604051602001610c8992919061302e565b9050610d7581836111b2565b610e01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4d6f64756c6543616c6c7323657865637574653a20494e56414c49445f53494760448201527f4e4154555245000000000000000000000000000000000000000000000000000060648201526084016105c0565b610e0b818561143d565b50505050565b60006105247f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e836110f8565b6000333014610ece576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084016105c0565b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b6000610bdf6000610e11565b333014610fc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084016105c0565b6000610fcd836104d6565b73ffffffffffffffffffffffffffffffffffffffff1614611070576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4d6f64756c65486f6f6b7323616464486f6f6b3a20484f4f4b5f414c5245414460448201527f595f52454749535445524544000000000000000000000000000000000000000060648201526084016105c0565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401528251808303840181526060909201909252805191012073ffffffffffffffffffffffffffffffffffffffff821690555050565b6000808383604051602001611117929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016111a957506001919050565b6105248261178f565b60008060006111c0846118d0565b909250905061ffff821660005b855183101561141a57600080806111e48987611975565b975060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830161122a576112218987611a33565b965090506113ca565b8261125d57606061123b8a88611ae8565b975090506112498b82611bd6565b91506112558386613076565b9450506113ca565b600283036113425761126f8987611a33565b96509050600061127f8a8861206d565b975061ffff16905060606112948b898461211b565b985090506112a38c8483612248565b61132f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60448201527f20494e56414c49445f5349474e4154555245000000000000000000000000000060648201526084016105c0565b6113398487613076565b955050506113ca565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e2060448201527f494e56414c49445f464c4147000000000000000000000000000000000000000060648201526084016105c0565b604080516020810187905290810183905273ffffffffffffffffffffffffffffffffffffffff821660608201526080016040516020818303038152906040528051906020012094505050506111cd565b8361ffff168110158015611432575061143282612469565b979650505050505050565b60005b815181101561166857600082828151811061145d5761145d61308e565b602002602001015190506000606082604001515a10156114fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4d6f64756c6543616c6c73235f657865637574653a204e4f545f454e4f55474860448201527f5f4741530000000000000000000000000000000000000000000000000000000060648201526084016105c0565b82511561159657826060015173ffffffffffffffffffffffffffffffffffffffff168360400151600014611536578360400151611538565b5a5b8460a0015160405161154a91906130bd565b6000604051808303818686f4925050503d8060008114611586576040519150601f19603f3d011682016040523d82523d6000602084013e61158b565b606091505b50909250905061162b565b826060015173ffffffffffffffffffffffffffffffffffffffff16836080015184604001516000146115cc5784604001516115ce565b5a5b908560a001516040516115e191906130bd565b600060405180830381858888f193505050503d806000811461161f576040519150601f19603f3d011682016040523d82523d6000602084013e611624565b606091505b5090925090505b81156116475760405186815260200160405180910390a0611652565b61165283878361249c565b5050508080611660906130d9565b915050611440565b505050565b600080611679836124ec565b91509150600061168883610e11565b90508082146116f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4d61696e4d6f64756c65235f617574683a20494e56414c49445f4e4f4e43450060448201526064016105c0565b6000611700836001613076565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830188905282518083038401815260609092019092528051910120819055905060408051858152602081018390527f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881910160405180910390a15050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061182257507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061186e57507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b806118ba57507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b156118c757506001919050565b61052482612515565b6020810151815160f09190911c90600290811115611970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4c696242797465732372656164466972737455696e7431363a204f55545f4f4660448201527f5f424f554e44530000000000000000000000000000000000000000000000000060648201526084016105c0565b915091565b8082016020015160f881901c9060f01c60ff166002830183811161199b5761199b613111565b8451811115611a2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4c69624279746573237265616455696e743855696e74383a204f55545f4f465f60448201527f424f554e4453000000000000000000000000000000000000000000000000000060648201526084016105c0565b9250925092565b8082016020015160601c60148201828111611a5057611a50613111565b8351811115611ae1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164416464726573733a204f55545f4f465f424f5560448201527f4e4453000000000000000000000000000000000000000000000000000000000060648201526084016105c0565b9250929050565b604080516042808252608082019092526060916000919060208201818036833701905050915082840160200180516020840152602081015160408401526022810151604284015250604283019050828111611b4557611b45613111565b8351811115611ae1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164427974657336363a204f55545f4f465f424f5560448201527f4e4453000000000000000000000000000000000000000000000000000000000060648201526084016105c0565b60008151604214611c69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265206c656e67746800000000000060648201526084016105c0565b60008260018451611c7a9190613140565b81518110611c8a57611c8a61308e565b602001015160f81c60f81b60f81c60ff169050600083604081518110611cb257611cb261308e565b016020015160f81c90506000611cc88582612571565b90506000611cd7866020612571565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115611d89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202773272076616c756500000060648201526084016105c0565b8260ff16601b14158015611da157508260ff16601c14155b15611e2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202776272076616c756500000060648201526084016105c0565b60018403611e9b5760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015611e8a573d6000803e3d6000fd5b505050602060405103519450611fc0565b60028403611f38576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001611e68565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20554e535550504f525445445f5349474e41545552455f545950450000000060648201526084016105c0565b73ffffffffffffffffffffffffffffffffffffffff8516612063576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20494e56414c49445f5349474e45520000000000000000000000000000000060648201526084016105c0565b5050505092915050565b8082016020015160f01c6002820182811161208a5761208a613111565b8351811115611ae1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624279746573237265616455696e7431363a204f55545f4f465f424f554e60448201527f445300000000000000000000000000000000000000000000000000000000000060648201526084016105c0565b606060008267ffffffffffffffff811115612138576121386129be565b6040519080825280601f01601f191660200182016040528015612162576020820181803683370190505b509150838501602001600060205b8581101561218957908201518482015260208101612170565b84860160200180519390920151908501525250828201838110156121af576121af613111565b8451811115612240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4c69624279746573237265616442797465733a204f55545f4f465f424f554e4460448201527f530000000000000000000000000000000000000000000000000000000000000060648201526084016105c0565b935093915050565b600080826001845161225a9190613140565b8151811061226a5761226a61308e565b016020015160f81c905060018114806122835750600281145b156122c7578373ffffffffffffffffffffffffffffffffffffffff166122a98685611bd6565b73ffffffffffffffffffffffffffffffffffffffff16149150612461565b600381036123d95782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e9061234a9089908890600401613157565b602060405180830381865afa158015612367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061238b9190613170565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150612461565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e41545552455f545950450060648201526084016105c0565b509392505050565b600081158015906105245750507fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8541490565b8260200151156124ae57805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd782826040516124df929190613157565b60405180910390a1505050565b60008061250760016c01000000000000000000000000613140565b606084901c94931692915050565b60007ffda4dd44000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161256857506001919050565b61052482612626565b600061257e826020613076565b8351101561260e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f52455155495245440000000060648201526084016105c0565b600061261b836020613076565b909301519392505050565b60007fc766fe39000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161267957506001919050565b6105248260007f87c9b65a000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316016126d057506001919050565b6105248260007fffffffff000000000000000000000000000000000000000000000000000000008216158061274657507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b1561275357506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610524565b8183823760009101908152919050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610bb257600080fd5b6000602082840312156127ed57600080fd5b81356107ac816127ad565b803573ffffffffffffffffffffffffffffffffffffffff8116811461281c57600080fd5b919050565b60006020828403121561283357600080fd5b6107ac826127f8565b60008083601f84011261284e57600080fd5b50813567ffffffffffffffff81111561286657600080fd5b602083019150836020828501011115611ae157600080fd5b60008060008060006080868803121561289657600080fd5b61289f866127f8565b94506128ad602087016127f8565b935060408601359250606086013567ffffffffffffffff8111156128d057600080fd5b6128dc8882890161283c565b969995985093965092949392505050565b60008060006040848603121561290257600080fd5b83359250602084013567ffffffffffffffff81111561292057600080fd5b61292c8682870161283c565b9497909650939450505050565b6000806000806040858703121561294f57600080fd5b843567ffffffffffffffff8082111561296757600080fd5b6129738883890161283c565b9096509450602087013591508082111561298c57600080fd5b506129998782880161283c565b95989497509550505050565b6000602082840312156129b757600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715612a1057612a106129be565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612a5d57612a5d6129be565b604052919050565b8035801515811461281c57600080fd5b600082601f830112612a8657600080fd5b813567ffffffffffffffff811115612aa057612aa06129be565b612ad160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612a16565b818152846020838601011115612ae657600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f830112612b1457600080fd5b8135602067ffffffffffffffff80831115612b3157612b316129be565b8260051b612b40838201612a16565b9384528581018301938381019088861115612b5a57600080fd5b84880192505b85831015612c3457823584811115612b785760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315612bae5760008081fd5b612bb66129ed565b612bc1888401612a65565b81526040612bd0818501612a65565b898301526060808501358284015260809150612bed8286016127f8565b9083015260a08481013582840152928401359288841115612c1057600091508182fd5b612c1e8e8b86880101612a75565b9083015250845250509184019190840190612b60565b98975050505050505050565b600060208284031215612c5257600080fd5b813567ffffffffffffffff811115612c6957600080fd5b61088684828501612b03565b600080600060608486031215612c8a57600080fd5b833567ffffffffffffffff80821115612ca257600080fd5b612cae87838801612b03565b9450602086013593506040860135915080821115612ccb57600080fd5b50612cd886828701612a75565b9150509250925092565b600060208284031215612cf457600080fd5b813567ffffffffffffffff811115612d0b57600080fd5b61088684828501612a75565b60008060408385031215612d2a57600080fd5b8235612d35816127ad565b9150612d43602084016127f8565b90509250929050565b60008083601f840112612d5e57600080fd5b50813567ffffffffffffffff811115612d7657600080fd5b6020830191508360208260051b8501011115611ae157600080fd5b60008060008060008060008060a0898b031215612dad57600080fd5b612db6896127f8565b9750612dc460208a016127f8565b9650604089013567ffffffffffffffff80821115612de157600080fd5b612ded8c838d01612d4c565b909850965060608b0135915080821115612e0657600080fd5b612e128c838d01612d4c565b909650945060808b0135915080821115612e2b57600080fd5b50612e388b828c0161283c565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215612e6557600080fd5b612e6e876127f8565b9550612e7c602088016127f8565b94506040870135935060608701359250608087013567ffffffffffffffff811115612ea657600080fd5b612eb289828a0161283c565b979a9699509497509295939492505050565b60005b83811015612edf578181015183820152602001612ec7565b83811115610e0b5750506000910152565b60008151808452612f08816020860160208601612ec4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b85811015612fda5782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c091860182905290612fc681870183612ef0565b9a87019a9550505090840190600101612f58565b5091979650505050505050565b60408152600560408201527f73656c663a00000000000000000000000000000000000000000000000000000060608201526080602082015260006107ac6080830184612f3a565b8281526040602082015260006108866040830184612f3a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561308957613089613047565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082516130cf818460208701612ec4565b9190910192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361310a5761310a613047565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60008282101561315257613152613047565b500390565b8281526040602082015260006108866040830184612ef0565b60006020828403121561318257600080fd5b81516107ac816127ad56fea264697066735822122099f4c3250313ce60337f233c69bc908ffa15bfb5c33e097966306e0f5d32cfad64736f6c634300080e0033";
