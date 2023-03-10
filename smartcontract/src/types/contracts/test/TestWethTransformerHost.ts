/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";
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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IERC20Transformer {
  export type TransformContextStruct = {
    sender: string;
    recipient: string;
    data: BytesLike;
  };

  export type TransformContextStructOutput = [string, string, string] & {
    sender: string;
    recipient: string;
    data: string;
  };
}

export interface TestWethTransformerHostInterface extends utils.Interface {
  functions: {
    "executeTransform(uint256,address,bytes)": FunctionFragment;
    "rawExecuteTransform(address,(address,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "executeTransform" | "rawExecuteTransform"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeTransform",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rawExecuteTransform",
    values: [string, IERC20Transformer.TransformContextStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeTransform",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawExecuteTransform",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestWethTransformerHost extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestWethTransformerHostInterface;

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
    executeTransform(
      wethAmount: BigNumberish,
      transformer: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rawExecuteTransform(
      transformer: string,
      context: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  executeTransform(
    wethAmount: BigNumberish,
    transformer: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rawExecuteTransform(
    transformer: string,
    context: IERC20Transformer.TransformContextStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    executeTransform(
      wethAmount: BigNumberish,
      transformer: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rawExecuteTransform(
      transformer: string,
      context: IERC20Transformer.TransformContextStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    executeTransform(
      wethAmount: BigNumberish,
      transformer: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rawExecuteTransform(
      transformer: string,
      context: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeTransform(
      wethAmount: BigNumberish,
      transformer: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rawExecuteTransform(
      transformer: string,
      context: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
