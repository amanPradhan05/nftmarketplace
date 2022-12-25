/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ILiquidityProviderSandbox,
  ILiquidityProviderSandboxInterface,
} from "../../../../contracts/src/external/ILiquidityProviderSandbox";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILiquidityProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "auxiliaryData",
        type: "bytes",
      },
    ],
    name: "executeSellEthForToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILiquidityProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "auxiliaryData",
        type: "bytes",
      },
    ],
    name: "executeSellTokenForEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILiquidityProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "contract IERC20TokenV06",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBuyAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "auxiliaryData",
        type: "bytes",
      },
    ],
    name: "executeSellTokenForToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ILiquidityProviderSandbox__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidityProviderSandboxInterface {
    return new utils.Interface(_abi) as ILiquidityProviderSandboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILiquidityProviderSandbox {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILiquidityProviderSandbox;
  }
}