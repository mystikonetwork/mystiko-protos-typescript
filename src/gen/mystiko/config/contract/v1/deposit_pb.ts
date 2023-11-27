// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file mystiko/config/contract/v1/deposit.proto (package mystiko.config.contract.v1, syntax proto3)
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
import { PoolContractConfig } from './pool_pb.js';
import { BridgeType, ContractType } from '../../../common/v1/types_pb.js';
import { AssetConfig } from '../../v1/asset_pb.js';

/**
 * @generated from message mystiko.config.contract.v1.DepositContractConfig
 */
export class DepositContractConfig extends Message<DepositContractConfig> {
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
   * @generated from field: string min_amount = 6;
   */
  minAmount = '';

  /**
   * @generated from field: string max_amount = 7;
   */
  maxAmount = '';

  /**
   * @generated from field: mystiko.config.contract.v1.PoolContractConfig pool_contract_config = 8;
   */
  poolContractConfig?: PoolContractConfig;

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 9;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: mystiko.common.v1.ContractType contract_type = 10;
   */
  contractType = ContractType.UNSPECIFIED;

  /**
   * @generated from field: optional string min_bridge_fee = 11;
   */
  minBridgeFee?: string;

  /**
   * @generated from field: optional string min_executor_fee = 12;
   */
  minExecutorFee?: string;

  /**
   * @generated from field: optional uint32 service_fee = 13;
   */
  serviceFee?: number;

  /**
   * @generated from field: optional uint32 service_fee_divider = 14;
   */
  serviceFeeDivider?: number;

  /**
   * @generated from field: optional mystiko.config.v1.AssetConfig bridge_fee_asset_config = 15;
   */
  bridgeFeeAssetConfig?: AssetConfig;

  /**
   * @generated from field: optional mystiko.config.v1.AssetConfig executor_fee_asset_config = 16;
   */
  executorFeeAssetConfig?: AssetConfig;

  /**
   * @generated from field: optional uint64 peer_chain_id = 17;
   */
  peerChainId?: bigint;

  /**
   * @generated from field: optional string peer_contract_address = 18;
   */
  peerContractAddress?: string;

  constructor(data?: PartialMessage<DepositContractConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.contract.v1.DepositContractConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: 'disabled', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: 'min_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'max_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 8, name: 'pool_contract_config', kind: 'message', T: PoolContractConfig },
    { no: 9, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 10, name: 'contract_type', kind: 'enum', T: proto3.getEnumType(ContractType) },
    { no: 11, name: 'min_bridge_fee', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: 'min_executor_fee', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: 'service_fee', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 14, name: 'service_fee_divider', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 15, name: 'bridge_fee_asset_config', kind: 'message', T: AssetConfig, opt: true },
    { no: 16, name: 'executor_fee_asset_config', kind: 'message', T: AssetConfig, opt: true },
    { no: 17, name: 'peer_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 18, name: 'peer_contract_address', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositContractConfig {
    return new DepositContractConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositContractConfig {
    return new DepositContractConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositContractConfig {
    return new DepositContractConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: DepositContractConfig | PlainMessage<DepositContractConfig> | undefined,
    b: DepositContractConfig | PlainMessage<DepositContractConfig> | undefined,
  ): boolean {
    return proto3.util.equals(DepositContractConfig, a, b);
  }
}
