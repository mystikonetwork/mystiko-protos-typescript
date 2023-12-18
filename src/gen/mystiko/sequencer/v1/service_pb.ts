// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/sequencer/v1/service.proto (package mystiko.sequencer.v1, syntax proto3)
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
import { Commitment } from '../../data/v1/commitment_pb.js';
import { Nullifier } from '../../data/v1/nullifier_pb.js';

/**
 * @generated from message mystiko.sequencer.v1.FetchContractRequest
 */
export class FetchContractRequest extends Message<FetchContractRequest> {
  /**
   * @generated from field: bytes contract_address = 1;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: optional uint64 start_block = 2;
   */
  startBlock?: bigint;

  /**
   * @generated from field: optional uint64 target_block = 3;
   */
  targetBlock?: bigint;

  constructor(data?: PartialMessage<FetchContractRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.FetchContractRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 3, name: 'target_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchContractRequest {
    return new FetchContractRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchContractRequest {
    return new FetchContractRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchContractRequest {
    return new FetchContractRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FetchContractRequest | PlainMessage<FetchContractRequest> | undefined,
    b: FetchContractRequest | PlainMessage<FetchContractRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FetchContractRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.FetchContractResponse
 */
export class FetchContractResponse extends Message<FetchContractResponse> {
  /**
   * @generated from field: bytes contract_address = 1;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: uint64 start_block = 2;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: uint64 end_block = 3;
   */
  endBlock = protoInt64.zero;

  /**
   * @generated from field: repeated mystiko.data.v1.Commitment commitments = 5;
   */
  commitments: Commitment[] = [];

  /**
   * @generated from field: repeated mystiko.data.v1.Nullifier nullifiers = 6;
   */
  nullifiers: Nullifier[] = [];

  constructor(data?: PartialMessage<FetchContractResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.FetchContractResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'end_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: 'commitments', kind: 'message', T: Commitment, repeated: true },
    { no: 6, name: 'nullifiers', kind: 'message', T: Nullifier, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchContractResponse {
    return new FetchContractResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchContractResponse {
    return new FetchContractResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchContractResponse {
    return new FetchContractResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: FetchContractResponse | PlainMessage<FetchContractResponse> | undefined,
    b: FetchContractResponse | PlainMessage<FetchContractResponse> | undefined,
  ): boolean {
    return proto3.util.equals(FetchContractResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.FetchChainRequest
 */
export class FetchChainRequest extends Message<FetchChainRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint64 start_block = 2;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: uint64 target_block = 3;
   */
  targetBlock = protoInt64.zero;

  /**
   * @generated from field: optional bool is_full = 4;
   */
  isFull?: boolean;

  /**
   * @generated from field: repeated mystiko.sequencer.v1.FetchContractRequest contracts = 5;
   */
  contracts: FetchContractRequest[] = [];

  constructor(data?: PartialMessage<FetchChainRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.FetchChainRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'target_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: 'is_full', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: 'contracts', kind: 'message', T: FetchContractRequest, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchChainRequest {
    return new FetchChainRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchChainRequest {
    return new FetchChainRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchChainRequest {
    return new FetchChainRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FetchChainRequest | PlainMessage<FetchChainRequest> | undefined,
    b: FetchChainRequest | PlainMessage<FetchChainRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FetchChainRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.FetchChainResponse
 */
export class FetchChainResponse extends Message<FetchChainResponse> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: repeated mystiko.sequencer.v1.FetchContractResponse contracts = 3;
   */
  contracts: FetchContractResponse[] = [];

  constructor(data?: PartialMessage<FetchChainResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.FetchChainResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'contracts', kind: 'message', T: FetchContractResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchChainResponse {
    return new FetchChainResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchChainResponse {
    return new FetchChainResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchChainResponse {
    return new FetchChainResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: FetchChainResponse | PlainMessage<FetchChainResponse> | undefined,
    b: FetchChainResponse | PlainMessage<FetchChainResponse> | undefined,
  ): boolean {
    return proto3.util.equals(FetchChainResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.ChainLoadedBlockRequest
 */
export class ChainLoadedBlockRequest extends Message<ChainLoadedBlockRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: optional bool with_contracts = 2;
   */
  withContracts?: boolean;

  constructor(data?: PartialMessage<ChainLoadedBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.ChainLoadedBlockRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'with_contracts', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainLoadedBlockRequest {
    return new ChainLoadedBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainLoadedBlockRequest {
    return new ChainLoadedBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainLoadedBlockRequest {
    return new ChainLoadedBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainLoadedBlockRequest | PlainMessage<ChainLoadedBlockRequest> | undefined,
    b: ChainLoadedBlockRequest | PlainMessage<ChainLoadedBlockRequest> | undefined,
  ): boolean {
    return proto3.util.equals(ChainLoadedBlockRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.ChainLoadedBlockResponse
 */
export class ChainLoadedBlockResponse extends Message<ChainLoadedBlockResponse> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: uint64 block_number = 2;
   */
  blockNumber = protoInt64.zero;

  /**
   * @generated from field: repeated mystiko.sequencer.v1.ContractLoadedBlockResponse contracts = 3;
   */
  contracts: ContractLoadedBlockResponse[] = [];

  constructor(data?: PartialMessage<ChainLoadedBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.ChainLoadedBlockResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'block_number', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'contracts', kind: 'message', T: ContractLoadedBlockResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainLoadedBlockResponse {
    return new ChainLoadedBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainLoadedBlockResponse {
    return new ChainLoadedBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainLoadedBlockResponse {
    return new ChainLoadedBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainLoadedBlockResponse | PlainMessage<ChainLoadedBlockResponse> | undefined,
    b: ChainLoadedBlockResponse | PlainMessage<ChainLoadedBlockResponse> | undefined,
  ): boolean {
    return proto3.util.equals(ChainLoadedBlockResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.ContractLoadedBlockRequest
 */
export class ContractLoadedBlockRequest extends Message<ContractLoadedBlockRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  constructor(data?: PartialMessage<ContractLoadedBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.ContractLoadedBlockRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractLoadedBlockRequest {
    return new ContractLoadedBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractLoadedBlockRequest {
    return new ContractLoadedBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractLoadedBlockRequest {
    return new ContractLoadedBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ContractLoadedBlockRequest | PlainMessage<ContractLoadedBlockRequest> | undefined,
    b: ContractLoadedBlockRequest | PlainMessage<ContractLoadedBlockRequest> | undefined,
  ): boolean {
    return proto3.util.equals(ContractLoadedBlockRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.ContractLoadedBlockResponse
 */
export class ContractLoadedBlockResponse extends Message<ContractLoadedBlockResponse> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: uint64 block_number = 3;
   */
  blockNumber = protoInt64.zero;

  constructor(data?: PartialMessage<ContractLoadedBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.ContractLoadedBlockResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'block_number', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractLoadedBlockResponse {
    return new ContractLoadedBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractLoadedBlockResponse {
    return new ContractLoadedBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractLoadedBlockResponse {
    return new ContractLoadedBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ContractLoadedBlockResponse | PlainMessage<ContractLoadedBlockResponse> | undefined,
    b: ContractLoadedBlockResponse | PlainMessage<ContractLoadedBlockResponse> | undefined,
  ): boolean {
    return proto3.util.equals(ContractLoadedBlockResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.GetCommitmentsRequest
 */
export class GetCommitmentsRequest extends Message<GetCommitmentsRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: repeated bytes commitment_hashes = 3;
   */
  commitmentHashes: Uint8Array[] = [];

  constructor(data?: PartialMessage<GetCommitmentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.GetCommitmentsRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'commitment_hashes', kind: 'scalar', T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCommitmentsRequest {
    return new GetCommitmentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCommitmentsRequest {
    return new GetCommitmentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCommitmentsRequest {
    return new GetCommitmentsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetCommitmentsRequest | PlainMessage<GetCommitmentsRequest> | undefined,
    b: GetCommitmentsRequest | PlainMessage<GetCommitmentsRequest> | undefined,
  ): boolean {
    return proto3.util.equals(GetCommitmentsRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.GetCommitmentsResponse
 */
export class GetCommitmentsResponse extends Message<GetCommitmentsResponse> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: repeated mystiko.data.v1.Commitment commitments = 3;
   */
  commitments: Commitment[] = [];

  constructor(data?: PartialMessage<GetCommitmentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.GetCommitmentsResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'commitments', kind: 'message', T: Commitment, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCommitmentsResponse {
    return new GetCommitmentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCommitmentsResponse {
    return new GetCommitmentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCommitmentsResponse {
    return new GetCommitmentsResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetCommitmentsResponse | PlainMessage<GetCommitmentsResponse> | undefined,
    b: GetCommitmentsResponse | PlainMessage<GetCommitmentsResponse> | undefined,
  ): boolean {
    return proto3.util.equals(GetCommitmentsResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.GetNullifiersRequest
 */
export class GetNullifiersRequest extends Message<GetNullifiersRequest> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: repeated bytes nullifier_hashes = 3;
   */
  nullifierHashes: Uint8Array[] = [];

  constructor(data?: PartialMessage<GetNullifiersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.GetNullifiersRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'nullifier_hashes', kind: 'scalar', T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNullifiersRequest {
    return new GetNullifiersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNullifiersRequest {
    return new GetNullifiersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNullifiersRequest {
    return new GetNullifiersRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetNullifiersRequest | PlainMessage<GetNullifiersRequest> | undefined,
    b: GetNullifiersRequest | PlainMessage<GetNullifiersRequest> | undefined,
  ): boolean {
    return proto3.util.equals(GetNullifiersRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.GetNullifiersResponse
 */
export class GetNullifiersResponse extends Message<GetNullifiersResponse> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  /**
   * @generated from field: bytes contract_address = 2;
   */
  contractAddress = new Uint8Array(0);

  /**
   * @generated from field: repeated mystiko.data.v1.Nullifier nullifiers = 3;
   */
  nullifiers: Nullifier[] = [];

  constructor(data?: PartialMessage<GetNullifiersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.GetNullifiersResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'chain_id', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'contract_address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'nullifiers', kind: 'message', T: Nullifier, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNullifiersResponse {
    return new GetNullifiersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNullifiersResponse {
    return new GetNullifiersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNullifiersResponse {
    return new GetNullifiersResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetNullifiersResponse | PlainMessage<GetNullifiersResponse> | undefined,
    b: GetNullifiersResponse | PlainMessage<GetNullifiersResponse> | undefined,
  ): boolean {
    return proto3.util.equals(GetNullifiersResponse, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.HealthCheckRequest
 */
export class HealthCheckRequest extends Message<HealthCheckRequest> {
  constructor(data?: PartialMessage<HealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.HealthCheckRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined,
    b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined,
  ): boolean {
    return proto3.util.equals(HealthCheckRequest, a, b);
  }
}

/**
 * @generated from message mystiko.sequencer.v1.HealthCheckResponse
 */
export class HealthCheckResponse extends Message<HealthCheckResponse> {
  constructor(data?: PartialMessage<HealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.sequencer.v1.HealthCheckResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined,
    b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined,
  ): boolean {
    return proto3.util.equals(HealthCheckResponse, a, b);
  }
}
