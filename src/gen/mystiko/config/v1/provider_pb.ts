// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/config/v1/provider.proto (package mystiko.config.v1, syntax proto3)
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
 * @generated from message mystiko.config.v1.ProviderConfig
 */
export class ProviderConfig extends Message<ProviderConfig> {
  /**
   * @generated from field: string url = 1;
   */
  url = '';

  /**
   * @generated from field: uint32 timeout_ms = 2;
   */
  timeoutMs = 0;

  /**
   * @generated from field: uint32 max_try_count = 3;
   */
  maxTryCount = 0;

  /**
   * @generated from field: uint32 quorum_weight = 4;
   */
  quorumWeight = 0;

  constructor(data?: PartialMessage<ProviderConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.v1.ProviderConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'timeout_ms', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: 'max_try_count', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: 'quorum_weight', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderConfig {
    return new ProviderConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderConfig {
    return new ProviderConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderConfig {
    return new ProviderConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: ProviderConfig | PlainMessage<ProviderConfig> | undefined,
    b: ProviderConfig | PlainMessage<ProviderConfig> | undefined,
  ): boolean {
    return proto3.util.equals(ProviderConfig, a, b);
  }
}
