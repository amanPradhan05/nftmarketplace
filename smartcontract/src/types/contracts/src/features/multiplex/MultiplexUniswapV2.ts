/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
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
}

export interface MultiplexUniswapV2Interface extends utils.Interface {
  functions: {
    "_batchSellUniswapV2External((address,address,uint256,(uint8,uint256,bytes)[],bool,address),bytes,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "_batchSellUniswapV2External"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_batchSellUniswapV2External",
    values: [IMultiplexFeature.BatchSellParamsStruct, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_batchSellUniswapV2External",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MultiplexUniswapV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiplexUniswapV2Interface;

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
    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _batchSellUniswapV2External(
    params: IMultiplexFeature.BatchSellParamsStruct,
    wrappedCallData: BytesLike,
    sellAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _batchSellUniswapV2External(
      params: IMultiplexFeature.BatchSellParamsStruct,
      wrappedCallData: BytesLike,
      sellAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
