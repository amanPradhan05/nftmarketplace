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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace LibNativeOrder {
  export type LimitOrderStruct = {
    makerToken: string;
    takerToken: string;
    makerAmount: BigNumberish;
    takerAmount: BigNumberish;
    takerTokenFeeAmount: BigNumberish;
    maker: string;
    taker: string;
    sender: string;
    feeRecipient: string;
    pool: BytesLike;
    expiry: BigNumberish;
    salt: BigNumberish;
  };

  export type LimitOrderStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    makerToken: string;
    takerToken: string;
    makerAmount: BigNumber;
    takerAmount: BigNumber;
    takerTokenFeeAmount: BigNumber;
    maker: string;
    taker: string;
    sender: string;
    feeRecipient: string;
    pool: string;
    expiry: BigNumber;
    salt: BigNumber;
  };

  export type RfqOrderStruct = {
    makerToken: string;
    takerToken: string;
    makerAmount: BigNumberish;
    takerAmount: BigNumberish;
    maker: string;
    taker: string;
    txOrigin: string;
    pool: BytesLike;
    expiry: BigNumberish;
    salt: BigNumberish;
  };

  export type RfqOrderStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    makerToken: string;
    takerToken: string;
    makerAmount: BigNumber;
    takerAmount: BigNumber;
    maker: string;
    taker: string;
    txOrigin: string;
    pool: string;
    expiry: BigNumber;
    salt: BigNumber;
  };
}

export declare namespace LibSignature {
  export type SignatureStruct = {
    signatureType: BigNumberish;
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
  };

  export type SignatureStructOutput = [number, number, string, string] & {
    signatureType: number;
    v: number;
    r: string;
    s: string;
  };
}

export interface TestFillQuoteTransformerExchangeInterface
  extends utils.Interface {
  functions: {
    "EIP712_EXCHANGE_DOMAIN_HASH()": FunctionFragment;
    "fillLimitOrder((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)": FunctionFragment;
    "fillRfqOrder((address,address,uint128,uint128,address,address,address,bytes32,uint64,uint256),(uint8,uint8,bytes32,bytes32),uint128)": FunctionFragment;
    "getLimitOrderHash((address,address,uint128,uint128,uint128,address,address,address,address,bytes32,uint64,uint256))": FunctionFragment;
    "getProtocolFeeMultiplier()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EIP712_EXCHANGE_DOMAIN_HASH"
      | "fillLimitOrder"
      | "fillRfqOrder"
      | "getLimitOrderHash"
      | "getProtocolFeeMultiplier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EIP712_EXCHANGE_DOMAIN_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillLimitOrder",
    values: [
      LibNativeOrder.LimitOrderStruct,
      LibSignature.SignatureStruct,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fillRfqOrder",
    values: [
      LibNativeOrder.RfqOrderStruct,
      LibSignature.SignatureStruct,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLimitOrderHash",
    values: [LibNativeOrder.LimitOrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeeMultiplier",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "EIP712_EXCHANGE_DOMAIN_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillRfqOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLimitOrderHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeeMultiplier",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestFillQuoteTransformerExchange extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestFillQuoteTransformerExchangeInterface;

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
    EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<[string]>;

    fillLimitOrder(
      order: LibNativeOrder.LimitOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fillRfqOrder(
      order: LibNativeOrder.RfqOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLimitOrderHash(
      order: LibNativeOrder.LimitOrderStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<string>;

  fillLimitOrder(
    order: LibNativeOrder.LimitOrderStruct,
    signature: LibSignature.SignatureStruct,
    takerTokenFillAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fillRfqOrder(
    order: LibNativeOrder.RfqOrderStruct,
    signature: LibSignature.SignatureStruct,
    takerTokenFillAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLimitOrderHash(
    order: LibNativeOrder.LimitOrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<string>;

    fillLimitOrder(
      order: LibNativeOrder.LimitOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        takerTokenFilledAmount: BigNumber;
        makerTokenFilledAmount: BigNumber;
      }
    >;

    fillRfqOrder(
      order: LibNativeOrder.RfqOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        takerTokenFilledAmount: BigNumber;
        makerTokenFilledAmount: BigNumber;
      }
    >;

    getLimitOrderHash(
      order: LibNativeOrder.LimitOrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    EIP712_EXCHANGE_DOMAIN_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    fillLimitOrder(
      order: LibNativeOrder.LimitOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fillRfqOrder(
      order: LibNativeOrder.RfqOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLimitOrderHash(
      order: LibNativeOrder.LimitOrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EIP712_EXCHANGE_DOMAIN_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fillLimitOrder(
      order: LibNativeOrder.LimitOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fillRfqOrder(
      order: LibNativeOrder.RfqOrderStruct,
      signature: LibSignature.SignatureStruct,
      takerTokenFillAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLimitOrderHash(
      order: LibNativeOrder.LimitOrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolFeeMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}