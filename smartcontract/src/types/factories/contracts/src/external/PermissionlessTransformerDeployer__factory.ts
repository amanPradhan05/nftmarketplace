/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  PermissionlessTransformerDeployer,
  PermissionlessTransformerDeployerInterface,
} from "../../../../contracts/src/external/PermissionlessTransformerDeployer";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "isDelegateCallSafe",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "toDeploymentSalt",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "toInitCodeHash",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061098f806100206000396000f3fe60806040526004361061003f5760003560e01c80634af63f02146100445780635d42a5f2146100745780638cd09f0c146100b1578063d253c0d7146100ee575b600080fd5b61005e6004803603810190610059919061058a565b61012b565b60405161006b919061074c565b60405180910390f35b34801561008057600080fd5b5061009b60048036038101906100969190610561565b6102bf565b6040516100a891906107b9565b60405180910390f35b3480156100bd57600080fd5b506100d860048036038101906100d39190610561565b6102d7565b6040516100e5919061079e565b60405180910390f35b3480156100fa57600080fd5b5061011560048036038101906101109190610561565b6104cb565b60405161012291906107b9565b60405180910390f35b60008183516020850134f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156101a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019f906107f4565b60405180910390fd5b6101b1816102d7565b6101f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e7906107d4565b60405180910390fd5b816000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508280519060200120600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507ffa86dcef4390d6a0f7edde563410fc44e4c2d382b4c6699cce5ebc4071abcc958183336040516102b193929190610767565b60405180910390a192915050565b60006020528060005260406000206000915090505481565b600080823b905060008111610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031890610814565b60405180910390fd5b60608167ffffffffffffffff8111801561033a57600080fd5b506040519080825280601f01601f19166020018201604052801561036d5781602001600182028036833780820191505090505b50905081600060208301863c60006001905060005b82518110156104bd57600083828151811061039957fe5b602001015160f81c60f81b60f81c9050605f8160ff161180156103bf575060808160ff16105b156103d557605f810360ff1682019150506104b0565b821561049c5760fe8160ff1614806103f0575060f38160ff16145b806103fe575060fd8160ff16145b8061040c575060568160ff16145b8061041a575060008160ff16145b156104295760009250506104b0565b60f28160ff16148061043e575060f48160ff16145b8061044c575060ff8160ff16145b8061045a575060f08160ff16145b80610468575060f58160ff16145b80610476575060548160ff16145b80610484575060558160ff16145b15610497576000955050505050506104c6565b6104ae565b605b8160ff1614156104ad57600192505b5b505b8080600101915050610382565b50600193505050505b919050565b60016020528060005260406000206000915090505481565b6000813590506104f28161092b565b92915050565b60008135905061050781610942565b92915050565b600082601f83011261051e57600080fd5b813561053161052c82610861565b610834565b9150808252602083016020830185838301111561054d57600080fd5b61055883828461091c565b50505092915050565b60006020828403121561057357600080fd5b6000610581848285016104e3565b91505092915050565b6000806040838503121561059d57600080fd5b600083013567ffffffffffffffff8111156105b757600080fd5b6105c38582860161050d565b92505060206105d4858286016104f8565b9150509250929050565b6105e7816108e6565b82525050565b6105f68161089e565b82525050565b610605816108b0565b82525050565b610614816108bc565b82525050565b6000610627602d8361088d565b91507f5065726d697373696f6e6c6573735472616e73666f726d65724465706c6f796560008301527f722f554e534146455f434f4445000000000000000000000000000000000000006020830152604082019050919050565b600061068d602f8361088d565b91507f5065726d697373696f6e6c6573735472616e73666f726d65724465706c6f796560008301527f722f4445504c4f595f4641494c454400000000000000000000000000000000006020830152604082019050919050565b60006106f360298361088d565b91507f5065726d697373696f6e6c6573735472616e73666f726d65724465706c6f796560008301527f722f4e4f5f434f444500000000000000000000000000000000000000000000006020830152604082019050919050565b600060208201905061076160008301846105ed565b92915050565b600060608201905061077c60008301866105ed565b610789602083018561060b565b61079660408301846105de565b949350505050565b60006020820190506107b360008301846105fc565b92915050565b60006020820190506107ce600083018461060b565b92915050565b600060208201905081810360008301526107ed8161061a565b9050919050565b6000602082019050818103600083015261080d81610680565b9050919050565b6000602082019050818103600083015261082d816106e6565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171561085757600080fd5b8060405250919050565b600067ffffffffffffffff82111561087857600080fd5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b60006108a9826108c6565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108f1826108f8565b9050919050565b60006109038261090a565b9050919050565b6000610915826108c6565b9050919050565b82818337600083830152505050565b6109348161089e565b811461093f57600080fd5b50565b61094b816108bc565b811461095657600080fd5b5056fea26469706673582212200e7734e85e76c274db977de313ffff9b6739bed857107abe1afcf235fbc755a064736f6c634300060c0033";

type PermissionlessTransformerDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermissionlessTransformerDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PermissionlessTransformerDeployer__factory extends ContractFactory {
  constructor(...args: PermissionlessTransformerDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PermissionlessTransformerDeployer> {
    return super.deploy(
      overrides || {}
    ) as Promise<PermissionlessTransformerDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PermissionlessTransformerDeployer {
    return super.attach(address) as PermissionlessTransformerDeployer;
  }
  override connect(signer: Signer): PermissionlessTransformerDeployer__factory {
    return super.connect(signer) as PermissionlessTransformerDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionlessTransformerDeployerInterface {
    return new utils.Interface(
      _abi
    ) as PermissionlessTransformerDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionlessTransformerDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PermissionlessTransformerDeployer;
  }
}
