// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/common/v1/types.proto (package mystiko.common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from '@bufbuild/protobuf';

/**
 * @generated from enum mystiko.common.v1.BridgeType
 */
export enum BridgeType {
  /**
   * @generated from enum value: BRIDGE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: BRIDGE_TYPE_LOOP = 1;
   */
  LOOP = 1,

  /**
   * @generated from enum value: BRIDGE_TYPE_POLY = 2;
   */
  POLY = 2,

  /**
   * @generated from enum value: BRIDGE_TYPE_TBRIDGE = 3;
   */
  TBRIDGE = 3,

  /**
   * @generated from enum value: BRIDGE_TYPE_CELER = 4;
   */
  CELER = 4,

  /**
   * @generated from enum value: BRIDGE_TYPE_LAYER_ZERO = 5;
   */
  LAYER_ZERO = 5,

  /**
   * @generated from enum value: BRIDGE_TYPE_AXELAR = 6;
   */
  AXELAR = 6,

  /**
   * @generated from enum value: BRIDGE_TYPE_WORMHOLE = 7;
   */
  WORMHOLE = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(BridgeType)
proto3.util.setEnumType(BridgeType, 'mystiko.common.v1.BridgeType', [
  { no: 0, name: 'BRIDGE_TYPE_UNSPECIFIED' },
  { no: 1, name: 'BRIDGE_TYPE_LOOP' },
  { no: 2, name: 'BRIDGE_TYPE_POLY' },
  { no: 3, name: 'BRIDGE_TYPE_TBRIDGE' },
  { no: 4, name: 'BRIDGE_TYPE_CELER' },
  { no: 5, name: 'BRIDGE_TYPE_LAYER_ZERO' },
  { no: 6, name: 'BRIDGE_TYPE_AXELAR' },
  { no: 7, name: 'BRIDGE_TYPE_WORMHOLE' },
]);

/**
 * @generated from enum mystiko.common.v1.ContractType
 */
export enum ContractType {
  /**
   * @generated from enum value: CONTRACT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CONTRACT_TYPE_DEPOSIT = 1;
   */
  DEPOSIT = 1,

  /**
   * @generated from enum value: CONTRACT_TYPE_POOL = 2;
   */
  POOL = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ContractType)
proto3.util.setEnumType(ContractType, 'mystiko.common.v1.ContractType', [
  { no: 0, name: 'CONTRACT_TYPE_UNSPECIFIED' },
  { no: 1, name: 'CONTRACT_TYPE_DEPOSIT' },
  { no: 2, name: 'CONTRACT_TYPE_POOL' },
]);

/**
 * @generated from enum mystiko.common.v1.AssetType
 */
export enum AssetType {
  /**
   * @generated from enum value: ASSET_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ASSET_TYPE_ERC20 = 1;
   */
  ERC20 = 1,

  /**
   * @generated from enum value: ASSET_TYPE_MAIN = 2;
   */
  MAIN = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(AssetType)
proto3.util.setEnumType(AssetType, 'mystiko.common.v1.AssetType', [
  { no: 0, name: 'ASSET_TYPE_UNSPECIFIED' },
  { no: 1, name: 'ASSET_TYPE_ERC20' },
  { no: 2, name: 'ASSET_TYPE_MAIN' },
]);

/**
 * @generated from enum mystiko.common.v1.CircuitType
 */
export enum CircuitType {
  /**
   * @generated from enum value: CIRCUIT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_1 = 1;
   */
  ROLLUP_1 = 1,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_2 = 2;
   */
  ROLLUP_2 = 2,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_4 = 3;
   */
  ROLLUP_4 = 3,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_8 = 4;
   */
  ROLLUP_8 = 4,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_16 = 5;
   */
  ROLLUP_16 = 5,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION1X0 = 6;
   */
  TRANSACTION1X0 = 6,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION1X1 = 7;
   */
  TRANSACTION1X1 = 7,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION1X2 = 8;
   */
  TRANSACTION1X2 = 8,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION2X0 = 9;
   */
  TRANSACTION2X0 = 9,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION2X1 = 10;
   */
  TRANSACTION2X1 = 10,

