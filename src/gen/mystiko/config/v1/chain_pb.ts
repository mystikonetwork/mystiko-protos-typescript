// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/config/v1/chain.proto (package mystiko.config.v1, syntax proto3)
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
import { AssetConfig } from './asset_pb.js';
import { ProviderType, TransactionType } from '../../common/v1/types_pb.js';
import { DepositContractConfig } from '../contract/v1/deposit_pb.js';
import { PoolContractConfig } from '../contract/v1/pool_pb.js';
import { ProviderConfig } from './provider_pb.js';

/**
 * @generated from message mystiko.config.v1.ChainConfig
 */
export class ChainConfig extends Message<ChainConfig> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string name = 2;
   */
  name = '';

  /**
   * @generated from field: string asset_symbol = 3;
   */
  assetSymbol = '';

  /**
   * @generated from field: uint32 asset_decimals = 4;
   */
  assetDecimals = 0;

  /**
   * @generated from field: string explorer_url = 5;
   */
  explorerUrl = '';

  /**
   * @generated from field: string explorer_api_url = 6;
   */
  explorerApiUrl = '';

  /**
   * @generated from field: string explorer_prefix = 7;
   */
  explorerPrefix = '';

  /**
   * @generated from field: uint32 provider_quorum_percentage = 8;
   */
  providerQuorumPercentage = 0;

  /**
   * @generated from field: string signer_endpoint = 9;
   */
  signerEndpoint = '';

  /**
   * @generated from field: uint64 event_delay_blocks = 10;
   */
  eventDelayBlocks = protoInt64.zero;

  /**
   * @generated from field: uint64 event_filter_size = 11;
   */
  eventFilterSize = protoInt64.zero;

  /**
   * @generated from field: uint64 sequencer_fetch_size = 12;
   */
  sequencerFetchSize = protoInt64.zero;

  /**
   * @generated from field: mystiko.config.v1.AssetConfig main_asset_config = 13;
   */
  mainAssetConfig?: AssetConfig;

  /**
   * @generated from field: mystiko.common.v1.ProviderType provider_type = 14;
   */
  providerType = ProviderType.UNSPECIFIED;

  /**
   * @generated from field: mystiko.common.v1.TransactionType transaction_type = 15;
   */
  transactionType = TransactionType.UNSPECIFIED;

  /**
   * @generated from field: map<string, mystiko.config.v1.AssetConfig> asset_configs = 16;
   */
  assetConfigs: { [key: string]: AssetConfig } = {};

  /**
   * @generated from field: map<string, mystiko.config.contract.v1.DepositContractConfig> deposit_contract_configs = 17;
   */
  depositContractConfigs: { [key: string]: DepositContractConfig } = {};

  /**
   * @generated from field: map<string, mystiko.config.contract.v1.PoolContractConfig> pool_contract_configs = 18;
   */
  poolContractConfigs: { [key: string]: PoolContractConfig } = {};

  /**
   * @generated from field: repeated string recommended_amounts = 19;
   */
  recommendedAmounts: string[] = [];

  /**
   * @generated from field: repeated mystiko.config.v1.ProviderConfig provider_configs = 20;
   */
  providerConfigs: ProviderConfig[] = [];

  /**
   * @generated from field: repeated uint64 granularities = 21;
   */
  granularities: bigint[] = [];

  constructor(data?: PartialMessage<ChainConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.v1.ChainConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: 'explorer_url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'explorer_api_url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'explorer_prefix', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 8, name: 'provider_quorum_percentage', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: 'signer_endpoint', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 10, name: 'event_delay_blocks', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: 'event_filter_size', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: 'sequencer_fetch_size', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: 'main_asset_config', kind: 'message', T: AssetConfig },
    { no: 14, name: 'provider_type', kind: 'enum', T: proto3.getEnumType(ProviderType) },
    { no: 15, name: 'transaction_type', kind: 'enum', T: proto3.getEnumType(TransactionType) },
    {
      no: 16,
      name: 'asset_configs',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'message', T: AssetConfig },
    },
    {
      no: 17,
      name: 'deposit_contract_configs',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'message', T: DepositContractConfig },
    },
    {
      no: 18,
      name: 'pool_contract_configs',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'message', T: PoolContractConfig },
    },
    { no: 19, name: 'recommended_amounts', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: 'provider_configs', kind: 'message', T: ProviderConfig, repeated: true },
    { no: 21, name: 'granularities', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainConfig {
    return new ChainConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainConfig {
    return new ChainConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainConfig {
    return new ChainConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainConfig | PlainMessage<ChainConfig> | undefined,
    b: ChainConfig | PlainMessage<ChainConfig> | undefined,
  ): boolean {
    return proto3.util.equals(ChainConfig, a, b);
  }
}
