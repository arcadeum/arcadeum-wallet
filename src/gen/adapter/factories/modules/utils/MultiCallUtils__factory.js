/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610aac806100206000396000f3fe6080604052600436106100e85760003560e01c8063c272d5c31161008a578063d5b5337f11610059578063d5b5337f14610230578063e90f13e71461021b578063f209883a14610250578063ffd7d74114610265576100e8565b8063c272d5c3146101b9578063c39f2d5c146101ce578063c66764e1146101ee578063d1db39071461021b576100e8565b8063543196eb116100c6578063543196eb1461014d578063984395bc1461016d57806398f9fbc41461018f578063aeea5fb5146101a4576100e8565b80630fdecfac146100ed57806343d9c9351461011857806348acd29f1461012d575b600080fd5b3480156100f957600080fd5b50610102610286565b60405161010f91906108ef565b60405180910390f35b34801561012457600080fd5b5061010261028a565b34801561013957600080fd5b50610102610148366004610649565b610292565b34801561015957600080fd5b50610102610168366004610649565b6102b0565b34801561017957600080fd5b506101826102b4565b60405161010f9190610828565b34801561019b57600080fd5b506101826102b8565b3480156101b057600080fd5b506101026102bc565b3480156101c557600080fd5b506101026102c0565b3480156101da57600080fd5b506101026101e9366004610649565b6102c4565b3480156101fa57600080fd5b5061020e610209366004610649565b6102c8565b60405161010f91906108f8565b34801561022757600080fd5b5061010261030d565b34801561023c57600080fd5b5061010261024b3660046107aa565b610311565b34801561025c57600080fd5b50610102610315565b61027861027336600461066a565b610319565b60405161010f929190610849565b4690565b60005a905090565b73ffffffffffffffffffffffffffffffffffffffff8116315b919050565b3f90565b3290565b4190565b4490565b3a90565b3b90565b60408051603f833b9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092528181529080600060208401853c50919050565b4590565b4090565b4290565b606080825167ffffffffffffffff8111801561033457600080fd5b5060405190808252806020026020018201604052801561035e578160200160208202803683370190505b509150825167ffffffffffffffff8111801561037957600080fd5b506040519080825280602002602001820160405280156103ad57816020015b60608152602001906001900390816103985790505b50905060005b835181101561058c5760008482815181106103ca57fe5b60200260200101519050806000015115610419576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610410906109c5565b60405180910390fd5b80604001515a1015610457576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041090610968565b806060015173ffffffffffffffffffffffffffffffffffffffff168160800151826040015160001461048d57826040015161048f565b5a5b908360a001516040516104a2919061080c565b600060405180830381858888f193505050503d80600081146104e0576040519150601f19603f3d011682016040523d82523d6000602084013e6104e5565b606091505b508584815181106104f257fe5b6020026020010185858151811061050557fe5b602002602001018290528215151515815250505083828151811061052557fe5b60200260200101518061054d575084828151811061053f57fe5b602002602001015160200151155b610583576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104109061090b565b506001016103b3565b50915091565b803573ffffffffffffffffffffffffffffffffffffffff811681146102ab57600080fd5b803580151581146102ab57600080fd5b600082601f8301126105d6578081fd5b813567ffffffffffffffff8111156105ea57fe5b61061b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610a22565b81815284602083860101111561062f578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561065a578081fd5b61066382610592565b9392505050565b6000602080838503121561067c578182fd5b823567ffffffffffffffff80821115610693578384fd5b818501915085601f8301126106a6578384fd5b8135818111156106b257fe5b6106bf8485830201610a22565b81815284810190848601875b8481101561079b578135870160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838f03011215610709578a8bfd5b604080518281018181108b8211171561071e57fe5b825261072b848d016105b6565b81526107388285016105b6565b8c8201526060808501358383015260809250610755838601610592565b9082015260a084013582820152918301359189831115610773578c8dfd5b6107818f8d858701016105c6565b60a0820152875250505092870192908701906001016106cb565b50909998505050505050505050565b6000602082840312156107bb578081fd5b5035919050565b600081518084526107da816020860160208601610a46565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161081e818460208701610a46565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b604080825283519082018190526000906020906060840190828701845b82811015610884578151151584529284019290840190600101610866565b5050508381038285015284518082528282019080840283018401878501865b8381101561079b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030185526108dd8383516107c2565b948701949250908601906001016108a3565b90815260200190565b60006020825261066360208301846107c2565b60208082526027908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2043414c4c5f5260408201527f4556455254454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a204e4f545f454e60408201527f4f5547485f474153000000000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2064656c65676160408201527f746543616c6c206e6f7420616c6c6f7765640000000000000000000000000000606082015260800190565b60405181810167ffffffffffffffff81118282101715610a3e57fe5b604052919050565b60005b83811015610a61578181015183820152602001610a49565b83811115610a70576000848401525b5050505056fea26469706673582212209bcbc4408d83c4567da8d51b96a29d3d2cf56395e5ac84eee40917a48945daaf64736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
export class MultiCallUtils__factory extends ContractFactory {
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
MultiCallUtils__factory.bytecode = _bytecode;
MultiCallUtils__factory.abi = _abi;
