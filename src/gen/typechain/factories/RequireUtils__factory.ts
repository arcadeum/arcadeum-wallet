/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RequireUtils } from "../RequireUtils";

export class RequireUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequireUtils> {
    return super.deploy(
      _factory,
      _mainModule,
      overrides || {}
    ) as Promise<RequireUtils>;
  }
  getDeployTransaction(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _mainModule, overrides || {});
  }
  attach(address: string): RequireUtils {
    return super.attach(address) as RequireUtils;
  }
  connect(signer: Signer): RequireUtils__factory {
    return super.connect(signer) as RequireUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequireUtils {
    return new Contract(address, _abi, signerOrProvider) as RequireUtils;
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
  "0x60c06040523480156200001157600080fd5b5060405162002222380380620022228339810160408190526200003491620000bb565b606082811b6001600160601b03191660a0526040805191820190526028808252620021fa6020830139816001600160a01b03166040516020016200007a929190620000f2565b60408051601f19818403018152919052805160209091012060805250620001349050565b80516001600160a01b0381168114620000b657600080fd5b919050565b60008060408385031215620000ce578182fd5b620000d9836200009e565b9150620000e9602084016200009e565b90509250929050565b60008351815b81811015620001145760208187018101518583015201620000f8565b81811115620001235782828501525b509190910191825250602001919050565b60805160a05160601c61208b6200016f60003980610362528061050952806108a9525080610386528061052d52806108cd525061208b6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637ae996381161005b5780637ae99638146100f15780637f29d53814610104578063b472f0a214610117578063e717aba91461012a57610088565b80631551f0ab1461008d5780631cd05dc4146100b657806344d466c2146100c95780637082503b146100de575b600080fd5b6100a061009b3660046117df565b61013d565b6040516100ad9190611a32565b60405180910390f35b6100a06100c436600461161b565b61014f565b6100dc6100d736600461174f565b610161565b005b6100dc6100ec36600461163c565b6105ba565b6100a06100ff36600461161b565b610a34565b6100dc6101123660046117df565b610a46565b6100dc610125366004611726565b610a82565b6100a061013836600461161b565b610b60565b60036020526000908152604090205481565b60006020819052908152604090205481565b8360005b838110156101fa578185858381811061017a57fe5b9050604002016000013586868481811061019057fe5b90506040020160200160208101906101a8919061161b565b6040516020016101ba93929190611a3b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209150600101610165565b506000808773ffffffffffffffffffffffffffffffffffffffff166351605d8060e01b60405160200161022d91906118bd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610265916118ea565b6000604051808303816000865af19150503d80600081146102a2576040519150601f19603f3d011682016040523d82523d6000602084013e6102a7565b606091505b50915091508180156102ba575080516020145b1561031f576000818060200190518101906102d591906117f7565b9050838114610319576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611cbb565b60405180910390fd5b50610414565b60405173ffffffffffffffffffffffffffffffffffffffff8916906103ae907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611859565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff1614610414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611d18565b828873ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee898989604051602001610461929190611969565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261049a9291611d9b565b60405180910390a383156105b05773ffffffffffffffffffffffffffffffffffffffff881660009081526001602090815260408083204390819055868452600383528184205551610553917fff00000000000000000000000000000000000000000000000000000000000000917f00000000000000000000000000000000000000000000000000000000000000009188917f00000000000000000000000000000000000000000000000000000000000000009101611859565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012073ffffffffffffffffffffffffffffffffffffffff16600090815260029092529020849055505b5050505050505050565b6000806105c684610b72565b915091506000804690508089896040516020016105e593929190611906565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012091505061ffff831660008767ffffffffffffffff8111801561063c57600080fd5b5060405190808252806020026020018201604052801561067657816020015b6106636115cb565b81526020019060019003908161065b5790505b50905060005b875185101561082d57600080806106938b89610be0565b995060ff918216945016915060018314156106bb576106b28b89610c61565b985090506107ae565b826106ed5760606106cc8c8a610cd9565b995090506106da8882610d8a565b91506106e78f838d611114565b506107ae565b600283141561077c576107008b89610c61565b9850905060006107108c8a6111a2565b995061ffff16905060606107258d8b84611213565b9a509050610734898483611302565b61076a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611c01565b50506107778e828c611114565b6107ae565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611a67565b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff168152508585815181106107e557fe5b6020026020010181905250838060010194505085828260405160200161080d93929190611a3b565b60405160208183030381529060405280519060200120955050505061067c565b888114610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611c5e565b60405173ffffffffffffffffffffffffffffffffffffffff8c16906108f5907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611859565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff161461095b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611b7e565b828b73ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee88856040516020016109a691906119cd565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526109df9291611d76565b60405180910390a38615610a275773ffffffffffffffffffffffffffffffffffffffff8b16600090815260016020908152604080832043908190558684526003909252909120555b5050505050505050505050565b60026020526000908152604090205481565b804210610a7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611b21565b50565b600080610a8e8361154a565b9150915060008473ffffffffffffffffffffffffffffffffffffffff16638c3f5563846040518263ffffffff1660e01b8152600401610acd9190611a32565b60206040518083038186803b158015610ae557600080fd5b505afa158015610af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1d91906117f7565b905081811015610b59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031090611ac4565b5050505050565b60016020526000908152604090205481565b6020810151815160f09190911c90600290811115610bdb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180611e7f6027913960400191505060405180910390fd5b915091565b8082016020015160f881901c9060f01c60ff1660028301838111610c0057fe5b8451811115610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fb16026913960400191505060405180910390fd5b9250925092565b8082016020015160601c60148201828111610c7857fe5b8351811115610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611e5c6023913960400191505060405180910390fd5b9250929050565b604080516042808252608082019092526060916000919060208201818036833701905050915082840160200180516020840152602081015160408401526022810151604284015250604283019050828111610d3057fe5b8351811115610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611f526023913960400191505060405180910390fd5b60008151604214610de6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180611e22603a913960400191505060405180910390fd5b600082600184510381518110610df857fe5b602001015160f81c60f81b60f81c60ff169050600083604081518110610e1a57fe5b016020015160f81c90506000610e308582611563565b90506000610e3f866020611563565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610eba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611de5603d913960400191505060405180910390fd5b8260ff16601b14158015610ed257508260ff16601c14155b15610f28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611ea6603d913960400191505060405180910390fd5b6001841415610f9c5760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610f8b573d6000803e3d6000fd5b50505060206040510351945061109e565b600284141561104d5760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610f8b573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180611f75603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851661110a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611ee36030913960400191505060405180910390fd5b5050505092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f600ba597427f042bcd559a0d06fa1732cc104d6dd43cbe8845b5a0e804b2b39f60405160405180910390a3801561119d5773ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090204390555b505050565b8082016020015160f01c600282018281116111b957fe5b8351811115610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ff86022913960400191505060405180910390fd5b606060008267ffffffffffffffff8111801561122e57600080fd5b506040519080825280601f01601f191660200182016040528015611259576020820181803683370190505b509150838501602001600060205b8581101561128057908201518482015260208101611267565b84860160200180519390920151908501525250828201838110156112a057fe5b84518111156112fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611fd76021913960400191505060405180910390fd5b935093915050565b6000808260018451038151811061131557fe5b016020015160f81c9050600181148061132e5750600281145b15611372578373ffffffffffffffffffffffffffffffffffffffff166113548685610d8a565b73ffffffffffffffffffffffffffffffffffffffff16149150611542565b60038114156114f15782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018881526024820192835286516044830152865173ffffffffffffffffffffffffffffffffffffffff891693631626ba7e938b938a9390929160640190602085019080838360005b8381101561142c578181015183820152602001611414565b50505050905090810190601f1680156114595780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b15801561147757600080fd5b505afa15801561148b573d6000803e3d6000fd5b505050506040513d60208110156114a157600080fd5b50519084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611542565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f815260200180611f13603f913960400191505060405180910390fd5b509392505050565b606081901c916bffffffffffffffffffffffff90911690565b600081602001835110156115c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018061201a603c913960400191505060405180910390fd5b50016020015190565b604080518082019091526000808252602082015290565b803573ffffffffffffffffffffffffffffffffffffffff8116811461160657600080fd5b919050565b8035801515811461160657600080fd5b60006020828403121561162c578081fd5b611635826115e2565b9392505050565b600080600080600060a08688031215611653578081fd5b61165c866115e2565b9450602080870135945060408701359350606087013567ffffffffffffffff80821115611687578384fd5b818901915089601f83011261169a578384fd5b8135818111156116a657fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011682010181811084821117156116e157fe5b60405281815283820185018c10156116f7578586fd5b818585018683013785858383010152809650505050505061171a6080870161160b565b90509295509295909350565b60008060408385031215611738578182fd5b611741836115e2565b946020939093013593505050565b600080600080600060808688031215611766578081fd5b61176f866115e2565b945060208601359350604086013567ffffffffffffffff80821115611792578283fd5b818801915088601f8301126117a5578283fd5b8135818111156117b3578384fd5b8960206040830285010111156117c7578384fd5b60208301955080945050505061171a6060870161160b565b6000602082840312156117f0578081fd5b5035919050565b600060208284031215611808578081fd5b5051919050565b60008151808452611827816020860160208601611db4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260040190565b600082516118fc818460208701611db4565b9190910192915050565b7f19010000000000000000000000000000000000000000000000000000000000008152600281019390935260609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166022830152603682015260560190565b6020808252818101839052600090604080840186845b878110156119c0578135835273ffffffffffffffffffffffffffffffffffffffff6119ab8684016115e2565b1683860152918301919083019060010161197f565b5090979650505050505050565b602080825282518282018190526000919060409081850190868401855b82811015611a255781518051855286015173ffffffffffffffffffffffffffffffffffffffff168685015292840192908501906001016119ea565b5091979650505050505050565b90815260200190565b928352602083019190915273ffffffffffffffffffffffffffffffffffffffff16604082015260600190565b6020808252603a908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f5349474e41545552455f464c4147000000000000606082015260800190565b60208082526032908201527f526571756972655574696c7323726571756972654d696e4e6f6e63653a204e4f60408201527f4e43455f42454c4f575f52455155495245440000000000000000000000000000606082015260800190565b60208082526027908201527f526571756972655574696c7323726571756972654e6f6e457870697265643a2060408201527f4558504952454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526048908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20554e45585045435445445f434f554e5445524641435455414c5f494d60608201527f4147455f48415348000000000000000000000000000000000000000000000000608082015260a00190565b60208082526032908201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60408201527f20494e56414c49445f5349474e41545552450000000000000000000000000000606082015260800190565b60208082526039908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f4d454d424552535f434f554e5400000000000000606082015260800190565b60208082526031908201527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860408201527f5045435445445f494d4147455f48415348000000000000000000000000000000606082015260800190565b602080825260409082018190527f526571756972655574696c73237075626c697368436f6e6669673a20554e4558908201527f5045435445445f434f554e5445524641435455414c5f494d4147455f48415348606082015260800190565b600061ffff8416825260406020830152611d93604083018461180f565b949350505050565b600083825260406020830152611d93604083018461180f565b60005b83811015611dcf578181015183820152602001611db7565b83811115611dde576000848401525b5050505056fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265206c656e6774684c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45525369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455f545950454c696242797465732372656164427974657336363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c69624279746573237265616442797465733a204f55545f4f465f424f554e44534c69624279746573237265616455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a2646970667358221220f4083d3f4aceb66998798f9ac0de6343c3612f6587ab3643947e4a3ebbc8995e64736f6c63430007060033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