  /**
   * @generated from enum value: CIRCUIT_TYPE_TRANSACTION2X2 = 11;
   */
  TRANSACTION2X2 = 11,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_32 = 12;
   */
  ROLLUP_32 = 12,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_64 = 13;
   */
  ROLLUP_64 = 13,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_128 = 14;
   */
  ROLLUP_128 = 14,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_256 = 15;
   */
  ROLLUP_256 = 15,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_512 = 16;
   */
  ROLLUP_512 = 16,

  /**
   * @generated from enum value: CIRCUIT_TYPE_ROLLUP_1024 = 17;
   */
  ROLLUP_1024 = 17,
}
// Retrieve enum metadata with: proto3.getEnumType(CircuitType)
proto3.util.setEnumType(CircuitType, 'mystiko.common.v1.CircuitType', [
  { no: 0, name: 'CIRCUIT_TYPE_UNSPECIFIED' },
  { no: 1, name: 'CIRCUIT_TYPE_ROLLUP_1' },
  { no: 2, name: 'CIRCUIT_TYPE_ROLLUP_2' },
  { no: 3, name: 'CIRCUIT_TYPE_ROLLUP_4' },
  { no: 4, name: 'CIRCUIT_TYPE_ROLLUP_8' },
  { no: 5, name: 'CIRCUIT_TYPE_ROLLUP_16' },
  { no: 6, name: 'CIRCUIT_TYPE_TRANSACTION1X0' },
  { no: 7, name: 'CIRCUIT_TYPE_TRANSACTION1X1' },
  { no: 8, name: 'CIRCUIT_TYPE_TRANSACTION1X2' },
  { no: 9, name: 'CIRCUIT_TYPE_TRANSACTION2X0' },
  { no: 10, name: 'CIRCUIT_TYPE_TRANSACTION2X1' },
  { no: 11, name: 'CIRCUIT_TYPE_TRANSACTION2X2' },
  { no: 12, name: 'CIRCUIT_TYPE_ROLLUP_32' },
  { no: 13, name: 'CIRCUIT_TYPE_ROLLUP_64' },
  { no: 14, name: 'CIRCUIT_TYPE_ROLLUP_128' },
  { no: 15, name: 'CIRCUIT_TYPE_ROLLUP_256' },
  { no: 16, name: 'CIRCUIT_TYPE_ROLLUP_512' },
  { no: 17, name: 'CIRCUIT_TYPE_ROLLUP_1024' },
]);

/**
 * @generated from enum mystiko.common.v1.ProviderType
 */
export enum ProviderType {
  /**
   * @generated from enum value: PROVIDER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROVIDER_TYPE_FAILOVER = 1;
   */
  FAILOVER = 1,

  /**
   * @generated from enum value: PROVIDER_TYPE_QUORUM = 2;
   */
  QUORUM = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ProviderType)
proto3.util.setEnumType(ProviderType, 'mystiko.common.v1.ProviderType', [
  { no: 0, name: 'PROVIDER_TYPE_UNSPECIFIED' },
  { no: 1, name: 'PROVIDER_TYPE_FAILOVER' },
  { no: 2, name: 'PROVIDER_TYPE_QUORUM' },
]);

/**
 * @generated from enum mystiko.common.v1.TransactionType
 */
export enum TransactionType {
  /**
   * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSACTION_TYPE_LEGACY = 1;
   */
  LEGACY = 1,

  /**
   * @generated from enum value: TRANSACTION_TYPE_EIP1559 = 2;
   */
  EIP1559 = 2,

  /**
   * @generated from enum value: TRANSACTION_TYPE_EIP2930 = 3;
   */
  EIP2930 = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(TransactionType)
proto3.util.setEnumType(TransactionType, 'mystiko.common.v1.TransactionType', [
  { no: 0, name: 'TRANSACTION_TYPE_UNSPECIFIED' },
  { no: 1, name: 'TRANSACTION_TYPE_LEGACY' },
  { no: 2, name: 'TRANSACTION_TYPE_EIP1559' },
  { no: 3, name: 'TRANSACTION_TYPE_EIP2930' },
]);
