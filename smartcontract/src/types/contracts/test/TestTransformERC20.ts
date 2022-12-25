/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";
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

export declare namespace ITransformERC20Feature {
  export type TransformationStruct = {
    deploymentNonce: BigNumberish;
    data: BytesLike;
  };

  export type TransformationStructOutput = [number, string] & {
    deploymentNonce: number;
    data: string;
  };

  export type TransformERC20ArgsStruct = {
    taker: string;
    inputToken: string;
    outputToken: string;
    inputTokenAmount: BigNumberish;
    minOutputTokenAmount: BigNumberish;
    transformations: ITransformERC20Feature.TransformationStruct[];
    useSelfBalance: boolean;
    recipient: string;
  };

  export type TransformERC20ArgsStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    ITransformERC20Feature.TransformationStructOutput[],
    boolean,
    string
  ] & {
    taker: string;
    inputToken: string;
    outputToken: string;
    inputTokenAmount: BigNumber;
    minOutputTokenAmount: BigNumber;
    transformations: ITransformERC20Feature.TransformationStructOutput[];
    useSelfBalance: boolean;
    recipient: string;
  };
}

export interface TestTransformERC20Interface extends utils.Interface {
  functions: {
    "FEATURE_NAME()": FunctionFragment;
    "FEATURE_VERSION()": FunctionFragment;
    "_transformERC20((address,address,address,uint256,uint256,(uint32,bytes)[],bool,address))": FunctionFragment;
    "createTransformWallet()": FunctionFragment;
    "getQuoteSigner()": FunctionFragment;
    "getTransformWallet()": FunctionFragment;
    "getTransformerDeployer()": FunctionFragment;
    "migrate(address)": FunctionFragment;
    "setQuoteSigner(address)": FunctionFragment;
    "setTransformerDeployer(address)": FunctionFragment;
    "transformERC20(address,address,uint256,uint256,(uint32,bytes)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FEATURE_NAME"
      | "FEATURE_VERSION"
      | "_transformERC20"
      | "createTransformWallet"
      | "getQuoteSigner"
      | "getTransformWallet"
      | "getTransformerDeployer"
      | "migrate"
      | "setQuoteSigner"
      | "setTransformerDeployer"
      | "transformERC20"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FEATURE_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEATURE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_transformERC20",
    values: [ITransformERC20Feature.TransformERC20ArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createTransformWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransformWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransformerDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "migrate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setQuoteSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransformerDeployer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transformERC20",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      ITransformERC20Feature.TransformationStruct[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "FEATURE_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEATURE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_transformERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTransformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransformerDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setQuoteSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransformerDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transformERC20",
    data: BytesLike
  ): Result;

  events: {
    "QuoteSignerUpdated(address)": EventFragment;
    "TransformedERC20(address,address,address,uint256,uint256)": EventFragment;
    "TransformerDeployerUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "QuoteSignerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransformedERC20"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransformerDeployerUpdated"): EventFragment;
}

export interface QuoteSignerUpdatedEventObject {
  quoteSigner: string;
}
export type QuoteSignerUpdatedEvent = TypedEvent<
  [string],
  QuoteSignerUpdatedEventObject
>;

export type QuoteSignerUpdatedEventFilter =
  TypedEventFilter<QuoteSignerUpdatedEvent>;

export interface TransformedERC20EventObject {
  taker: string;
  inputToken: string;
  outputToken: string;
  inputTokenAmount: BigNumber;
  outputTokenAmount: BigNumber;
}
export type TransformedERC20Event = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransformedERC20EventObject
>;

export type TransformedERC20EventFilter =
  TypedEventFilter<TransformedERC20Event>;

export interface TransformerDeployerUpdatedEventObject {
  transformerDeployer: string;
}
export type TransformerDeployerUpdatedEvent = TypedEvent<
  [string],
  TransformerDeployerUpdatedEventObject
>;

export type TransformerDeployerUpdatedEventFilter =
  TypedEventFilter<TransformerDeployerUpdatedEvent>;

export interface TestTransformERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestTransformERC20Interface;

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
    FEATURE_NAME(overrides?: CallOverrides): Promise<[string]>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    _transformERC20(
      args: ITransformERC20Feature.TransformERC20ArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTransformWallet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getQuoteSigner(
      overrides?: CallOverrides
    ): Promise<[string] & { signer: string }>;

    getTransformWallet(
      overrides?: CallOverrides
    ): Promise<[string] & { wallet: string }>;

    getTransformerDeployer(
      overrides?: CallOverrides
    ): Promise<[string] & { deployer: string }>;

    migrate(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuoteSigner(
      quoteSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransformerDeployer(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transformERC20(
      inputToken: string,
      outputToken: string,
      inputTokenAmount: BigNumberish,
      minOutputTokenAmount: BigNumberish,
      transformations: ITransformERC20Feature.TransformationStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

  FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  _transformERC20(
    args: ITransformERC20Feature.TransformERC20ArgsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTransformWallet(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getQuoteSigner(overrides?: CallOverrides): Promise<string>;

  getTransformWallet(overrides?: CallOverrides): Promise<string>;

  getTransformerDeployer(overrides?: CallOverrides): Promise<string>;

  migrate(
    transformerDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuoteSigner(
    quoteSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransformerDeployer(
    transformerDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transformERC20(
    inputToken: string,
    outputToken: string,
    inputTokenAmount: BigNumberish,
    minOutputTokenAmount: BigNumberish,
    transformations: ITransformERC20Feature.TransformationStruct[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    _transformERC20(
      args: ITransformERC20Feature.TransformERC20ArgsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createTransformWallet(overrides?: CallOverrides): Promise<string>;

    getQuoteSigner(overrides?: CallOverrides): Promise<string>;

    getTransformWallet(overrides?: CallOverrides): Promise<string>;

    getTransformerDeployer(overrides?: CallOverrides): Promise<string>;

    migrate(
      transformerDeployer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setQuoteSigner(
      quoteSigner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransformerDeployer(
      transformerDeployer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transformERC20(
      inputToken: string,
      outputToken: string,
      inputTokenAmount: BigNumberish,
      minOutputTokenAmount: BigNumberish,
      transformations: ITransformERC20Feature.TransformationStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "QuoteSignerUpdated(address)"(
      quoteSigner?: null
    ): QuoteSignerUpdatedEventFilter;
    QuoteSignerUpdated(quoteSigner?: null): QuoteSignerUpdatedEventFilter;

    "TransformedERC20(address,address,address,uint256,uint256)"(
      taker?: string | null,
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null
    ): TransformedERC20EventFilter;
    TransformedERC20(
      taker?: string | null,
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null
    ): TransformedERC20EventFilter;

    "TransformerDeployerUpdated(address)"(
      transformerDeployer?: null
    ): TransformerDeployerUpdatedEventFilter;
    TransformerDeployerUpdated(
      transformerDeployer?: null
    ): TransformerDeployerUpdatedEventFilter;
  };

  estimateGas: {
    FEATURE_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    _transformERC20(
      args: ITransformERC20Feature.TransformERC20ArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTransformWallet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getQuoteSigner(overrides?: CallOverrides): Promise<BigNumber>;

    getTransformWallet(overrides?: CallOverrides): Promise<BigNumber>;

    getTransformerDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuoteSigner(
      quoteSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransformerDeployer(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transformERC20(
      inputToken: string,
      outputToken: string,
      inputTokenAmount: BigNumberish,
      minOutputTokenAmount: BigNumberish,
      transformations: ITransformERC20Feature.TransformationStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEATURE_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _transformERC20(
      args: ITransformERC20Feature.TransformERC20ArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTransformWallet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getQuoteSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransformWallet(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransformerDeployer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrate(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuoteSigner(
      quoteSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransformerDeployer(
      transformerDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transformERC20(
      inputToken: string,
      outputToken: string,
      inputTokenAmount: BigNumberish,
      minOutputTokenAmount: BigNumberish,
      transformations: ITransformERC20Feature.TransformationStruct[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}