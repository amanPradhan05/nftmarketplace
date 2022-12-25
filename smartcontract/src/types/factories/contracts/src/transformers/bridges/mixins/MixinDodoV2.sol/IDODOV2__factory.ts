/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IDODOV2,
  IDODOV2Interface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinDodoV2.sol/IDODOV2";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sellBase",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sellQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDODOV2__factory {
  static readonly abi = _abi;
  static createInterface(): IDODOV2Interface {
    return new utils.Interface(_abi) as IDODOV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDODOV2 {
    return new Contract(address, _abi, signerOrProvider) as IDODOV2;
  }
}
