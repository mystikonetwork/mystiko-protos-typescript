// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/core/handler/v1/deposit.proto (package mystiko.core.handler.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { Transaction } from '../../v1/transaction_pb';
import { file_mystiko_core_v1_transaction } from '../../v1/transaction_pb';
import type { BridgeType } from '../../../common/v1/types_pb';
import { file_mystiko_common_v1_types } from '../../../common/v1/types_pb';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/core/handler/v1/deposit.proto.
 */
export const file_mystiko_core_handler_v1_deposit: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiVteXN0aWtvL2NvcmUvaGFuZGxlci92MS9kZXBvc2l0LnByb3RvEhdteXN0aWtvLmNvcmUuaGFuZGxlci52MSLmAQoTUXVvdGVEZXBvc2l0T3B0aW9ucxIQCghjaGFpbl9pZBgBIAEoBBIUCgxhc3NldF9zeW1ib2wYAiABKAkSHQoQcXVlcnlfdGltZW91dF9tcxgDIAEoBEgAiAEBEhkKDGRzdF9jaGFpbl9pZBgEIAEoBEgBiAEBEjcKC2JyaWRnZV90eXBlGAUgASgOMh0ubXlzdGlrby5jb21tb24udjEuQnJpZGdlVHlwZUgCiAEBQhMKEV9xdWVyeV90aW1lb3V0X21zQg8KDV9kc3RfY2hhaW5faWRCDgoMX2JyaWRnZV90eXBlIowEChRDcmVhdGVEZXBvc2l0T3B0aW9ucxIQCghjaGFpbl9pZBgBIAEoBBIUCgxhc3NldF9zeW1ib2wYAiABKAkSDgoGYW1vdW50GAMgASgBEhgKEHNoaWVsZGVkX2FkZHJlc3MYBCABKAkSGQoMZHN0X2NoYWluX2lkGAUgASgESACIAQESHgoRcm9sbHVwX2ZlZV9hbW91bnQYBiABKAFIAYgBARIeChFicmlkZ2VfZmVlX2Ftb3VudBgHIAEoAUgCiAEBEiAKE2V4ZWN1dG9yX2ZlZV9hbW91bnQYCCABKAFIA4gBARIdChBxdWVyeV90aW1lb3V0X21zGAkgASgESASIAQESQQoNZGVwb3NpdF9xdW90ZRgKIAEoCzIlLm15c3Rpa28uY29yZS5oYW5kbGVyLnYxLkRlcG9zaXRRdW90ZUgFiAEBEjcKC2JyaWRnZV90eXBlGAsgASgOMh0ubXlzdGlrby5jb21tb24udjEuQnJpZGdlVHlwZUgGiAEBQg8KDV9kc3RfY2hhaW5faWRCFAoSX3JvbGx1cF9mZWVfYW1vdW50QhQKEl9icmlkZ2VfZmVlX2Ftb3VudEIWChRfZXhlY3V0b3JfZmVlX2Ftb3VudEITChFfcXVlcnlfdGltZW91dF9tc0IQCg5fZGVwb3NpdF9xdW90ZUIOCgxfYnJpZGdlX3R5cGUiuAUKElNlbmREZXBvc2l0T3B0aW9ucxISCgpkZXBvc2l0X2lkGAEgASgJEhgKC3ByaXZhdGVfa2V5GAIgASgJSACIAQESHAoPc2lnbmVyX3Byb3ZpZGVyGAMgASgJSAGIAQESHQoQcXVlcnlfdGltZW91dF9tcxgEIAEoBEgCiAEBEigKG2Fzc2V0X2FwcHJvdmVfY29uZmlybWF0aW9ucxgFIAEoBEgDiAEBEiIKFWRlcG9zaXRfY29uZmlybWF0aW9ucxgGIAEoBEgEiAEBEh8KEnR4X3NlbmRfdGltZW91dF9tcxgHIAEoBEgFiAEBEh8KEnR4X3dhaXRfdGltZW91dF9tcxgIIAEoBEgGiAEBEiAKE3R4X3dhaXRfaW50ZXJ2YWxfbXMYCSABKARIB4gBARI7ChBhc3NldF9hcHByb3ZlX3R4GAogASgLMhwubXlzdGlrby5jb3JlLnYxLlRyYW5zYWN0aW9uSAiIAQESNQoKZGVwb3NpdF90eBgLIAEoCzIcLm15c3Rpa28uY29yZS52MS5UcmFuc2FjdGlvbkgJiAEBEh4KEXNjcmVlbmluZ19tZXNzYWdlGAwgASgJSAqIAQFCDgoMX3ByaXZhdGVfa2V5QhIKEF9zaWduZXJfcHJvdmlkZXJCEwoRX3F1ZXJ5X3RpbWVvdXRfbXNCHgocX2Fzc2V0X2FwcHJvdmVfY29uZmlybWF0aW9uc0IYChZfZGVwb3NpdF9jb25maXJtYXRpb25zQhUKE190eF9zZW5kX3RpbWVvdXRfbXNCFQoTX3R4X3dhaXRfdGltZW91dF9tc0IWChRfdHhfd2FpdF9pbnRlcnZhbF9tc0ITChFfYXNzZXRfYXBwcm92ZV90eEINCgtfZGVwb3NpdF90eEIUChJfc2NyZWVuaW5nX21lc3NhZ2UioAcKDERlcG9zaXRRdW90ZRIUCgxhc3NldF9zeW1ib2wYASABKAkSFgoOYXNzZXRfZGVjaW1hbHMYAiABKA0SEgoKbWluX2Ftb3VudBgDIAEoARIaChJtaW5fZGVjaW1hbF9hbW91bnQYBCABKAkSEgoKbWF4X2Ftb3VudBgFIAEoARIaChJtYXhfZGVjaW1hbF9hbW91bnQYBiABKAkSHQoVbWluX3JvbGx1cF9mZWVfYW1vdW50GAcgASgBEiUKHW1pbl9yb2xsdXBfZmVlX2RlY2ltYWxfYW1vdW50GAggASgJEh8KF3JvbGx1cF9mZWVfYXNzZXRfc3ltYm9sGAkgASgJEiEKGXJvbGx1cF9mZWVfYXNzZXRfZGVjaW1hbHMYCiABKA0SIgoVbWluX2JyaWRnZV9mZWVfYW1vdW50GAsgASgBSACIAQESKgodbWluX2JyaWRnZV9mZWVfZGVjaW1hbF9hbW91bnQYDCABKAlIAYgBARIkChdicmlkZ2VfZmVlX2Fzc2V0X3N5bWJvbBgNIAEoCUgCiAEBEiYKGWJyaWRnZV9mZWVfYXNzZXRfZGVjaW1hbHMYDiABKA1IA4gBARIkChdtaW5fZXhlY3V0b3JfZmVlX2Ftb3VudBgPIAEoAUgEiAEBEiwKH21pbl9leGVjdXRvcl9mZWVfZGVjaW1hbF9hbW91bnQYECABKAlIBYgBARImChlleGVjdXRvcl9mZWVfYXNzZXRfc3ltYm9sGBEgASgJSAaIAQESKAobZXhlY3V0b3JfZmVlX2Fzc2V0X2RlY2ltYWxzGBIgASgNSAeIAQESGwoTcmVjb21tZW5kZWRfYW1vdW50cxgTIAMoARIjChtyZWNvbW1lbmRlZF9kZWNpbWFsX2Ftb3VudHMYFCADKAlCGAoWX21pbl9icmlkZ2VfZmVlX2Ftb3VudEIgCh5fbWluX2JyaWRnZV9mZWVfZGVjaW1hbF9hbW91bnRCGgoYX2JyaWRnZV9mZWVfYXNzZXRfc3ltYm9sQhwKGl9icmlkZ2VfZmVlX2Fzc2V0X2RlY2ltYWxzQhoKGF9taW5fZXhlY3V0b3JfZmVlX2Ftb3VudEIiCiBfbWluX2V4ZWN1dG9yX2ZlZV9kZWNpbWFsX2Ftb3VudEIcChpfZXhlY3V0b3JfZmVlX2Fzc2V0X3N5bWJvbEIeChxfZXhlY3V0b3JfZmVlX2Fzc2V0X2RlY2ltYWxzIsUJCg5EZXBvc2l0U3VtbWFyeRIQCghjaGFpbl9pZBgBIAEoBBIUCgxhc3NldF9zeW1ib2wYAiABKAkSFgoOYXNzZXRfZGVjaW1hbHMYAyABKA0SDgoGYW1vdW50GAQgASgBEhYKDmRlY2ltYWxfYW1vdW50GAUgASgJEhgKEHNoaWVsZGVkX2FkZHJlc3MYBiABKAkSGQoRcm9sbHVwX2ZlZV9hbW91bnQYByABKAESIQoZcm9sbHVwX2ZlZV9kZWNpbWFsX2Ftb3VudBgIIAEoCRIfChdyb2xsdXBfZmVlX2Fzc2V0X3N5bWJvbBgJIAEoCRIhChlyb2xsdXBfZmVlX2Fzc2V0X2RlY2ltYWxzGAogASgNEhkKDGRzdF9jaGFpbl9pZBgLIAEoBEgAiAEBEh4KEWJyaWRnZV9mZWVfYW1vdW50GAwgASgBSAGIAQESJgoZYnJpZGdlX2ZlZV9kZWNpbWFsX2Ftb3VudBgNIAEoCUgCiAEBEiQKF2JyaWRnZV9mZWVfYXNzZXRfc3ltYm9sGA4gASgJSAOIAQESJgoZYnJpZGdlX2ZlZV9hc3NldF9kZWNpbWFscxgPIAEoDUgEiAEBEiAKE2V4ZWN1dG9yX2ZlZV9hbW91bnQYECABKAFIBYgBARIoChtleGVjdXRvcl9mZWVfZGVjaW1hbF9hbW91bnQYESABKAlIBogBARImChlleGVjdXRvcl9mZWVfYXNzZXRfc3ltYm9sGBIgASgJSAeIAQESKAobZXhlY3V0b3JfZmVlX2Fzc2V0X2RlY2ltYWxzGBMgASgNSAiIAQESNwoLYnJpZGdlX3R5cGUYFCABKA4yHS5teXN0aWtvLmNvbW1vbi52MS5CcmlkZ2VUeXBlSAmIAQESUAoNdG90YWxfYW1vdW50cxgVIAMoCzI5Lm15c3Rpa28uY29yZS5oYW5kbGVyLnYxLkRlcG9zaXRTdW1tYXJ5LlRvdGFsQW1vdW50c0VudHJ5El8KFXRvdGFsX2RlY2ltYWxfYW1vdW50cxgWIAMoCzJALm15c3Rpa28uY29yZS5oYW5kbGVyLnYxLkRlcG9zaXRTdW1tYXJ5LlRvdGFsRGVjaW1hbEFtb3VudHNFbnRyeRozChFUb3RhbEFtb3VudHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAE6AjgBGjoKGFRvdGFsRGVjaW1hbEFtb3VudHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBQg8KDV9kc3RfY2hhaW5faWRCFAoSX2JyaWRnZV9mZWVfYW1vdW50QhwKGl9icmlkZ2VfZmVlX2RlY2ltYWxfYW1vdW50QhoKGF9icmlkZ2VfZmVlX2Fzc2V0X3N5bWJvbEIcChpfYnJpZGdlX2ZlZV9hc3NldF9kZWNpbWFsc0IWChRfZXhlY3V0b3JfZmVlX2Ftb3VudEIeChxfZXhlY3V0b3JfZmVlX2RlY2ltYWxfYW1vdW50QhwKGl9leGVjdXRvcl9mZWVfYXNzZXRfc3ltYm9sQh4KHF9leGVjdXRvcl9mZWVfYXNzZXRfZGVjaW1hbHNCDgoMX2JyaWRnZV90eXBlQq4BCh9uZXR3b3JrLm15c3Rpa28uY29yZS5oYW5kbGVyLnYxQgxEZXBvc2l0UHJvdG9QAaICA01DSKoCF015c3Rpa28uQ29yZS5IYW5kbGVyLlYxygIXTXlzdGlrb1xDb3JlXEhhbmRsZXJcVjHiAiNNeXN0aWtvXENvcmVcSGFuZGxlclxWMVxHUEJNZXRhZGF0YeoCGk15c3Rpa286OkNvcmU6OkhhbmRsZXI6OlYxYgZwcm90bzM',
    [file_mystiko_core_v1_transaction, file_mystiko_common_v1_types],
  );

