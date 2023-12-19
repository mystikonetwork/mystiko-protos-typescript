// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/api/config/v1/request.proto (package mystiko.api.config.v1, syntax proto3)
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
import { BridgeType, CircuitType } from '../../../common/v1/types_pb.js';

/**
 * @generated from message mystiko.api.config.v1.FindDefaultCircuitRequest
 */
export class FindDefaultCircuitRequest extends Message<FindDefaultCircuitRequest> {
  /**
   * @generated from field: mystiko.common.v1.CircuitType circuit_type = 1;
   */
  circuitType = CircuitType.UNSPECIFIED;

  constructor(data?: PartialMessage<FindDefaultCircuitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindDefaultCircuitRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'circuit_type', kind: 'enum', T: proto3.getEnumType(CircuitType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindDefaultCircuitRequest {
    return new FindDefaultCircuitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindDefaultCircuitRequest {
    return new FindDefaultCircuitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindDefaultCircuitRequest {
    return new FindDefaultCircuitRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDefaultCircuitRequest | PlainMessage<FindDefaultCircuitRequest> | undefined,
    b: FindDefaultCircuitRequest | PlainMessage<FindDefaultCircuitRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindDefaultCircuitRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindCircuitRequest
 */
export class FindCircuitRequest extends Message<FindCircuitRequest> {
  /**
   * @generated from field: string circuit_name = 1;
   */
  circuitName = '';

  constructor(data?: PartialMessage<FindCircuitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindCircuitRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'circuit_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindCircuitRequest {
    return new FindCircuitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindCircuitRequest {
    return new FindCircuitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindCircuitRequest {
    return new FindCircuitRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindCircuitRequest | PlainMessage<FindCircuitRequest> | undefined,
    b: FindCircuitRequest | PlainMessage<FindCircuitRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindCircuitRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindChainRequest
 */
export class FindChainRequest extends Message<FindChainRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  constructor(data?: PartialMessage<FindChainRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindChainRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindChainRequest {
    return new FindChainRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindChainRequest {
    return new FindChainRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindChainRequest {
    return new FindChainRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindChainRequest | PlainMessage<FindChainRequest> | undefined,
    b: FindChainRequest | PlainMessage<FindChainRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindChainRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindPeerChainsRequest
 */
export class FindPeerChainsRequest extends Message<FindPeerChainsRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  constructor(data?: PartialMessage<FindPeerChainsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindPeerChainsRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindPeerChainsRequest {
    return new FindPeerChainsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindPeerChainsRequest {
    return new FindPeerChainsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindPeerChainsRequest {
    return new FindPeerChainsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindPeerChainsRequest | PlainMessage<FindPeerChainsRequest> | undefined,
    b: FindPeerChainsRequest | PlainMessage<FindPeerChainsRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindPeerChainsRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindAssetSymbolsRequest
 */
export class FindAssetSymbolsRequest extends Message<FindAssetSymbolsRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint64 peer_chain_id = 2;
   */
  peerChainId = protoInt64.zero;

  constructor(data?: PartialMessage<FindAssetSymbolsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindAssetSymbolsRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'peer_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindAssetSymbolsRequest {
    return new FindAssetSymbolsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindAssetSymbolsRequest {
    return new FindAssetSymbolsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindAssetSymbolsRequest {
    return new FindAssetSymbolsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindAssetSymbolsRequest | PlainMessage<FindAssetSymbolsRequest> | undefined,
    b: FindAssetSymbolsRequest | PlainMessage<FindAssetSymbolsRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindAssetSymbolsRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindBridgesRequest
 */
export class FindBridgesRequest extends Message<FindBridgesRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint64 peer_chain_id = 2;
   */
  peerChainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 3;
   */
  assetSymbol = '';

  constructor(data?: PartialMessage<FindBridgesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindBridgesRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'peer_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindBridgesRequest {
    return new FindBridgesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindBridgesRequest {
    return new FindBridgesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindBridgesRequest {
    return new FindBridgesRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindBridgesRequest | PlainMessage<FindBridgesRequest> | undefined,
    b: FindBridgesRequest | PlainMessage<FindBridgesRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindBridgesRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindBridgeRequest
 */
export class FindBridgeRequest extends Message<FindBridgeRequest> {
  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 1;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  constructor(data?: PartialMessage<FindBridgeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindBridgeRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindBridgeRequest {
    return new FindBridgeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindBridgeRequest {
    return new FindBridgeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindBridgeRequest {
    return new FindBridgeRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindBridgeRequest | PlainMessage<FindBridgeRequest> | undefined,
    b: FindBridgeRequest | PlainMessage<FindBridgeRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindBridgeRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindDepositContractRequest
 */
export class FindDepositContractRequest extends Message<FindDepositContractRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint64 peer_chain_id = 2;
   */
  peerChainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 3;
   */
  assetSymbol = '';

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 4;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  constructor(data?: PartialMessage<FindDepositContractRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindDepositContractRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'peer_chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindDepositContractRequest {
    return new FindDepositContractRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindDepositContractRequest {
    return new FindDepositContractRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindDepositContractRequest {
    return new FindDepositContractRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDepositContractRequest | PlainMessage<FindDepositContractRequest> | undefined,
    b: FindDepositContractRequest | PlainMessage<FindDepositContractRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindDepositContractRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindDepositContractByAddressRequest
 */
export class FindDepositContractByAddressRequest extends Message<FindDepositContractByAddressRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = '';

  constructor(data?: PartialMessage<FindDepositContractByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindDepositContractByAddressRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): FindDepositContractByAddressRequest {
    return new FindDepositContractByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): FindDepositContractByAddressRequest {
    return new FindDepositContractByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): FindDepositContractByAddressRequest {
    return new FindDepositContractByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDepositContractByAddressRequest | PlainMessage<FindDepositContractByAddressRequest> | undefined,
    b: FindDepositContractByAddressRequest | PlainMessage<FindDepositContractByAddressRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindDepositContractByAddressRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindPoolContractRequest
 */
export class FindPoolContractRequest extends Message<FindPoolContractRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol = '';

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 3;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: uint32 version = 4;
   */
  version = 0;

  constructor(data?: PartialMessage<FindPoolContractRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindPoolContractRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 4, name: 'version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindPoolContractRequest {
    return new FindPoolContractRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindPoolContractRequest {
    return new FindPoolContractRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindPoolContractRequest {
    return new FindPoolContractRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindPoolContractRequest | PlainMessage<FindPoolContractRequest> | undefined,
    b: FindPoolContractRequest | PlainMessage<FindPoolContractRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindPoolContractRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindPoolContractsRequest
 */
export class FindPoolContractsRequest extends Message<FindPoolContractsRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string asset_symbol = 2;
   */
  assetSymbol = '';

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 3;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  constructor(data?: PartialMessage<FindPoolContractsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindPoolContractsRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'asset_symbol', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindPoolContractsRequest {
    return new FindPoolContractsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindPoolContractsRequest {
    return new FindPoolContractsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindPoolContractsRequest {
    return new FindPoolContractsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindPoolContractsRequest | PlainMessage<FindPoolContractsRequest> | undefined,
    b: FindPoolContractsRequest | PlainMessage<FindPoolContractsRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindPoolContractsRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindPoolContractByAddressRequest
 */
export class FindPoolContractByAddressRequest extends Message<FindPoolContractByAddressRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = '';

  constructor(data?: PartialMessage<FindPoolContractByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindPoolContractByAddressRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): FindPoolContractByAddressRequest {
    return new FindPoolContractByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): FindPoolContractByAddressRequest {
    return new FindPoolContractByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): FindPoolContractByAddressRequest {
    return new FindPoolContractByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindPoolContractByAddressRequest | PlainMessage<FindPoolContractByAddressRequest> | undefined,
    b: FindPoolContractByAddressRequest | PlainMessage<FindPoolContractByAddressRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindPoolContractByAddressRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.FindContractByAddressRequest
 */
export class FindContractByAddressRequest extends Message<FindContractByAddressRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = '';

  constructor(data?: PartialMessage<FindContractByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.FindContractByAddressRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindContractByAddressRequest {
    return new FindContractByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindContractByAddressRequest {
    return new FindContractByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): FindContractByAddressRequest {
    return new FindContractByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindContractByAddressRequest | PlainMessage<FindContractByAddressRequest> | undefined,
    b: FindContractByAddressRequest | PlainMessage<FindContractByAddressRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindContractByAddressRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.config.v1.GetTransactionUrlRequest
 */
export class GetTransactionUrlRequest extends Message<GetTransactionUrlRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string tx_hash = 2;
   */
  txHash = '';

  constructor(data?: PartialMessage<GetTransactionUrlRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.config.v1.GetTransactionUrlRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'tx_hash', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTransactionUrlRequest {
    return new GetTransactionUrlRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTransactionUrlRequest {
    return new GetTransactionUrlRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTransactionUrlRequest {
    return new GetTransactionUrlRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetTransactionUrlRequest | PlainMessage<GetTransactionUrlRequest> | undefined,
    b: GetTransactionUrlRequest | PlainMessage<GetTransactionUrlRequest> | undefined,
  ): boolean {
    return proto3.util.equals(GetTransactionUrlRequest, a, b);
  }
}
