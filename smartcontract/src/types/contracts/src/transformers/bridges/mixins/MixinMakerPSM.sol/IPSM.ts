/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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

export interface IPSMInterface extends utils.Interface {
  functions: {
    "buyGem(address,uint256)": FunctionFragment;
    "gemJoin()": FunctionFragment;
    "sellGem(address,uint256)": FunctionFragment;
    "tin()": FunctionFragment;
    "tout()": FunctionFragment;
    "vat()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyGem"
      | "gemJoin"
      | "sellGem"
      | "tin"
      | "tout"
      | "vat"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyGem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gemJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellGem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tin", values?: undefined): string;
  encodeFunctionData(functionFragment: "tout", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyGem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gemJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellGem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;

  events: {};
}

export interface IPSM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPSMInterface;

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
    buyGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gemJoin(overrides?: CallOverrides): Promise<[string]>;

    sellGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tin(overrides?: CallOverrides): Promise<[BigNumber]>;

    tout(overrides?: CallOverrides): Promise<[BigNumber]>;

    vat(overrides?: CallOverrides): Promise<[string]>;
  };

  buyGem(
    usr: string,
    gemAmt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gemJoin(overrides?: CallOverrides): Promise<string>;

  sellGem(
    usr: string,
    gemAmt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tin(overrides?: CallOverrides): Promise<BigNumber>;

  tout(overrides?: CallOverrides): Promise<BigNumber>;

  vat(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buyGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    gemJoin(overrides?: CallOverrides): Promise<string>;

    sellGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tin(overrides?: CallOverrides): Promise<BigNumber>;

    tout(overrides?: CallOverrides): Promise<BigNumber>;

    vat(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    buyGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gemJoin(overrides?: CallOverrides): Promise<BigNumber>;

    sellGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tin(overrides?: CallOverrides): Promise<BigNumber>;

    tout(overrides?: CallOverrides): Promise<BigNumber>;

    vat(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gemJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellGem(
      usr: string,
      gemAmt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
