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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IUniswapV3PoolDeployer {
  export type CreationParametersStruct = {
    token0: string;
    token1: string;
    fee: BigNumberish;
  };

  export type CreationParametersStructOutput = [string, string, number] & {
    token0: string;
    token1: string;
    fee: number;
  };
}

export interface IUniswapV3PoolDeployerInterface extends utils.Interface {
  functions: {
    "creationParameters()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "creationParameters"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "creationParameters",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "creationParameters",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IUniswapV3PoolDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV3PoolDeployerInterface;

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
    creationParameters(
      overrides?: CallOverrides
    ): Promise<[IUniswapV3PoolDeployer.CreationParametersStructOutput]>;
  };

  creationParameters(
    overrides?: CallOverrides
  ): Promise<IUniswapV3PoolDeployer.CreationParametersStructOutput>;

  callStatic: {
    creationParameters(
      overrides?: CallOverrides
    ): Promise<IUniswapV3PoolDeployer.CreationParametersStructOutput>;
  };

  filters: {};

  estimateGas: {
    creationParameters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    creationParameters(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
