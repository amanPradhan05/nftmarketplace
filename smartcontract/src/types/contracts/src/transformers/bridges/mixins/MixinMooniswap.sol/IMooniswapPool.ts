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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IMooniswapPoolInterface extends utils.Interface {
  functions: {
    "swap(address,address,uint256,uint256,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "swap"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IMooniswapPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMooniswapPoolInterface;

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
    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBoughtAmount: BigNumberish,
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    sellToken: string,
    buyToken: string,
    sellAmount: BigNumberish,
    minBoughtAmount: BigNumberish,
    referrer: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBoughtAmount: BigNumberish,
      referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBoughtAmount: BigNumberish,
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      sellToken: string,
      buyToken: string,
      sellAmount: BigNumberish,
      minBoughtAmount: BigNumberish,
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
