// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file mystiko/core/synchronizer/v1/sync.proto (package mystiko.core.synchronizer.v1, syntax proto3)
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
import { Message, proto3 } from '@bufbuild/protobuf';

/**
 * @generated from message mystiko.core.synchronizer.v1.SyncOptions
 */
export class SyncOptions extends Message<SyncOptions> {
  /**
   * @generated from field: optional bool disable_datapacker_fetcher = 1;
   */
  disableDatapackerFetcher?: boolean;

  /**
   * @generated from field: optional bool enable_datapacker_fetcher_validate = 2;
   */
  enableDatapackerFetcherValidate?: boolean;

  /**
   * @generated from field: optional bool disable_sequencer_fetcher = 3;
   */
  disableSequencerFetcher?: boolean;

  /**
   * @generated from field: optional bool enable_sequencer_fetcher_validate = 4;
   */
  enableSequencerFetcherValidate?: boolean;

  /**
   * @generated from field: optional bool disable_provider_fetcher = 5;
   */
  disableProviderFetcher?: boolean;

  /**
   * @generated from field: optional bool disable_provider_fetcher_validate = 6;
   */
  disableProviderFetcherValidate?: boolean;

  /**
   * @generated from field: optional bool disable_rule_validator = 7;
   */
  disableRuleValidator?: boolean;

  /**
   * @generated from field: optional bool disable_rule_validator_integrity_check = 8;
   */
  disableRuleValidatorIntegrityCheck?: boolean;

  /**
   * @generated from field: optional bool disable_rule_validator_sequence_check = 9;
   */
  disableRuleValidatorSequenceCheck?: boolean;

  /**
   * @generated from field: optional bool disable_rule_validator_counter_check = 10;
   */
  disableRuleValidatorCounterCheck?: boolean;

  /**
   * @generated from field: optional bool disable_rule_validator_tree_check = 11;
   */
  disableRuleValidatorTreeCheck?: boolean;

  /**
   * @generated from field: optional uint64 fetcher_fetch_timeout_ms = 12;
   */
  fetcherFetchTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 fetcher_query_loaded_block_timeout_ms = 13;
   */
  fetcherQueryLoadedBlockTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 validator_validate_concurrency = 14;
   */
  validatorValidateConcurrency?: bigint;

  /**
   * @generated from field: repeated uint64 chain_ids = 15;
   */
  chainIds: bigint[] = [];

  constructor(data?: PartialMessage<SyncOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.synchronizer.v1.SyncOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'disable_datapacker_fetcher', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    {
      no: 2,
      name: 'enable_datapacker_fetcher_validate',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    { no: 3, name: 'disable_sequencer_fetcher', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    {
      no: 4,
      name: 'enable_sequencer_fetcher_validate',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    { no: 5, name: 'disable_provider_fetcher', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    {
      no: 6,
      name: 'disable_provider_fetcher_validate',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    { no: 7, name: 'disable_rule_validator', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    {
      no: 8,
      name: 'disable_rule_validator_integrity_check',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    {
      no: 9,
      name: 'disable_rule_validator_sequence_check',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    {
      no: 10,
      name: 'disable_rule_validator_counter_check',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    {
      no: 11,
      name: 'disable_rule_validator_tree_check',
      kind: 'scalar',
      T: 8 /* ScalarType.BOOL */,
      opt: true,
    },
    { no: 12, name: 'fetcher_fetch_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    {
      no: 13,
      name: 'fetcher_query_loaded_block_timeout_ms',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
      opt: true,
    },
    {
      no: 14,
      name: 'validator_validate_concurrency',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
      opt: true,
    },
    { no: 15, name: 'chain_ids', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncOptions {
    return new SyncOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncOptions {
    return new SyncOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncOptions {
    return new SyncOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: SyncOptions | PlainMessage<SyncOptions> | undefined,
    b: SyncOptions | PlainMessage<SyncOptions> | undefined,
  ): boolean {
    return proto3.util.equals(SyncOptions, a, b);
  }
}
