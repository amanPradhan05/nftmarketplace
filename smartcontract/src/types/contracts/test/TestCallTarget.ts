/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, Signer, utils } from "ethers";

export interface TestCallTargetInterface extends utils.Interface {
  functions: {};

  events: {
    "CallTargetCalled(address,address,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallTargetCalled"): EventFragment;
}

export interface CallTargetCalledEventObject {
  context: string;
  sender: string;
  data: string;
  value: BigNumber;
}
export type CallTargetCalledEvent = TypedEvent<
  [string, string, string, BigNumber],
  CallTargetCalledEventObject
>;

export type CallTargetCalledEventFilter =
  TypedEventFilter<CallTargetCalledEvent>;

export interface TestCallTarget extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestCallTargetInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "CallTargetCalled(address,address,bytes,uint256)"(
      context?: null,
      sender?: null,
      data?: null,
      value?: null
    ): CallTargetCalledEventFilter;
    CallTargetCalled(
      context?: null,
      sender?: null,
      data?: null,
      value?: null
    ): CallTargetCalledEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
