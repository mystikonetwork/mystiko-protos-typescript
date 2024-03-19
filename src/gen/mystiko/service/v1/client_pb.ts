// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/service/v1/client.proto (package mystiko.service.v1, syntax proto3)
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

/**
 * @generated from message mystiko.service.v1.ClientOptions
 */
export class ClientOptions extends Message<ClientOptions> {
  /**
   * @generated from field: optional string host = 1;
   */
  host?: string;

  /**
   * @generated from field: optional uint32 port = 2;
   */
  port?: number;

  /**
   * @generated from field: optional bool is_ssl = 3;
   */
  isSsl?: boolean;

  /**
   * @generated from field: optional string ssl_cert = 4;
   */
  sslCert?: string;

  /**
   * @generated from field: optional string ssl_cert_path = 5;
   */
  sslCertPath?: string;

  /**
   * @generated from field: optional string ssl_server_name = 6;
   */
  sslServerName?: string;

  constructor(data?: PartialMessage<ClientOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.service.v1.ClientOptions';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'host', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: 'port', kind: 'scalar', T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 3, name: 'is_ssl', kind: 'scalar', T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 4, name: 'ssl_cert', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: 'ssl_cert_path', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: 'ssl_server_name', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientOptions {
    return new ClientOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientOptions {
    return new ClientOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientOptions {
    return new ClientOptions().fromJsonString(jsonString, options);
  }

  static equals(
    a: ClientOptions | PlainMessage<ClientOptions> | undefined,
    b: ClientOptions | PlainMessage<ClientOptions> | undefined,
  ): boolean {
    return proto3.util.equals(ClientOptions, a, b);
  }
}
