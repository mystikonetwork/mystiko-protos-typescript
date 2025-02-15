// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/config/v1/packer.proto (package mystiko.config.v1, syntax proto3)
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
import { PackerChecksum, PackerCompression } from '../../core/v1/common_pb.js';

/**
 * @generated from message mystiko.config.v1.PackerConfig
 */
export class PackerConfig extends Message<PackerConfig> {
  /**
   * @generated from field: string url = 1;
   */
  url = '';

  /**
   * @generated from field: uint64 client_timeout_ms = 2;
   */
  clientTimeoutMs = protoInt64.zero;

  /**
   * @generated from field: uint32 version = 3;
   */
  version = 0;

  /**
   * @generated from field: mystiko.core.v1.PackerChecksum checksum = 4;
   */
  checksum = PackerChecksum.UNSPECIFIED;

  /**
   * @generated from field: mystiko.core.v1.PackerCompression compression = 5;
   */
  compression = PackerCompression.UNSPECIFIED;

  constructor(data?: PartialMessage<PackerConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.v1.PackerConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'client_timeout_ms', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'version', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: 'checksum', kind: 'enum', T: proto3.getEnumType(PackerChecksum) },
    { no: 5, name: 'compression', kind: 'enum', T: proto3.getEnumType(PackerCompression) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PackerConfig {
    return new PackerConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PackerConfig {
    return new PackerConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PackerConfig {
    return new PackerConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: PackerConfig | PlainMessage<PackerConfig> | undefined,
    b: PackerConfig | PlainMessage<PackerConfig> | undefined,
  ): boolean {
    return proto3.util.equals(PackerConfig, a, b);
  }
}
