/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SequenceUtils } from "../SequenceUtils";

export class SequenceUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
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
    overrides?: Overrides & { from?: string | Promise<string> }
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
    name: "knownImageHashes",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "lastImageHashUpdate",
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
  "0x60c06040523480156200001157600080fd5b5060405162002c4a38038062002c4a8339810160408190526200003491620000be565b6001600160a01b03821660a052604080516060810190915260288082528391839162002c226020830139816001600160a01b03166040516020016200007b929190620000f6565b60408051601f198184030181529190528051602090910120608052506200013a92505050565b80516001600160a01b0381168114620000b957600080fd5b919050565b60008060408385031215620000d257600080fd5b620000dd83620000a1565b9150620000ed60208401620000a1565b90509250929050565b6000835160005b81811015620001195760208187018101518583015201620000fd565b8181111562000129576000828501525b509190910191825250602001919050565b60805160a051612ab46200016e600039600081816106f50152610da30152600081816107260152610dd40152612ab46000f3fe6080604052600436106101805760003560e01c806398f9fbc4116100d6578063d1db39071161007f578063e90f13e711610059578063e90f13e7146103d2578063f209883a14610431578063ffd7d7411461044457600080fd5b8063d1db3907146103d2578063d5b5337f146103e5578063e717aba91461040457600080fd5b8063c272d5c3116100b0578063c272d5c314610373578063c39f2d5c14610386578063c66764e1146103a557600080fd5b806398f9fbc41461032d578063aeea5fb514610340578063b472f0a21461035357600080fd5b806348acd29f116101385780637ae99638116101125780637ae99638146102ac5780637f29d538146102d9578063984395bc146102f957600080fd5b806348acd29f14610238578063543196eb1461026d5780637082503b1461028c57600080fd5b80631cd05dc4116101695780631cd05dc4146101d457806343d9c9351461020157806344d466c21461021657600080fd5b80630fdecfac146101855780631551f0ab146101a7575b600080fd5b34801561019157600080fd5b50465b6040519081526020015b60405180910390f35b3480156101b357600080fd5b506101946101c236600461228c565b60036020526000908152604090205481565b3480156101e057600080fd5b506101946101ef3660046122ce565b60006020819052908152604090205481565b34801561020d57600080fd5b50610194610465565b34801561022257600080fd5b50610236610231366004612300565b61046d565b005b34801561024457600080fd5b506101946102533660046122ce565b73ffffffffffffffffffffffffffffffffffffffff163190565b34801561027957600080fd5b506101946102883660046122ce565b3f90565b34801561029857600080fd5b506102366102a73660046124d6565b61092a565b3480156102b857600080fd5b506101946102c73660046122ce565b60026020526000908152604090205481565b3480156102e557600080fd5b506102366102f436600461228c565b610fd8565b34801561030557600080fd5b50325b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019e565b34801561033957600080fd5b5041610308565b34801561034c57600080fd5b5044610194565b34801561035f57600080fd5b5061023661036e36600461253c565b61106a565b34801561037f57600080fd5b503a610194565b34801561039257600080fd5b506101946103a13660046122ce565b3b90565b3480156103b157600080fd5b506103c56103c03660046122ce565b6111a6565b60405161019e91906125e0565b3480156103de57600080fd5b5045610194565b3480156103f157600080fd5b5061019461040036600461228c565b4090565b34801561041057600080fd5b5061019461041f3660046122ce565b60016020526000908152604090205481565b34801561043d57600080fd5b5042610194565b6104576104523660046125f3565b6111eb565b60405161019e929190612754565b60005a905090565b8360005b8381101561051b578185858381811061048c5761048c61280c565b905060400201600001358686848181106104a8576104a861280c565b90506040020160200160208101906104c091906122ce565b60408051602081019490945283019190915273ffffffffffffffffffffffffffffffffffffffff16606082015260800160405160208183030381529060405280519060200120915080806105139061286a565b915050610471565b506040517f51605d80000000000000000000000000000000000000000000000000000000006020820152600090819073ffffffffffffffffffffffffffffffffffffffff891690602401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261059d916128a2565b6000604051808303816000865af19150503d80600081146105da576040519150601f19603f3d011682016040523d82523d6000602084013e6105df565b606091505b50915091508180156105f2575080516020145b156106a95760008180602001905181019061060d91906128be565b90508381146106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860448201527f5045435445445f494d4147455f4841534800000000000000000000000000000060648201526084015b60405180910390fd5b50610852565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021820152603581018490527f0000000000000000000000000000000000000000000000000000000000000000605582015273ffffffffffffffffffffffffffffffffffffffff8916906075016040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff161461082357604080517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482015260248101919091527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860448201527f5045435445445f434f554e5445524641435455414c5f494d4147455f48415348606482015260840161069a565b83156108525773ffffffffffffffffffffffffffffffffffffffff881660009081526002602052604090208390555b828873ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee89898960405160200161089f9291906128d7565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526108d8929161293b565b60405180910390a383156109205773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020908152604080832043908190558684526003909252909120555b5050505050505050565b60008061093684611587565b604080517f190100000000000000000000000000000000000000000000000000000000000060208083019190915246602283015260608c901b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016604283015260568083018c90528351808403909101815260769092019092528051910120919350915061ffff831660008767ffffffffffffffff8111156109da576109da6123a1565b604051908082528060200260200182016040528015610a1f57816020015b60408051808201909152600080825260208201528152602001906001900390816109f85790505b50905060005b8751851015610cc85760008080610a3c8b8961162c565b995060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301610a8257610a798b896116ea565b98509050610c20565b82610ab4576060610a938c8a61179f565b99509050610aa1888261188d565b9150610aae8f838d611d24565b50610c20565b60028303610b9857610ac68b896116ea565b985090506000610ad68c8a611db2565b995061ffff1690506060610aeb8d8b84611e60565b9a509050610afa898483611f8d565b610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60448201527f20494e56414c49445f5349474e41545552450000000000000000000000000000606482015260840161069a565b5050610b938e828c611d24565b610c20565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20494e56414c49445f5349474e41545552455f464c4147000000000000606482015260840161069a565b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250858581518110610c5d57610c5d61280c565b60200260200101819052508380610c739061286a565b60408051602081018a905290810185905273ffffffffffffffffffffffffffffffffffffffff841660608201529095506080019050604051602081830303815290604052805190602001209550505050610a25565b888114610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20494e56414c49445f4d454d424552535f434f554e5400000000000000606482015260840161069a565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021820152603581018490527f0000000000000000000000000000000000000000000000000000000000000000605582015273ffffffffffffffffffffffffffffffffffffffff8c16906075016040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff1614610ef5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604860248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20554e45585045435445445f434f554e5445524641435455414c5f494d60648201527f4147455f48415348000000000000000000000000000000000000000000000000608482015260a40161069a565b828b73ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee8885604051602001610f40919061295c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610f7992916129c1565b60405180910390a38615610fcb5773ffffffffffffffffffffffffffffffffffffffff8b1660008181526001602090815260408083204390819055878452600383528184205592825260029052208390555b5050505050505050505050565b804210611067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f526571756972655574696c7323726571756972654e6f6e457870697265643a2060448201527f4558504952454400000000000000000000000000000000000000000000000000606482015260840161069a565b50565b600080611076836121ae565b6040517f8c3f556300000000000000000000000000000000000000000000000000000000815260048101839052919350915060009073ffffffffffffffffffffffffffffffffffffffff861690638c3f556390602401602060405180830381865afa1580156110e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110d91906128be565b90508181101561119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f526571756972655574696c7323726571756972654d696e4e6f6e63653a204e4f60448201527f4e43455f42454c4f575f52455155495245440000000000000000000000000000606482015260840161069a565b5050505050565b60408051603f833b9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092528181529080600060208401853c50919050565b606080825167ffffffffffffffff811115611208576112086123a1565b604051908082528060200260200182016040528015611231578160200160208202803683370190505b509150825167ffffffffffffffff81111561124e5761124e6123a1565b60405190808252806020026020018201604052801561128157816020015b606081526020019060019003908161126c5790505b50905060005b83518110156115815760008482815181106112a4576112a461280c565b60200260200101519050806000015115611340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2064656c65676160448201527f746543616c6c206e6f7420616c6c6f7765640000000000000000000000000000606482015260840161069a565b80604001515a10156113d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a204e4f545f454e60448201527f4f5547485f474153000000000000000000000000000000000000000000000000606482015260840161069a565b806060015173ffffffffffffffffffffffffffffffffffffffff168160800151826040015160001461140a57826040015161140c565b5a5b908360a0015160405161141f91906128a2565b600060405180830381858888f193505050503d806000811461145d576040519150601f19603f3d011682016040523d82523d6000602084013e611462565b606091505b508584815181106114755761147561280c565b6020026020010185858151811061148e5761148e61280c565b60200260200101829052821515151581525050508382815181106114b4576114b461280c565b6020026020010151806114e257508482815181106114d4576114d461280c565b602002602001015160200151155b61156e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2043414c4c5f5260448201527f4556455254454400000000000000000000000000000000000000000000000000606482015260840161069a565b50806115798161286a565b915050611287565b50915091565b6020810151815160f09190911c90600290811115611627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4c696242797465732372656164466972737455696e7431363a204f55545f4f4660448201527f5f424f554e445300000000000000000000000000000000000000000000000000606482015260840161069a565b915091565b8082016020015160f881901c9060f01c60ff1660028301838111611652576116526129de565b84518111156116e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4c69624279746573237265616455696e743855696e74383a204f55545f4f465f60448201527f424f554e44530000000000000000000000000000000000000000000000000000606482015260840161069a565b9250925092565b8082016020015160601c60148201828111611707576117076129de565b8351811115611798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164416464726573733a204f55545f4f465f424f5560448201527f4e44530000000000000000000000000000000000000000000000000000000000606482015260840161069a565b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508281116117fc576117fc6129de565b8351811115611798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164427974657336363a204f55545f4f465f424f5560448201527f4e44530000000000000000000000000000000000000000000000000000000000606482015260840161069a565b60008151604214611920576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840161069a565b600082600184516119319190612a0d565b815181106119415761194161280c565b602001015160f81c60f81b60f81c60ff1690506000836040815181106119695761196961280c565b016020015160f81c9050600061197f85826121d7565b9050600061198e8660206121d7565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115611a40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202773272076616c7565000000606482015260840161069a565b8260ff16601b14158015611a5857508260ff16601c14155b15611ae5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202776272076616c7565000000606482015260840161069a565b60018403611b525760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015611b41573d6000803e3d6000fd5b505050602060405103519450611c77565b60028403611bef576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a001611b1f565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20554e535550504f525445445f5349474e41545552455f5459504500000000606482015260840161069a565b73ffffffffffffffffffffffffffffffffffffffff8516611d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20494e56414c49445f5349474e455200000000000000000000000000000000606482015260840161069a565b5050505092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f600ba597427f042bcd559a0d06fa1732cc104d6dd43cbe8845b5a0e804b2b39f60405160405180910390a38015611dad5773ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090204390555b505050565b8082016020015160f01c60028201828111611dcf57611dcf6129de565b8351811115611798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624279746573237265616455696e7431363a204f55545f4f465f424f554e60448201527f4453000000000000000000000000000000000000000000000000000000000000606482015260840161069a565b606060008267ffffffffffffffff811115611e7d57611e7d6123a1565b6040519080825280601f01601f191660200182016040528015611ea7576020820181803683370190505b509150838501602001600060205b85811015611ece57908201518482015260208101611eb5565b8486016020018051939092015190850152525082820183811015611ef457611ef46129de565b8451811115611f85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4c69624279746573237265616442797465733a204f55545f4f465f424f554e4460448201527f5300000000000000000000000000000000000000000000000000000000000000606482015260840161069a565b935093915050565b6000808260018451611f9f9190612a0d565b81518110611faf57611faf61280c565b016020015160f81c90506001811480611fc85750600281145b1561200c578373ffffffffffffffffffffffffffffffffffffffff16611fee868561188d565b73ffffffffffffffffffffffffffffffffffffffff161491506121a6565b6003810361211e5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e9061208f908990889060040161293b565b602060405180830381865afa1580156120ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120d09190612a24565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e000000000000000000000000000000000000000000000000000000001491506121a6565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e41545552455f5459504500606482015260840161069a565b509392505050565b6000806121c960016c01000000000000000000000000612a0d565b606084901c94931692915050565b60006121e4826020612a66565b83511015612274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f524551554952454400000000606482015260840161069a565b6000612281836020612a66565b909301519392505050565b60006020828403121561229e57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146122c957600080fd5b919050565b6000602082840312156122e057600080fd5b6122e9826122a5565b9392505050565b803580151581146122c957600080fd5b60008060008060006080868803121561231857600080fd5b612321866122a5565b945060208601359350604086013567ffffffffffffffff8082111561234557600080fd5b818801915088601f83011261235957600080fd5b81358181111561236857600080fd5b8960208260061b850101111561237d57600080fd5b602083019550809450505050612395606087016122f0565b90509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156123f3576123f36123a1565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612440576124406123a1565b604052919050565b600082601f83011261245957600080fd5b813567ffffffffffffffff811115612473576124736123a1565b6124a460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016123f9565b8181528460208386010111156124b957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156124ee57600080fd5b6124f7866122a5565b94506020860135935060408601359250606086013567ffffffffffffffff81111561252157600080fd5b61252d88828901612448565b925050612395608087016122f0565b6000806040838503121561254f57600080fd5b612558836122a5565b946020939093013593505050565b60005b83811015612581578181015183820152602001612569565b83811115612590576000848401525b50505050565b600081518084526125ae816020860160208601612566565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006122e96020830184612596565b6000602080838503121561260657600080fd5b823567ffffffffffffffff8082111561261e57600080fd5b818501915085601f83011261263257600080fd5b813581811115612644576126446123a1565b8060051b6126538582016123f9565b918252838101850191858101908984111561266d57600080fd5b86860192505b838310156127475782358581111561268b5760008081fd5b860160c0818c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156126c15760008081fd5b6126c96123d0565b6126d48a84016122f0565b815260406126e38185016122f0565b8b83015260608085013582840152608091506127008286016122a5565b9083015260a0848101358284015292840135928984111561272357600091508182fd5b6127318f8d86880101612448565b9083015250845250509186019190860190612673565b9998505050505050505050565b604080825283519082018190526000906020906060840190828701845b8281101561278f578151151584529284019290840190600101612771565b50505083810382850152845180825282820190600581901b8301840187850160005b838110156127fd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030185526127eb838351612596565b948701949250908601906001016127b1565b50909998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361289b5761289b61283b565b5060010190565b600082516128b4818460208701612566565b9190910192915050565b6000602082840312156128d057600080fd5b5051919050565b6020808252818101839052600090604080840186845b8781101561292e578135835273ffffffffffffffffffffffffffffffffffffffff6129198684016122a5565b168386015291830191908301906001016128ed565b5090979650505050505050565b8281526040602082015260006129546040830184612596565b949350505050565b602080825282518282018190526000919060409081850190868401855b828110156129b45781518051855286015173ffffffffffffffffffffffffffffffffffffffff16868501529284019290850190600101612979565b5091979650505050505050565b61ffff831681526040602082015260006129546040830184612596565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600082821015612a1f57612a1f61283b565b500390565b600060208284031215612a3657600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146122e957600080fd5b60008219821115612a7957612a7961283b565b50019056fea2646970667358221220987749af22626738b98f5d6985331afaec6fd32cbfab4779105c24426d03709364736f6c634300080e0033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
