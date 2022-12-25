/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { ZeroEx, ZeroExInterface } from "../../../contracts/src/ZeroEx";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bootstrapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "getFunctionImplementation",
    outputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161134138038061134183398181016040528101906100329190610179565b60008160405161004190610157565b61004b91906101b1565b604051809103906000f080158015610067573d6000803e3d6000fd5b5090508061007d61011b60201b61032f1760201c565b60000160006373f208d560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610215565b600080610132600061013b60201b6103451760201c565b90508091505090565b60006080600183600a81111561014d57fe5b01901b9050919050565b610b098061083883390190565b600081519050610173816101fe565b92915050565b60006020828403121561018b57600080fd5b600061019984828501610164565b91505092915050565b6101ab816101cc565b82525050565b60006020820190506101c660008301846101a2565b92915050565b60006101d7826101de565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610207816101cc565b811461021257600080fd5b50565b610614806102246000396000f3fe6080604052600436106100225760003560e01c8063972fdd261461016857610029565b3661002957005b6000610083600080368080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506101a590919063ffffffff16565b9050600061009082610203565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100d9576100d86100d383610287565b61031f565b5b600060608273ffffffffffffffffffffffffffffffffffffffff1660003660405161010592919061048d565b600060405180830381855af49150503d8060008114610140576040519150601f19603f3d011682016040523d82523d6000602084013e610145565b606091505b509150915081610159576101588161031f565b5b61016281610327565b50505050005b34801561017457600080fd5b5061018f600480360381019061018a9190610403565b610203565b60405161019c91906104a6565b60405180910390f35b600060048201835110156101cc576101cb6101c66003855160048601610361565b6103e6565b5b6020820191508183015190507fffffffff000000000000000000000000000000000000000000000000000000008116905092915050565b600061020d61032f565b6000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60607f734e6e1c6ec3f883cac8d13d3e7390b280f5e94424662aa29e27394ed56586c9826040516024016102bb91906104c1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b805160208201fd5b805160208201f35b60008061033c6000610345565b90508091505090565b60006080600183600a81111561035757fe5b01901b9050919050565b6060632800659560e01b848484604051602401610380939291906104dc565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090509392505050565b805160208201fd5b6000813590506103fd816105c7565b92915050565b60006020828403121561041557600080fd5b6000610423848285016103ee565b91505092915050565b6104358161051e565b82525050565b61044481610530565b82525050565b60006104568385610513565b93506104638385846105ab565b82840190509392505050565b61047881610599565b82525050565b6104878161058f565b82525050565b600061049a82848661044a565b91508190509392505050565b60006020820190506104bb600083018461042c565b92915050565b60006020820190506104d6600083018461043b565b92915050565b60006060820190506104f1600083018661046f565b6104fe602083018561047e565b61050b604083018461047e565b949350505050565b600081905092915050565b60006105298261056f565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600081905061056a826105ba565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006105a48261055c565b9050919050565b82818337600083830152505050565b600881106105c457fe5b50565b6105d081610530565b81146105db57600080fd5b5056fea26469706673582212208c409c4462b6395cb55827092daa5379a906b93f6a2476f417b9522fcb74785064736f6c634300060c003360e060405234801561001057600080fd5b50604051610b09380380610b09833981810160405281019061003291906100f2565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250503073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050610164565b6000815190506100ec8161014d565b92915050565b60006020828403121561010457600080fd5b6000610112848285016100dd565b91505092915050565b60006101268261012d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101568161011b565b811461016157600080fd5b50565b60805160601c60a05160601c60c05160601c6109636101a66000398061015752806101b15250806063528061027e52508060b8528061011252506109636000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806335f469941461003b57806373f208d514610045575b600080fd5b610043610061565b005b61005f600480360381019061005a91906106cc565b610155565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146100b657fe5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461013c5761013b610136337f000000000000000000000000000000000000000000000000000000000000000061034f565b6103ea565b5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101db576101da6101d5337f00000000000000000000000000000000000000000000000000000000000000006103f2565b6103ea565b5b60006101e561048d565b60000160006373f208d560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335f469946040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102e457600080fd5b505af11580156102f8573d6000803e3d6000fd5b5050505061034a8383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506104a3565b505050565b60607fabeb420c997af2b939cfae9ef422a08b8467cc0cf89064c140b7edf8a22cedc283836040516024016103859291906107dd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b805160208201fd5b60607fb84f6d63d81ee2a3bc5c6658be21fc96c31d7cdc4dc460ea0d6f7b7218b5b4b383836040516024016104289291906107dd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b60008061049a60006105a1565b90508091505090565b600060608373ffffffffffffffffffffffffffffffffffffffff16836040516104cc91906107c6565b600060405180830381855af49150503d8060008114610507576040519150601f19603f3d011682016040523d82523d6000602084013e61050c565b606091505b509150915081158061052057506020815114155b80610583575063d150751b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190518101906105619190610724565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614155b1561059b5761059a61059585836105bd565b6103ea565b5b50505050565b60006080600183600a8111156105b357fe5b01901b9050919050565b60607fd19d65df6830e3cb0da1e12b8e9738e2dc473f830d8af813bcc031eb5a1675d183836040516024016105f3929190610806565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b600081359050610667816108ff565b92915050565b60008151905061067c81610916565b92915050565b60008083601f84011261069457600080fd5b8235905067ffffffffffffffff8111156106ad57600080fd5b6020830191508360018202830111156106c557600080fd5b9250929050565b6000806000604084860312156106e157600080fd5b60006106ef86828701610658565b935050602084013567ffffffffffffffff81111561070c57600080fd5b61071886828701610682565b92509250509250925092565b60006020828403121561073657600080fd5b60006107448482850161066d565b91505092915050565b6107568161085d565b82525050565b600061076782610836565b6107718185610841565b93506107818185602086016108bb565b61078a816108ee565b840191505092915050565b60006107a082610836565b6107aa8185610852565b93506107ba8185602086016108bb565b80840191505092915050565b60006107d28284610795565b915081905092915050565b60006040820190506107f2600083018561074d565b6107ff602083018461074d565b9392505050565b600060408201905061081b600083018561074d565b818103602083015261082d818461075c565b90509392505050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006108688261089b565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156108d95780820151818401526020810190506108be565b838111156108e8576000848401525b50505050565b6000601f19601f8301169050919050565b6109088161085d565b811461091357600080fd5b50565b61091f8161086f565b811461092a57600080fd5b5056fea2646970667358221220cca82aeeaa0de376dea2b3175160569e10cf88ca20671358d868c11e7ba93ad364736f6c634300060c0033";

type ZeroExConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroExConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroEx__factory extends ContractFactory {
  constructor(...args: ZeroExConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bootstrapper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZeroEx> {
    return super.deploy(bootstrapper, overrides || {}) as Promise<ZeroEx>;
  }
  override getDeployTransaction(
    bootstrapper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bootstrapper, overrides || {});
  }
  override attach(address: string): ZeroEx {
    return super.attach(address) as ZeroEx;
  }
  override connect(signer: Signer): ZeroEx__factory {
    return super.connect(signer) as ZeroEx__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroExInterface {
    return new utils.Interface(_abi) as ZeroExInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZeroEx {
    return new Contract(address, _abi, signerOrProvider) as ZeroEx;
  }
}