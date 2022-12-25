/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IOtcOrdersFeature,
  IOtcOrdersFeatureInterface,
} from "../../../../../contracts/src/features/interfaces/IOtcOrdersFeature";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "makerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "takerToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
    ],
    name: "OtcOrderFilled",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useSelfBalance",
        type: "bool",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "_fillOtcOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "makerSignatures",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature[]",
        name: "takerSignatures",
        type: "tuple[]",
      },
      {
        internalType: "bool[]",
        name: "unwrapWeth",
        type: "bool[]",
      },
    ],
    name: "batchFillTakerSignedOtcOrders",
    outputs: [
      {
        internalType: "bool[]",
        name: "successes",
        type: "bool[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOtcOrder",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillOtcOrderForEth",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
    ],
    name: "fillOtcOrderWithEth",
    outputs: [
      {
        internalType: "uint128",
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "takerSignature",
        type: "tuple",
      },
    ],
    name: "fillTakerSignedOtcOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "makerSignature",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "enum LibSignature.SignatureType",
            name: "signatureType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct LibSignature.Signature",
        name: "takerSignature",
        type: "tuple",
      },
    ],
    name: "fillTakerSignedOtcOrderForEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getOtcOrderHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20TokenV06",
            name: "makerToken",
            type: "address",
          },
          {
            internalType: "contract IERC20TokenV06",
            name: "takerToken",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "makerAmount",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "takerAmount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "taker",
            type: "address",
          },
          {
            internalType: "address",
            name: "txOrigin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryAndNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getOtcOrderInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "orderHash",
            type: "bytes32",
          },
          {
            internalType: "enum LibNativeOrder.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct LibNativeOrder.OtcOrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "txOrigin",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "nonceBucket",
        type: "uint64",
      },
    ],
    name: "lastOtcTxOriginNonce",
    outputs: [
      {
        internalType: "uint128",
        name: "lastNonce",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOtcOrdersFeature__factory {
  static readonly abi = _abi;
  static createInterface(): IOtcOrdersFeatureInterface {
    return new utils.Interface(_abi) as IOtcOrdersFeatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOtcOrdersFeature {
    return new Contract(address, _abi, signerOrProvider) as IOtcOrdersFeature;
  }
}
