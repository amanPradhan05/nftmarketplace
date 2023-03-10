/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IKillable,
  IKillableInterface,
} from "../../../../../contracts/src/external/TransformerDeployer.sol/IKillable";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "ethRecipient",
        type: "address",
      },
    ],
    name: "die",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKillable__factory {
  static readonly abi = _abi;
  static createInterface(): IKillableInterface {
    return new utils.Interface(_abi) as IKillableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKillable {
    return new Contract(address, _abi, signerOrProvider) as IKillable;
  }
}
