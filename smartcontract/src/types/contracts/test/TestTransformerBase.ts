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
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface TestTransformerBaseInterface extends utils.Interface {
  functions: {
    "deployer()": FunctionFragment;
    "die(address)": FunctionFragment;
    "transform((address,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deployer" | "die" | "transform"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "die", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transform",
    values: [IERC20Transformer.TransformContextStruct]
  ): string;

  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "die", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transform", data: BytesLike): Result;

  events: {};
}

export interface TestTransformerBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestTransformerBaseInterface;

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
    deployer(overrides?: CallOverrides): Promise<[string]>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transform(
      arg0: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployer(overrides?: CallOverrides): Promise<string>;

  die(
    ethRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transform(
    arg0: IERC20Transformer.TransformContextStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployer(overrides?: CallOverrides): Promise<string>;

    die(ethRecipient: string, overrides?: CallOverrides): Promise<void>;

    transform(
      arg0: IERC20Transformer.TransformContextStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transform(
      arg0: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    die(
      ethRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transform(
      arg0: IERC20Transformer.TransformContextStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
