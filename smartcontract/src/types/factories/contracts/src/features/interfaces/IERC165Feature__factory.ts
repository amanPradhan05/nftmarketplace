/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IERC165Feature,
  IERC165FeatureInterface,
} from "../../../../../contracts/src/features/interfaces/IERC165Feature";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportInterface",
    outputs: [
      {
        internalType: "bool",
        name: "isSupported",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IERC165Feature__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165FeatureInterface {
    return new utils.Interface(_abi) as IERC165FeatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC165Feature {
    return new Contract(address, _abi, signerOrProvider) as IERC165Feature;
  }
}
