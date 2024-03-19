// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/config/contract/v1/contract.proto (package mystiko.config.contract.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';
import { AssetConfig } from '../../v1/asset_pb.js';
import { BridgeType, ContractType } from '../../../common/v1/types_pb.js';

/**
 * @generated from message mystiko.config.contract.v1.ContractConfig
 */
export class ContractConfig extends Message<ContractConfig> {
  /**
   * @generated from field: uint32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: string name = 2;
   */
  name = '';

  /**
   * @generated from field: string address = 3;
   */
  address = '';

  /**
   * @generated from field: uint64 start_block = 4;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: bool disabled = 5;
   */
  disabled = false;

  /**
   * @generated from field: string min_rollup_fee = 6;
   */
  minRollupFee = '';

  /**
   * @generated from field: mystiko.config.v1.AssetConfig asset_config = 7;
   */
  assetConfig?: AssetConfig;

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 8;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: mystiko.common.v1.ContractType contract_type = 9;
   */
  contractType = ContractType.UNSPECIFIED;

  constructor(data?: PartialMessage<ContractConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.contract.v1.ContractConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: 'disabled', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: 'min_rollup_fee', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'asset_config', kind: 'message', T: AssetConfig },
    { no: 8, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 9, name: 'contract_type', kind: 'enum', T: proto3.getEnumType(ContractType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractConfig {
    return new ContractConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractConfig {
    return new ContractConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractConfig {
    return new ContractConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: ContractConfig | PlainMessage<ContractConfig> | undefined,
    b: ContractConfig | PlainMessage<ContractConfig> | undefined,
  ): boolean {
    return proto3.util.equals(ContractConfig, a, b);
  }
}
