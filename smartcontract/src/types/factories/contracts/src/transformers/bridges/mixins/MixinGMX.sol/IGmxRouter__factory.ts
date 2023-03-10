/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IGmxRouter,
  IGmxRouterInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinGMX.sol/IGmxRouter";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_path",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGmxRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IGmxRouterInterface {
    return new utils.Interface(_abi) as IGmxRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGmxRouter {
    return new Contract(address, _abi, signerOrProvider) as IGmxRouter;
  }
}
