/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC165Feature,
  ERC165FeatureInterface,
} from "../../../../contracts/src/features/ERC165Feature";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "FEATURE_NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEATURE_VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportInterface",
    outputs: [
      {
        internalType: "bool",
        name: "isSupported",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052610017600160008061006660201b60201c565b60a09081525034801561002957600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050610090565b60008163ffffffff1660208463ffffffff16901b60408663ffffffff16901b171790509392505050565b60805160601c60a05161037d6100b06000398060b452505061037d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063031b905c146100465780636ae4b4f71461006457806375e79be614610082575b600080fd5b61004e6100b2565b60405161005b9190610273565b60405180910390f35b61006c6100d6565b6040516100799190610251565b60405180910390f35b61009c600480360381019061009791906101b6565b61010f565b6040516100a99190610236565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6040518060400160405280600681526020017f455243313635000000000000000000000000000000000000000000000000000081525081565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061016a575063150b7a0260e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061019a5750634e2312e060e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000813590506101b081610330565b92915050565b6000602082840312156101c857600080fd5b60006101d6848285016101a1565b91505092915050565b6101e8816102aa565b82525050565b60006101f98261028e565b6102038185610299565b93506102138185602086016102ec565b61021c8161031f565b840191505092915050565b610230816102e2565b82525050565b600060208201905061024b60008301846101df565b92915050565b6000602082019050818103600083015261026b81846101ee565b905092915050565b60006020820190506102886000830184610227565b92915050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b60005b8381101561030a5780820151818401526020810190506102ef565b83811115610319576000848401525b50505050565b6000601f19601f8301169050919050565b610339816102b6565b811461034457600080fd5b5056fea2646970667358221220ba2599b86096c0a900adca9dda7cf8fce6bd933c44bc21f5ae1a1db81e883fec64736f6c634300060c0033";

type ERC165FeatureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165FeatureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165Feature__factory extends ContractFactory {
  constructor(...args: ERC165FeatureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC165Feature> {
    return super.deploy(overrides || {}) as Promise<ERC165Feature>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC165Feature {
    return super.attach(address) as ERC165Feature;
  }
  override connect(signer: Signer): ERC165Feature__factory {
    return super.connect(signer) as ERC165Feature__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165FeatureInterface {
    return new utils.Interface(_abi) as ERC165FeatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC165Feature {
    return new Contract(address, _abi, signerOrProvider) as ERC165Feature;
  }
}
