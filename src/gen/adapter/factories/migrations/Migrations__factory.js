/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "last_completed_migration",
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
        name: "owner",
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
                name: "completed",
                type: "uint256",
            },
        ],
        name: "setCompleted",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "new_address",
                type: "address",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610202806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100865780638da5cb5b146100a0578063fdacd576146100d1575b600080fd5b6100846004803603602081101561006757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100ee565b005b61008e610185565b60408051918252519081900360200190f35b6100a861018b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610084600480360360208110156100e757600080fd5b50356101a7565b60005473ffffffffffffffffffffffffffffffffffffffff163314156101825760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561016857600080fd5b505af115801561017c573d6000803e3d6000fd5b50505050505b50565b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff163314156101825760015556fea2646970667358221220c356fd16dd98acec36d2966175de7f7a7fa5a8bb405384b0de6773cfb8ada45864736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
export class Migrations__factory extends ContractFactory {
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
Migrations__factory.bytecode = _bytecode;
Migrations__factory.abi = _abi;
