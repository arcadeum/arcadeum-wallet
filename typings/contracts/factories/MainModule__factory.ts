/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MainModule } from "../MainModule";

export class MainModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_factory: string, overrides?: Overrides): Promise<MainModule> {
    return super.deploy(_factory, overrides || {}) as Promise<MainModule>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): MainModule {
    return super.attach(address) as MainModule;
  }
  connect(signer: Signer): MainModule__factory {
    return super.connect(signer) as MainModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainModule {
    return new Contract(address, _abi, signerOrProvider) as MainModule;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [],
    name: "FACTORY",
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
    inputs: [],
    name: "INIT_CODE_HASH",
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
  "0x60c06040523480156200001157600080fd5b5060405162002cad38038062002cad8339810160408190526200003491620000e2565b80600060405180606001604052806028815260200162002c8560289139306001600160a01b03166040516020018083805190602001908083835b602083106200008f5780518252601f1990920191602091820191016200006e565b51815160209384036101000a60001901801990921691161790529201938452506040805180850381529382019052825192019190912060805250505060601b6001600160601b03191660a0525062000112565b600060208284031215620000f4578081fd5b81516001600160a01b03811681146200010b578182fd5b9392505050565b60805160a05160601c612b4262000143600039806106d55280611b2e5250806106b15280611b5f5250612b426000f3fe6080604052600436106101125760003560e01c80634fcf3eca116100a557806390042baf11610074578063b93ea7ad11610059578063b93ea7ad146103c5578063bc197c81146103e5578063f23a6e611461040557610119565b806390042baf1461039d578063affed0e0146103b057610119565b80634fcf3eca1461031d57806361c2926c1461033d5780637a9a16281461035d5780638c3f55631461037d57610119565b80631a9b2337116100e15780631a9b23371461029957806320c13b0b146102c6578063257671f5146102e65780632dd310001461030857610119565b806301ffc9a7146101f4578063025b22bc1461022a578063150b7a021461024c5780631626ba7e1461027957610119565b3661011957005b60006101486000357fffffffff0000000000000000000000000000000000000000000000000000000016610425565b905073ffffffffffffffffffffffffffffffffffffffff8116156101f1576000808273ffffffffffffffffffffffffffffffffffffffff166000366040518083838082843760405192019450600093509091505080830381855af49150503d80600081146101d2576040519150601f19603f3d011682016040523d82523d6000602084013e6101d7565b606091505b5091509150816101e957805160208201fd5b805160208201f35b50005b34801561020057600080fd5b5061021461020f366004612385565b61047b565b60405161022191906125b7565b60405180910390f35b34801561023657600080fd5b5061024a6102453660046120ea565b610486565b005b34801561025857600080fd5b5061026c6102673660046121bb565b6105a7565b60405161022191906125e4565b34801561028557600080fd5b5061026c61029436600461233b565b6105d1565b3480156102a557600080fd5b506102b96102b4366004612385565b61064a565b6040516102219190612596565b3480156102d257600080fd5b5061026c6102e13660046123d1565b610655565b3480156102f257600080fd5b506102fb6106af565b60405161022191906125c2565b34801561031457600080fd5b506102b96106d3565b34801561032957600080fd5b5061024a610338366004612385565b6106f7565b34801561034957600080fd5b5061024a61035836600461229e565b6107d5565b34801561036957600080fd5b5061024a6103783660046122d1565b61086e565b34801561038957600080fd5b506102fb61039836600461246d565b6108ea565b6102b96103ab36600461243a565b610916565b3480156103bc57600080fd5b506102fb6109ca565b3480156103d157600080fd5b5061024a6103e036600461239f565b6109db565b3480156103f157600080fd5b5061026c610400366004612104565b610ab4565b34801561041157600080fd5b5061026c610420366004612228565b610ae1565b60006104737fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff000000000000000000000000000000000000000000000000000000008416610b0c565b90505b919050565b600061047382610b39565b3330146104de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612ae66027913960400191505060405180910390fd5b6104fd8173ffffffffffffffffffffffffffffffffffffffff16610b96565b610552576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806129cc6039913960400191505060405180910390fd5b61055b81610b9c565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca039181900360200190a150565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b600061061b6105df85610ba0565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c0092505050565b1561064357507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b600061047382610425565b600061067f6105df86866040518083838082843760405192018290039091209350610ba092505050565b156106a757507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b33301461074f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612ae66027913960400191505060405180910390fd5b600061075a82610425565b73ffffffffffffffffffffffffffffffffffffffff1614156107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061282a602b913960400191505060405180910390fd5b6107d2816000610df8565b50565b33301461082d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612ae66027913960400191505060405180910390fd5b600061085e826040516020016108439190612702565b60405160208183030381529060405280519060200120610ba0565b905061086a8183610e5b565b5050565b6108778261102a565b600061088f8385604051602001610843929190612749565b905061089b8183610c00565b6108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d1906126a5565b60405180910390fd5b6108e48185610e5b565b50505050565b60006104737f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610b0c565b6000333014610970576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612ae66027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b60006109d660006108ea565b905090565b333014610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612ae66027913960400191505060405180910390fd5b6000610a3e83610425565b73ffffffffffffffffffffffffffffffffffffffff1614610aaa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061293e602c913960400191505060405180910390fd5b61086a8282610df8565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf000000000000000000000000000000000000000000000000000000001415610b8d57506001610476565b610473826110ce565b3b151590565b3055565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b6042830152605680830194909452825180830390940184526076909101909152815191012090565b6000806000610c0e8461120f565b909250905061ffff821660005b8551831015610dd55760008080610c32898761127d565b975060ff91821694501691506001831415610c5a57610c5189876112f7565b96509050610d7e565b82610c86576060610c6b8a8861136b565b97509050610c798b82611413565b9150828501945050610d7e565b6002831415610d2d57610c9989876112f7565b965090506000610ca98a88611742565b975061ffff1690506060610cbe8b89846117af565b98509050610ccd8c8483611895565b610d22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061290c6032913960400191505060405180910390fd5b505092810192610d7e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806127fe602c913960400191505060405180910390fd5b848282604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051602081830303815290604052805190602001209450505050610c1b565b8361ffff168110158015610ded5750610ded82611add565b979650505050505050565b61086a7fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff00000000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff8416611bbb565b60005b8151811015611025576000828281518110610e7557fe5b602002602001015190506000606082604001515a1015610ec1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190612648565b825115610f5957826060015173ffffffffffffffffffffffffffffffffffffffff168360400151600014610ef9578360400151610efb565b5a5b8460a00151604051610f0d919061257a565b6000604051808303818686f4925050503d8060008114610f49576040519150601f19603f3d011682016040523d82523d6000602084013e610f4e565b606091505b509092509050610fee565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610f8f578460400151610f91565b5a5b908560a00151604051610fa4919061257a565b600060405180830381858888f193505050503d8060008114610fe2576040519150601f19603f3d011682016040523d82523d6000602084013e610fe7565b606091505b5090925090505b811561100f578560405161100291906125c2565b60405180910390a061101a565b61101a838783611be9565b505050600101610e5e565b505050565b60008061103683611c39565b915091506000611045836108ea565b9050808214611080576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190612611565b6001820161108e8482611c52565b7f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f88184826040516110bf929190612762565b60405180910390a15050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061116157507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806111ad57507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b806111f957507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561120657506001610476565b61047382611c7d565b6020810151815160f09190911c90600290811115611278576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806128786027913960400191505060405180910390fd5b915091565b80820160200151825160f882901c9160f01c60ff169060028401908111156112f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a416026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c906014830190811115611364576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806128556023913960400191505060405180910390fd5b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115611364576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806129a96023913960400191505060405180910390fd5b6000808260018451038151811061142657fe5b602001015160f81c60f81b60f81c60ff16905060008360408151811061144857fe5b016020015160f81c9050600061145e8582611cda565b9050600061146d866020611cda565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08111156114e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806127c1603d913960400191505060405180910390fd5b8260ff16601b1415801561150057508260ff16601c14155b15611556576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d81526020018061289f603d913960400191505060405180910390fd5b60018414156115ca5760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156115b9573d6000803e3d6000fd5b5050506020604051035194506116cc565b600284141561167b5760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156115b9573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612a05603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516611738576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806128dc6030913960400191505060405180910390fd5b5050505092915050565b80820160200151825160f09190911c906002830190811115611364576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612a886022913960400191505060405180910390fd5b606060008267ffffffffffffffff811180156117ca57600080fd5b506040519080825280601f01601f1916602001820160405280156117f5576020820181803683370190505b509150838501602001600060205b8581101561181c57908201518482015260208101611803565b8486016020018051939092015190850152525083518383019081111561188d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a676021913960400191505060405180910390fd5b935093915050565b600080826001845103815181106118a857fe5b016020015160f81c905060018114806118c15750600281145b15611905578373ffffffffffffffffffffffffffffffffffffffff166118e78685611413565b73ffffffffffffffffffffffffffffffffffffffff16149150611ad5565b6003811415611a845782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018881526024820192835286516044830152865173ffffffffffffffffffffffffffffffffffffffff891693631626ba7e938b938a9390929160640190602085019080838360005b838110156119bf5781810151838201526020016119a7565b50505050905090810190601f1680156119ec5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b158015611a0a57600080fd5b505afa158015611a1e573d6000803e3d6000fd5b505050506040513d6020811015611a3457600080fd5b50519084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611ad5565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f81526020018061296a603f913960400191505060405180910390fd5b509392505050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021830152603582018490527f0000000000000000000000000000000000000000000000000000000000000000605580840191909152835180840390910181526075909201909252805191012073ffffffffffffffffffffffffffffffffffffffff163014919050565b6040805160208082019590955280820193909352805180840382018152606090930190528151919092012055565b826020015115611bfb57805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051611c2c9291906125cb565b60405180910390a1505050565b606081901c916bffffffffffffffffffffffff90911690565b61086a7f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e8383611bbb565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f025b22bc000000000000000000000000000000000000000000000000000000001415611cd157506001610476565b61047382611d42565b60008160200183511015611d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612aaa603c913960400191505060405180910390fd5b50016020015190565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f389901c7000000000000000000000000000000000000000000000000000000001415611d9657506001610476565b6104738260007fffffffff0000000000000000000000000000000000000000000000000000000082161580611e0c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15611e1957506001610476565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610473565b803573ffffffffffffffffffffffffffffffffffffffff8116811461047657600080fd5b600082601f830112611e97578081fd5b8135602067ffffffffffffffff80831115611eae57fe5b611ebb8283850201612770565b83815282810190868401865b86811015611f97578135890160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838e03011215611f0557898afd5b604080518281018181108a82111715611f1a57fe5b8252611f27848b01611fe7565b8152611f34828501611fe7565b8a8201526060808501358383015260809250611f51838601611e63565b9082015260a08481013583830152928401359289841115611f70578c8dfd5b611f7e8f8c86880101612067565b9082015287525050509285019290850190600101611ec7565b509098975050505050505050565b60008083601f840112611fb6578182fd5b50813567ffffffffffffffff811115611fcd578182fd5b602083019150836020808302850101111561136457600080fd5b8035801515811461047657600080fd5b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461047657600080fd5b60008083601f840112612038578182fd5b50813567ffffffffffffffff81111561204f578182fd5b60208301915083602082850101111561136457600080fd5b600082601f830112612077578081fd5b813567ffffffffffffffff81111561208b57fe5b6120bc60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612770565b8181528460208386010111156120d0578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156120fb578081fd5b61064382611e63565b60008060008060008060008060a0898b03121561211f578384fd5b61212889611e63565b975061213660208a01611e63565b9650604089013567ffffffffffffffff80821115612152578586fd5b61215e8c838d01611fa5565b909850965060608b0135915080821115612176578586fd5b6121828c838d01611fa5565b909650945060808b013591508082111561219a578384fd5b506121a78b828c01612027565b999c989b5096995094979396929594505050565b6000806000806000608086880312156121d2578081fd5b6121db86611e63565b94506121e960208701611e63565b935060408601359250606086013567ffffffffffffffff81111561220b578182fd5b61221788828901612027565b969995985093965092949392505050565b60008060008060008060a08789031215612240578182fd5b61224987611e63565b955061225760208801611e63565b94506040870135935060608701359250608087013567ffffffffffffffff811115612280578283fd5b61228c89828a01612027565b979a9699509497509295939492505050565b6000602082840312156122af578081fd5b813567ffffffffffffffff8111156122c5578182fd5b6106a784828501611e87565b6000806000606084860312156122e5578283fd5b833567ffffffffffffffff808211156122fc578485fd5b61230887838801611e87565b9450602086013593506040860135915080821115612324578283fd5b5061233186828701612067565b9150509250925092565b60008060006040848603121561234f578283fd5b83359250602084013567ffffffffffffffff81111561236c578283fd5b61237886828701612027565b9497909650939450505050565b600060208284031215612396578081fd5b61064382611ff7565b600080604083850312156123b1578182fd5b6123ba83611ff7565b91506123c860208401611e63565b90509250929050565b600080600080604085870312156123e6578182fd5b843567ffffffffffffffff808211156123fd578384fd5b61240988838901612027565b90965094506020870135915080821115612421578384fd5b5061242e87828801612027565b95989497509550505050565b60006020828403121561244b578081fd5b813567ffffffffffffffff811115612461578182fd5b6106a784828501612067565b60006020828403121561247e578081fd5b5035919050565b6000815180845260208085018081965082840281019150828601855b858110156125235782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c09186018290529061250f81870183612530565b9a87019a95505050908401906001016124a1565b5091979650505050505050565b60008151808452612548816020860160208601612794565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161258c818460208701612794565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000838252604060208301526106a76040830184612530565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b6020808252601f908201527f4d61696e4d6f64756c65235f617574683a20494e56414c49445f4e4f4e434500604082015260600190565b60208082526024908201527f4d6f64756c6543616c6c73235f657865637574653a204e4f545f454e4f55474860408201527f5f47415300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4d6f64756c6543616c6c7323657865637574653a20494e56414c49445f53494760408201527f4e41545552450000000000000000000000000000000000000000000000000000606082015260800190565b600060408252600560408301527f73656c663a0000000000000000000000000000000000000000000000000000006060830152608060208301526106436080830184612485565b6000838252604060208301526106a76040830184612485565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561278c57fe5b604052919050565b60005b838110156127af578181015183820152602001612797565b838111156108e4575050600091015256fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75654d6f64756c6541757468235f7369676e617475726556616c69646174696f6e20494e56414c49445f464c41474d6f64756c65486f6f6b732372656d6f7665486f6f6b3a20484f4f4b5f4e4f545f524547495354455245444c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a20494e56414c49445f5349474e41545552454d6f64756c65486f6f6b7323616464486f6f6b3a20484f4f4b5f414c52454144595f524547495354455245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455f545950454c696242797465732372656164427974657336363a204f55545f4f465f424f554e44534d6f64756c6555706461746523757064617465496d706c656d656e746174696f6e3a20494e56414c49445f494d504c454d454e544154494f4e5369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c69624279746573237265616442797465733a204f55545f4f465f424f554e44534c69624279746573237265616455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f52455155495245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a264697066735822122002827f45d312621b219545023a52e88b4bf7786922304d61cb74a6b50ed7d2b364736f6c63430007060033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
