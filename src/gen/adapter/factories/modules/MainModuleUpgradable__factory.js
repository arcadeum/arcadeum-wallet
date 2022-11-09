/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
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
const _bytecode = "0x608060405234801561001057600080fd5b50612ce7806100206000396000f3fe6080604052600436106101125760003560e01c806351605d80116100a557806390042baf11610074578063b93ea7ad11610059578063b93ea7ad146103d0578063bc197c81146103f0578063f23a6e611461041057610119565b806390042baf146103a8578063affed0e0146103bb57610119565b806351605d801461032657806361c2926c146103485780637a9a1628146103685780638c3f55631461038857610119565b80631a9b2337116100e15780631a9b23371461029957806320c13b0b146102c657806329561426146102e65780634fcf3eca1461030657610119565b806301ffc9a7146101f4578063025b22bc1461022a578063150b7a021461024c5780631626ba7e1461027957610119565b3661011957005b60006101486000357fffffffff0000000000000000000000000000000000000000000000000000000016610430565b905073ffffffffffffffffffffffffffffffffffffffff8116156101f1576000808273ffffffffffffffffffffffffffffffffffffffff166000366040518083838082843760405192019450600093509091505080830381855af49150503d80600081146101d2576040519150601f19603f3d011682016040523d82523d6000602084013e6101d7565b606091505b5091509150816101e957805160208201fd5b805160208201f35b50005b34801561020057600080fd5b5061021461020f3660046124d4565b610486565b60405161022191906126eb565b60405180910390f35b34801561023657600080fd5b5061024a610245366004612221565b610491565b005b34801561025857600080fd5b5061026c6102673660046122f2565b6105b2565b6040516102219190612718565b34801561028557600080fd5b5061026c61029436600461248a565b6105dc565b3480156102a557600080fd5b506102b96102b43660046124d4565b610655565b60405161022191906126ca565b3480156102d257600080fd5b5061026c6102e1366004612520565b610660565b3480156102f257600080fd5b5061024a610301366004612472565b6106ba565b34801561031257600080fd5b5061024a6103213660046124d4565b6107c8565b34801561033257600080fd5b5061033b6108a6565b60405161022191906126f6565b34801561035457600080fd5b5061024a6103633660046123d5565b6108d6565b34801561037457600080fd5b5061024a610383366004612408565b61096f565b34801561039457600080fd5b5061033b6103a3366004612472565b6109eb565b6102b96103b6366004612589565b610a17565b3480156103c757600080fd5b5061033b610acb565b3480156103dc57600080fd5b5061024a6103eb3660046124ee565b610ad7565b3480156103fc57600080fd5b5061026c61040b36600461223b565b610bb0565b34801561041c57600080fd5b5061026c61042b36600461235f565b610bdd565b600061047e7fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff000000000000000000000000000000000000000000000000000000008416610c08565b90505b919050565b600061047e82610c35565b3330146104e9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b6105088173ffffffffffffffffffffffffffffffffffffffff16610c92565b61055d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180612b716039913960400191505060405180910390fd5b61056681610c98565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca039181900360200190a150565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b60006106266105ea85610c9c565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cfc92505050565b1561064e57507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b600061047e82610430565b600061068a6105ea86866040518083838082843760405192018290039091209350610c9c92505050565b156106b257507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b333014610712576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b80610768576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806129986037913960400191505060405180910390fd5b6107927fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf882610ef4565b6040805182815290517f307ed6bd941ee9fc80f369c94af5fa11e25bab5102a6140191756c5474a30bfa9181900360200190a150565b333014610820576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b600061082b82610430565b73ffffffffffffffffffffffffffffffffffffffff161415610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806129cf602b913960400191505060405180910390fd5b6108a3816000610ef8565b50565b60006108d17fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8610f5b565b905090565b33301461092e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b600061095f826040516020016109449190612836565b60405160208183030381529060405280519060200120610c9c565b905061096b8183610f5f565b5050565b6109788261112e565b6000610990838560405160200161094492919061287d565b905061099c8183610cfc565b6109db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d2906127d9565b60405180910390fd5b6109e58185610f5f565b50505050565b600061047e7f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610c08565b6000333014610a71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b60006108d160006109eb565b333014610b2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612c8b6027913960400191505060405180910390fd5b6000610b3a83610430565b73ffffffffffffffffffffffffffffffffffffffff1614610ba6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612ae3602c913960400191505060405180910390fd5b61096b8282610ef8565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf000000000000000000000000000000000000000000000000000000001415610c8957506001610481565b61047e826111d2565b3b151590565b3055565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b6042830152605680830194909452825180830390940184526076909101909152815191012090565b6000806000610d0a84611313565b909250905061ffff821660005b8551831015610ed15760008080610d2e8987611381565b975060ff91821694501691506001831415610d5657610d4d8987611402565b96509050610e7a565b82610d82576060610d678a8861147a565b97509050610d758b8261152b565b9150828501945050610e7a565b6002831415610e2957610d958987611402565b965090506000610da58a886118b5565b975061ffff1690506060610dba8b8984611926565b98509050610dc98c8483611a15565b610e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612ab16032913960400191505060405180910390fd5b505092810192610e7a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061296c602c913960400191505060405180910390fd5b848282604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051602081830303815290604052805190602001209450505050610d17565b8361ffff168110158015610ee95750610ee982611c5d565b979650505050505050565b9055565b61096b7fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff00000000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff8416611c9a565b5490565b60005b8151811015611129576000828281518110610f7957fe5b602002602001015190506000606082604001515a1015610fc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d29061277c565b82511561105d57826060015173ffffffffffffffffffffffffffffffffffffffff168360400151600014610ffd578360400151610fff565b5a5b8460a0015160405161101191906126ae565b6000604051808303818686f4925050503d806000811461104d576040519150601f19603f3d011682016040523d82523d6000602084013e611052565b606091505b5090925090506110f2565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014611093578460400151611095565b5a5b908560a001516040516110a891906126ae565b600060405180830381858888f193505050503d80600081146110e6576040519150601f19603f3d011682016040523d82523d6000602084013e6110eb565b606091505b5090925090505b8115611113578560405161110691906126f6565b60405180910390a061111e565b61111e838783611cc8565b505050600101610f62565b505050565b60008061113a83611d18565b915091506000611149836109eb565b9050808214611184576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d290612745565b600182016111928482611d31565b7f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f88184826040516111c3929190612896565b60405180910390a15050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061126557507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806112b157507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b806112fd57507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561130a57506001610481565b61047e82611d5c565b6020810151815160f09190911c9060029081111561137c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180612a1d6027913960400191505060405180910390fd5b915091565b8082016020015160f881901c9060f01c60ff16600283018381116113a157fe5b84518111156113fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612be66026913960400191505060405180910390fd5b9250925092565b8082016020015160601c6014820182811161141957fe5b8351811115611473576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806129fa6023913960400191505060405180910390fd5b9250929050565b6040805160428082526080820190925260609160009190602082018180368337019050509150828401602001805160208401526020810151604084015260228101516042840152506042830190508281116114d157fe5b8351811115611473576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612b4e6023913960400191505060405180910390fd5b60008151604214611587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612932603a913960400191505060405180910390fd5b60008260018451038151811061159957fe5b602001015160f81c60f81b60f81c60ff1690506000836040815181106115bb57fe5b016020015160f81c905060006115d18582611db9565b905060006115e0866020611db9565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561165b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806128f5603d913960400191505060405180910390fd5b8260ff16601b1415801561167357508260ff16601c14155b156116c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612a44603d913960400191505060405180910390fd5b600184141561173d5760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561172c573d6000803e3d6000fd5b50505060206040510351945061183f565b60028414156117ee5760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561172c573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612baa603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85166118ab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612a816030913960400191505060405180910390fd5b5050505092915050565b8082016020015160f01c600282018281116118cc57fe5b8351811115611473576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612c2d6022913960400191505060405180910390fd5b606060008267ffffffffffffffff8111801561194157600080fd5b506040519080825280601f01601f19166020018201604052801561196c576020820181803683370190505b509150838501602001600060205b858110156119935790820151848201526020810161197a565b84860160200180519390920151908501525250828201838110156119b357fe5b8451811115611a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612c0c6021913960400191505060405180910390fd5b935093915050565b60008082600184510381518110611a2857fe5b016020015160f81c90506001811480611a415750600281145b15611a85578373ffffffffffffffffffffffffffffffffffffffff16611a67868561152b565b73ffffffffffffffffffffffffffffffffffffffff16149150611c55565b6003811415611c045782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018881526024820192835286516044830152865173ffffffffffffffffffffffffffffffffffffffff891693631626ba7e938b938a9390929160640190602085019080838360005b83811015611b3f578181015183820152602001611b27565b50505050905090810190601f168015611b6c5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b158015611b8a57600080fd5b505afa158015611b9e573d6000803e3d6000fd5b505050506040513d6020811015611bb457600080fd5b50519084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611c55565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f815260200180612b0f603f913960400191505060405180910390fd5b509392505050565b6000811580159061047e5750611c927fea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8610f5b565b909114919050565b6040805160208082019590955280820193909352805180840382018152606090930190528151919092012055565b826020015115611cda57805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd78282604051611d0b9291906126ff565b60405180910390a1505050565b606081901c916bffffffffffffffffffffffff90911690565b61096b7f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e8383611c9a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f025b22bc000000000000000000000000000000000000000000000000000000001415611db057506001610481565b61047e82611e21565b60008160200183511015611e18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612c4f603c913960400191505060405180910390fd5b50016020015190565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f389901c7000000000000000000000000000000000000000000000000000000001415611e7557506001610481565b61047e8260007fffffffff0000000000000000000000000000000000000000000000000000000082167f783649a6000000000000000000000000000000000000000000000000000000001415611ecd57506001610481565b61047e8260007fffffffff0000000000000000000000000000000000000000000000000000000082161580611f4357507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15611f5057506001610481565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461047e565b803573ffffffffffffffffffffffffffffffffffffffff8116811461048157600080fd5b600082601f830112611fce578081fd5b8135602067ffffffffffffffff80831115611fe557fe5b611ff282838502016128a4565b83815282810190868401865b868110156120ce578135890160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838e0301121561203c57898afd5b604080518281018181108a8211171561205157fe5b825261205e848b0161211e565b815261206b82850161211e565b8a8201526060808501358383015260809250612088838601611f9a565b9082015260a084810135838301529284013592898411156120a7578c8dfd5b6120b58f8c8688010161219e565b9082015287525050509285019290850190600101611ffe565b509098975050505050505050565b60008083601f8401126120ed578182fd5b50813567ffffffffffffffff811115612104578182fd5b602083019150836020808302850101111561147357600080fd5b8035801515811461048157600080fd5b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461048157600080fd5b60008083601f84011261216f578182fd5b50813567ffffffffffffffff811115612186578182fd5b60208301915083602082850101111561147357600080fd5b600082601f8301126121ae578081fd5b813567ffffffffffffffff8111156121c257fe5b6121f360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016128a4565b818152846020838601011115612207578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215612232578081fd5b61064e82611f9a565b60008060008060008060008060a0898b031215612256578384fd5b61225f89611f9a565b975061226d60208a01611f9a565b9650604089013567ffffffffffffffff80821115612289578586fd5b6122958c838d016120dc565b909850965060608b01359150808211156122ad578586fd5b6122b98c838d016120dc565b909650945060808b01359150808211156122d1578384fd5b506122de8b828c0161215e565b999c989b5096995094979396929594505050565b600080600080600060808688031215612309578081fd5b61231286611f9a565b945061232060208701611f9a565b935060408601359250606086013567ffffffffffffffff811115612342578182fd5b61234e8882890161215e565b969995985093965092949392505050565b60008060008060008060a08789031215612377578182fd5b61238087611f9a565b955061238e60208801611f9a565b94506040870135935060608701359250608087013567ffffffffffffffff8111156123b7578283fd5b6123c389828a0161215e565b979a9699509497509295939492505050565b6000602082840312156123e6578081fd5b813567ffffffffffffffff8111156123fc578182fd5b6106b284828501611fbe565b60008060006060848603121561241c578283fd5b833567ffffffffffffffff80821115612433578485fd5b61243f87838801611fbe565b945060208601359350604086013591508082111561245b578283fd5b506124688682870161219e565b9150509250925092565b600060208284031215612483578081fd5b5035919050565b60008060006040848603121561249e578283fd5b83359250602084013567ffffffffffffffff8111156124bb578283fd5b6124c78682870161215e565b9497909650939450505050565b6000602082840312156124e5578081fd5b61064e8261212e565b60008060408385031215612500578182fd5b6125098361212e565b915061251760208401611f9a565b90509250929050565b60008060008060408587031215612535578182fd5b843567ffffffffffffffff8082111561254c578384fd5b6125588883890161215e565b90965094506020870135915080821115612570578384fd5b5061257d8782880161215e565b95989497509550505050565b60006020828403121561259a578081fd5b813567ffffffffffffffff8111156125b0578182fd5b6106b28482850161219e565b6000815180845260208085019450848183028601828601855b858110156126575783830389528151805115158452858101511515868501526040808201519085015260608082015173ffffffffffffffffffffffffffffffffffffffff16908501526080808201519085015260a09081015160c09185018290529061264381860183612664565b9a87019a94505050908401906001016125d5565b5090979650505050505050565b6000815180845261267c8160208601602086016128c8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516126c08184602087016128c8565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b6000838252604060208301526106b26040830184612664565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b6020808252601f908201527f4d61696e4d6f64756c65235f617574683a20494e56414c49445f4e4f4e434500604082015260600190565b60208082526024908201527f4d6f64756c6543616c6c73235f657865637574653a204e4f545f454e4f55474860408201527f5f47415300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4d6f64756c6543616c6c7323657865637574653a20494e56414c49445f53494760408201527f4e41545552450000000000000000000000000000000000000000000000000000606082015260800190565b600060408252600560408301527f73656c663a00000000000000000000000000000000000000000000000000000060608301526080602083015261064e60808301846125bc565b6000838252604060208301526106b260408301846125bc565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156128c057fe5b604052919050565b60005b838110156128e35781810151838201526020016128cb565b838111156109e5575050600091015256fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265206c656e6774684d6f64756c6541757468235f7369676e617475726556616c69646174696f6e20494e56414c49445f464c41474d6f64756c654175746855706772616461626c6523757064617465496d6167654861736820494e56414c49445f494d4147455f484153484d6f64756c65486f6f6b732372656d6f7665486f6f6b3a20484f4f4b5f4e4f545f524547495354455245444c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45524d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a20494e56414c49445f5349474e41545552454d6f64756c65486f6f6b7323616464486f6f6b3a20484f4f4b5f414c52454144595f524547495354455245445369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455f545950454c696242797465732372656164427974657336363a204f55545f4f465f424f554e44534d6f64756c6555706461746523757064617465496d706c656d656e746174696f6e3a20494e56414c49445f494d504c454d454e544154494f4e5369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c69624279746573237265616442797465733a204f55545f4f465f424f554e44534c69624279746573237265616455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f52455155495245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a2646970667358221220aebb8d931ef86555b6441c416b208bb9fe8fe0974c5733ebbccce548296c37ce64736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
export class MainModuleUpgradable__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
MainModuleUpgradable__factory.bytecode = _bytecode;
MainModuleUpgradable__factory.abi = _abi;
