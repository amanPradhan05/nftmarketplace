/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  NativeOrdersInfo,
  NativeOrdersInfoInterface,
} from "../../../../../contracts/src/features/native_orders/NativeOrdersInfo";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "EIP712_DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
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
            internalType: "uint128",
            name: "takerTokenFeeAmount",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.LimitOrder[]",
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
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "batchGetLimitOrderRelevantStates",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo[]",
        name: "orderInfos",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "actualFillableTakerTokenAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool[]",
        name: "isSignatureValids",
        type: "bool[]",
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
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.RfqOrder[]",
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
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "batchGetRfqOrderRelevantStates",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo[]",
        name: "orderInfos",
        type: "tuple[]",
      },
      {
        internalType: "uint128[]",
        name: "actualFillableTakerTokenAmounts",
        type: "uint128[]",
      },
      {
        internalType: "bool[]",
        name: "isSignatureValids",
        type: "bool[]",
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
            internalType: "uint128",
            name: "takerTokenFeeAmount",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getLimitOrderHash",
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
            internalType: "uint128",
            name: "takerTokenFeeAmount",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getLimitOrderInfo",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
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
            internalType: "uint128",
            name: "takerTokenFeeAmount",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.LimitOrder",
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
        name: "signature",
        type: "tuple",
      },
    ],
    name: "getLimitOrderRelevantState",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "actualFillableTakerTokenAmount",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "isSignatureValid",
        type: "bool",
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
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getRfqOrderHash",
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
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
        name: "order",
        type: "tuple",
      },
    ],
    name: "getRfqOrderInfo",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
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
            internalType: "bytes32",
            name: "pool",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expiry",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct LibNativeOrder.RfqOrder",
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
        name: "signature",
        type: "tuple",
      },
    ],
    name: "getRfqOrderRelevantState",
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
          {
            internalType: "uint128",
            name: "takerTokenFilledAmount",
            type: "uint128",
          },
        ],
        internalType: "struct LibNativeOrder.OrderInfo",
        name: "orderInfo",
        type: "tuple",
      },
      {
        internalType: "uint128",
        name: "actualFillableTakerTokenAmount",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "isSignatureValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "isValidOrderSigner",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class NativeOrdersInfo__factory {
  static readonly abi = _abi;
  static createInterface(): NativeOrdersInfoInterface {
    return new utils.Interface(_abi) as NativeOrdersInfoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeOrdersInfo {
    return new Contract(address, _abi, signerOrProvider) as NativeOrdersInfo;
  }
}
