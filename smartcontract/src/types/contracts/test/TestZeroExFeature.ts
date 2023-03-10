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
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TestZeroExFeatureInterface extends utils.Interface {
  functions: {
    "internalFn()": FunctionFragment;
    "notPayableFn()": FunctionFragment;
    "payableFn()": FunctionFragment;
    "unimplmentedFn()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "internalFn"
      | "notPayableFn"
      | "payableFn"
      | "unimplmentedFn"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "internalFn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notPayableFn",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "payableFn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unimplmentedFn",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "internalFn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notPayableFn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payableFn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unimplmentedFn",
    data: BytesLike
  ): Result;

  events: {
    "NotPayableFnCalled()": EventFragment;
    "PayableFnCalled(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NotPayableFnCalled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayableFnCalled"): EventFragment;
}

export interface NotPayableFnCalledEventObject {}
export type NotPayableFnCalledEvent = TypedEvent<
  [],
  NotPayableFnCalledEventObject
>;

export type NotPayableFnCalledEventFilter =
  TypedEventFilter<NotPayableFnCalledEvent>;

export interface PayableFnCalledEventObject {
  value: BigNumber;
}
export type PayableFnCalledEvent = TypedEvent<
  [BigNumber],
  PayableFnCalledEventObject
>;

export type PayableFnCalledEventFilter = TypedEventFilter<PayableFnCalledEvent>;

export interface TestZeroExFeature extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestZeroExFeatureInterface;

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
    internalFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    notPayableFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payableFn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unimplmentedFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  internalFn(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  notPayableFn(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payableFn(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unimplmentedFn(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    internalFn(overrides?: CallOverrides): Promise<void>;

    notPayableFn(overrides?: CallOverrides): Promise<void>;

    payableFn(overrides?: CallOverrides): Promise<void>;

    unimplmentedFn(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NotPayableFnCalled()"(): NotPayableFnCalledEventFilter;
    NotPayableFnCalled(): NotPayableFnCalledEventFilter;

    "PayableFnCalled(uint256)"(value?: null): PayableFnCalledEventFilter;
    PayableFnCalled(value?: null): PayableFnCalledEventFilter;
  };

  estimateGas: {
    internalFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    notPayableFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payableFn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unimplmentedFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    internalFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    notPayableFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payableFn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unimplmentedFn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
