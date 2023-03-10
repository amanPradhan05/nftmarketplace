/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace InitialMigration {
  export type BootstrapFeaturesStruct = { registry: string; ownable: string };

  export type BootstrapFeaturesStructOutput = [string, string] & {
    registry: string;
    ownable: string;
  };
}

export interface InitialMigrationInterface extends utils.Interface {
  functions: {
    "bootstrap(address,(address,address))": FunctionFragment;
    "die(address)": FunctionFragment;
    "initializeCaller()": FunctionFragment;
    "initializeZeroEx(address,address,(address,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bootstrap"
      | "die"
      | "initializeCaller"
      | "initializeZeroEx"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bootstrap",
    values: [string, InitialMigration.BootstrapFeaturesStruct]
  ): string;
  encodeFunctionData(functionFragment: "die", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initializeCaller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeZeroEx",
    values: [string, string, InitialMigration.BootstrapFeaturesStruct]
  ): string;

  decodeFunctionResult(functionFragment: "bootstrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "die", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeZeroEx",
    data: BytesLike
  ): Result;

  events: {};
}

export interface InitialMigration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InitialMigrationInterface;

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
    bootstrap(
      owner: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeCaller(overrides?: CallOverrides): Promise<[string]>;

    initializeZeroEx(
      owner: string,
      zeroEx: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bootstrap(
    owner: string,
    features: InitialMigration.BootstrapFeaturesStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  die(
    ethRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeCaller(overrides?: CallOverrides): Promise<string>;

  initializeZeroEx(
    owner: string,
    zeroEx: string,
    features: InitialMigration.BootstrapFeaturesStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bootstrap(
      owner: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    die(ethRecipient: string, overrides?: CallOverrides): Promise<void>;

    initializeCaller(overrides?: CallOverrides): Promise<string>;

    initializeZeroEx(
      owner: string,
      zeroEx: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bootstrap(
      owner: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeCaller(overrides?: CallOverrides): Promise<BigNumber>;

    initializeZeroEx(
      owner: string,
      zeroEx: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bootstrap(
      owner: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeCaller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeZeroEx(
      owner: string,
      zeroEx: string,
      features: InitialMigration.BootstrapFeaturesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
