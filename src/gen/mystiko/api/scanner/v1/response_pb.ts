// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/api/scanner/v1/response.proto (package mystiko.api.scanner.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { ScanResult } from '../../../core/scanner/v1/scan_pb';
import { file_mystiko_core_scanner_v1_scan } from '../../../core/scanner/v1/scan_pb';
import type { ResetResult } from '../../../core/scanner/v1/reset_pb';
import { file_mystiko_core_scanner_v1_reset } from '../../../core/scanner/v1/reset_pb';
import type { BalanceResult } from '../../../core/scanner/v1/balance_pb';
import { file_mystiko_core_scanner_v1_balance } from '../../../core/scanner/v1/balance_pb';
import type { AssetsByChain } from '../../../core/scanner/v1/asset_pb';
import { file_mystiko_core_scanner_v1_asset } from '../../../core/scanner/v1/asset_pb';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/api/scanner/v1/response.proto.
 */
export const file_mystiko_api_scanner_v1_response: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiVteXN0aWtvL2FwaS9zY2FubmVyL3YxL3Jlc3BvbnNlLnByb3RvEhZteXN0aWtvLmFwaS5zY2FubmVyLnYxIkMKDFNjYW5SZXNwb25zZRIzCgZyZXN1bHQYASABKAsyIy5teXN0aWtvLmNvcmUuc2Nhbm5lci52MS5TY2FuUmVzdWx0IkUKDVJlc2V0UmVzcG9uc2USNAoGcmVzdWx0GAEgASgLMiQubXlzdGlrby5jb3JlLnNjYW5uZXIudjEuUmVzZXRSZXN1bHQiSQoPQmFsYW5jZVJlc3BvbnNlEjYKBnJlc3VsdBgBIAEoCzImLm15c3Rpa28uY29yZS5zY2FubmVyLnYxLkJhbGFuY2VSZXN1bHQiSQoOQXNzZXRzUmVzcG9uc2USNwoHcmVzdWx0cxgBIAMoCzImLm15c3Rpa28uY29yZS5zY2FubmVyLnYxLkFzc2V0c0J5Q2hhaW4iXQoTQ2hhaW5Bc3NldHNSZXNwb25zZRI7CgZyZXN1bHQYASABKAsyJi5teXN0aWtvLmNvcmUuc2Nhbm5lci52MS5Bc3NldHNCeUNoYWluSACIAQFCCQoHX3Jlc3VsdEKqAQoebmV0d29yay5teXN0aWtvLmFwaS5zY2FubmVyLnYxQg1SZXNwb25zZVByb3RvUAGiAgNNQVOqAhZNeXN0aWtvLkFwaS5TY2FubmVyLlYxygIWTXlzdGlrb1xBcGlcU2Nhbm5lclxWMeICIk15c3Rpa29cQXBpXFNjYW5uZXJcVjFcR1BCTWV0YWRhdGHqAhlNeXN0aWtvOjpBcGk6OlNjYW5uZXI6OlYxYgZwcm90bzM',
    [
      file_mystiko_core_scanner_v1_scan,
      file_mystiko_core_scanner_v1_reset,
      file_mystiko_core_scanner_v1_balance,
      file_mystiko_core_scanner_v1_asset,
    ],
  );

/**
 * @generated from message mystiko.api.scanner.v1.ScanResponse
 */
export type ScanResponse = Message<'mystiko.api.scanner.v1.ScanResponse'> & {
  /**
   * @generated from field: mystiko.core.scanner.v1.ScanResult result = 1;
   */
  result?: ScanResult;
};

/**
 * Describes the message mystiko.api.scanner.v1.ScanResponse.
 * Use `create(ScanResponseSchema)` to create a new message.
 */
export const ScanResponseSchema: GenMessage<ScanResponse> =
  /*@__PURE__*/
  messageDesc(file_mystiko_api_scanner_v1_response, 0);

/**
 * @generated from message mystiko.api.scanner.v1.ResetResponse
 */
export type ResetResponse = Message<'mystiko.api.scanner.v1.ResetResponse'> & {
  /**
   * @generated from field: mystiko.core.scanner.v1.ResetResult result = 1;
   */
  result?: ResetResult;
};

/**
 * Describes the message mystiko.api.scanner.v1.ResetResponse.
 * Use `create(ResetResponseSchema)` to create a new message.
 */
export const ResetResponseSchema: GenMessage<ResetResponse> =
  /*@__PURE__*/
  messageDesc(file_mystiko_api_scanner_v1_response, 1);

/**
 * @generated from message mystiko.api.scanner.v1.BalanceResponse
 */
export type BalanceResponse = Message<'mystiko.api.scanner.v1.BalanceResponse'> & {
  /**
   * @generated from field: mystiko.core.scanner.v1.BalanceResult result = 1;
   */
  result?: BalanceResult;
};

/**
 * Describes the message mystiko.api.scanner.v1.BalanceResponse.
 * Use `create(BalanceResponseSchema)` to create a new message.
 */
export const BalanceResponseSchema: GenMessage<BalanceResponse> =
  /*@__PURE__*/
  messageDesc(file_mystiko_api_scanner_v1_response, 2);

/**
 * @generated from message mystiko.api.scanner.v1.AssetsResponse
 */
export type AssetsResponse = Message<'mystiko.api.scanner.v1.AssetsResponse'> & {
  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsByChain results = 1;
   */
  results: AssetsByChain[];
};

/**
 * Describes the message mystiko.api.scanner.v1.AssetsResponse.
 * Use `create(AssetsResponseSchema)` to create a new message.
 */
export const AssetsResponseSchema: GenMessage<AssetsResponse> =
  /*@__PURE__*/
  messageDesc(file_mystiko_api_scanner_v1_response, 3);

/**
 * @generated from message mystiko.api.scanner.v1.ChainAssetsResponse
 */
export type ChainAssetsResponse = Message<'mystiko.api.scanner.v1.ChainAssetsResponse'> & {
  /**
   * @generated from field: optional mystiko.core.scanner.v1.AssetsByChain result = 1;
   */
  result?: AssetsByChain;
};

/**
 * Describes the message mystiko.api.scanner.v1.ChainAssetsResponse.
 * Use `create(ChainAssetsResponseSchema)` to create a new message.
 */
export const ChainAssetsResponseSchema: GenMessage<ChainAssetsResponse> =
  /*@__PURE__*/
  messageDesc(file_mystiko_api_scanner_v1_response, 4);
