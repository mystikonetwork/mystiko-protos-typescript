// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/api/synchronizer/v1/response.proto (package mystiko.api.synchronizer.v1, syntax proto3)
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
import { Message, proto3 } from '@bufbuild/protobuf';
import { SynchronizerStatus } from '../../../core/synchronizer/v1/status_pb.js';

/**
 * @generated from message mystiko.api.synchronizer.v1.ChainSyncedBlockResponse
 */
export class ChainSyncedBlockResponse extends Message<ChainSyncedBlockResponse> {
  /**
   * @generated from field: optional uint64 result = 1;
   */
  result?: bigint;

  constructor(data?: PartialMessage<ChainSyncedBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.ChainSyncedBlockResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'result', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainSyncedBlockResponse {
    return new ChainSyncedBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainSyncedBlockResponse {
    return new ChainSyncedBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainSyncedBlockResponse {
    return new ChainSyncedBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainSyncedBlockResponse | PlainMessage<ChainSyncedBlockResponse> | undefined,
    b: ChainSyncedBlockResponse | PlainMessage<ChainSyncedBlockResponse> | undefined,
  ): boolean {
    return proto3.util.equals(ChainSyncedBlockResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.ContractSyncedBlockResponse
 */
export class ContractSyncedBlockResponse extends Message<ContractSyncedBlockResponse> {
  /**
   * @generated from field: optional uint64 result = 1;
   */
  result?: bigint;

  constructor(data?: PartialMessage<ContractSyncedBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.ContractSyncedBlockResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'result', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractSyncedBlockResponse {
    return new ContractSyncedBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractSyncedBlockResponse {
    return new ContractSyncedBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractSyncedBlockResponse {
    return new ContractSyncedBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ContractSyncedBlockResponse | PlainMessage<ContractSyncedBlockResponse> | undefined,
    b: ContractSyncedBlockResponse | PlainMessage<ContractSyncedBlockResponse> | undefined,
  ): boolean {
    return proto3.util.equals(ContractSyncedBlockResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.synchronizer.v1.SynchronizerStatusResponse
 */
export class SynchronizerStatusResponse extends Message<SynchronizerStatusResponse> {
  /**
   * @generated from field: mystiko.core.synchronizer.v1.SynchronizerStatus status = 1;
   */
  status?: SynchronizerStatus;

  constructor(data?: PartialMessage<SynchronizerStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.synchronizer.v1.SynchronizerStatusResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'status', kind: 'message', T: SynchronizerStatus },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynchronizerStatusResponse {
    return new SynchronizerStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynchronizerStatusResponse {
    return new SynchronizerStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynchronizerStatusResponse {
    return new SynchronizerStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: SynchronizerStatusResponse | PlainMessage<SynchronizerStatusResponse> | undefined,
    b: SynchronizerStatusResponse | PlainMessage<SynchronizerStatusResponse> | undefined,
  ): boolean {
    return proto3.util.equals(SynchronizerStatusResponse, a, b);
  }
}
