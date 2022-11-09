import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC165CheckerMock, ERC165CheckerMockInterface } from "../../mocks/ERC165CheckerMock";
declare type ERC165CheckerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC165CheckerMock__factory extends ContractFactory {
    constructor(...args: ERC165CheckerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC165CheckerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC165CheckerMock;
    connect(signer: Signer): ERC165CheckerMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101f7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9c5438414610030575b600080fd5b61008b6004803603604081101561004657600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff1690602001357fffffffff000000000000000000000000000000000000000000000000000000001661009f565b604080519115158252519081900360200190f35b600080806100cd857f01ffc9a700000000000000000000000000000000000000000000000000000000610174565b90925090508115806100dd575080155b156100ed5760009250505061016e565b610117857fffffffff00000000000000000000000000000000000000000000000000000000610174565b909250905081158061012857508015155b156101385760009250505061016e565b6101428585610174565b90925090506001821480156101575750806001145b156101675760019250505061016e565b6000925050505b92915050565b6040517f01ffc9a7000000000000000000000000000000000000000000000000000000008082526004820183905260009182919060208160248189617530fa90519096909550935050505056fea2646970667358221220ffd8b9286609a59fb40fbfbdaf44c7adc2c9ebb4c714fe1f5324b9b4a5dd31c064736f6c63430007060033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC165CheckerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165CheckerMock;
}
export {};
