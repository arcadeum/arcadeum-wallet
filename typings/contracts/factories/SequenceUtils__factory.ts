/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SequenceUtils } from "../SequenceUtils";

export class SequenceUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides
  ): Promise<SequenceUtils> {
    return super.deploy(
      _factory,
      _mainModule,
      overrides || {}
    ) as Promise<SequenceUtils>;
  }
  getDeployTransaction(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _mainModule, overrides || {});
  }
  attach(address: string): SequenceUtils {
    return super.attach(address) as SequenceUtils;
  }
  connect(signer: Signer): SequenceUtils__factory {
    return super.connect(signer) as SequenceUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SequenceUtils {
    return new Contract(address, _abi, signerOrProvider) as SequenceUtils;
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
      {
        internalType: "address",
        name: "_mainModule",
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
        indexed: true,
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_imageHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_signers",
        type: "bytes",
      },
    ],
    name: "RequiredConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "RequiredSigner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callBalanceOf",
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
    inputs: [],
    name: "callBlockNumber",
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
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
    ],
    name: "callBlockhash",
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
    inputs: [],
    name: "callChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCode",
    outputs: [
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "codeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "callCodeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callCoinbase",
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
    name: "callDifficulty",
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
    inputs: [],
    name: "callGasLeft",
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
    inputs: [],
    name: "callGasLimit",
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
    inputs: [],
    name: "callGasPrice",
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
    inputs: [],
    name: "callOrigin",
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
    name: "callTimestamp",
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
    ],
    name: "lastSignerUpdate",
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
    ],
    name: "lastWalletUpdate",
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
    name: "multiCall",
    outputs: [
      {
        internalType: "bool[]",
        name: "_successes",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "_results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
        ],
        internalType: "struct RequireUtils.Member[]",
        name: "_members",
        type: "tuple[]",
      },
      {
        internalType: "bool",
        name: "_index",
        type: "bool",
      },
    ],
    name: "publishConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_sizeMembers",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_index",
        type: "bool",
      },
    ],
    name: "publishInitialSigners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "requireMinNonce",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
    ],
    name: "requireNonExpired",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002432380380620024328339810160408190526200003491620000cd565b8181816001600160a01b031660a0816001600160a01b031660601b815250506040518060600160405280602881526020016200240a60289139816001600160a01b03166040516020016200008a92919062000104565b60408051601f198184030181529190528051602090910120608052506200014692505050565b80516001600160a01b0381168114620000c857600080fd5b919050565b60008060408385031215620000e0578182fd5b620000eb83620000b0565b9150620000fb60208401620000b0565b90509250929050565b60008351815b818110156200012657602081870181015185830152016200010a565b81811115620001355782828501525b509190910191825250602001919050565b60805160a05160601c61229362000177600039806105e95280610a6252508061060d5280610a8652506122936000f3fe60806040526004361061016a5760003560e01c8063aeea5fb5116100cb578063d1db39071161007f578063e90f13e711610059578063e90f13e71461033f578063f209883a14610394578063ffd7d741146103a95761016a565b8063d1db39071461033f578063d5b5337f14610354578063e717aba9146103745761016a565b8063c272d5c3116100b0578063c272d5c3146102dd578063c39f2d5c146102f2578063c66764e1146103125761016a565b8063aeea5fb5146102a8578063b472f0a2146102bd5761016a565b8063543196eb116101225780637f29d538116101075780637f29d53814610251578063984395bc1461027157806398f9fbc4146102935761016a565b8063543196eb146102115780637082503b146102315761016a565b806343d9c9351161015357806343d9c935146101ba57806344d466c2146101cf57806348acd29f146101f15761016a565b80630fdecfac1461016f5780631cd05dc41461019a575b600080fd5b34801561017b57600080fd5b506101846103ca565b6040516101919190611c05565b60405180910390f35b3480156101a657600080fd5b506101846101b536600461165f565b6103ce565b3480156101c657600080fd5b506101846103e0565b3480156101db57600080fd5b506101ef6101ea366004611719565b6103e8565b005b3480156101fd57600080fd5b5061018461020c36600461165f565b610762565b34801561021d57600080fd5b5061018461022c36600461165f565b610780565b34801561023d57600080fd5b506101ef61024c366004611680565b610784565b34801561025d57600080fd5b506101ef61026c366004611903565b610bdc565b34801561027d57600080fd5b50610286610c18565b6040516101919190611a75565b34801561029f57600080fd5b50610286610c1c565b3480156102b457600080fd5b50610184610c20565b3480156102c957600080fd5b506101ef6102d83660046116f0565b610c24565b3480156102e957600080fd5b50610184610d02565b3480156102fe57600080fd5b5061018461030d36600461165f565b610d06565b34801561031e57600080fd5b5061033261032d36600461165f565b610d0a565b6040516101919190611c3a565b34801561034b57600080fd5b50610184610d4f565b34801561036057600080fd5b5061018461036f366004611903565b610d53565b34801561038057600080fd5b5061018461038f36600461165f565b610d57565b3480156103a057600080fd5b50610184610d69565b6103bc6103b73660046117a9565b610d6d565b604051610191929190611a96565b4690565b60006020819052908152604090205481565b60005a905090565b8360005b83811015610481578185858381811061040157fe5b9050604002016000013586868481811061041757fe5b905060400201602001602081019061042f919061165f565b60405160200161044193929190611c0e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012091506001016103ec565b506000808773ffffffffffffffffffffffffffffffffffffffff166351605d8060e01b6040516020016104b491906119c9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526104ec916119f6565b6000604051808303816000865af19150503d8060008114610529576040519150601f19603f3d011682016040523d82523d6000602084013e61052e565b606091505b5091509150818015610541575080516020145b156105a65760008180602001905181019061055c91906118eb565b90508381146105a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611f5b565b60405180910390fd5b5061069b565b60405173ffffffffffffffffffffffffffffffffffffffff891690610635907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611965565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff161461069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611fb8565b828873ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee8989896040516020016106e8929190611b3c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610721929161203b565b60405180910390a383156107585773ffffffffffffffffffffffffffffffffffffffff881660009081526001602052604090204390555b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116315b919050565b3f90565b60008061079084610fdd565b915091506000804690508089896040516020016107af93929190611a12565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012091505061ffff831660008767ffffffffffffffff8111801561080657600080fd5b5060405190808252806020026020018201604052801561084057816020015b61082d611591565b8152602001906001900390816108255790505b50905060005b87518510156109e6576000808061085d8b8961104b565b995060ff918216945016915060018314156108855761087c8b896110c5565b98509050610967565b826109355760606108968c8a611139565b995090506108a488826111e1565b91508173ffffffffffffffffffffffffffffffffffffffff168f73ffffffffffffffffffffffffffffffffffffffff167f600ba597427f042bcd559a0d06fa1732cc104d6dd43cbe8845b5a0e804b2b39f60405160405180910390a38a1561092f5773ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090204390555b50610967565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611c4d565b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff1681525085858151811061099e57fe5b602002602001018190525083806001019450508582826040516020016109c693929190611c0e565b604051602081830303815290604052805190602001209550505050610846565b888114610a1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611efe565b60405173ffffffffffffffffffffffffffffffffffffffff8c1690610aae907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611965565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff1614610b14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611e1e565b828b73ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee8885604051602001610b5f9190611ba0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610b989291612016565b60405180910390a38615610bcf5773ffffffffffffffffffffffffffffffffffffffff8b1660009081526001602052604090204390555b5050505050505050505050565b804210610c15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611dc1565b50565b3290565b4190565b4490565b600080610c3083611510565b9150915060008473ffffffffffffffffffffffffffffffffffffffff16638c3f5563846040518263ffffffff1660e01b8152600401610c6f9190611c05565b60206040518083038186803b158015610c8757600080fd5b505afa158015610c9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbf91906118eb565b905081811015610cfb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611d64565b5050505050565b3a90565b3b90565b60408051603f833b9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092528181529080600060208401853c50919050565b4590565b4090565b60016020526000908152604090205481565b4290565b606080825167ffffffffffffffff81118015610d8857600080fd5b50604051908082528060200260200182016040528015610db2578160200160208202803683370190505b509150825167ffffffffffffffff81118015610dcd57600080fd5b50604051908082528060200260200182016040528015610e0157816020015b6060815260200190600190039081610dec5790505b50905060005b8351811015610fd7576000848281518110610e1e57fe5b60200260200101519050806000015115610e64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611ea1565b80604001515a1015610ea2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611d07565b806060015173ffffffffffffffffffffffffffffffffffffffff1681608001518260400151600014610ed8578260400151610eda565b5a5b908360a00151604051610eed91906119f6565b600060405180830381858888f193505050503d8060008114610f2b576040519150601f19603f3d011682016040523d82523d6000602084013e610f30565b606091505b50858481518110610f3d57fe5b60200260200101858581518110610f5057fe5b6020026020010182905282151515158152505050838281518110610f7057fe5b602002602001015180610f985750848281518110610f8a57fe5b602002602001015160200151155b610fce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059790611caa565b50600101610e07565b50915091565b6020810151815160f09190911c90600290811115611046576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806121096027913960400191505060405180910390fd5b915091565b80820160200151825160f882901c9160f01c60ff169060028401908111156110be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806121fc6026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c906014830190811115611132576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806120e66023913960400191505060405180910390fd5b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508351811115611132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061219d6023913960400191505060405180910390fd5b600080826001845103815181106111f457fe5b602001015160f81c60f81b60f81c60ff16905060008360408151811061121657fe5b016020015160f81c9050600061122c8582611529565b9050600061123b866020611529565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08111156112b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806120a9603d913960400191505060405180910390fd5b8260ff16601b141580156112ce57508260ff16601c14155b15611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612130603d913960400191505060405180910390fd5b60018414156113985760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611387573d6000803e3d6000fd5b50505060206040510351945061149a565b60028414156114495760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611387573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001806121c0603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516611506576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061216d6030913960400191505060405180910390fd5b5050505092915050565b606081901c916bffffffffffffffffffffffff90911690565b60008160200183511015611588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612222603c913960400191505060405180910390fd5b50016020015190565b604080518082019091526000808252602082015290565b803573ffffffffffffffffffffffffffffffffffffffff8116811461077b57600080fd5b8035801515811461077b57600080fd5b600082601f8301126115ec578081fd5b813567ffffffffffffffff81111561160057fe5b61163160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612054565b818152846020838601011115611645578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611670578081fd5b611679826115a8565b9392505050565b600080600080600060a08688031215611697578081fd5b6116a0866115a8565b94506020860135935060408601359250606086013567ffffffffffffffff8111156116c9578182fd5b6116d5888289016115dc565b9250506116e4608087016115cc565b90509295509295909350565b60008060408385031215611702578182fd5b61170b836115a8565b946020939093013593505050565b600080600080600060808688031215611730578081fd5b611739866115a8565b945060208601359350604086013567ffffffffffffffff8082111561175c578283fd5b818801915088601f83011261176f578283fd5b81358181111561177d578384fd5b896020604083028501011115611791578384fd5b6020830195508094505050506116e4606087016115cc565b600060208083850312156117bb578182fd5b823567ffffffffffffffff808211156117d2578384fd5b818501915085601f8301126117e5578384fd5b8135818111156117f157fe5b6117fe8485830201612054565b81815284810190848601875b848110156118dc578135870160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838f03011215611848578a8bfd5b604080518281018181108b8211171561185d57fe5b825261186a848d016115cc565b81526118778285016115cc565b8c82015260608085013583830152611891608086016115a8565b9082015260a084810135608083015292840135929150898311156118b3578c8dfd5b6118c18f8d858701016115dc565b9181019190915286525050928701929087019060010161180a565b50909998505050505050505050565b6000602082840312156118fc578081fd5b5051919050565b600060208284031215611914578081fd5b5035919050565b60008151808452611933816020860160208601612078565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260040190565b60008251611a08818460208701612078565b9190910192915050565b7f19010000000000000000000000000000000000000000000000000000000000008152600281019390935260609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166022830152603682015260560190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b604080825283519082018190526000906020906060840190828701845b82811015611ad1578151151584529284019290840190600101611ab3565b5050508381038285015284518082528282019080840283018401878501865b838110156118dc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018552611b2a83835161191b565b94870194925090860190600101611af0565b6020808252818101839052600090604080840186845b87811015611b93578135835273ffffffffffffffffffffffffffffffffffffffff611b7e8684016115a8565b16838601529183019190830190600101611b52565b5090979650505050505050565b602080825282518282018190526000919060409081850190868401855b82811015611bf85781518051855286015173ffffffffffffffffffffffffffffffffffffffff16868501529284019290850190600101611bbd565b5091979650505050505050565b90815260200190565b928352602083019190915273ffffffffffffffffffffffffffffffffffffffff16604082015260600190565b600060208252611679602083018461191b565b6020808252603a908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f5349474e41545552455f464c4147000000000000606082015260800190565b60208082526027908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2043414c4c5f5260408201527f4556455254454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a204e4f545f454e60408201527f4f5547485f474153000000000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f526571756972655574696c7323726571756972654d696e4e6f6e63653a204e4f60408201527f4e43455f42454c4f575f52455155495245440000000000000000000000000000606082015260800190565b60208082526027908201527f526571756972655574696c7323726571756972654e6f6e457870697265643a2060408201527f4558504952454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526048908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20554e45585045435445445f434f554e5445524641435455414c5f494d60608201527f4147455f48415348000000000000000000000000000000000000000000000000608082015260a00190565b60208082526032908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2064656c65676160408201527f746543616c6c206e6f7420616c6c6f7765640000000000000000000000000000606082015260800190565b60208082526039908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f4d454d424552535f434f554e5400000000000000606082015260800190565b60208082526031908201527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860408201527f5045435445445f494d4147455f48415348000000000000000000000000000000606082015260800190565b602080825260409082018190527f526571756972655574696c73237075626c697368436f6e6669673a20554e4558908201527f5045435445445f434f554e5445524641435455414c5f494d4147455f48415348606082015260800190565b600061ffff8416825260406020830152612033604083018461191b565b949350505050565b600083825260406020830152612033604083018461191b565b60405181810167ffffffffffffffff8111828210171561207057fe5b604052919050565b60005b8381101561209357818101518382015260200161207b565b838111156120a2576000848401525b5050505056fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75654c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524c696242797465732372656164427974657336363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a264697066735822122078d9339fdc192a9c443b09e0cead73fc6bc9e782f8982082bad9939c241fb1ab64736f6c63430007060033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
