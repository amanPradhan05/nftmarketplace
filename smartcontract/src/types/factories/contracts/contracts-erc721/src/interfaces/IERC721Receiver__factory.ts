/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IERC721Receiver,
  IERC721ReceiverInterface,
} from "../../../../../contracts/contracts-erc721/src/interfaces/IERC721Receiver";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_operator",
        type: "address",
      },
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC721Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721ReceiverInterface {
    return new utils.Interface(_abi) as IERC721ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Receiver {
    return new Contract(address, _abi, signerOrProvider) as IERC721Receiver;
  }
}
