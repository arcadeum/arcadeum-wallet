/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GuestModule } from "../GuestModule";

export class GuestModule__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GuestModule> {
    return super.deploy(overrides || {}) as Promise<GuestModule>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuestModule {
    return super.attach(address) as GuestModule;
  }
  connect(signer: Signer): GuestModule__factory {
    return super.connect(signer) as GuestModule__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuestModule {
    return new Contract(address, _abi, signerOrProvider) as GuestModule;
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611830806100206000396000f3fe60806040526004361061007b5760003560e01c80637a9a16281161004e5780637a9a1628146101255780638c3f55631461014557806390042baf14610172578063affed0e0146101925761007b565b806301ffc9a7146100805780631626ba7e146100b657806320c13b0b146100e357806361c2926c14610103575b600080fd5b34801561008c57600080fd5b506100a061009b3660046111b9565b6101a7565b6040516100ad9190611400565b60405180910390f35b3480156100c257600080fd5b506100d66100d136600461116f565b6101ba565b6040516100ad919061142d565b3480156100ef57600080fd5b506100d66100fe3660046111f9565b610233565b34801561010f57600080fd5b5061012361011e3660046110d2565b61028d565b005b34801561013157600080fd5b50610123610140366004611105565b6102ce565b34801561015157600080fd5b50610165610160366004611295565b6102f6565b6040516100ad919061140b565b610185610180366004611262565b610322565b6040516100ad91906113df565b34801561019e57600080fd5b506101656103d6565b60006101b2826103e7565b90505b919050565b60006102046101c885610444565b84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104a492505050565b1561022c57507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b600061025d6101c88686604051808383808284376040519201829003909120935061044492505050565b1561028557507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b60006102be826040516020016102a3919061155b565b60405160208183030381529060405280519060200120610444565b90506102ca81836105f5565b5050565b60006102e4846040516020016102a391906114b7565b90506102f081856105f5565b50505050565b60006101b27f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610770565b600033301461037c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806117d46027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b60006103e260006102f6565b905090565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf00000000000000000000000000000000000000000000000000000000141561043b575060016101b5565b6101b28261079d565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b6042830152605680830194909452825180830390940184526076909101909152815191012090565b60008060006104b2846107fa565b909250905061ffff821660005b85518310156105d257600080806104d68987610868565b975060ff918216945016915060018314156104fe576104f589876108e2565b9650905061057b565b8261052a57606061050f8a88610956565b9750905061051d8b826109fe565b915082850194505061057b565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611630602c913960400191505060405180910390fd5b848282604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200193505050506040516020818303038152906040528051906020012094505050506104bf565b8361ffff1681101580156105ea57506105ea82610d2d565b979650505050505050565b60005b815181101561076b57600082828151811061060f57fe5b6020026020010151905060006060826000015115610662576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610659906114fe565b60405180910390fd5b82604001515a10156106a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106599061145a565b826060015173ffffffffffffffffffffffffffffffffffffffff16836080015184604001516000146106d65784604001516106d8565b5a5b908560a001516040516106eb91906113c3565b600060405180830381858888f193505050503d8060008114610729576040519150601f19603f3d011682016040523d82523d6000602084013e61072e565b606091505b50909250905081156107555785604051610748919061140b565b60405180910390a0610760565b610760838783610d33565b5050506001016105f8565b505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f389901c70000000000000000000000000000000000000000000000000000000014156107f1575060016101b5565b6101b282610d83565b6020810151815160f09190911c90600290811115610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061167f6027913960400191505060405180910390fd5b915091565b80820160200151825160f882901c9160f01c60ff169060028401908111156108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117726026913960400191505060405180910390fd5b9250925092565b80820160200151825160609190911c90601483019081111561094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061165c6023913960400191505060405180910390fd5b9250929050565b604080516042808252608082019092526060916000919060208201818036833701905050915082840160200180516020840152602081015160408401526022810151604284015250604283019050835181111561094f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806117136023913960400191505060405180910390fd5b60008082600184510381518110610a1157fe5b602001015160f81c60f81b60f81c60ff169050600083604081518110610a3357fe5b016020015160f81c90506000610a498582610e0b565b90506000610a58866020610e0b565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115610ad3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806115f3603d913960400191505060405180910390fd5b8260ff16601b14158015610aeb57508260ff16601c14155b15610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806116a6603d913960400191505060405180910390fd5b6001841415610bb55760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610ba4573d6000803e3d6000fd5b505050602060405103519450610cb7565b6002841415610c665760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610ba4573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180611736603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610d23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806116e36030913960400191505060405180910390fd5b5050505092915050565b50600190565b826020015115610d4557805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051610d76929190611414565b60405180910390a1505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082161580610df557507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15610e02575060016101b5565b6101b282610e73565b60008160200183511015610e6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180611798603c913960400191505060405180910390fd5b50016020015190565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101b557600080fd5b600082601f830112610ef1578081fd5b8135602067ffffffffffffffff80831115610f0857fe5b610f1582838502016115a2565b83815282810190868401865b86811015610ff1578135890160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838e03011215610f5f57898afd5b604080518281018181108a82111715610f7457fe5b8252610f81848b01610fff565b8152610f8e828501610fff565b8a8201526060808501358383015260809250610fab838601610ebd565b9082015260a08481013583830152928401359289841115610fca578c8dfd5b610fd88f8c8688010161104f565b9082015287525050509285019290850190600101610f21565b509098975050505050505050565b803580151581146101b557600080fd5b60008083601f840112611020578182fd5b50813567ffffffffffffffff811115611037578182fd5b60208301915083602082850101111561094f57600080fd5b600082601f83011261105f578081fd5b813567ffffffffffffffff81111561107357fe5b6110a460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016115a2565b8181528460208386010111156110b8578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156110e3578081fd5b813567ffffffffffffffff8111156110f9578182fd5b61028584828501610ee1565b600080600060608486031215611119578182fd5b833567ffffffffffffffff80821115611130578384fd5b61113c87838801610ee1565b9450602086013593506040860135915080821115611158578283fd5b506111658682870161104f565b9150509250925092565b600080600060408486031215611183578283fd5b83359250602084013567ffffffffffffffff8111156111a0578283fd5b6111ac8682870161100f565b9497909650939450505050565b6000602082840312156111ca578081fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461022c578182fd5b6000806000806040858703121561120e578081fd5b843567ffffffffffffffff80821115611225578283fd5b6112318883890161100f565b90965094506020870135915080821115611249578283fd5b506112568782880161100f565b95989497509550505050565b600060208284031215611273578081fd5b813567ffffffffffffffff811115611289578182fd5b6102858482850161104f565b6000602082840312156112a6578081fd5b5035919050565b60008282518085526020808601955080818302840101818601855b8481101561136c578583037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00189528151805115158452848101511515858501526040808201519085015260608082015173ffffffffffffffffffffffffffffffffffffffff16908501526080808201519085015260a09081015160c09185018290529061135881860183611379565b9a86019a94505050908301906001016112c8565b5090979650505050505050565b600081518084526113918160208601602086016115c6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516113d58184602087016115c6565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000838252604060208301526102856040830184611379565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b60208082526029908201527f47756573744d6f64756c65235f6578656375746547756573743a204e4f545f4560408201527f4e4f5547485f4741530000000000000000000000000000000000000000000000606082015260800190565b600060408252600660408301527f67756573743a000000000000000000000000000000000000000000000000000060608301526080602083015261022c60808301846112ad565b60208082526033908201527f47756573744d6f64756c65235f6578656375746547756573743a2064656c656760408201527f61746543616c6c206e6f7420616c6c6f77656400000000000000000000000000606082015260800190565b600060408252600560408301527f73656c663a00000000000000000000000000000000000000000000000000000060608301526080602083015261022c60808301846112ad565b60405181810167ffffffffffffffff811182821017156115be57fe5b604052919050565b60005b838110156115e15781810151838201526020016115c9565b838111156102f0575050600091015256fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75654d6f64756c6541757468235f7369676e617475726556616c69646174696f6e20494e56414c49445f464c41474c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524c696242797465732372656164427974657336363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f52455155495245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a264697066735822122006b8f0cca8e2eb765ddcc3cb738bc3bcba205ce1c2d715046e419c455435fc2864736f6c63430007060033";
