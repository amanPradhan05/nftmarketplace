/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  NativeOrdersProtocolFees,
  NativeOrdersProtocolFeesInterface,
} from "../../../../../contracts/src/features/native_orders/NativeOrdersProtocolFees";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "PROTOCOL_FEE_MULTIPLIER",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolFeeMultiplier",
    outputs: [
      {
        internalType: "uint32",
        name: "multiplier",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "poolIds",
        type: "bytes32[]",
      },
    ],
    name: "transferProtocolFeesForPools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class NativeOrdersProtocolFees__factory {
  static readonly abi = _abi;
  static createInterface(): NativeOrdersProtocolFeesInterface {
    return new utils.Interface(_abi) as NativeOrdersProtocolFeesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeOrdersProtocolFees {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeOrdersProtocolFees;
  }
}
