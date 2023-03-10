/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IFundRecoveryFeature,
  IFundRecoveryFeatureInterface,
} from "../../../../../contracts/src/features/interfaces/IFundRecoveryFeature";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipientWallet",
        type: "address",
      },
    ],
    name: "transferTrappedTokensTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFundRecoveryFeature__factory {
  static readonly abi = _abi;
  static createInterface(): IFundRecoveryFeatureInterface {
    return new utils.Interface(_abi) as IFundRecoveryFeatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFundRecoveryFeature {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IFundRecoveryFeature;
  }
}
