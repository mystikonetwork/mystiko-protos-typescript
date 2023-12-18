// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/config/contract/v1/pool.proto (package mystiko.config.contract.v1, syntax proto3)
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
import { BridgeType, ContractType } from '../../../common/v1/types_pb.js';
import { AssetConfig } from '../../v1/asset_pb.js';
import { CircuitConfig } from '../../v1/circuit_pb.js';

/**
 * @generated from message mystiko.config.contract.v1.PoolContractConfig
 */
export class PoolContractConfig extends Message<PoolContractConfig> {
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
   * @generated from field: string pool_name = 5;
   */
  poolName = '';

  /**
   * @generated from field: string min_rollup_fee = 6;
   */
  minRollupFee = '';

  /**
   * @generated from field: mystiko.common.v1.ContractType contract_type = 7;
   */
  contractType = ContractType.UNSPECIFIED;

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 8;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: mystiko.config.v1.AssetConfig asset_config = 9;
   */
  assetConfig?: AssetConfig;

  /**
   * @generated from field: repeated mystiko.config.v1.CircuitConfig circuit_configs = 10;
   */
  circuitConfigs: CircuitConfig[] = [];

  /**
   * @generated from field: repeated string circuits = 11;
   */
  circuits: string[] = [];

  constructor(data?: PartialMessage<PoolContractConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.contract.v1.PoolContractConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: 'pool_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'min_rollup_fee', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'contract_type', kind: 'enum', T: proto3.getEnumType(ContractType) },
    { no: 8, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 9, name: 'asset_config', kind: 'message', T: AssetConfig },
    { no: 10, name: 'circuit_configs', kind: 'message', T: CircuitConfig, repeated: true },
    { no: 11, name: 'circuits', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolContractConfig {
    return new PoolContractConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolContractConfig {
    return new PoolContractConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolContractConfig {
    return new PoolContractConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: PoolContractConfig | PlainMessage<PoolContractConfig> | undefined,
    b: PoolContractConfig | PlainMessage<PoolContractConfig> | undefined,
  ): boolean {
    return proto3.util.equals(PoolContractConfig, a, b);
  }
}
