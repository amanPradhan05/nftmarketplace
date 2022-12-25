/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IMetaTransactionsFeature {
  export type MetaTransactionDataStruct = {
    signer: string;
    sender: string;
    minGasPrice: BigNumberish;
    maxGasPrice: BigNumberish;
    expirationTimeSeconds: BigNumberish;
    salt: BigNumberish;
    callData: BytesLike;
    value: BigNumberish;
    feeToken: string;
    feeAmount: BigNumberish;
  };

  export type MetaTransactionDataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    signer: string;
    sender: string;
    minGasPrice: BigNumber;
    maxGasPrice: BigNumber;
    expirationTimeSeconds: BigNumber;
    salt: BigNumber;
    callData: string;
    value: BigNumber;
    feeToken: string;
    feeAmount: BigNumber;
  };
}

export declare namespace LibSignature {
  export type SignatureStruct = {
    signatureType: BigNumberish;
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
  };

  export type SignatureStructOutput = [number, number, string, string] & {
    signatureType: number;
    v: number;
    r: string;
    s: string;
  };
}

export interface MetaTransactionsFeatureInterface extends utils.Interface {
  functions: {
    "EIP712_DOMAIN_SEPARATOR()": FunctionFragment;
    "FEATURE_NAME()": FunctionFragment;
    "FEATURE_VERSION()": FunctionFragment;
    "MTX_EIP712_TYPEHASH()": FunctionFragment;
    "batchExecuteMetaTransactions((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256)[],(uint8,uint8,bytes32,bytes32)[])": FunctionFragment;
    "executeMetaTransaction((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256),(uint8,uint8,bytes32,bytes32))": FunctionFragment;
    "getMetaTransactionExecutedBlock((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))": FunctionFragment;
    "getMetaTransactionHash((address,address,uint256,uint256,uint256,uint256,bytes,uint256,address,uint256))": FunctionFragment;
    "getMetaTransactionHashExecutedBlock(bytes32)": FunctionFragment;
    "migrate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EIP712_DOMAIN_SEPARATOR"
      | "FEATURE_NAME"
      | "FEATURE_VERSION"
      | "MTX_EIP712_TYPEHASH"
      | "batchExecuteMetaTransactions"
      | "executeMetaTransaction"
      | "getMetaTransactionExecutedBlock"
      | "getMetaTransactionHash"
      | "getMetaTransactionHashExecutedBlock"
      | "migrate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EIP712_DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEATURE_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEATURE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MTX_EIP712_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchExecuteMetaTransactions",
    values: [
      IMetaTransactionsFeature.MetaTransactionDataStruct[],
      LibSignature.SignatureStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [
      IMetaTransactionsFeature.MetaTransactionDataStruct,
      LibSignature.SignatureStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetaTransactionExecutedBlock",
    values: [IMetaTransactionsFeature.MetaTransactionDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetaTransactionHash",
    values: [IMetaTransactionsFeature.MetaTransactionDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetaTransactionHashExecutedBlock",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "migrate", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "EIP712_DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEATURE_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEATURE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MTX_EIP712_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchExecuteMetaTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetaTransactionExecutedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetaTransactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetaTransactionHashExecutedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;

  events: {
    "MetaTransactionExecuted(bytes32,bytes4,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
}

export interface MetaTransactionExecutedEventObject {
  hash: string;
  selector: string;
  signer: string;
  sender: string;
}
export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string, string],
  MetaTransactionExecutedEventObject
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export interface MetaTransactionsFeature extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetaTransactionsFeatureInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<[string]>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MTX_EIP712_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    batchExecuteMetaTransactions(
      mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[],
      signatures: LibSignature.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMetaTransaction(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      signature: LibSignature.SignatureStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMetaTransactionExecutedBlock(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    getMetaTransactionHash(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { mtxHash: string }>;

    getMetaTransactionHashExecutedBlock(
      mtxHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

  FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  MTX_EIP712_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  batchExecuteMetaTransactions(
    mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[],
    signatures: LibSignature.SignatureStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMetaTransaction(
    mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
    signature: LibSignature.SignatureStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMetaTransactionExecutedBlock(
    mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMetaTransactionHash(
    mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getMetaTransactionHashExecutedBlock(
    mtxHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  migrate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    MTX_EIP712_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    batchExecuteMetaTransactions(
      mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[],
      signatures: LibSignature.SignatureStruct[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    executeMetaTransaction(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      signature: LibSignature.SignatureStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getMetaTransactionExecutedBlock(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaTransactionHash(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getMetaTransactionHashExecutedBlock(
      mtxHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrate(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "MetaTransactionExecuted(bytes32,bytes4,address,address)"(
      hash?: null,
      selector?: BytesLike | null,
      signer?: null,
      sender?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      hash?: null,
      selector?: BytesLike | null,
      signer?: null,
      sender?: null
    ): MetaTransactionExecutedEventFilter;
  };

  estimateGas: {
    EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    MTX_EIP712_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    batchExecuteMetaTransactions(
      mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[],
      signatures: LibSignature.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMetaTransaction(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      signature: LibSignature.SignatureStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMetaTransactionExecutedBlock(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaTransactionHash(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaTransactionHashExecutedBlock(
      mtxHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EIP712_DOMAIN_SEPARATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MTX_EIP712_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchExecuteMetaTransactions(
      mtxs: IMetaTransactionsFeature.MetaTransactionDataStruct[],
      signatures: LibSignature.SignatureStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMetaTransaction(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      signature: LibSignature.SignatureStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMetaTransactionExecutedBlock(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetaTransactionHash(
      mtx: IMetaTransactionsFeature.MetaTransactionDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetaTransactionHashExecutedBlock(
      mtxHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}