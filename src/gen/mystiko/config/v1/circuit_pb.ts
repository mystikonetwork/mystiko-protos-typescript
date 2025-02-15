// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/config/v1/circuit.proto (package mystiko.config.v1, syntax proto3)
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
import { CircuitType } from '../../common/v1/types_pb.js';

/**
 * @generated from message mystiko.config.v1.CircuitConfig
 */
export class CircuitConfig extends Message<CircuitConfig> {
  /**
   * @generated from field: string name = 1;
   */
  name = '';

  /**
   * @generated from field: mystiko.common.v1.CircuitType circuit_type = 2;
   */
  circuitType = CircuitType.UNSPECIFIED;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault = false;

  /**
   * @generated from field: repeated string program_file = 4;
   */
  programFile: string[] = [];

  /**
   * @generated from field: repeated string abi_file = 5;
   */
  abiFile: string[] = [];

  /**
   * @generated from field: repeated string proving_key_file = 6;
   */
  provingKeyFile: string[] = [];

  /**
   * @generated from field: repeated string verifying_key_file = 7;
   */
  verifyingKeyFile: string[] = [];

  constructor(data?: PartialMessage<CircuitConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.config.v1.CircuitConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'circuit_type', kind: 'enum', T: proto3.getEnumType(CircuitType) },
    { no: 3, name: 'is_default', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: 'program_file', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: 'abi_file', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: 'proving_key_file', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: 'verifying_key_file', kind: 'scalar', T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CircuitConfig {
    return new CircuitConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CircuitConfig {
    return new CircuitConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CircuitConfig {
    return new CircuitConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: CircuitConfig | PlainMessage<CircuitConfig> | undefined,
    b: CircuitConfig | PlainMessage<CircuitConfig> | undefined,
  ): boolean {
    return proto3.util.equals(CircuitConfig, a, b);
  }
}
