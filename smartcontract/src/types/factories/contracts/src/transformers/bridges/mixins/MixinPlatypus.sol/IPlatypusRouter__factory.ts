/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IPlatypusRouter,
  IPlatypusRouterInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinPlatypus.sol/IPlatypusRouter";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenPath",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "poolPath",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumToAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "haircut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPlatypusRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IPlatypusRouterInterface {
    return new utils.Interface(_abi) as IPlatypusRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPlatypusRouter {
    return new Contract(address, _abi, signerOrProvider) as IPlatypusRouter;
  }
}
