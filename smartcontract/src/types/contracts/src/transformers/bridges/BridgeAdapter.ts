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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IBridgeAdapter {
  export type BridgeOrderStruct = {
    source: BytesLike;
    takerTokenAmount: BigNumberish;
    makerTokenAmount: BigNumberish;
    bridgeData: BytesLike;
  };

  export type BridgeOrderStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    source: string;
    takerTokenAmount: BigNumber;
    makerTokenAmount: BigNumber;
    bridgeData: string;
  };
}

export interface BridgeAdapterInterface extends utils.Interface {
  functions: {
    "BANCOR_ETH_ADDRESS()": FunctionFragment;
    "_tradeGMX(address,uint256,bytes)": FunctionFragment;
    "_tradePlatypus(address,uint256,bytes)": FunctionFragment;
    "trade((bytes32,uint256,uint256,bytes),address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BANCOR_ETH_ADDRESS"
      | "_tradeGMX"
      | "_tradePlatypus"
      | "trade"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BANCOR_ETH_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_tradeGMX",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_tradePlatypus",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trade",
    values: [IBridgeAdapter.BridgeOrderStruct, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BANCOR_ETH_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_tradeGMX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_tradePlatypus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trade", data: BytesLike): Result;

  events: {
    "BridgeFill(bytes32,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeFill"): EventFragment;
}

export interface BridgeFillEventObject {
  source: string;
  inputToken: string;
  outputToken: string;
  inputTokenAmount: BigNumber;
  outputTokenAmount: BigNumber;
}
export type BridgeFillEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  BridgeFillEventObject
>;

export type BridgeFillEventFilter = TypedEventFilter<BridgeFillEvent>;

export interface BridgeAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeAdapterInterface;

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
    BANCOR_ETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    _tradeGMX(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _tradePlatypus(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trade(
      order: IBridgeAdapter.BridgeOrderStruct,
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BANCOR_ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

  _tradeGMX(
    buyToken: string,
    sellAmount: BigNumberish,
    bridgeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _tradePlatypus(
    buyToken: string,
    sellAmount: BigNumberish,
    bridgeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trade(
    order: IBridgeAdapter.BridgeOrderStruct,
    sellToken: string,
    buyToken: string,
    sellAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BANCOR_ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

    _tradeGMX(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _tradePlatypus(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    trade(
      order: IBridgeAdapter.BridgeOrderStruct,
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "BridgeFill(bytes32,address,address,uint256,uint256)"(
      source?: null,
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null
    ): BridgeFillEventFilter;
    BridgeFill(
      source?: null,
      inputToken?: null,
      outputToken?: null,
      inputTokenAmount?: null,
      outputTokenAmount?: null
    ): BridgeFillEventFilter;
  };

  estimateGas: {
    BANCOR_ETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    _tradeGMX(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _tradePlatypus(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trade(
      order: IBridgeAdapter.BridgeOrderStruct,
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BANCOR_ETH_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _tradeGMX(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _tradePlatypus(
      buyToken: string,
      sellAmount: BigNumberish,
      bridgeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trade(
      order: IBridgeAdapter.BridgeOrderStruct,
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
