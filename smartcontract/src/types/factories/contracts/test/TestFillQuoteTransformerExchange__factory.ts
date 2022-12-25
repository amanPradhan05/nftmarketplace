/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TestFillQuoteTransformerExchange,
  TestFillQuoteTransformerExchangeInterface,
} from "../../../contracts/test/TestFillQuoteTransformerExchange";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "EIP712_EXCHANGE_DOMAIN_HASH",
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
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillLimitOrder",
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
      {
        internalType: "uint128",
        name: "takerTokenFillAmount",
        type: "uint128",
      },
    ],
    name: "fillRfqOrder",
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
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolFeeMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f20806100206000396000f3fe60806040526004361061004a5760003560e01c8063487b5c201461004f578063aa77476c1461007a578063c26cfecd146100ab578063dd11d225146100d6578063f6274f6614610113575b600080fd5b34801561005b57600080fd5b50610064610144565b6040516100719190610d68565b60405180910390f35b610094600480360381019061008f9190610af7565b61014e565b6040516100a2929190610d3f565b60405180910390f35b3480156100b757600080fd5b506100c06103fa565b6040516100cd9190610cbb565b60405180910390f35b3480156100e257600080fd5b506100fd60048036038101906100f89190610a7b565b610421565b60405161010a9190610cbb565b60405180910390f35b61012d60048036038101906101289190610aa5565b610433565b60405161013b929190610d3f565b60405180910390f35b6000610539905090565b6000806000846040013560001c9050806fffffffffffffffffffffffffffffffff1663deadbeef14156101b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad90610d1f565b60405180910390fd5b8560600160208101906101c99190610b49565b6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff161061022e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022590610cff565b60405180910390fd5b61024c818760600160208101906102459190610b49565b038561085a565b92508560200160208101906102619190610a52565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd338860800160208101906102909190610a00565b866040518463ffffffff1660e01b81526004016102af93929190610c5b565b602060405180830381600087803b1580156102c957600080fd5b505af11580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103019190610a29565b506103708660600160208101906103189190610b49565b6fffffffffffffffffffffffffffffffff1687604001602081019061033d9190610b49565b6fffffffffffffffffffffffffffffffff16856fffffffffffffffffffffffffffffffff16028161036a57fe5b04610897565b91508560000160208101906103859190610a52565b73ffffffffffffffffffffffffffffffffffffffff166340c10f1933846040518363ffffffff1660e01b81526004016103bf929190610c92565b600060405180830381600087803b1580156103d957600080fd5b505af11580156103ed573d6000803e3d6000fd5b5050505050935093915050565b7faa81d881b1adbbf115e15b849cb9cdc643cad3c6a90f30eb505954af943247e660001b81565b600081610160013560001b9050919050565b6000806000846040013560001c9050806fffffffffffffffffffffffffffffffff1663deadbeef141561049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290610d1f565b60405180910390fd5b8560600160208101906104ae9190610b49565b6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff1610610513576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050a90610cff565b60405180910390fd5b60003a6105390290503373ffffffffffffffffffffffffffffffffffffffff166108fc8234039081150290604051600060405180830381858888f19350505050158015610564573d6000803e3d6000fd5b506105838288606001602081019061057c9190610b49565b038661085a565b93508660200160208101906105989190610a52565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd338960a00160208101906105c79190610a00565b876040518463ffffffff1660e01b81526004016105e693929190610c5b565b602060405180830381600087803b15801561060057600080fd5b505af1158015610614573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106389190610a29565b506106a787606001602081019061064f9190610b49565b6fffffffffffffffffffffffffffffffff168860400160208101906106749190610b49565b6fffffffffffffffffffffffffffffffff16866fffffffffffffffffffffffffffffffff1602816106a157fe5b04610897565b92508660000160208101906106bc9190610a52565b73ffffffffffffffffffffffffffffffffffffffff166340c10f1933856040518363ffffffff1660e01b81526004016106f6929190610c92565b600060405180830381600087803b15801561071057600080fd5b505af1158015610724573d6000803e3d6000fd5b5050505060006107988860600160208101906107409190610b49565b6fffffffffffffffffffffffffffffffff168960800160208101906107659190610b49565b6fffffffffffffffffffffffffffffffff16876fffffffffffffffffffffffffffffffff16028161079257fe5b04610897565b90508760200160208101906107ad9190610a52565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd338a6101000160208101906107dd9190610a00565b846040518463ffffffff1660e01b81526004016107fc93929190610c5b565b602060405180830381600087803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e9190610a29565b50505050935093915050565b6000816fffffffffffffffffffffffffffffffff16836fffffffffffffffffffffffffffffffff161061088d578161088f565b825b905092915050565b60006fffffffffffffffffffffffffffffffff80168211156108c7576108c66108c16003846108cf565b610951565b5b819050919050565b606063c996af7b60e01b83836040516024016108ec929190610cd6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b805160208201fd5b60008135905061096881610e8e565b92915050565b60008151905061097d81610ea5565b92915050565b60008135905061099281610ebc565b92915050565b600061018082840312156109ab57600080fd5b81905092915050565b600061014082840312156109c757600080fd5b81905092915050565b6000608082840312156109e257600080fd5b81905092915050565b6000813590506109fa81610ed3565b92915050565b600060208284031215610a1257600080fd5b6000610a2084828501610959565b91505092915050565b600060208284031215610a3b57600080fd5b6000610a498482850161096e565b91505092915050565b600060208284031215610a6457600080fd5b6000610a7284828501610983565b91505092915050565b60006101808284031215610a8e57600080fd5b6000610a9c84828501610998565b91505092915050565b60008060006102208486031215610abb57600080fd5b6000610ac986828701610998565b935050610180610adb868287016109d0565b925050610200610aed868287016109eb565b9150509250925092565b60008060006101e08486031215610b0d57600080fd5b6000610b1b868287016109b4565b935050610140610b2d868287016109d0565b9250506101c0610b3f868287016109eb565b9150509250925092565b600060208284031215610b5b57600080fd5b6000610b69848285016109eb565b91505092915050565b610b7b81610e27565b82525050565b610b8a81610d94565b82525050565b610b9981610db2565b82525050565b610ba881610e39565b82525050565b6000610bbb600683610d83565b91507f46494c4c454400000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000610bfb600d83610d83565b91507f5245564552545f414d4f554e54000000000000000000000000000000000000006000830152602082019050919050565b610c3781610de1565b82525050565b610c4681610e4b565b82525050565b610c5581610e1d565b82525050565b6000606082019050610c706000830186610b72565b610c7d6020830185610b81565b610c8a6040830184610c3d565b949350505050565b6000604082019050610ca76000830185610b72565b610cb46020830184610c3d565b9392505050565b6000602082019050610cd06000830184610b90565b92915050565b6000604082019050610ceb6000830185610b9f565b610cf86020830184610c4c565b9392505050565b60006020820190508181036000830152610d1881610bae565b9050919050565b60006020820190508181036000830152610d3881610bee565b9050919050565b6000604082019050610d546000830185610c2e565b610d616020830184610c2e565b9392505050565b6000602082019050610d7d6000830184610c4c565b92915050565b600082825260208201905092915050565b6000610d9f82610dfd565b9050919050565b60008115159050919050565b6000819050919050565b6000610dc782610d94565b9050919050565b6000819050610ddc82610e81565b919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610e3282610e5d565b9050919050565b6000610e4482610dce565b9050919050565b6000610e5682610de1565b9050919050565b6000610e6882610e6f565b9050919050565b6000610e7a82610dfd565b9050919050565b60048110610e8b57fe5b50565b610e9781610d94565b8114610ea257600080fd5b50565b610eae81610da6565b8114610eb957600080fd5b50565b610ec581610dbc565b8114610ed057600080fd5b50565b610edc81610de1565b8114610ee757600080fd5b5056fea2646970667358221220a2bfd65b12102297927302dc2a36b245fe333d41d569665eb7027d5a33a6877464736f6c634300060c0033";

type TestFillQuoteTransformerExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestFillQuoteTransformerExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestFillQuoteTransformerExchange__factory extends ContractFactory {
  constructor(...args: TestFillQuoteTransformerExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestFillQuoteTransformerExchange> {
    return super.deploy(
      overrides || {}
    ) as Promise<TestFillQuoteTransformerExchange>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestFillQuoteTransformerExchange {
    return super.attach(address) as TestFillQuoteTransformerExchange;
  }
  override connect(signer: Signer): TestFillQuoteTransformerExchange__factory {
    return super.connect(signer) as TestFillQuoteTransformerExchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestFillQuoteTransformerExchangeInterface {
    return new utils.Interface(
      _abi
    ) as TestFillQuoteTransformerExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestFillQuoteTransformerExchange {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestFillQuoteTransformerExchange;
  }
}