/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IUniswapFeature,
  IUniswapFeatureInterface,
} from "../../../../../contracts/src/features/interfaces/IUniswapFeature";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "sellAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isSushi",
        type: "bool",
      },
    ],
    name: "sellToUniswap",
    outputs: [
      {
        internalType: "uint256",
        name: "buyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IUniswapFeature__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapFeatureInterface {
    return new utils.Interface(_abi) as IUniswapFeatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapFeature {
    return new Contract(address, _abi, signerOrProvider) as IUniswapFeature;
  }
}
