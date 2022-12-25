/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ICEther,
  ICEtherInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinCompound.sol/ICEther";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemTokensInCEther",
        type: "uint256",
      },
    ],
    name: "redeem",
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

export class ICEther__factory {
  static readonly abi = _abi;
  static createInterface(): ICEtherInterface {
    return new utils.Interface(_abi) as ICEtherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICEther {
    return new Contract(address, _abi, signerOrProvider) as ICEther;
  }
}
