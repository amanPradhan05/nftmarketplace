/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MixinCompound,
  MixinCompoundInterface,
} from "../../../../../../../contracts/src/transformers/bridges/mixins/MixinCompound.sol/MixinCompound";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEtherTokenV06",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161015d38038061015d83398181016040528101906100329190610084565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050610108565b60008151905061007e816100f1565b92915050565b60006020828403121561009657600080fd5b60006100a48482850161006f565b91505092915050565b60006100b8826100d1565b9050919050565b60006100ca826100ad565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100fa816100bf565b811461010557600080fd5b50565b60805160601c603f61011e60003950603f6000f3fe6080604052600080fdfea2646970667358221220dcc4f377b81c4be3210c2cb3a6edce77710750624cf3131b0c0a390321d6b57c64736f6c634300060c0033";

type MixinCompoundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MixinCompoundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MixinCompound__factory extends ContractFactory {
  constructor(...args: MixinCompoundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MixinCompound> {
    return super.deploy(weth, overrides || {}) as Promise<MixinCompound>;
  }
  override getDeployTransaction(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(weth, overrides || {});
  }
  override attach(address: string): MixinCompound {
    return super.attach(address) as MixinCompound;
  }
  override connect(signer: Signer): MixinCompound__factory {
    return super.connect(signer) as MixinCompound__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MixinCompoundInterface {
    return new utils.Interface(_abi) as MixinCompoundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MixinCompound {
    return new Contract(address, _abi, signerOrProvider) as MixinCompound;
  }
}