/**
 * @generated from message mystiko.core.handler.v1.QuoteDepositOptions
 */
export type QuoteDepositOptions = Message<'mystiko.core.handler.v1.QuoteDepositOptions'> & {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol: string;

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
};

/**
 * Describes the message mystiko.core.handler.v1.QuoteDepositOptions.
 * Use `create(QuoteDepositOptionsSchema)` to create a new message.
 */
export const QuoteDepositOptionsSchema: GenMessage<QuoteDepositOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_handler_v1_deposit, 0);

/**
 * @generated from message mystiko.core.handler.v1.CreateDepositOptions
 */
export type CreateDepositOptions = Message<'mystiko.core.handler.v1.CreateDepositOptions'> & {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol: string;

  /**
   * @generated from field: double amount = 3;
   */
  amount: number;

  /**
   * @generated from field: string shielded_address = 4;
   */
  shieldedAddress: string;

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
};

/**
 * Describes the message mystiko.core.handler.v1.CreateDepositOptions.
 * Use `create(CreateDepositOptionsSchema)` to create a new message.
 */
export const CreateDepositOptionsSchema: GenMessage<CreateDepositOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_handler_v1_deposit, 1);

/**
 * @generated from message mystiko.core.handler.v1.SendDepositOptions
 */
export type SendDepositOptions = Message<'mystiko.core.handler.v1.SendDepositOptions'> & {
  /**
   * @generated from field: string deposit_id = 1;
   */
  depositId: string;

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

  /**
   * @generated from field: optional string screening_message = 12;
   */
  screeningMessage?: string;
};

