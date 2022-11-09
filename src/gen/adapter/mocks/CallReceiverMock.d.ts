import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface CallReceiverMockInterface extends utils.Interface {
    functions: {
        "lastValA()": FunctionFragment;
        "lastValB()": FunctionFragment;
        "setRevertFlag(bool)": FunctionFragment;
        "testCall(uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "lastValA" | "lastValB" | "setRevertFlag" | "testCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "lastValA", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastValB", values?: undefined): string;
    encodeFunctionData(functionFragment: "setRevertFlag", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "testCall", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "lastValA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastValB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRevertFlag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testCall", data: BytesLike): Result;
    events: {};
}
export interface CallReceiverMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CallReceiverMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        lastValA(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastValB(overrides?: CallOverrides): Promise<[string]>;
        setRevertFlag(_revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testCall(_valA: PromiseOrValue<BigNumberish>, _valB: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    lastValA(overrides?: CallOverrides): Promise<BigNumber>;
    lastValB(overrides?: CallOverrides): Promise<string>;
    setRevertFlag(_revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testCall(_valA: PromiseOrValue<BigNumberish>, _valB: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        lastValA(overrides?: CallOverrides): Promise<BigNumber>;
        lastValB(overrides?: CallOverrides): Promise<string>;
        setRevertFlag(_revertFlag: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        testCall(_valA: PromiseOrValue<BigNumberish>, _valB: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        lastValA(overrides?: CallOverrides): Promise<BigNumber>;
        lastValB(overrides?: CallOverrides): Promise<BigNumber>;
        setRevertFlag(_revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testCall(_valA: PromiseOrValue<BigNumberish>, _valB: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        lastValA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastValB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRevertFlag(_revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testCall(_valA: PromiseOrValue<BigNumberish>, _valB: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
