/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IDODO,
  IDODOInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinDodo.sol/IDODO";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPayQuote",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "buyBaseToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minReceiveQuote",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "sellBaseToken",
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

export class IDODO__factory {
  static readonly abi = _abi;
  static createInterface(): IDODOInterface {
    return new utils.Interface(_abi) as IDODOInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IDODO {
    return new Contract(address, _abi, signerOrProvider) as IDODO;
  }
}