/**
 * Describes the message mystiko.core.handler.v1.SendDepositOptions.
 * Use `create(SendDepositOptionsSchema)` to create a new message.
 */
export const SendDepositOptionsSchema: GenMessage<SendDepositOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_handler_v1_deposit, 2);

/**
 * @generated from message mystiko.core.handler.v1.DepositQuote
 */
export type DepositQuote = Message<'mystiko.core.handler.v1.DepositQuote'> & {
  /**
   * @generated from field: string asset_symbol = 1;
   */
  assetSymbol: string;

  /**
   * @generated from field: uint32 asset_decimals = 2;
   */
  assetDecimals: number;

  /**
   * @generated from field: double min_amount = 3;
   */
  minAmount: number;

  /**
   * @generated from field: string min_decimal_amount = 4;
   */
  minDecimalAmount: string;

  /**
   * @generated from field: double max_amount = 5;
   */
  maxAmount: number;

  /**
   * @generated from field: string max_decimal_amount = 6;
   */
  maxDecimalAmount: string;

  /**
   * @generated from field: double min_rollup_fee_amount = 7;
   */
  minRollupFeeAmount: number;

  /**
   * @generated from field: string min_rollup_fee_decimal_amount = 8;
   */
  minRollupFeeDecimalAmount: string;

  /**
   * @generated from field: string rollup_fee_asset_symbol = 9;
   */
  rollupFeeAssetSymbol: string;

  /**
   * @generated from field: uint32 rollup_fee_asset_decimals = 10;
   */
  rollupFeeAssetDecimals: number;

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
  recommendedAmounts: number[];

  /**
   * @generated from field: repeated string recommended_decimal_amounts = 20;
   */
  recommendedDecimalAmounts: string[];
};

