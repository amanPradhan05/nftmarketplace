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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TestMooniswapInterface extends utils.Interface {
  functions: {
    "nextBuyAmount()": FunctionFragment;
    "setNextBoughtAmount(uint256)": FunctionFragment;
    "swap(address,address,uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "nextBuyAmount" | "setNextBoughtAmount" | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "nextBuyAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNextBoughtAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "nextBuyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNextBoughtAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "MooniswapCalled(uint256,address,address,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MooniswapCalled"): EventFragment;
}

export interface MooniswapCalledEventObject {
  value: BigNumber;
  sellToken: string;
  buyToken: string;
  sellAmount: BigNumber;
  minBuyAmount: BigNumber;
  referral: string;
}
export type MooniswapCalledEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, string],
  MooniswapCalledEventObject
>;

export type MooniswapCalledEventFilter = TypedEventFilter<MooniswapCalledEvent>;

export interface TestMooniswap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestMooniswapInterface;

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
    nextBuyAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    setNextBoughtAmount(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      referral: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  nextBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;

  setNextBoughtAmount(
    amt: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    sellToken: string,
    buyToken: string,
    sellAmount: BigNumberish,
    minBuyAmount: BigNumberish,
    referral: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    nextBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;

    setNextBoughtAmount(
      amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      referral: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "MooniswapCalled(uint256,address,address,uint256,uint256,address)"(
      value?: null,
      sellToken?: null,
      buyToken?: null,
      sellAmount?: null,
      minBuyAmount?: null,
      referral?: null
    ): MooniswapCalledEventFilter;
    MooniswapCalled(
      value?: null,
      sellToken?: null,
      buyToken?: null,
      sellAmount?: null,
      minBuyAmount?: null,
      referral?: null
    ): MooniswapCalledEventFilter;
  };

  estimateGas: {
    nextBuyAmount(overrides?: CallOverrides): Promise<BigNumber>;

    setNextBoughtAmount(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      referral: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    nextBuyAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNextBoughtAmount(
      amt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      referral: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
