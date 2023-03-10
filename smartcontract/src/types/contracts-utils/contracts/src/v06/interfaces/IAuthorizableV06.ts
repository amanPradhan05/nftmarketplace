/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";
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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IAuthorizableV06Interface extends utils.Interface {
  functions: {
    "addAuthorizedAddress(address)": FunctionFragment;
    "authorities(uint256)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "getAuthorizedAddresses()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAuthorizedAddress(address)": FunctionFragment;
    "removeAuthorizedAddressAtIndex(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAuthorizedAddress"
      | "authorities"
      | "authorized"
      | "getAuthorizedAddresses"
      | "owner"
      | "removeAuthorizedAddress"
      | "removeAuthorizedAddressAtIndex"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAuthorizedAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "authorities",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAuthorizedAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorizedAddressAtIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAuthorizedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorizedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorizedAddressAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedAddressAdded(address,address)": EventFragment;
    "AuthorizedAddressRemoved(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedAddressAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuthorizedAddressRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AuthorizedAddressAddedEventObject {
  target: string;
  caller: string;
}
export type AuthorizedAddressAddedEvent = TypedEvent<
  [string, string],
  AuthorizedAddressAddedEventObject
>;

export type AuthorizedAddressAddedEventFilter =
  TypedEventFilter<AuthorizedAddressAddedEvent>;

export interface AuthorizedAddressRemovedEventObject {
  target: string;
  caller: string;
}
export type AuthorizedAddressRemovedEvent = TypedEvent<
  [string, string],
  AuthorizedAddressRemovedEventObject
>;

export type AuthorizedAddressRemovedEventFilter =
  TypedEventFilter<AuthorizedAddressRemovedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface IAuthorizableV06 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAuthorizableV06Interface;

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
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorities(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    authorized(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAuthorized: boolean }>;

    getAuthorizedAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { authorizedAddresses: string[] }>;

    owner(
      overrides?: CallOverrides
    ): Promise<[string] & { ownerAddress: string }>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAuthorizedAddress(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorities(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

  authorized(addr: string, overrides?: CallOverrides): Promise<boolean>;

  getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAuthorizedAddress(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAuthorizedAddressAtIndex(
    target: string,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAuthorizedAddress(
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    authorities(idx: BigNumberish, overrides?: CallOverrides): Promise<string>;

    authorized(addr: string, overrides?: CallOverrides): Promise<boolean>;

    getAuthorizedAddresses(overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAuthorizedAddress(
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorizedAddressAdded(address,address)"(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressAddedEventFilter;
    AuthorizedAddressAdded(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressAddedEventFilter;

    "AuthorizedAddressRemoved(address,address)"(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressRemovedEventFilter;
    AuthorizedAddressRemoved(
      target?: string | null,
      caller?: string | null
    ): AuthorizedAddressRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorities(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorized(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorizedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorities(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authorized(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizedAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAuthorizedAddress(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAuthorizedAddressAtIndex(
      target: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
