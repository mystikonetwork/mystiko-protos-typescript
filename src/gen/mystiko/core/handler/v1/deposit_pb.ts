// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/core/handler/v1/deposit.proto (package mystiko.core.handler.v1, syntax proto3)
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
import { BridgeType } from '../../../common/v1/types_pb.js';
import { Transaction } from '../../v1/transaction_pb.js';

/**
 * @generated from message mystiko.core.handler.v1.QuoteDepositOptions
 */
export class QuoteDepositOptions extends Message<QuoteDepositOptions> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol = '';

  /**
   * @generated from field: optional uint64 query_timeout_ms = 3;
   */
  queryTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 dst_chain_id = 4;
   */
  dstChainId?: bigint;

  /**
   * @generated from field: optional mystiko.common.v1.BridgeType bridge_type = 5;
   */
  bridgeType?: BridgeType;

  constructor(data?: PartialMessage<QuoteDepositOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.handler.v1.QuoteDepositOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'query_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: 'dst_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteDepositOptions {
    return new QuoteDepositOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteDepositOptions {
    return new QuoteDepositOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteDepositOptions {
    return new QuoteDepositOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: QuoteDepositOptions | PlainMessage<QuoteDepositOptions> | undefined,
    b: QuoteDepositOptions | PlainMessage<QuoteDepositOptions> | undefined,
  ): boolean {
    return proto3.util.equals(QuoteDepositOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.handler.v1.CreateDepositOptions
 */
export class CreateDepositOptions extends Message<CreateDepositOptions> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol = '';

  /**
   * @generated from field: double amount = 3;
   */
  amount = 0;

  /**
   * @generated from field: string shielded_address = 4;
   */
  shieldedAddress = '';

  /**
   * @generated from field: optional uint64 dst_chain_id = 5;
   */
  dstChainId?: bigint;

  /**
   * @generated from field: optional double rollup_fee_amount = 6;
   */
  rollupFeeAmount?: number;

  /**
   * @generated from field: optional double bridge_fee_amount = 7;
   */
  bridgeFeeAmount?: number;

  /**
   * @generated from field: optional double executor_fee_amount = 8;
   */
  executorFeeAmount?: number;

  /**
   * @generated from field: optional uint64 query_timeout_ms = 9;
   */
  queryTimeoutMs?: bigint;

  /**
   * @generated from field: optional mystiko.core.handler.v1.DepositQuote deposit_quote = 10;
   */
  depositQuote?: DepositQuote;

  /**
   * @generated from field: optional mystiko.common.v1.BridgeType bridge_type = 11;
   */
  bridgeType?: BridgeType;

  constructor(data?: PartialMessage<CreateDepositOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.handler.v1.CreateDepositOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: 'shielded_address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'dst_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 6, name: 'rollup_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 7, name: 'bridge_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 8, name: 'executor_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 9, name: 'query_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 10, name: 'deposit_quote', kind: 'message', T: DepositQuote, opt: true },
    { no: 11, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDepositOptions {
    return new CreateDepositOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDepositOptions {
    return new CreateDepositOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDepositOptions {
    return new CreateDepositOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateDepositOptions | PlainMessage<CreateDepositOptions> | undefined,
    b: CreateDepositOptions | PlainMessage<CreateDepositOptions> | undefined,
  ): boolean {
    return proto3.util.equals(CreateDepositOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.handler.v1.SendDepositOptions
 */
export class SendDepositOptions extends Message<SendDepositOptions> {
  /**
   * @generated from field: string deposit_id = 1;
   */
  depositId = '';

  /**
   * @generated from field: optional string private_key = 2;
   */
  privateKey?: string;

  /**
   * @generated from field: optional string signer_provider = 3;
   */
  signerProvider?: string;

  /**
   * @generated from field: optional uint64 query_timeout_ms = 4;
   */
  queryTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 asset_approve_confirmations = 5;
   */
  assetApproveConfirmations?: bigint;

  /**
   * @generated from field: optional uint64 deposit_confirmations = 6;
   */
  depositConfirmations?: bigint;

  /**
   * @generated from field: optional uint64 tx_send_timeout_ms = 7;
   */
  txSendTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 tx_wait_timeout_ms = 8;
   */
  txWaitTimeoutMs?: bigint;

  /**
   * @generated from field: optional uint64 tx_wait_interval_ms = 9;
   */
  txWaitIntervalMs?: bigint;

  /**
   * @generated from field: optional mystiko.core.v1.Transaction asset_approve_tx = 10;
   */
  assetApproveTx?: Transaction;

  /**
   * @generated from field: optional mystiko.core.v1.Transaction deposit_tx = 11;
   */
  depositTx?: Transaction;

  constructor(data?: PartialMessage<SendDepositOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.handler.v1.SendDepositOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'private_key', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: 'signer_provider', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: 'query_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: 'asset_approve_confirmations', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 6, name: 'deposit_confirmations', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 7, name: 'tx_send_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 8, name: 'tx_wait_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 9, name: 'tx_wait_interval_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 10, name: 'asset_approve_tx', kind: 'message', T: Transaction, opt: true },
    { no: 11, name: 'deposit_tx', kind: 'message', T: Transaction, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendDepositOptions {
    return new SendDepositOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendDepositOptions {
    return new SendDepositOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendDepositOptions {
    return new SendDepositOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: SendDepositOptions | PlainMessage<SendDepositOptions> | undefined,
    b: SendDepositOptions | PlainMessage<SendDepositOptions> | undefined,
  ): boolean {
    return proto3.util.equals(SendDepositOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.handler.v1.DepositQuote
 */
export class DepositQuote extends Message<DepositQuote> {
  /**
   * @generated from field: string asset_symbol = 1;
   */
  assetSymbol = '';

  /**
   * @generated from field: uint32 asset_decimals = 2;
   */
  assetDecimals = 0;

  /**
   * @generated from field: double min_amount = 3;
   */
  minAmount = 0;

  /**
   * @generated from field: string min_decimal_amount = 4;
   */
  minDecimalAmount = '';

  /**
   * @generated from field: double max_amount = 5;
   */
  maxAmount = 0;

  /**
   * @generated from field: string max_decimal_amount = 6;
   */
  maxDecimalAmount = '';

  /**
   * @generated from field: double min_rollup_fee_amount = 7;
   */
  minRollupFeeAmount = 0;

  /**
   * @generated from field: string min_rollup_fee_decimal_amount = 8;
   */
  minRollupFeeDecimalAmount = '';

  /**
   * @generated from field: string rollup_fee_asset_symbol = 9;
   */
  rollupFeeAssetSymbol = '';

  /**
   * @generated from field: uint32 rollup_fee_asset_decimals = 10;
   */
  rollupFeeAssetDecimals = 0;

  /**
   * @generated from field: optional double min_bridge_fee_amount = 11;
   */
  minBridgeFeeAmount?: number;

  /**
   * @generated from field: optional string min_bridge_fee_decimal_amount = 12;
   */
  minBridgeFeeDecimalAmount?: string;

  /**
   * @generated from field: optional string bridge_fee_asset_symbol = 13;
   */
  bridgeFeeAssetSymbol?: string;

  /**
   * @generated from field: optional uint32 bridge_fee_asset_decimals = 14;
   */
  bridgeFeeAssetDecimals?: number;

  /**
   * @generated from field: optional double min_executor_fee_amount = 15;
   */
  minExecutorFeeAmount?: number;

  /**
   * @generated from field: optional string min_executor_fee_decimal_amount = 16;
   */
  minExecutorFeeDecimalAmount?: string;

  /**
   * @generated from field: optional string executor_fee_asset_symbol = 17;
   */
  executorFeeAssetSymbol?: string;

  /**
   * @generated from field: optional uint32 executor_fee_asset_decimals = 18;
   */
  executorFeeAssetDecimals?: number;

  /**
   * @generated from field: repeated double recommended_amounts = 19;
   */
  recommendedAmounts: number[] = [];

  /**
   * @generated from field: repeated string recommended_decimal_amounts = 20;
   */
  recommendedDecimalAmounts: string[] = [];

  constructor(data?: PartialMessage<DepositQuote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.handler.v1.DepositQuote';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: 'min_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: 'min_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'max_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 6, name: 'max_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'min_rollup_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 8, name: 'min_rollup_fee_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 9, name: 'rollup_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 10, name: 'rollup_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: 'min_bridge_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    {
      no: 12,
      name: 'min_bridge_fee_decimal_amount',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    { no: 13, name: 'bridge_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 14, name: 'bridge_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 15, name: 'min_executor_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    {
      no: 16,
      name: 'min_executor_fee_decimal_amount',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    { no: 17, name: 'executor_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: 'executor_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 19, name: 'recommended_amounts', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, repeated: true },
    {
      no: 20,
      name: 'recommended_decimal_amounts',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositQuote {
    return new DepositQuote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositQuote {
    return new DepositQuote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositQuote {
    return new DepositQuote().fromJsonString(jsonString, options);
  }

  static equals(
    a: DepositQuote | PlainMessage<DepositQuote> | undefined,
    b: DepositQuote | PlainMessage<DepositQuote> | undefined,
  ): boolean {
    return proto3.util.equals(DepositQuote, a, b);
  }
}

/**
 * @generated from message mystiko.core.handler.v1.DepositSummary
 */
export class DepositSummary extends Message<DepositSummary> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol = '';

  /**
   * @generated from field: uint32 asset_decimals = 3;
   */
  assetDecimals = 0;

  /**
   * @generated from field: double amount = 4;
   */
  amount = 0;

  /**
   * @generated from field: string decimal_amount = 5;
   */
  decimalAmount = '';

  /**
   * @generated from field: string shielded_address = 6;
   */
  shieldedAddress = '';

  /**
   * @generated from field: double rollup_fee_amount = 7;
   */
  rollupFeeAmount = 0;

  /**
   * @generated from field: string rollup_fee_decimal_amount = 8;
   */
  rollupFeeDecimalAmount = '';

  /**
   * @generated from field: string rollup_fee_asset_symbol = 9;
   */
  rollupFeeAssetSymbol = '';

  /**
   * @generated from field: uint32 rollup_fee_asset_decimals = 10;
   */
  rollupFeeAssetDecimals = 0;

  /**
   * @generated from field: optional uint64 dst_chain_id = 11;
   */
  dstChainId?: bigint;

  /**
   * @generated from field: optional double bridge_fee_amount = 12;
   */
  bridgeFeeAmount?: number;

  /**
   * @generated from field: optional string bridge_fee_decimal_amount = 13;
   */
  bridgeFeeDecimalAmount?: string;

  /**
   * @generated from field: optional string bridge_fee_asset_symbol = 14;
   */
  bridgeFeeAssetSymbol?: string;

  /**
   * @generated from field: optional uint32 bridge_fee_asset_decimals = 15;
   */
  bridgeFeeAssetDecimals?: number;

  /**
   * @generated from field: optional double executor_fee_amount = 16;
   */
  executorFeeAmount?: number;

  /**
   * @generated from field: optional string executor_fee_decimal_amount = 17;
   */
  executorFeeDecimalAmount?: string;

  /**
   * @generated from field: optional string executor_fee_asset_symbol = 18;
   */
  executorFeeAssetSymbol?: string;

  /**
   * @generated from field: optional uint32 executor_fee_asset_decimals = 19;
   */
  executorFeeAssetDecimals?: number;

  /**
   * @generated from field: optional mystiko.common.v1.BridgeType bridge_type = 20;
   */
  bridgeType?: BridgeType;

  /**
   * @generated from field: map<string, double> total_amounts = 21;
   */
  totalAmounts: { [key: string]: number } = {};

  /**
   * @generated from field: map<string, string> total_decimal_amounts = 22;
   */
  totalDecimalAmounts: { [key: string]: string } = {};

  constructor(data?: PartialMessage<DepositSummary>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.handler.v1.DepositSummary';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: 'amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: 'decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'shielded_address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'rollup_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    { no: 8, name: 'rollup_fee_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 9, name: 'rollup_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 10, name: 'rollup_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: 'dst_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 12, name: 'bridge_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 13, name: 'bridge_fee_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 14, name: 'bridge_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: 'bridge_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 16, name: 'executor_fee_amount', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 17, name: 'executor_fee_decimal_amount', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: 'executor_fee_asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 19, name: 'executor_fee_asset_decimals', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 20, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType), opt: true },
    {
      no: 21,
      name: 'total_amounts',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
    },
    {
      no: 22,
      name: 'total_decimal_amounts',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositSummary {
    return new DepositSummary().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositSummary {
    return new DepositSummary().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositSummary {
    return new DepositSummary().fromJsonString(jsonString, options);
  }

  static equals(
    a: DepositSummary | PlainMessage<DepositSummary> | undefined,
    b: DepositSummary | PlainMessage<DepositSummary> | undefined,
  ): boolean {
    return proto3.util.equals(DepositSummary, a, b);
  }
}
