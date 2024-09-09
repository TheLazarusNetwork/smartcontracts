/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ErebrusRegistry,
  ErebrusRegistryInterface,
} from "../ErebrusRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erebrusmanagerAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "did_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "validity",
        type: "uint32",
      },
    ],
    name: "AddAttribute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operatorAddress",
        type: "address",
      },
    ],
    name: "NodeDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ssid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "NodeOperatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "did_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
    ],
    name: "RemoveAttribte",
    type: "event",
  },
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
        name: "did_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "validity",
        type: "uint32",
      },
    ],
    name: "UpdateAttribute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nodeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "updatedStatus",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "updatedRegion",
        type: "string",
      },
    ],
    name: "VPNUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nodeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "nodename",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipaddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ispinfo",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "region",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "VpnNodeRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "deviceId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ssid",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pricePerMinute",
        type: "uint256",
      },
    ],
    name: "WifiNodeOperatorRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "VpnDeviceCheckpoints",
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
    inputs: [
      {
        internalType: "address",
        name: "did_account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "validity_for",
        type: "uint32",
      },
    ],
    name: "addAttribute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
    ],
    name: "deactivateNode",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "didToUser",
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
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
    ],
    name: "getWifiDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "did_account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
    ],
    name: "readAttribute",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "name",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "validity",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "created",
            type: "uint256",
          },
        ],
        internalType: "struct DID.Attribute",
        name: "",
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
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "peaqDid",
            type: "string",
          },
          {
            internalType: "string",
            name: "nodename",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipaddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "ispinfo",
            type: "string",
          },
          {
            internalType: "string",
            name: "region",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct ErebrusRegistry.VPNNode",
        name: "node",
        type: "tuple",
      },
    ],
    name: "registerVpnNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_deviceId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_peaqDid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ssid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pricePermin",
        type: "uint256",
      },
    ],
    name: "registerWifiNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "did_account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
    ],
    name: "removeAttribute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "did_account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "validity_for",
        type: "uint32",
      },
    ],
    name: "updateAttribute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_status",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_region",
        type: "string",
      },
    ],
    name: "updateVPNNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ssid",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pricePerMin",
        type: "uint256",
      },
    ],
    name: "updateWiFiNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "dataHash",
        type: "string",
      },
    ],
    name: "vpnDeviceCheckpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vpnNodeOperators",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "peaqDid",
        type: "string",
      },
      {
        internalType: "string",
        name: "nodename",
        type: "string",
      },
      {
        internalType: "string",
        name: "ipaddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "ispinfo",
        type: "string",
      },
      {
        internalType: "string",
        name: "region",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vpnTotalCheckpoints",
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
        internalType: "uint256",
        name: "nodeID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "dataHash",
        type: "string",
      },
    ],
    name: "wifiDeviceCheckpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "wifiDeviceCheckpoints",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "wifiNodeOperators",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "deviceId",
        type: "string",
      },
      {
        internalType: "string",
        name: "peaqDid",
        type: "string",
      },
      {
        internalType: "string",
        name: "ssid",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pricePerMinute",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "wifiTotalCheckpoints",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620022b6380380620022b683398101604081905261003191610056565b600280546001600160a01b0319166001600160a01b0392909216919091179055610086565b60006020828403121561006857600080fd5b81516001600160a01b038116811461007f57600080fd5b9392505050565b61222080620000966000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063b2028b7d116100ad578063e4f4ff0011610071578063e4f4ff00146102e0578063e8a8169014610321578063e9d6383014610334578063ee5458b314610347578063ef5050fb1461035a57600080fd5b8063b2028b7d14610260578063cc4a70ca14610280578063d04b7ae414610293578063d5399313146102a6578063e48da8a4146102cd57600080fd5b80634f663d31116100f45780634f663d31146101d157806363c3a7e7146101f157806368b4b2c1146102045780638a7692dc146102275780638f9c8ee21461023a57600080fd5b806304795f58146101265780630608a6b61461013b5780631b9f0c951461016e578063387f68e114610181575b600080fd5b61013961013436600461173f565b61037a565b005b61015b6101493660046117f3565b60066020526000908152604090205481565b6040519081526020015b60405180910390f35b61013961017c36600461180c565b6104c4565b6101b461018f3660046117f3565b60009081526004602052604090206005810154905490916001600160a01b0390911690565b604080519283526001600160a01b03909116602083015201610165565b6101e46101df366004611852565b610601565b60405161016591906118c4565b6101396101ff36600461180c565b6106a6565b610217610212366004611908565b6107d8565b6040519015158152602001610165565b61013961023536600461198e565b6108fe565b61024d6102483660046117f3565b6109ff565b6040516101659796959493929190611a02565b61027361026e366004611a7c565b610c68565b6040516101659190611ab3565b61021761028e366004611908565b610d0c565b6101396102a1366004611b24565b610edf565b6102b96102b43660046117f3565b611020565b604051610165989796959493929190611c67565b6101396102db366004611d09565b61139e565b6103096102ee366004611d5f565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610165565b61021761032f366004611a7c565b61140d565b6101396103423660046117f3565b61150b565b6101e4610355366004611852565b61160d565b61015b6103683660046117f3565b60096020526000908152604090205481565b60008054818061038983611d7a565b9190505590506040518060e001604052806103a13390565b6001600160a01b03908116825260208083018a905260408084018a9052606084018990526080840188905260a08401879052600160c090940184905260008681526004835220845181546001600160a01b0319169316929092178255830151909182019061040f9082611e2a565b50604082015160028201906104249082611e2a565b50606082015160038201906104399082611e2a565b506080820151600482019061044e9082611e2a565b5060a0820151600582015560c0909101516006909101805460ff1916911515919091179055336001600160a01b03167f72ab8f8888d362028a5ec40836cefca72088b92b1ef7afc7fb795556b02d665882888787876040516104b4959493929190611ee9565b60405180910390a2505050505050565b6002546001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561051a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053e9190611f3b565b8061055f57506000828152600760205260409020546001600160a01b031633145b6105b05760405162461bcd60e51b815260206004820181905260248201527f457265627275733a2055736572206973206e6f7420617574686f72697a65642160448201526064015b60405180910390fd5b60008281526009602052604081208054916105ca83611d7a565b9091555050600082815260096020908152604080832054600883528184208185529092529091206105fb8382611e2a565b50505050565b60056020908152600092835260408084209091529082529020805461062590611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461065190611da1565b801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b505050505081565b6002546001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156106fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107209190611f3b565b8061074157506000828152600460205260409020546001600160a01b031633145b61078d5760405162461bcd60e51b815260206004820181905260248201527f457265627275733a2055736572206973206e6f7420617574686f72697a65642160448201526064016105a7565b60008281526006602052604081208054916107a783611d7a565b9091555050600082815260066020908152604080832054600583528184208185529092529091206105fb8382611e2a565b6001600160a01b038085166000908152600360205260408082205490516368b4b2c160e01b8152919216908290610800906368b4b2c190610823908a908a908a908a90600401611f5d565b6020604051808303816000875af1158015610842573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108669190611f3b565b9050806108b55760405162461bcd60e51b815260206004820152601a60248201527f4661696c656420746f207570646174652061747472696275746500000000000060448201526064016105a7565b7f018be4d5e2634aefdb51c4ddd186f33072cfb5f6baf685579c2e214995dc9e4f82888888886040516108ec959493929190611fab565b60405180910390a19695505050505050565b60008481526004602052604090206006015460ff1661096b5760405162461bcd60e51b8152602060048201526024808201527f44576966695f52656769737472793a2055736572206e6f7420617574686f72696044820152637a65642160e01b60648201526084016105a7565b6000848152600460205260409020835115610990576003810161098e8582611e2a565b505b8251156109a757600481016109a58482611e2a565b505b81156109b557600581018290555b336001600160a01b03167ff512e0b8ea262571de058d8b17a3c2d29913f35abcd4c173935ba6fa58b3833b85856040516109f0929190612002565b60405180910390a25050505050565b600460205260009081526040902080546001820180546001600160a01b039092169291610a2b90611da1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5790611da1565b8015610aa45780601f10610a7957610100808354040283529160200191610aa4565b820191906000526020600020905b815481529060010190602001808311610a8757829003601f168201915b505050505090806002018054610ab990611da1565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae590611da1565b8015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b505050505090806003018054610b4790611da1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7390611da1565b8015610bc05780601f10610b9557610100808354040283529160200191610bc0565b820191906000526020600020905b815481529060010190602001808311610ba357829003601f168201915b505050505090806004018054610bd590611da1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0190611da1565b8015610c4e5780601f10610c2357610100808354040283529160200191610c4e565b820191906000526020600020905b815481529060010190602001808311610c3157829003601f168201915b50505050600583015460069093015491929160ff16905087565b610c9960405180608001604052806060815260200160608152602001600063ffffffff168152602001600081525090565b60405163b2028b7d60e01b81526108009063b2028b7d90610cc09086908690600401612030565b600060405180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d0591908101906120a1565b9392505050565b6002546000906001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610d65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d899190611f3b565b610dce5760405162461bcd60e51b8152602060048201526016602482015275457265627275733a20556e617574686f72697a65642160501b60448201526064016105a7565b6001600160a01b03808616600090815260036020526040808220549051636625386560e11b81529216916108009063cc4a70ca90610e16908a908a908a908a90600401611f5d565b6020604051808303816000875af1158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e599190611f3b565b905080610ea85760405162461bcd60e51b815260206004820152601760248201527f4661696c656420746f206164642061747472696275746500000000000000000060448201526064016105a7565b7f13aef52bc4a99da04591533072e304017e3fb76f43e7fadd25eb7f514c5ef6e582888888886040516108ec959493929190611fab565b6001805460009182610ef083611d7a565b909155506000818152600760209081526040909120845181546001600160a01b0319166001600160a01b039091161781559084015191925083916001820190610f399082611e2a565b5060408201516002820190610f4e9082611e2a565b5060608201516003820190610f639082611e2a565b5060808201516004820190610f789082611e2a565b5060a08201516005820190610f8d9082611e2a565b5060c08201516006820190610fa29082611e2a565b5060e08201518160070160006101000a81548160ff021916908360ff1602179055509050507f9e6fb352d55d4e4414d6ec189c261105e99d8baba96bd55c43a2013e2ee9453b818360400151846060015185608001518660a001518760c0015160405161101496959493929190612154565b60405180910390a15050565b600760205260009081526040902080546001820180546001600160a01b03909216929161104c90611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461107890611da1565b80156110c55780601f1061109a576101008083540402835291602001916110c5565b820191906000526020600020905b8154815290600101906020018083116110a857829003601f168201915b5050505050908060020180546110da90611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461110690611da1565b80156111535780601f1061112857610100808354040283529160200191611153565b820191906000526020600020905b81548152906001019060200180831161113657829003601f168201915b50505050509080600301805461116890611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461119490611da1565b80156111e15780601f106111b6576101008083540402835291602001916111e1565b820191906000526020600020905b8154815290600101906020018083116111c457829003601f168201915b5050505050908060040180546111f690611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461122290611da1565b801561126f5780601f106112445761010080835404028352916020019161126f565b820191906000526020600020905b81548152906001019060200180831161125257829003601f168201915b50505050509080600501805461128490611da1565b80601f01602080910402602001604051908101604052809291908181526020018280546112b090611da1565b80156112fd5780601f106112d2576101008083540402835291602001916112fd565b820191906000526020600020905b8154815290600101906020018083116112e057829003601f168201915b50505050509080600601805461131290611da1565b80601f016020809104026020016040519081016040528092919081815260200182805461133e90611da1565b801561138b5780601f106113605761010080835404028352916020019161138b565b820191906000526020600020905b81548152906001019060200180831161136e57829003601f168201915b5050506007909301549192505060ff1688565b6000838152600760208190526040909120908101805460ff191660ff85161790556005016113cc8282611e2a565b507f34349e39780aaa7fc3b8b465ca9a2ada7a8a0a941e269b03102ad3867ff34b66838383604051611400939291906121c8565b60405180910390a1505050565b604051630e8a816960e41b815260009081906108009063e8a81690906114399087908790600401612030565b6020604051808303816000875af1158015611458573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147c9190611f3b565b9050806114cb5760405162461bcd60e51b815260206004820152601a60248201527f4661696c656420746f2072656d6f76652061747472696275746500000000000060448201526064016105a7565b7f647d95b9099b095e5957558106bc51df77720f963539a0ca62ee9948e6554da184846040516114fc929190612030565b60405180910390a19392505050565b6002546001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015611561573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115859190611f3b565b6115ca5760405162461bcd60e51b8152602060048201526016602482015275457265627275733a20556e617574686f72697a65642160501b60448201526064016105a7565b600081815260046020526040808220600601805460ff191690555133917fd9957750e6343405c319eb99a4ec67fa11cfd66969318cbc71aa2d45fa53a34991a250565b60086020908152600092835260408084209091529082529020805461062590611da1565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b038111828210171561166a5761166a611631565b60405290565b604051608081016001600160401b038111828210171561166a5761166a611631565b604051601f8201601f191681016001600160401b03811182821017156116ba576116ba611631565b604052919050565b60006001600160401b038211156116db576116db611631565b50601f01601f191660200190565b600082601f8301126116fa57600080fd5b813561170d611708826116c2565b611692565b81815284602083860101111561172257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561175757600080fd5b85356001600160401b038082111561176e57600080fd5b61177a89838a016116e9565b9650602088013591508082111561179057600080fd5b61179c89838a016116e9565b955060408801359150808211156117b257600080fd5b6117be89838a016116e9565b945060608801359150808211156117d457600080fd5b506117e1888289016116e9565b95989497509295608001359392505050565b60006020828403121561180557600080fd5b5035919050565b6000806040838503121561181f57600080fd5b8235915060208301356001600160401b0381111561183c57600080fd5b611848858286016116e9565b9150509250929050565b6000806040838503121561186557600080fd5b50508035926020909101359150565b60005b8381101561188f578181015183820152602001611877565b50506000910152565b600081518084526118b0816020860160208601611874565b601f01601f19169290920160200192915050565b602081526000610d056020830184611898565b80356001600160a01b03811681146118ee57600080fd5b919050565b63ffffffff8116811461190557600080fd5b50565b6000806000806080858703121561191e57600080fd5b611927856118d7565b935060208501356001600160401b038082111561194357600080fd5b61194f888389016116e9565b9450604087013591508082111561196557600080fd5b50611972878288016116e9565b9250506060850135611983816118f3565b939692955090935050565b600080600080608085870312156119a457600080fd5b8435935060208501356001600160401b03808211156119c257600080fd5b6119ce888389016116e9565b945060408701359150808211156119e457600080fd5b506119f1878288016116e9565b949793965093946060013593505050565b6001600160a01b038816815260e060208201819052600090611a2690830189611898565b8281036040840152611a388189611898565b90508281036060840152611a4c8188611898565b90508281036080840152611a608187611898565b60a0840195909552505090151560c09091015295945050505050565b60008060408385031215611a8f57600080fd5b611a98836118d7565b915060208301356001600160401b0381111561183c57600080fd5b602081526000825160806020840152611acf60a0840182611898565b90506020840151601f19848303016040850152611aec8282611898565b91505063ffffffff6040850151166060840152606084015160808401528091505092915050565b803560ff811681146118ee57600080fd5b600060208284031215611b3657600080fd5b81356001600160401b0380821115611b4d57600080fd5b908301906101008286031215611b6257600080fd5b611b6a611647565b611b73836118d7565b8152602083013582811115611b8757600080fd5b611b93878286016116e9565b602083015250604083013582811115611bab57600080fd5b611bb7878286016116e9565b604083015250606083013582811115611bcf57600080fd5b611bdb878286016116e9565b606083015250608083013582811115611bf357600080fd5b611bff878286016116e9565b60808301525060a083013582811115611c1757600080fd5b611c23878286016116e9565b60a08301525060c083013582811115611c3b57600080fd5b611c47878286016116e9565b60c083015250611c5960e08401611b13565b60e082015295945050505050565b6001600160a01b038916815261010060208201819052600090611c8c8382018b611898565b90508281036040840152611ca0818a611898565b90508281036060840152611cb48189611898565b90508281036080840152611cc88188611898565b905082810360a0840152611cdc8187611898565b905082810360c0840152611cf08186611898565b91505060ff831660e08301529998505050505050505050565b600080600060608486031215611d1e57600080fd5b83359250611d2e60208501611b13565b915060408401356001600160401b03811115611d4957600080fd5b611d55868287016116e9565b9150509250925092565b600060208284031215611d7157600080fd5b610d05826118d7565b600060018201611d9a57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680611db557607f821691505b602082108103611dd557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115611e2557600081815260208120601f850160051c81016020861015611e025750805b601f850160051c820191505b81811015611e2157828155600101611e0e565b5050505b505050565b81516001600160401b03811115611e4357611e43611631565b611e5781611e518454611da1565b84611ddb565b602080601f831160018114611e8c5760008415611e745750858301515b600019600386901b1c1916600185901b178555611e21565b600085815260208120601f198616915b82811015611ebb57888601518255948401946001909101908401611e9c565b5085821015611ed95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b85815260a060208201526000611f0260a0830187611898565b8281036040840152611f148187611898565b90508281036060840152611f288186611898565b9150508260808301529695505050505050565b600060208284031215611f4d57600080fd5b81518015158114610d0557600080fd5b6001600160a01b0385168152608060208201819052600090611f8190830186611898565b8281036040840152611f938186611898565b91505063ffffffff8316606083015295945050505050565b6001600160a01b0386811682528516602082015260a060408201819052600090611fd790830186611898565b8281036060840152611fe98186611898565b91505063ffffffff831660808301529695505050505050565b6040815260006120156040830185611898565b82810360208401526120278185611898565b95945050505050565b6001600160a01b038316815260406020820181905260009061205490830184611898565b949350505050565b600082601f83011261206d57600080fd5b815161207b611708826116c2565b81815284602083860101111561209057600080fd5b612054826020830160208701611874565b6000602082840312156120b357600080fd5b81516001600160401b03808211156120ca57600080fd5b90830190608082860312156120de57600080fd5b6120e6611670565b8251828111156120f557600080fd5b6121018782860161205c565b82525060208301518281111561211657600080fd5b6121228782860161205c565b60208301525060408301519150612138826118f3565b8160408201526060830151606082015280935050505092915050565b86815260c06020820152600061216d60c0830188611898565b828103604084015261217f8188611898565b905082810360608401526121938187611898565b905082810360808401526121a78186611898565b905082810360a08401526121bb8185611898565b9998505050505050505050565b83815260ff83166020820152606060408201526000612027606083018461189856fea26469706673582212207fb87c66a3cf9d25179384c2c493897626ee287ad7a1087bd38b2ae6cbaef6a064736f6c63430008140033";

type ErebrusRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErebrusRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ErebrusRegistry__factory extends ContractFactory {
  constructor(...args: ErebrusRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ErebrusRegistry";
  }

  deploy(
    erebrusmanagerAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ErebrusRegistry> {
    return super.deploy(
      erebrusmanagerAddr,
      overrides || {}
    ) as Promise<ErebrusRegistry>;
  }
  getDeployTransaction(
    erebrusmanagerAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(erebrusmanagerAddr, overrides || {});
  }
  attach(address: string): ErebrusRegistry {
    return super.attach(address) as ErebrusRegistry;
  }
  connect(signer: Signer): ErebrusRegistry__factory {
    return super.connect(signer) as ErebrusRegistry__factory;
  }
  static readonly contractName: "ErebrusRegistry";
  public readonly contractName: "ErebrusRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErebrusRegistryInterface {
    return new utils.Interface(_abi) as ErebrusRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ErebrusRegistry {
    return new Contract(address, _abi, signerOrProvider) as ErebrusRegistry;
  }
}