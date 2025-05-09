// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/config/bridge/v1/bridge.proto (package mystiko.config.bridge.v1, syntax proto3)
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
import { BridgeType } from '../../../common/v1/types_pb.js';

/**
 * @generated from message mystiko.config.bridge.v1.BridgeConfig
 */
export class BridgeConfig extends Message<BridgeConfig> {
  /**
   * @generated from field: string name = 1;
   */
  name = '';

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 2;
   */
  bridgeType = BridgeType.UNSPECIFIED;

  /**
   * @generated from field: optional string explorer_url = 3;
   */
  explorerUrl?: string;

  /**
   * @generated from field: optional string explorer_prefix = 4;
   */
  explorerPrefix?: string;

  /**
   * @generated from field: optional string api_url = 5;
   */
  apiUrl?: string;

  /**
   * @generated from field: optional string api_prefix = 6;
   */
  apiPrefix?: string;

  constructor(data?: PartialMessage<BridgeConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.bridge.v1.BridgeConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'bridge_type', kind: 'enum', T: proto3.getEnumType(BridgeType) },
    { no: 3, name: 'explorer_url', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: 'explorer_prefix', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: 'api_url', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: 'api_prefix', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BridgeConfig {
    return new BridgeConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BridgeConfig {
    return new BridgeConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BridgeConfig {
    return new BridgeConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: BridgeConfig | PlainMessage<BridgeConfig> | undefined,
    b: BridgeConfig | PlainMessage<BridgeConfig> | undefined,
  ): boolean {
    return proto3.util.equals(BridgeConfig, a, b);
  }
}
