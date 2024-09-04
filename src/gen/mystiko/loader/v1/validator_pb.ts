// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/loader/v1/validator.proto (package mystiko.loader.v1, syntax proto3)
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
 * @generated from enum mystiko.loader.v1.ValidatorType
 */
export enum ValidatorType {
  /**
   * @generated from enum value: VALIDATOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: VALIDATOR_TYPE_RULE = 1;
   */
  RULE = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ValidatorType)
proto3.util.setEnumType(ValidatorType, 'mystiko.loader.v1.ValidatorType', [
  { no: 0, name: 'VALIDATOR_TYPE_UNSPECIFIED' },
  { no: 1, name: 'VALIDATOR_TYPE_RULE' },
]);

/**
 * @generated from enum mystiko.loader.v1.RuleValidatorCheckerType
 */
export enum RuleValidatorCheckerType {
  /**
   * @generated from enum value: RULE_VALIDATOR_CHECKER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RULE_VALIDATOR_CHECKER_TYPE_INTEGRITY = 1;
   */
  INTEGRITY = 1,

  /**
   * @generated from enum value: RULE_VALIDATOR_CHECKER_TYPE_SEQUENCE = 2;
   */
  SEQUENCE = 2,

  /**
   * @generated from enum value: RULE_VALIDATOR_CHECKER_TYPE_COUNTER = 3;
   */
  COUNTER = 3,

  /**
   * @generated from enum value: RULE_VALIDATOR_CHECKER_TYPE_TREE = 4;
   */
  TREE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(RuleValidatorCheckerType)
proto3.util.setEnumType(RuleValidatorCheckerType, 'mystiko.loader.v1.RuleValidatorCheckerType', [
  { no: 0, name: 'RULE_VALIDATOR_CHECKER_TYPE_UNSPECIFIED' },
  { no: 1, name: 'RULE_VALIDATOR_CHECKER_TYPE_INTEGRITY' },
  { no: 2, name: 'RULE_VALIDATOR_CHECKER_TYPE_SEQUENCE' },
  { no: 3, name: 'RULE_VALIDATOR_CHECKER_TYPE_COUNTER' },
  { no: 4, name: 'RULE_VALIDATOR_CHECKER_TYPE_TREE' },
]);

/**
 * @generated from message mystiko.loader.v1.ValidatorConfig
 */
export class ValidatorConfig extends Message<ValidatorConfig> {
  /**
   * @generated from field: optional mystiko.loader.v1.RuleValidatorConfig rule = 1;
   */
  rule?: RuleValidatorConfig;

  constructor(data?: PartialMessage<ValidatorConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.loader.v1.ValidatorConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'rule', kind: 'message', T: RuleValidatorConfig, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorConfig {
    return new ValidatorConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorConfig {
    return new ValidatorConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorConfig {
    return new ValidatorConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: ValidatorConfig | PlainMessage<ValidatorConfig> | undefined,
    b: ValidatorConfig | PlainMessage<ValidatorConfig> | undefined,
  ): boolean {
    return proto3.util.equals(ValidatorConfig, a, b);
  }
}

/**
 * @generated from message mystiko.loader.v1.RuleValidatorConfig
 */
export class RuleValidatorConfig extends Message<RuleValidatorConfig> {
  /**
   * @generated from field: map<uint32, mystiko.loader.v1.RuleValidatorCheckerType> checkers = 1;
   */
  checkers: { [key: number]: RuleValidatorCheckerType } = {};

  constructor(data?: PartialMessage<RuleValidatorConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.loader.v1.RuleValidatorConfig';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'checkers',
      kind: 'map',
      K: 13 /* ScalarType.UINT32 */,
      V: { kind: 'enum', T: proto3.getEnumType(RuleValidatorCheckerType) },
    },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RuleValidatorConfig {
    return new RuleValidatorConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RuleValidatorConfig {
    return new RuleValidatorConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RuleValidatorConfig {
    return new RuleValidatorConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: RuleValidatorConfig | PlainMessage<RuleValidatorConfig> | undefined,
    b: RuleValidatorConfig | PlainMessage<RuleValidatorConfig> | undefined,
  ): boolean {
    return proto3.util.equals(RuleValidatorConfig, a, b);
  }
}
