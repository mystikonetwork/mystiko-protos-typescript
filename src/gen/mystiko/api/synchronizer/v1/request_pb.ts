// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/api/synchronizer/v1/request.proto (package mystiko.api.synchronizer.v1, syntax proto3)
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
import { SynchronizerSyncOptions } from '../../../core/synchronizer/v1/sync_pb.js';
import { SynchronizerResetOptions } from '../../../core/synchronizer/v1/reset_pb.js';

/**
 * @generated from message mystiko.api.synchronizer.v1.ChainSyncedBlockRequest
 */
export class ChainSyncedBlockRequest extends Message<ChainSyncedBlockRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  constructor(data?: PartialMessage<ChainSyncedBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.ChainSyncedBlockRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainSyncedBlockRequest {
    return new ChainSyncedBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainSyncedBlockRequest {
    return new ChainSyncedBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainSyncedBlockRequest {
    return new ChainSyncedBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainSyncedBlockRequest | PlainMessage<ChainSyncedBlockRequest> | undefined,
    b: ChainSyncedBlockRequest | PlainMessage<ChainSyncedBlockRequest> | undefined,
  ): boolean {
    return proto3.util.equals(ChainSyncedBlockRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.ContractSyncedBlockRequest
 */
export class ContractSyncedBlockRequest extends Message<ContractSyncedBlockRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: string contract_address = 2;
   */
  contractAddress = '';

  constructor(data?: PartialMessage<ContractSyncedBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.ContractSyncedBlockRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractSyncedBlockRequest {
    return new ContractSyncedBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractSyncedBlockRequest {
    return new ContractSyncedBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractSyncedBlockRequest {
    return new ContractSyncedBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ContractSyncedBlockRequest | PlainMessage<ContractSyncedBlockRequest> | undefined,
    b: ContractSyncedBlockRequest | PlainMessage<ContractSyncedBlockRequest> | undefined,
  ): boolean {
    return proto3.util.equals(ContractSyncedBlockRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.SynchronizerStatusRequest
 */
export class SynchronizerStatusRequest extends Message<SynchronizerStatusRequest> {
  /**
   * @generated from field: bool with_contracts = 1;
   */
  withContracts = false;

  constructor(data?: PartialMessage<SynchronizerStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.SynchronizerStatusRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'with_contracts', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynchronizerStatusRequest {
    return new SynchronizerStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynchronizerStatusRequest {
    return new SynchronizerStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynchronizerStatusRequest {
    return new SynchronizerStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SynchronizerStatusRequest | PlainMessage<SynchronizerStatusRequest> | undefined,
    b: SynchronizerStatusRequest | PlainMessage<SynchronizerStatusRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SynchronizerStatusRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.SynchronizerSyncRequest
 */
export class SynchronizerSyncRequest extends Message<SynchronizerSyncRequest> {
  /**
   * @generated from field: mystiko.core.synchronizer.v1.SynchronizerSyncOptions options = 1;
   */
  options?: SynchronizerSyncOptions;

  constructor(data?: PartialMessage<SynchronizerSyncRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.SynchronizerSyncRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: SynchronizerSyncOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynchronizerSyncRequest {
    return new SynchronizerSyncRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynchronizerSyncRequest {
    return new SynchronizerSyncRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynchronizerSyncRequest {
    return new SynchronizerSyncRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SynchronizerSyncRequest | PlainMessage<SynchronizerSyncRequest> | undefined,
    b: SynchronizerSyncRequest | PlainMessage<SynchronizerSyncRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SynchronizerSyncRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.SynchronizerResetRequest
 */
export class SynchronizerResetRequest extends Message<SynchronizerResetRequest> {
  /**
   * @generated from field: mystiko.core.synchronizer.v1.SynchronizerResetOptions options = 1;
   */
  options?: SynchronizerResetOptions;

  constructor(data?: PartialMessage<SynchronizerResetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.SynchronizerResetRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: SynchronizerResetOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynchronizerResetRequest {
    return new SynchronizerResetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynchronizerResetRequest {
    return new SynchronizerResetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynchronizerResetRequest {
    return new SynchronizerResetRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SynchronizerResetRequest | PlainMessage<SynchronizerResetRequest> | undefined,
    b: SynchronizerResetRequest | PlainMessage<SynchronizerResetRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SynchronizerResetRequest, a, b);
  }
}
