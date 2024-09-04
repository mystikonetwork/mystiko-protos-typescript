// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/core/scanner/v1/asset.proto (package mystiko.core.scanner.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { BridgeType } from '../../../common/v1/types_pb';
import { file_mystiko_common_v1_types } from '../../../common/v1/types_pb';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/core/scanner/v1/asset.proto.
 */
export const file_mystiko_core_scanner_v1_asset: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiNteXN0aWtvL2NvcmUvc2Nhbm5lci92MS9hc3NldC5wcm90bxIXbXlzdGlrby5jb3JlLnNjYW5uZXIudjEiKwoNQXNzZXRzT3B0aW9ucxIaChJzaGllbGRlZF9hZGRyZXNzZXMYASADKAkiSwoPQXNzZXRzQnlWZXJzaW9uEhQKDHBvb2xfdmVyc2lvbhgBIAEoDRIRCglwb29sX25hbWUYAiABKAkSDwoHYmFsYW5jZRgDIAEoASJiCg5Bc3NldHNCeVN5bWJvbBIUCgxhc3NldF9zeW1ib2wYASABKAkSOgoIdmVyc2lvbnMYAiADKAsyKC5teXN0aWtvLmNvcmUuc2Nhbm5lci52MS5Bc3NldHNCeVZlcnNpb24ifgoOQXNzZXRzQnlCcmlkZ2USMgoLYnJpZGdlX3R5cGUYASABKA4yHS5teXN0aWtvLmNvbW1vbi52MS5CcmlkZ2VUeXBlEjgKB3N5bWJvbHMYAiADKAsyJy5teXN0aWtvLmNvcmUuc2Nhbm5lci52MS5Bc3NldHNCeVN5bWJvbCJbCg1Bc3NldHNCeUNoYWluEhAKCGNoYWluX2lkGAEgASgEEjgKB2JyaWRnZXMYAiADKAsyJy5teXN0aWtvLmNvcmUuc2Nhbm5lci52MS5Bc3NldHNCeUJyaWRnZUKsAQofbmV0d29yay5teXN0aWtvLmNvcmUuc2Nhbm5lci52MUIKQXNzZXRQcm90b1ABogIDTUNTqgIXTXlzdGlrby5Db3JlLlNjYW5uZXIuVjHKAhdNeXN0aWtvXENvcmVcU2Nhbm5lclxWMeICI015c3Rpa29cQ29yZVxTY2FubmVyXFYxXEdQQk1ldGFkYXRh6gIaTXlzdGlrbzo6Q29yZTo6U2Nhbm5lcjo6VjFiBnByb3RvMw',
    [file_mystiko_common_v1_types],
  );

/**
 * @generated from message mystiko.core.scanner.v1.AssetsOptions
 */
export type AssetsOptions = Message<'mystiko.core.scanner.v1.AssetsOptions'> & {
  /**
   * @generated from field: repeated string shielded_addresses = 1;
   */
  shieldedAddresses: string[];
};

/**
 * Describes the message mystiko.core.scanner.v1.AssetsOptions.
 * Use `create(AssetsOptionsSchema)` to create a new message.
 */
export const AssetsOptionsSchema: GenMessage<AssetsOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_scanner_v1_asset, 0);

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByVersion
 */
export type AssetsByVersion = Message<'mystiko.core.scanner.v1.AssetsByVersion'> & {
  /**
   * @generated from field: uint32 pool_version = 1;
   */
  poolVersion: number;

  /**
   * @generated from field: string pool_name = 2;
   */
  poolName: string;

  /**
   * @generated from field: double balance = 3;
   */
  balance: number;
};

/**
 * Describes the message mystiko.core.scanner.v1.AssetsByVersion.
 * Use `create(AssetsByVersionSchema)` to create a new message.
 */
export const AssetsByVersionSchema: GenMessage<AssetsByVersion> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_scanner_v1_asset, 1);

/**
 * @generated from message mystiko.core.scanner.v1.AssetsBySymbol
 */
export type AssetsBySymbol = Message<'mystiko.core.scanner.v1.AssetsBySymbol'> & {
  /**
   * @generated from field: string asset_symbol = 1;
   */
  assetSymbol: string;

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsByVersion versions = 2;
   */
  versions: AssetsByVersion[];
};

/**
 * Describes the message mystiko.core.scanner.v1.AssetsBySymbol.
 * Use `create(AssetsBySymbolSchema)` to create a new message.
 */
export const AssetsBySymbolSchema: GenMessage<AssetsBySymbol> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_scanner_v1_asset, 2);

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByBridge
 */
export type AssetsByBridge = Message<'mystiko.core.scanner.v1.AssetsByBridge'> & {
  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 1;
   */
  bridgeType: BridgeType;

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsBySymbol symbols = 2;
   */
  symbols: AssetsBySymbol[];
};

/**
 * Describes the message mystiko.core.scanner.v1.AssetsByBridge.
 * Use `create(AssetsByBridgeSchema)` to create a new message.
 */
export const AssetsByBridgeSchema: GenMessage<AssetsByBridge> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_scanner_v1_asset, 3);

/**
 * @generated from message mystiko.core.scanner.v1.AssetsByChain
 */
export type AssetsByChain = Message<'mystiko.core.scanner.v1.AssetsByChain'> & {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: repeated mystiko.core.scanner.v1.AssetsByBridge bridges = 2;
   */
  bridges: AssetsByBridge[];
};

/**
 * Describes the message mystiko.core.scanner.v1.AssetsByChain.
 * Use `create(AssetsByChainSchema)` to create a new message.
 */
export const AssetsByChainSchema: GenMessage<AssetsByChain> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_scanner_v1_asset, 4);
