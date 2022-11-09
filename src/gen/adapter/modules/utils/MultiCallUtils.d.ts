import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace IModuleCalls {
    type TransactionStruct = {
        delegateCall: PromiseOrValue<boolean>;
        revertOnError: PromiseOrValue<boolean>;
        gasLimit: PromiseOrValue<BigNumberish>;
        target: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type TransactionStructOutput = [
        boolean,
        boolean,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumber;
        target: string;
        value: BigNumber;
        data: string;
    };
}
export interface MultiCallUtilsInterface extends utils.Interface {
    functions: {
        "callBalanceOf(address)": FunctionFragment;
        "callBlockNumber()": FunctionFragment;
        "callBlockhash(uint256)": FunctionFragment;
        "callChainId()": FunctionFragment;
        "callCode(address)": FunctionFragment;
        "callCodeHash(address)": FunctionFragment;
        "callCodeSize(address)": FunctionFragment;
        "callCoinbase()": FunctionFragment;
        "callDifficulty()": FunctionFragment;
        "callGasLeft()": FunctionFragment;
        "callGasLimit()": FunctionFragment;
        "callGasPrice()": FunctionFragment;
        "callOrigin()": FunctionFragment;
        "callTimestamp()": FunctionFragment;
        "multiCall((bool,bool,uint256,address,uint256,bytes)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "callBalanceOf" | "callBlockNumber" | "callBlockhash" | "callChainId" | "callCode" | "callCodeHash" | "callCodeSize" | "callCoinbase" | "callDifficulty" | "callGasLeft" | "callGasLimit" | "callGasPrice" | "callOrigin" | "callTimestamp" | "multiCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "callBalanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "callBlockhash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "callChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "callCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callCodeHash", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callCodeSize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callCoinbase", values?: undefined): string;
    encodeFunctionData(functionFragment: "callDifficulty", values?: undefined): string;
    encodeFunctionData(functionFragment: "callGasLeft", values?: undefined): string;
    encodeFunctionData(functionFragment: "callGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "callGasPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "callOrigin", values?: undefined): string;
    encodeFunctionData(functionFragment: "callTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiCall", values: [IModuleCalls.TransactionStruct[]]): string;
    decodeFunctionResult(functionFragment: "callBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callBlockhash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callCodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callCodeSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callCoinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDifficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callGasLeft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOrigin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiCall", data: BytesLike): Result;
    events: {};
}
export interface MultiCallUtils extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultiCallUtilsInterface;
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
        callBalanceOf(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        callBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        callBlockhash(_i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        callChainId(overrides?: CallOverrides): Promise<[BigNumber] & {
            id: BigNumber;
        }>;
        callCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            code: string;
        }>;
        callCodeHash(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            codeHash: string;
        }>;
        callCodeSize(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            size: BigNumber;
        }>;
        callCoinbase(overrides?: CallOverrides): Promise<[string]>;
        callDifficulty(overrides?: CallOverrides): Promise<[BigNumber]>;
        callGasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;
        callGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        callGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        callOrigin(overrides?: CallOverrides): Promise<[string]>;
        callTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        multiCall(_txs: IModuleCalls.TransactionStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    callBalanceOf(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    callBlockhash(_i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callChainId(overrides?: CallOverrides): Promise<BigNumber>;
    callCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callCodeHash(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callCodeSize(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callCoinbase(overrides?: CallOverrides): Promise<string>;
    callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
    callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;
    callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    callOrigin(overrides?: CallOverrides): Promise<string>;
    callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    multiCall(_txs: IModuleCalls.TransactionStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        callBalanceOf(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        callBlockhash(_i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        callChainId(overrides?: CallOverrides): Promise<BigNumber>;
        callCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        callCodeHash(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        callCodeSize(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callCoinbase(overrides?: CallOverrides): Promise<string>;
        callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;
        callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        callOrigin(overrides?: CallOverrides): Promise<string>;
        callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        multiCall(_txs: IModuleCalls.TransactionStruct[], overrides?: CallOverrides): Promise<[
            boolean[],
            string[]
        ] & {
            _successes: boolean[];
            _results: string[];
        }>;
    };
    filters: {};
    estimateGas: {
        callBalanceOf(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        callBlockhash(_i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        callChainId(overrides?: CallOverrides): Promise<BigNumber>;
        callCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callCodeHash(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callCodeSize(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callCoinbase(overrides?: CallOverrides): Promise<BigNumber>;
        callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;
        callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        callOrigin(overrides?: CallOverrides): Promise<BigNumber>;
        callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        multiCall(_txs: IModuleCalls.TransactionStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        callBalanceOf(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callBlockhash(_i: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callCodeHash(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callCodeSize(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callGasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callOrigin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiCall(_txs: IModuleCalls.TransactionStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