/**
 * Describes the message mystiko.core.handler.v1.DepositQuote.
 * Use `create(DepositQuoteSchema)` to create a new message.
 */
export const DepositQuoteSchema: GenMessage<DepositQuote> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_handler_v1_deposit, 3);

/**
 * @generated from message mystiko.core.handler.v1.DepositSummary
 */
export type DepositSummary = Message<'mystiko.core.handler.v1.DepositSummary'> & {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol: string;

  /**
   * @generated from field: uint32 asset_decimals = 3;
   */
  assetDecimals: number;

  /**
   * @generated from field: double amount = 4;
   */
  amount: number;

  /**
   * @generated from field: string decimal_amount = 5;
   */
  decimalAmount: string;

  /**
   * @generated from field: string shielded_address = 6;
   */
  shieldedAddress: string;

  /**
   * @generated from field: double rollup_fee_amount = 7;
   */
  rollupFeeAmount: number;

  /**
   * @generated from field: string rollup_fee_decimal_amount = 8;
   */
  rollupFeeDecimalAmount: string;

  /**
   * @generated from field: string rollup_fee_asset_symbol = 9;
   */
  rollupFeeAssetSymbol: string;

  /**
   * @generated from field: uint32 rollup_fee_asset_decimals = 10;
   */
  rollupFeeAssetDecimals: number;

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
  totalAmounts: { [key: string]: number };

  /**
   * @generated from field: map<string, string> total_decimal_amounts = 22;
   */
  totalDecimalAmounts: { [key: string]: string };
};

/**
 * Describes the message mystiko.core.handler.v1.DepositSummary.
 * Use `create(DepositSummarySchema)` to create a new message.
 */
export const DepositSummarySchema: GenMessage<DepositSummary> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_handler_v1_deposit, 4);
