/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IMStable,
  IMStableInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinMStable.sol/IMStable";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "sellToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "buyToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBoughtAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "boughtAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMStable__factory {
  static readonly abi = _abi;
  static createInterface(): IMStableInterface {
    return new utils.Interface(_abi) as IMStableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMStable {
    return new Contract(address, _abi, signerOrProvider) as IMStable;
  }
}
