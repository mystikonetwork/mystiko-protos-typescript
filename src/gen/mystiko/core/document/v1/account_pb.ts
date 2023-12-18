// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file mystiko/core/document/v1/account.proto (package mystiko.core.document.v1, syntax proto3)
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

/**
 * @generated from message mystiko.core.document.v1.Account
 */
export class Account extends Message<Account> {
  /**
   * @generated from field: string id = 1;
   */
  id = '';

  /**
   * @generated from field: uint64 created_at = 2;
   */
  createdAt = protoInt64.zero;

  /**
   * @generated from field: uint64 updated_at = 3;
   */
  updatedAt = protoInt64.zero;

  /**
   * @generated from field: string name = 4;
   */
  name = '';

  /**
   * @generated from field: string shielded_address = 5;
   */
  shieldedAddress = '';

  /**
   * @generated from field: string public_key = 6;
   */
  publicKey = '';

  /**
   * @generated from field: string encrypted_secret_key = 7;
   */
  encryptedSecretKey = '';

  /**
   * @generated from field: string wallet_id = 9;
   */
  walletId = '';

  /**
   * @generated from field: optional string scanned_to_id = 10;
   */
  scannedToId?: string;

  constructor(data?: PartialMessage<Account>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.core.document.v1.Account';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'created_at', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'updated_at', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: 'name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'shielded_address', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 6, name: 'public_key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'encrypted_secret_key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 9, name: 'wallet_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 10, name: 'scanned_to_id', kind: 'scalar', T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Account {
    return new Account().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Account {
    return new Account().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Account {
    return new Account().fromJsonString(jsonString, options);
  }

  static equals(
    a: Account | PlainMessage<Account> | undefined,
    b: Account | PlainMessage<Account> | undefined,
  ): boolean {
    return proto3.util.equals(Account, a, b);
  }
}
