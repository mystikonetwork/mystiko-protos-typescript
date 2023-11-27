// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file mystiko/core/scanner/v1/scan.proto (package mystiko.core.scanner.v1, syntax proto3)
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
 * @generated from message mystiko.core.scanner.v1.ScanOptions
 */
export class ScanOptions extends Message<ScanOptions> {
  /**
   * @generated from field: string wallet_password = 1;
   */
  walletPassword = '';

  /**
   * @generated from field: optional uint64 batch_size = 2;
   */
  batchSize?: bigint;

  /**
   * @generated from field: optional uint32 concurrency = 3;
   */
  concurrency?: number;

  /**
   * @generated from field: repeated string shielded_addresses = 4;
   */
  shieldedAddresses: string[] = [];

  constructor(data?: PartialMessage<ScanOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.ScanOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'wallet_password', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'batch_size', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 3, name: 'concurrency', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: 'shielded_addresses', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScanOptions {
    return new ScanOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScanOptions {
    return new ScanOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScanOptions {
    return new ScanOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: ScanOptions | PlainMessage<ScanOptions> | undefined,
    b: ScanOptions | PlainMessage<ScanOptions> | undefined,
  ): boolean {
    return proto3.util.equals(ScanOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.ScanResult
 */
export class ScanResult extends Message<ScanResult> {
  /**
   * @generated from field: uint64 total_count = 1;
   */
  totalCount = protoInt64.zero;

  /**
   * @generated from field: uint64 owned_count = 2;
   */
  ownedCount = protoInt64.zero;

  /**
   * @generated from field: repeated string scanned_shielded_addresses = 3;
   */
  scannedShieldedAddresses: string[] = [];

  /**
   * @generated from field: optional string to_id = 4;
   */
  toId?: string;

  constructor(data?: PartialMessage<ScanResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.ScanResult';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'total_count', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'owned_count', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    {
      no: 3,
      name: 'scanned_shielded_addresses',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
    { no: 4, name: 'to_id', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScanResult {
    return new ScanResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScanResult {
    return new ScanResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScanResult {
    return new ScanResult().fromJsonString(jsonString, options);
  }

  static equals(
    a: ScanResult | PlainMessage<ScanResult> | undefined,
    b: ScanResult | PlainMessage<ScanResult> | undefined,
  ): boolean {
    return proto3.util.equals(ScanResult, a, b);
  }
}
