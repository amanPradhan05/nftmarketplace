/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
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

export declare namespace IMultiplexFeature {
  export type BatchSellSubcallStruct = {
    id: BigNumberish;
    sellAmount: BigNumberish;
    data: BytesLike;
  };

  export type BatchSellSubcallStructOutput = [number, BigNumber, string] & {
    id: number;
    sellAmount: BigNumber;
    data: string;
  };

  export type BatchSellParamsStruct = {
    inputToken: string;
    outputToken: string;
    sellAmount: BigNumberish;
    calls: IMultiplexFeature.BatchSellSubcallStruct[];
    useSelfBalance: boolean;
    recipient: string;
  };

  export type BatchSellParamsStructOutput = [
    string,
    string,
    BigNumber,
    IMultiplexFeature.BatchSellSubcallStructOutput[],
    boolean,
    string
  ] & {
    inputToken: string;
    outputToken: string;
    sellAmount: BigNumber;
    calls: IMultiplexFeature.BatchSellSubcallStructOutput[];
    useSelfBalance: boolean;
    recipient: string;
  };

  export type MultiHopSellSubcallStruct = { id: BigNumberish; data: BytesLike };

  export type MultiHopSellSubcallStructOutput = [number, string] & {
    id: number;
    data: string;
  };
}

export interface MultiplexFeatureInterface extends utils.Interface {
  functions: {
    "EIP712_DOMAIN_SEPARATOR()": FunctionFragment;
    "FEATURE_NAME()": FunctionFragment;
    "FEATURE_VERSION()": FunctionFragment;
    "_batchSellLiquidityProviderExternal((address,address,uint256,(uint8,uint256,bytes)[],bool,address),bytes,uint256)": FunctionFragment;
    "_batchSellUniswapV2External((address,address,uint256,(uint8,uint256,bytes)[],bool,address),bytes,uint256)": FunctionFragment;
    "migrate()": FunctionFragment;
    "multiplexBatchSellEthForToken(address,(uint8,uint256,bytes)[],uint256)": FunctionFragment;
    "multiplexBatchSellTokenForEth(address,(uint8,uint256,bytes)[],uint256,uint256)": FunctionFragment;
    "multiplexBatchSellTokenForToken(address,address,(uint8,uint256,bytes)[],uint256,uint256)": FunctionFragment;
    "multiplexMultiHopSellEthForToken(address[],(uint8,bytes)[],uint256)": FunctionFragment;
    "multiplexMultiHopSellTokenForEth(address[],(uint8,bytes)[],uint256,uint256)": FunctionFragment;
    "multiplexMultiHopSellTokenForToken(address[],(uint8,bytes)[],uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EIP712_DOMAIN_SEPARATOR"
      | "FEATURE_NAME"
      | "FEATURE_VERSION"
      | "_batchSellLiquidityProviderExternal"
      | "_batchSellUniswapV2External"
      | "migrate"
      | "multiplexBatchSellEthForToken"
      | "multiplexBatchSellTokenForEth"
      | "multiplexBatchSellTokenForToken"
      | "multiplexMultiHopSellEthForToken"
      | "multiplexMultiHopSellTokenForEth"
      | "multiplexMultiHopSellTokenForToken"
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
    functionFragment: "_batchSellLiquidityProviderExternal",
    values: [IMultiplexFeature.BatchSellParamsStruct, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_batchSellUniswapV2External",
    values: [IMultiplexFeature.BatchSellParamsStruct, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "migrate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiplexBatchSellEthForToken",
    values: [string, IMultiplexFeature.BatchSellSubcallStruct[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplexBatchSellTokenForEth",
    values: [
      string,
      IMultiplexFeature.BatchSellSubcallStruct[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplexBatchSellTokenForToken",
    values: [
      string,
      string,
      IMultiplexFeature.BatchSellSubcallStruct[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplexMultiHopSellEthForToken",
    values: [
      string[],
      IMultiplexFeature.MultiHopSellSubcallStruct[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplexMultiHopSellTokenForEth",
    values: [
      string[],
      IMultiplexFeature.MultiHopSellSubcallStruct[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplexMultiHopSellTokenForToken",
    values: [
      string[],
      IMultiplexFeature.MultiHopSellSubcallStruct[],
      BigNumberish,
      BigNumberish
    ]
  ): string;

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
    functionFragment: "_batchSellLiquidityProviderExternal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_batchSellUniswapV2External",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiplexBatchSellEthForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplexBatchSellTokenForEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplexBatchSellTokenForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplexMultiHopSellEthForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplexMultiHopSellTokenForEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplexMultiHopSellTokenForToken",
    data: BytesLike
  ): Result;

  events: {
    "ExpiredOtcOrder(bytes32,address,uint64)": EventFragment;
    "ExpiredRfqOrder(bytes32,address,uint64)": EventFragment;
    "LiquidityProviderSwap(address,address,uint256,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExpiredOtcOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExpiredRfqOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityProviderSwap"): EventFragment;
}

export interface ExpiredOtcOrderEventObject {
  orderHash: string;
  maker: string;
  expiry: BigNumber;
}
export type ExpiredOtcOrderEvent = TypedEvent<
  [string, string, BigNumber],
  ExpiredOtcOrderEventObject
>;

export type ExpiredOtcOrderEventFilter = TypedEventFilter<ExpiredOtcOrderEvent>;

export interface ExpiredRfqOrderEventObject {
  orderHash: string;
  maker: string;
  expiry: BigNumber;
}
export type ExpiredRfqOrderEvent = TypedEvent<
  [string, string, BigNumber],
  ExpiredRfqOrderEventObject
>;

export type ExpiredRfqOrderEventFilter = TypedEventFilter<ExpiredRfqOrderEvent>;

export interface LiquidityProviderSwapEventObject {
  inputToken: string;
  outputToken: string;
  inputTokenAmount: BigNumber;
  outputTokenAmount: BigNumber;
  provider: string;
  recipient: string;
}
export type LiquidityProviderSwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string],
  LiquidityProviderSwapEventObject
>;

export type LiquidityProviderSwapEventFilter =
  TypedEventFilter<LiquidityProviderSwapEvent>;

export interface MultiplexFeature extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiplexFeatureInterface;

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

    _batchSellLiquidityProviderExternal(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexBatchSellEthForToken(
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexBatchSellTokenForEth(
      inputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexBatchSellTokenForToken(
      inputToken: string,
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexMultiHopSellEthForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexMultiHopSellTokenForEth(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    multiplexMultiHopSellTokenForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

  FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  _batchSellLiquidityProviderExternal(
    params: IMultiplexFeature.BatchSellParamsStruct,
    wrappedCallData: BytesLike,
    sellAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _batchSellUniswapV2External(
    params: IMultiplexFeature.BatchSellParamsStruct,
    wrappedCallData: BytesLike,
    sellAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexBatchSellEthForToken(
    outputToken: string,
    calls: IMultiplexFeature.BatchSellSubcallStruct[],
    minBuyAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexBatchSellTokenForEth(
    inputToken: string,
    calls: IMultiplexFeature.BatchSellSubcallStruct[],
    sellAmount: BigNumberish,
    minBuyAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexBatchSellTokenForToken(
    inputToken: string,
    outputToken: string,
    calls: IMultiplexFeature.BatchSellSubcallStruct[],
    sellAmount: BigNumberish,
    minBuyAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexMultiHopSellEthForToken(
    tokens: string[],
    calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
    minBuyAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexMultiHopSellTokenForEth(
    tokens: string[],
    calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
    sellAmount: BigNumberish,
    minBuyAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  multiplexMultiHopSellTokenForToken(
    tokens: string[],
    calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
    sellAmount: BigNumberish,
    minBuyAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<string>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    _batchSellLiquidityProviderExternal(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrate(overrides?: CallOverrides): Promise<string>;

    multiplexBatchSellEthForToken(
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplexBatchSellTokenForEth(
      inputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplexBatchSellTokenForToken(
      inputToken: string,
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplexMultiHopSellEthForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplexMultiHopSellTokenForEth(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplexMultiHopSellTokenForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ExpiredOtcOrder(bytes32,address,uint64)"(
      orderHash?: null,
      maker?: null,
      expiry?: null
    ): ExpiredOtcOrderEventFilter;
    ExpiredOtcOrder(
      orderHash?: null,
      maker?: null,
      expiry?: null
    ): ExpiredOtcOrderEventFilter;

    "ExpiredRfqOrder(bytes32,address,uint64)"(
      orderHash?: null,
      maker?: null,
      expiry?: null
    ): ExpiredRfqOrderEventFilter;
    ExpiredRfqOrder(
      orderHash?: null,
      maker?: null,
      expiry?: null
    ): ExpiredRfqOrderEventFilter;

    "LiquidityProviderSwap(address,address,uint256,uint256,address,address)"(
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null,
      provider?: null,
      recipient?: null
    ): LiquidityProviderSwapEventFilter;
    LiquidityProviderSwap(
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null,
      provider?: null,
      recipient?: null
    ): LiquidityProviderSwapEventFilter;
  };

  estimateGas: {
    EIP712_DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    _batchSellLiquidityProviderExternal(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexBatchSellEthForToken(
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexBatchSellTokenForEth(
      inputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexBatchSellTokenForToken(
      inputToken: string,
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexMultiHopSellEthForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexMultiHopSellTokenForEth(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    multiplexMultiHopSellTokenForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EIP712_DOMAIN_SEPARATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FEATURE_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEATURE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _batchSellLiquidityProviderExternal(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexBatchSellEthForToken(
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexBatchSellTokenForEth(
      inputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexBatchSellTokenForToken(
      inputToken: string,
      outputToken: string,
      calls: IMultiplexFeature.BatchSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexMultiHopSellEthForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      minBuyAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexMultiHopSellTokenForEth(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    multiplexMultiHopSellTokenForToken(
      tokens: string[],
      calls: IMultiplexFeature.MultiHopSellSubcallStruct[],
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
