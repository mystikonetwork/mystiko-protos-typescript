// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file mystiko/data/v1/merkle.proto (package mystiko.data.v1, syntax proto3)
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
 * @generated from message mystiko.data.v1.MerkleTree
 */
export class MerkleTree extends Message<MerkleTree> {
  /**
   * @generated from field: uint64 loaded_block_number = 1;
   */
  loadedBlockNumber = protoInt64.zero;

  /**
   * @generated from field: bytes root_hash = 2;
   */
  rootHash = new Uint8Array(0);

  /**
   * @generated from field: repeated bytes commitment_hashes = 3;
   */
  commitmentHashes: Uint8Array[] = [];

  constructor(data?: PartialMessage<MerkleTree>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.data.v1.MerkleTree';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'loaded_block_number', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'root_hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: 'commitment_hashes', kind: 'scalar', T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerkleTree {
    return new MerkleTree().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerkleTree {
    return new MerkleTree().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerkleTree {
    return new MerkleTree().fromJsonString(jsonString, options);
  }

  static equals(
    a: MerkleTree | PlainMessage<MerkleTree> | undefined,
    b: MerkleTree | PlainMessage<MerkleTree> | undefined,
  ): boolean {
    return proto3.util.equals(MerkleTree, a, b);
  }
}
