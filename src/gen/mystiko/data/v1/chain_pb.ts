// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file mystiko/data/v1/chain.proto (package mystiko.data.v1, syntax proto3)
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
import { ContractData } from './contract_pb.js';

/**
 * @generated from message mystiko.data.v1.ChainData
 */
export class ChainData extends Message<ChainData> {
  /**
   * @generated from field: uint64 start_block = 1;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: uint64 end_block = 2;
   */
  endBlock = protoInt64.zero;

  /**
   * @generated from field: repeated mystiko.data.v1.ContractData contract_data = 3;
   */
  contractData: ContractData[] = [];

  constructor(data?: PartialMessage<ChainData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = 'mystiko.data.v1.ChainData';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'start_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'end_block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: 'contract_data', kind: 'message', T: ContractData, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainData {
    return new ChainData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainData {
    return new ChainData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainData {
    return new ChainData().fromJsonString(jsonString, options);
  }

  static equals(
    a: ChainData | PlainMessage<ChainData> | undefined,
    b: ChainData | PlainMessage<ChainData> | undefined,
  ): boolean {
    return proto3.util.equals(ChainData, a, b);
  }
}
