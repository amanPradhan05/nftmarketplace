/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TestFeeCollectorController,
  TestFeeCollectorControllerInterface,
} from "../../../contracts/test/TestFeeCollectorController";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "FEE_COLLECTOR_INIT_CODE_HASH",
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
  "0x60806040526000801b60005534801561001757600080fd5b5060b3806100266000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063f2541a8c14602d575b600080fd5b60336047565b604051603e9190605a565b60405180910390f35b60005481565b6054816073565b82525050565b6000602082019050606d6000830184604d565b92915050565b600081905091905056fea2646970667358221220b1b4b1f922022cacd868e94385b51803c9f922b5cc952ea8629c8670ce18350364736f6c634300060c0033";

type TestFeeCollectorControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestFeeCollectorControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestFeeCollectorController__factory extends ContractFactory {
  constructor(...args: TestFeeCollectorControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestFeeCollectorController> {
    return super.deploy(overrides || {}) as Promise<TestFeeCollectorController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestFeeCollectorController {
    return super.attach(address) as TestFeeCollectorController;
  }
  override connect(signer: Signer): TestFeeCollectorController__factory {
    return super.connect(signer) as TestFeeCollectorController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestFeeCollectorControllerInterface {
    return new utils.Interface(_abi) as TestFeeCollectorControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestFeeCollectorController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestFeeCollectorController;
  }
}
