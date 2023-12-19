// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/api/handler/v1/deposit.proto (package mystiko.api.handler.v1, syntax proto3)
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
import {
  CreateDepositOptions,
  DepositQuote,
  DepositSummary,
  QuoteDepositOptions,
  SendDepositOptions,
} from '../../../core/handler/v1/deposit_pb.js';
import { ClientOptions } from '../../../service/v1/client_pb.js';
import { ColumnValue, QueryFilter } from '../../../storage/v1/filter_pb.js';
import { Deposit } from '../../../core/document/v1/deposit_pb.js';

/**
 * @generated from message mystiko.api.handler.v1.QuoteRequest
 */
export class QuoteRequest extends Message<QuoteRequest> {
  /**
   * @generated from field: mystiko.core.handler.v1.QuoteDepositOptions options = 1;
   */
  options?: QuoteDepositOptions;

  constructor(data?: PartialMessage<QuoteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.QuoteRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: QuoteDepositOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteRequest {
    return new QuoteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteRequest {
    return new QuoteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteRequest {
    return new QuoteRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: QuoteRequest | PlainMessage<QuoteRequest> | undefined,
    b: QuoteRequest | PlainMessage<QuoteRequest> | undefined,
  ): boolean {
    return proto3.util.equals(QuoteRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.SummaryRequest
 */
export class SummaryRequest extends Message<SummaryRequest> {
  /**
   * @generated from field: mystiko.core.handler.v1.CreateDepositOptions options = 1;
   */
  options?: CreateDepositOptions;

  constructor(data?: PartialMessage<SummaryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.SummaryRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: CreateDepositOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SummaryRequest {
    return new SummaryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SummaryRequest {
    return new SummaryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SummaryRequest {
    return new SummaryRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SummaryRequest | PlainMessage<SummaryRequest> | undefined,
    b: SummaryRequest | PlainMessage<SummaryRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SummaryRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.CreateDepositRequest
 */
export class CreateDepositRequest extends Message<CreateDepositRequest> {
  /**
   * @generated from field: mystiko.core.handler.v1.CreateDepositOptions options = 1;
   */
  options?: CreateDepositOptions;

  constructor(data?: PartialMessage<CreateDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.CreateDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: CreateDepositOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDepositRequest {
    return new CreateDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDepositRequest {
    return new CreateDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDepositRequest {
    return new CreateDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateDepositRequest | PlainMessage<CreateDepositRequest> | undefined,
    b: CreateDepositRequest | PlainMessage<CreateDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(CreateDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.SendRequest
 */
export class SendRequest extends Message<SendRequest> {
  /**
   * @generated from field: mystiko.core.handler.v1.SendDepositOptions options = 1;
   */
  options?: SendDepositOptions;

  constructor(data?: PartialMessage<SendRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.SendRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'options', kind: 'message', T: SendDepositOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendRequest {
    return new SendRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendRequest {
    return new SendRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendRequest {
    return new SendRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SendRequest | PlainMessage<SendRequest> | undefined,
    b: SendRequest | PlainMessage<SendRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SendRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.SendWithGrpcRequest
 */
export class SendWithGrpcRequest extends Message<SendWithGrpcRequest> {
  /**
   * @generated from field: mystiko.core.handler.v1.SendDepositOptions send_options = 1;
   */
  sendOptions?: SendDepositOptions;

  /**
   * @generated from field: mystiko.service.v1.ClientOptions client_options = 2;
   */
  clientOptions?: ClientOptions;

  constructor(data?: PartialMessage<SendWithGrpcRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.SendWithGrpcRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'send_options', kind: 'message', T: SendDepositOptions },
    { no: 2, name: 'client_options', kind: 'message', T: ClientOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendWithGrpcRequest {
    return new SendWithGrpcRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendWithGrpcRequest {
    return new SendWithGrpcRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendWithGrpcRequest {
    return new SendWithGrpcRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SendWithGrpcRequest | PlainMessage<SendWithGrpcRequest> | undefined,
    b: SendWithGrpcRequest | PlainMessage<SendWithGrpcRequest> | undefined,
  ): boolean {
    return proto3.util.equals(SendWithGrpcRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.FindDepositRequest
 */
export class FindDepositRequest extends Message<FindDepositRequest> {
  /**
   * @generated from field: mystiko.storage.v1.QueryFilter filter = 1;
   */
  filter?: QueryFilter;

  constructor(data?: PartialMessage<FindDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.FindDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'filter', kind: 'message', T: QueryFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindDepositRequest {
    return new FindDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindDepositRequest {
    return new FindDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindDepositRequest {
    return new FindDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDepositRequest | PlainMessage<FindDepositRequest> | undefined,
    b: FindDepositRequest | PlainMessage<FindDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.FindDepositByIdRequest
 */
export class FindDepositByIdRequest extends Message<FindDepositByIdRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  constructor(data?: PartialMessage<FindDepositByIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.FindDepositByIdRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindDepositByIdRequest {
    return new FindDepositByIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindDepositByIdRequest {
    return new FindDepositByIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindDepositByIdRequest {
    return new FindDepositByIdRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDepositByIdRequest | PlainMessage<FindDepositByIdRequest> | undefined,
    b: FindDepositByIdRequest | PlainMessage<FindDepositByIdRequest> | undefined,
  ): boolean {
    return proto3.util.equals(FindDepositByIdRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.CountDepositRequest
 */
export class CountDepositRequest extends Message<CountDepositRequest> {
  /**
   * @generated from field: mystiko.storage.v1.QueryFilter filter = 1;
   */
  filter?: QueryFilter;

  constructor(data?: PartialMessage<CountDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.CountDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'filter', kind: 'message', T: QueryFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountDepositRequest {
    return new CountDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountDepositRequest {
    return new CountDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountDepositRequest {
    return new CountDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: CountDepositRequest | PlainMessage<CountDepositRequest> | undefined,
    b: CountDepositRequest | PlainMessage<CountDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(CountDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateDepositRequest
 */
export class UpdateDepositRequest extends Message<UpdateDepositRequest> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<UpdateDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDepositRequest {
    return new UpdateDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDepositRequest {
    return new UpdateDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDepositRequest {
    return new UpdateDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateDepositRequest | PlainMessage<UpdateDepositRequest> | undefined,
    b: UpdateDepositRequest | PlainMessage<UpdateDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateDepositBatchRequest
 */
export class UpdateDepositBatchRequest extends Message<UpdateDepositBatchRequest> {
  /**
   * @generated from field: repeated mystiko.core.document.v1.Deposit deposits = 1;
   */
  deposits: Deposit[] = [];

  constructor(data?: PartialMessage<UpdateDepositBatchRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateDepositBatchRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposits', kind: 'message', T: Deposit, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDepositBatchRequest {
    return new UpdateDepositBatchRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDepositBatchRequest {
    return new UpdateDepositBatchRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDepositBatchRequest {
    return new UpdateDepositBatchRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateDepositBatchRequest | PlainMessage<UpdateDepositBatchRequest> | undefined,
    b: UpdateDepositBatchRequest | PlainMessage<UpdateDepositBatchRequest> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateDepositBatchRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateDepositByFilterRequest
 */
export class UpdateDepositByFilterRequest extends Message<UpdateDepositByFilterRequest> {
  /**
   * @generated from field: repeated mystiko.api.handler.v1.ColumnValuePair column_values = 1;
   */
  columnValues: ColumnValuePair[] = [];

  /**
   * @generated from field: mystiko.storage.v1.QueryFilter filter = 2;
   */
  filter?: QueryFilter;

  constructor(data?: PartialMessage<UpdateDepositByFilterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateDepositByFilterRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'column_values', kind: 'message', T: ColumnValuePair, repeated: true },
    { no: 2, name: 'filter', kind: 'message', T: QueryFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDepositByFilterRequest {
    return new UpdateDepositByFilterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDepositByFilterRequest {
    return new UpdateDepositByFilterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UpdateDepositByFilterRequest {
    return new UpdateDepositByFilterRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateDepositByFilterRequest | PlainMessage<UpdateDepositByFilterRequest> | undefined,
    b: UpdateDepositByFilterRequest | PlainMessage<UpdateDepositByFilterRequest> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateDepositByFilterRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateAllDepositRequest
 */
export class UpdateAllDepositRequest extends Message<UpdateAllDepositRequest> {
  /**
   * @generated from field: repeated mystiko.api.handler.v1.ColumnValuePair column_values = 1;
   */
  columnValues: ColumnValuePair[] = [];

  constructor(data?: PartialMessage<UpdateAllDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateAllDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'column_values', kind: 'message', T: ColumnValuePair, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAllDepositRequest {
    return new UpdateAllDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAllDepositRequest {
    return new UpdateAllDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAllDepositRequest {
    return new UpdateAllDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateAllDepositRequest | PlainMessage<UpdateAllDepositRequest> | undefined,
    b: UpdateAllDepositRequest | PlainMessage<UpdateAllDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateAllDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.DeleteDepositRequest
 */
export class DeleteDepositRequest extends Message<DeleteDepositRequest> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<DeleteDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.DeleteDepositRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDepositRequest {
    return new DeleteDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDepositRequest {
    return new DeleteDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDepositRequest {
    return new DeleteDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeleteDepositRequest | PlainMessage<DeleteDepositRequest> | undefined,
    b: DeleteDepositRequest | PlainMessage<DeleteDepositRequest> | undefined,
  ): boolean {
    return proto3.util.equals(DeleteDepositRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.DeleteDepositBatchRequest
 */
export class DeleteDepositBatchRequest extends Message<DeleteDepositBatchRequest> {
  /**
   * @generated from field: repeated mystiko.core.document.v1.Deposit deposits = 1;
   */
  deposits: Deposit[] = [];

  constructor(data?: PartialMessage<DeleteDepositBatchRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.DeleteDepositBatchRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposits', kind: 'message', T: Deposit, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDepositBatchRequest {
    return new DeleteDepositBatchRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDepositBatchRequest {
    return new DeleteDepositBatchRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDepositBatchRequest {
    return new DeleteDepositBatchRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeleteDepositBatchRequest | PlainMessage<DeleteDepositBatchRequest> | undefined,
    b: DeleteDepositBatchRequest | PlainMessage<DeleteDepositBatchRequest> | undefined,
  ): boolean {
    return proto3.util.equals(DeleteDepositBatchRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.DeleteDepositByFilterRequest
 */
export class DeleteDepositByFilterRequest extends Message<DeleteDepositByFilterRequest> {
  /**
   * @generated from field: mystiko.storage.v1.QueryFilter filter = 1;
   */
  filter?: QueryFilter;

  constructor(data?: PartialMessage<DeleteDepositByFilterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.DeleteDepositByFilterRequest';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'filter', kind: 'message', T: QueryFilter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDepositByFilterRequest {
    return new DeleteDepositByFilterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDepositByFilterRequest {
    return new DeleteDepositByFilterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): DeleteDepositByFilterRequest {
    return new DeleteDepositByFilterRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: DeleteDepositByFilterRequest | PlainMessage<DeleteDepositByFilterRequest> | undefined,
    b: DeleteDepositByFilterRequest | PlainMessage<DeleteDepositByFilterRequest> | undefined,
  ): boolean {
    return proto3.util.equals(DeleteDepositByFilterRequest, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.QuoteResponse
 */
export class QuoteResponse extends Message<QuoteResponse> {
  /**
   * @generated from field: mystiko.core.handler.v1.DepositQuote quote = 1;
   */
  quote?: DepositQuote;

  constructor(data?: PartialMessage<QuoteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.QuoteResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'quote', kind: 'message', T: DepositQuote },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteResponse {
    return new QuoteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteResponse {
    return new QuoteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteResponse {
    return new QuoteResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: QuoteResponse | PlainMessage<QuoteResponse> | undefined,
    b: QuoteResponse | PlainMessage<QuoteResponse> | undefined,
  ): boolean {
    return proto3.util.equals(QuoteResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.SummaryResponse
 */
export class SummaryResponse extends Message<SummaryResponse> {
  /**
   * @generated from field: mystiko.core.handler.v1.DepositSummary summary = 1;
   */
  summary?: DepositSummary;

  constructor(data?: PartialMessage<SummaryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.SummaryResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'summary', kind: 'message', T: DepositSummary },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SummaryResponse {
    return new SummaryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SummaryResponse {
    return new SummaryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SummaryResponse {
    return new SummaryResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: SummaryResponse | PlainMessage<SummaryResponse> | undefined,
    b: SummaryResponse | PlainMessage<SummaryResponse> | undefined,
  ): boolean {
    return proto3.util.equals(SummaryResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.CreateDepositResponse
 */
export class CreateDepositResponse extends Message<CreateDepositResponse> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<CreateDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.CreateDepositResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDepositResponse {
    return new CreateDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDepositResponse {
    return new CreateDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDepositResponse {
    return new CreateDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: CreateDepositResponse | PlainMessage<CreateDepositResponse> | undefined,
    b: CreateDepositResponse | PlainMessage<CreateDepositResponse> | undefined,
  ): boolean {
    return proto3.util.equals(CreateDepositResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.SendResponse
 */
export class SendResponse extends Message<SendResponse> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<SendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.SendResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResponse {
    return new SendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResponse {
    return new SendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResponse {
    return new SendResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: SendResponse | PlainMessage<SendResponse> | undefined,
    b: SendResponse | PlainMessage<SendResponse> | undefined,
  ): boolean {
    return proto3.util.equals(SendResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.FindDepositResponse
 */
export class FindDepositResponse extends Message<FindDepositResponse> {
  /**
   * @generated from field: repeated mystiko.core.document.v1.Deposit deposits = 1;
   */
  deposits: Deposit[] = [];

  constructor(data?: PartialMessage<FindDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.FindDepositResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposits', kind: 'message', T: Deposit, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindDepositResponse {
    return new FindDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindDepositResponse {
    return new FindDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindDepositResponse {
    return new FindDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindDepositResponse | PlainMessage<FindDepositResponse> | undefined,
    b: FindDepositResponse | PlainMessage<FindDepositResponse> | undefined,
  ): boolean {
    return proto3.util.equals(FindDepositResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.FindOneDepositResponse
 */
export class FindOneDepositResponse extends Message<FindOneDepositResponse> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<FindOneDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.FindOneDepositResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FindOneDepositResponse {
    return new FindOneDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FindOneDepositResponse {
    return new FindOneDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FindOneDepositResponse {
    return new FindOneDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: FindOneDepositResponse | PlainMessage<FindOneDepositResponse> | undefined,
    b: FindOneDepositResponse | PlainMessage<FindOneDepositResponse> | undefined,
  ): boolean {
    return proto3.util.equals(FindOneDepositResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.CountDepositResponse
 */
export class CountDepositResponse extends Message<CountDepositResponse> {
  /**
   * @generated from field: uint64 count = 1;
   */
  count = protoInt64.zero;

  constructor(data?: PartialMessage<CountDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.CountDepositResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'count', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountDepositResponse {
    return new CountDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountDepositResponse {
    return new CountDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountDepositResponse {
    return new CountDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: CountDepositResponse | PlainMessage<CountDepositResponse> | undefined,
    b: CountDepositResponse | PlainMessage<CountDepositResponse> | undefined,
  ): boolean {
    return proto3.util.equals(CountDepositResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateDepositResponse
 */
export class UpdateDepositResponse extends Message<UpdateDepositResponse> {
  /**
   * @generated from field: mystiko.core.document.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<UpdateDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateDepositResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposit', kind: 'message', T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDepositResponse {
    return new UpdateDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDepositResponse {
    return new UpdateDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDepositResponse {
    return new UpdateDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateDepositResponse | PlainMessage<UpdateDepositResponse> | undefined,
    b: UpdateDepositResponse | PlainMessage<UpdateDepositResponse> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateDepositResponse, a, b);
  }
}

/**
 * @generated from message mystiko.api.handler.v1.UpdateDepositBatchResponse
 */
export class UpdateDepositBatchResponse extends Message<UpdateDepositBatchResponse> {
  /**
   * @generated from field: repeated mystiko.core.document.v1.Deposit deposits = 1;
   */
  deposits: Deposit[] = [];

  constructor(data?: PartialMessage<UpdateDepositBatchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.UpdateDepositBatchResponse';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'deposits', kind: 'message', T: Deposit, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDepositBatchResponse {
    return new UpdateDepositBatchResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDepositBatchResponse {
    return new UpdateDepositBatchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDepositBatchResponse {
    return new UpdateDepositBatchResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: UpdateDepositBatchResponse | PlainMessage<UpdateDepositBatchResponse> | undefined,
    b: UpdateDepositBatchResponse | PlainMessage<UpdateDepositBatchResponse> | undefined,
  ): boolean {
    return proto3.util.equals(UpdateDepositBatchResponse, a, b);
  }
}

/**
 * column value
 *
 * @generated from message mystiko.api.handler.v1.ColumnValuePair
 */
export class ColumnValuePair extends Message<ColumnValuePair> {
  /**
   * @generated from field: string column = 1;
   */
  column = '';

  /**
   * @generated from field: mystiko.storage.v1.ColumnValue value = 2;
   */
  value?: ColumnValue;

  constructor(data?: PartialMessage<ColumnValuePair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.api.handler.v1.ColumnValuePair';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'column', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'value', kind: 'message', T: ColumnValue },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ColumnValuePair {
    return new ColumnValuePair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ColumnValuePair {
    return new ColumnValuePair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ColumnValuePair {
    return new ColumnValuePair().fromJsonString(jsonString, options);
  }

  static equals(
    a: ColumnValuePair | PlainMessage<ColumnValuePair> | undefined,
    b: ColumnValuePair | PlainMessage<ColumnValuePair> | undefined,
  ): boolean {
    return proto3.util.equals(ColumnValuePair, a, b);
  }
}
