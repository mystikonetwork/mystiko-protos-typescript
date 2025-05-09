// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/core/scanner/v1/import.proto (package mystiko.core.scanner.v1, syntax proto3)
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

/**
 * @generated from message mystiko.core.scanner.v1.AssetChainImportOptions
 */
export class AssetChainImportOptions extends Message<AssetChainImportOptions> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: repeated string tx_hashes = 2;
   */
  txHashes: string[] = [];

  constructor(data?: PartialMessage<AssetChainImportOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetChainImportOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'tx_hashes', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetChainImportOptions {
    return new AssetChainImportOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetChainImportOptions {
    return new AssetChainImportOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetChainImportOptions {
    return new AssetChainImportOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetChainImportOptions | PlainMessage<AssetChainImportOptions> | undefined,
    b: AssetChainImportOptions | PlainMessage<AssetChainImportOptions> | undefined,
  ): boolean {
    return proto3.util.equals(AssetChainImportOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetImportOptions
 */
export class AssetImportOptions extends Message<AssetImportOptions> {
  /**
   * @generated from field: string wallet_password = 1;
   */
  walletPassword = '';

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetChainImportOptions chains = 2;
   */
  chains: AssetChainImportOptions[] = [];

  /**
   * @generated from field: optional uint64 query_timeout_ms = 3;
   */
  queryTimeoutMs?: bigint;

  constructor(data?: PartialMessage<AssetImportOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetImportOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'wallet_password', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'chains', kind: 'message', T: AssetChainImportOptions, repeated: true },
    { no: 3, name: 'query_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetImportOptions {
    return new AssetImportOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetImportOptions {
    return new AssetImportOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetImportOptions {
    return new AssetImportOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetImportOptions | PlainMessage<AssetImportOptions> | undefined,
    b: AssetImportOptions | PlainMessage<AssetImportOptions> | undefined,
  ): boolean {
    return proto3.util.equals(AssetImportOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetChainImportResult
 */
export class AssetChainImportResult extends Message<AssetChainImportResult> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint32 imported_count = 2;
   */
  importedCount = 0;

  /**
   * @generated from field: uint32 found_count = 3;
   */
  foundCount = 0;

  constructor(data?: PartialMessage<AssetChainImportResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetChainImportResult';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'imported_count', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: 'found_count', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetChainImportResult {
    return new AssetChainImportResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetChainImportResult {
    return new AssetChainImportResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetChainImportResult {
    return new AssetChainImportResult().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetChainImportResult | PlainMessage<AssetChainImportResult> | undefined,
    b: AssetChainImportResult | PlainMessage<AssetChainImportResult> | undefined,
  ): boolean {
    return proto3.util.equals(AssetChainImportResult, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetImportResult
 */
export class AssetImportResult extends Message<AssetImportResult> {
  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetChainImportResult chains = 1;
   */
  chains: AssetChainImportResult[] = [];

  constructor(data?: PartialMessage<AssetImportResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetImportResult';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chains', kind: 'message', T: AssetChainImportResult, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetImportResult {
    return new AssetImportResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetImportResult {
    return new AssetImportResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetImportResult {
    return new AssetImportResult().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetImportResult | PlainMessage<AssetImportResult> | undefined,
    b: AssetImportResult | PlainMessage<AssetImportResult> | undefined,
  ): boolean {
    return proto3.util.equals(AssetImportResult, a, b);
  }
}
