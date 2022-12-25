/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  LogMetadataTransformer,
  LogMetadataTransformerInterface,
} from "../../../../contracts/src/transformers/LogMetadataTransformer";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TransformerMetadata",
    type: "event",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IERC20Transformer.TransformContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "transform",
    outputs: [
      {
        internalType: "bytes4",
        name: "success",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250503073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c60a05160601c6106c56100b7600039806101b85280610212525080610132528061018c528061025752506106c56000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063832b24bb14610046578063c9353cb514610076578063d5f3948814610092575b600080fd5b610060600480360381019061005b9190610410565b6100b0565b60405161006d919061052f565b60405180910390f35b610090600480360381019061008b91906103e7565b610130565b005b61009a610255565b6040516100a791906104ab565b60405180910390f35b60007fb93f056965e11f8e82e38e1cbcc633815755295e4a9afc067a8922c75867073c8260000160208101906100e691906103e7565b8360200160208101906100f991906103e7565b848060400190610109919061054a565b60405161011994939291906104c6565b60405180910390a16313c9929e60e01b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101b6576101b56101b0337f0000000000000000000000000000000000000000000000000000000000000000610279565b610314565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461023c5761023b610236307f000000000000000000000000000000000000000000000000000000000000000061031c565b610314565b5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b7f000000000000000000000000000000000000000000000000000000000000000081565b60607f5cec653b364cca3880afa73ceff506d0651d11d26abbbe4a56460aa933b21b0883836040516024016102af929190610506565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b805160208201fd5b60607fb5cf2cd09307d6c717473134badbb9761c2c97d7565566c2a71eba6cd6fc514d8383604051602401610352929190610506565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b6000813590506103c681610678565b92915050565b6000606082840312156103de57600080fd5b81905092915050565b6000602082840312156103f957600080fd5b6000610407848285016103b7565b91505092915050565b60006020828403121561042257600080fd5b600082013567ffffffffffffffff81111561043c57600080fd5b610448848285016103cc565b91505092915050565b61045a81610622565b82525050565b610469816105b2565b82525050565b610478816105d6565b82525050565b600061048a83856105a1565b9350610497838584610658565b6104a083610667565b840190509392505050565b60006020820190506104c06000830184610460565b92915050565b60006060820190506104db6000830187610451565b6104e86020830186610451565b81810360408301526104fb81848661047e565b905095945050505050565b600060408201905061051b6000830185610460565b6105286020830184610460565b9392505050565b6000602082019050610544600083018461046f565b92915050565b6000808335600160200384360303811261056357600080fd5b80840192508235915067ffffffffffffffff82111561058157600080fd5b60208301925060018202360383131561059957600080fd5b509250929050565b600082825260208201905092915050565b60006105bd82610602565b9050919050565b60006105cf82610602565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061062d82610634565b9050919050565b600061063f82610646565b9050919050565b600061065182610602565b9050919050565b82818337600083830152505050565b6000601f19601f8301169050919050565b610681816105c4565b811461068c57600080fd5b5056fea26469706673582212207a99a27c06e1b9f687b10c5c0025d827388bdf5e02e71105ff16d59fc8ca8a9e64736f6c634300060c0033";

type LogMetadataTransformerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LogMetadataTransformerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LogMetadataTransformer__factory extends ContractFactory {
  constructor(...args: LogMetadataTransformerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LogMetadataTransformer> {
    return super.deploy(overrides || {}) as Promise<LogMetadataTransformer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LogMetadataTransformer {
    return super.attach(address) as LogMetadataTransformer;
  }
  override connect(signer: Signer): LogMetadataTransformer__factory {
    return super.connect(signer) as LogMetadataTransformer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LogMetadataTransformerInterface {
    return new utils.Interface(_abi) as LogMetadataTransformerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LogMetadataTransformer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LogMetadataTransformer;
  }
}