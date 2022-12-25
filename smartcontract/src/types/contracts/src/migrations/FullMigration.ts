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

export declare namespace FullMigration {
  export type FeaturesStruct = {
    registry: string;
    ownable: string;
    transformERC20: string;
    metaTransactions: string;
    nativeOrders: string;
    otcOrders: string;
  };

  export type FeaturesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    registry: string;
    ownable: string;
    transformERC20: string;
    metaTransactions: string;
    nativeOrders: string;
    otcOrders: string;
  };

  export type MigrateOptsStruct = { transformerDeployer: string };

  export type MigrateOptsStructOutput = [string] & {
    transformerDeployer: string;
  };
}

export interface FullMigrationInterface extends utils.Interface {
  functions: {
    "die(address)": FunctionFragment;
    "getBootstrapper()": FunctionFragment;
    "initializeCaller()": FunctionFragment;
    "migrateZeroEx(address,address,(address,address,address,address,address,address),(address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "die"
      | "getBootstrapper"
      | "initializeCaller"
      | "migrateZeroEx"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "die", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getBootstrapper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCaller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrateZeroEx",
    values: [
      string,
      string,
      FullMigration.FeaturesStruct,
      FullMigration.MigrateOptsStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: "die", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBootstrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateZeroEx",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FullMigration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FullMigrationInterface;

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
    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBootstrapper(
      overrides?: CallOverrides
    ): Promise<[string] & { bootstrapper: string }>;

    initializeCaller(overrides?: CallOverrides): Promise<[string]>;

    migrateZeroEx(
      owner: string,
      zeroEx: string,
      features: FullMigration.FeaturesStruct,
      migrateOpts: FullMigration.MigrateOptsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  die(
    ethRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBootstrapper(overrides?: CallOverrides): Promise<string>;

  initializeCaller(overrides?: CallOverrides): Promise<string>;

  migrateZeroEx(
    owner: string,
    zeroEx: string,
    features: FullMigration.FeaturesStruct,
    migrateOpts: FullMigration.MigrateOptsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    die(ethRecipient: string, overrides?: CallOverrides): Promise<void>;

    getBootstrapper(overrides?: CallOverrides): Promise<string>;

    initializeCaller(overrides?: CallOverrides): Promise<string>;

    migrateZeroEx(
      owner: string,
      zeroEx: string,
      features: FullMigration.FeaturesStruct,
      migrateOpts: FullMigration.MigrateOptsStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBootstrapper(overrides?: CallOverrides): Promise<BigNumber>;

    initializeCaller(overrides?: CallOverrides): Promise<BigNumber>;

    migrateZeroEx(
      owner: string,
      zeroEx: string,
      features: FullMigration.FeaturesStruct,
      migrateOpts: FullMigration.MigrateOptsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBootstrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeCaller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrateZeroEx(
      owner: string,
      zeroEx: string,
      features: FullMigration.FeaturesStruct,
      migrateOpts: FullMigration.MigrateOptsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
