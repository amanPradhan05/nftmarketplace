/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  NativeOrdersCancellation,
  NativeOrdersCancellationInterface,
} from "../../../../../contracts/src/features/native_orders/NativeOrdersCancellation";
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
        name: "feeRecipient",
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
        name: "takerTokenFilledAmount",
        type: "uint128",
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
        name: "takerTokenFeeFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFeePaid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "pool",
        type: "bytes32",
      },
    ],
    name: "LimitOrderFilled",
    type: "event",
  },
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
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "OrderSignerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "PairCancelledLimitOrders",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "maker",
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "PairCancelledRfqOrders",
    type: "event",
  },
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
        name: "takerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "makerTokenFilledAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "pool",
        type: "bytes32",
      },
    ],
    name: "RfqOrderFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "origin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "addrs",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "RfqOrderOriginsAllowed",
    type: "event",
  },
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
    ],
    name: "batchCancelLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairLimitOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairRfqOrders",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "contract IERC20TokenV06[]",
        name: "makerTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20TokenV06[]",
        name: "takerTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minValidSalts",
        type: "uint256[]",
      },
    ],
    name: "batchCancelPairRfqOrdersWithSigner",
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
    ],
    name: "batchCancelRfqOrders",
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
    name: "cancelLimitOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairLimitOrdersWithSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairRfqOrders",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "minValidSalt",
        type: "uint256",
      },
    ],
    name: "cancelPairRfqOrdersWithSigner",
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
    name: "cancelRfqOrder",
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

export class NativeOrdersCancellation__factory {
  static readonly abi = _abi;
  static createInterface(): NativeOrdersCancellationInterface {
    return new utils.Interface(_abi) as NativeOrdersCancellationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeOrdersCancellation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeOrdersCancellation;
  }
}
