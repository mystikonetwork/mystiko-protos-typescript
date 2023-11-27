// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file mystiko/core/scanner/v1/asset.proto (package mystiko.core.scanner.v1, syntax proto3)
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

/**
 * @generated from message mystiko.core.scanner.v1.AssetsOptions
 */
export class AssetsOptions extends Message<AssetsOptions> {
  /**
   * @generated from field: repeated string shielded_addresses = 1;
   */
  shieldedAddresses: string[] = [];

  constructor(data?: PartialMessage<AssetsOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetsOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'shielded_addresses', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetsOptions {
    return new AssetsOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetsOptions {
    return new AssetsOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetsOptions {
    return new AssetsOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetsOptions | PlainMessage<AssetsOptions> | undefined,
    b: AssetsOptions | PlainMessage<AssetsOptions> | undefined,
  ): boolean {
    return proto3.util.equals(AssetsOptions, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByVersion
 */
export class AssetsByVersion extends Message<AssetsByVersion> {
  /**
   * @generated from field: uint32 pool_version = 1;
   */
  poolVersion = 0;

  /**
   * @generated from field: string pool_name = 2;
   */
  poolName = '';

  /**
   * @generated from field: double balance = 3;
   */
  balance = 0;

  constructor(data?: PartialMessage<AssetsByVersion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetsByVersion';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'pool_version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: 'pool_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'balance', kind: 'scalar', T: 1 /* ScalarType.DOUBLE */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetsByVersion {
    return new AssetsByVersion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetsByVersion {
    return new AssetsByVersion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetsByVersion {
    return new AssetsByVersion().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetsByVersion | PlainMessage<AssetsByVersion> | undefined,
    b: AssetsByVersion | PlainMessage<AssetsByVersion> | undefined,
  ): boolean {
    return proto3.util.equals(AssetsByVersion, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetsBySymbol
 */
export class AssetsBySymbol extends Message<AssetsBySymbol> {
  /**
   * @generated from field: string asset_symbol = 1;
   */
  assetSymbol = '';

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsByVersion versions = 2;
   */
  versions: AssetsByVersion[] = [];

  constructor(data?: PartialMessage<AssetsBySymbol>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetsBySymbol';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'versions', kind: 'message', T: AssetsByVersion, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetsBySymbol {
    return new AssetsBySymbol().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetsBySymbol {
    return new AssetsBySymbol().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetsBySymbol {
    return new AssetsBySymbol().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetsBySymbol | PlainMessage<AssetsBySymbol> | undefined,
    b: AssetsBySymbol | PlainMessage<AssetsBySymbol> | undefined,
  ): boolean {
    return proto3.util.equals(AssetsBySymbol, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByBridge
 */
export class AssetsByBridge extends Message<AssetsByBridge> {
  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 1;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsBySymbol symbols = 2;
   */
  symbols: AssetsBySymbol[] = [];

  constructor(data?: PartialMessage<AssetsByBridge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetsByBridge';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 2, name: 'symbols', kind: 'message', T: AssetsBySymbol, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetsByBridge {
    return new AssetsByBridge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetsByBridge {
    return new AssetsByBridge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetsByBridge {
    return new AssetsByBridge().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetsByBridge | PlainMessage<AssetsByBridge> | undefined,
    b: AssetsByBridge | PlainMessage<AssetsByBridge> | undefined,
  ): boolean {
    return proto3.util.equals(AssetsByBridge, a, b);
  }
}

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByChain
 */
export class AssetsByChain extends Message<AssetsByChain> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsByBridge bridges = 2;
   */
  bridges: AssetsByBridge[] = [];

  constructor(data?: PartialMessage<AssetsByChain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.scanner.v1.AssetsByChain';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'bridges', kind: 'message', T: AssetsByBridge, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetsByChain {
    return new AssetsByChain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetsByChain {
    return new AssetsByChain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetsByChain {
    return new AssetsByChain().fromJsonString(jsonString, options);
  }

  static equals(
    a: AssetsByChain | PlainMessage<AssetsByChain> | undefined,
    b: AssetsByChain | PlainMessage<AssetsByChain> | undefined,
  ): boolean {
    return proto3.util.equals(AssetsByChain, a, b);
  }
}
