// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/core/document/v1/account.proto (package mystiko.core.document.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/core/document/v1/account.proto.
 */
export const file_mystiko_core_document_v1_account: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiZteXN0aWtvL2NvcmUvZG9jdW1lbnQvdjEvYWNjb3VudC5wcm90bxIYbXlzdGlrby5jb3JlLmRvY3VtZW50LnYxItgBCgdBY2NvdW50EgoKAmlkGAEgASgJEhIKCmNyZWF0ZWRfYXQYAiABKAQSEgoKdXBkYXRlZF9hdBgDIAEoBBIMCgRuYW1lGAQgASgJEhgKEHNoaWVsZGVkX2FkZHJlc3MYBSABKAkSEgoKcHVibGljX2tleRgGIAEoCRIcChRlbmNyeXB0ZWRfc2VjcmV0X2tleRgHIAEoCRIRCgl3YWxsZXRfaWQYCSABKAkSGgoNc2Nhbm5lZF90b19pZBgKIAEoCUgAiAEBQhAKDl9zY2FubmVkX3RvX2lkQrMBCiBuZXR3b3JrLm15c3Rpa28uY29yZS5kb2N1bWVudC52MUIMQWNjb3VudFByb3RvUAGiAgNNQ0SqAhhNeXN0aWtvLkNvcmUuRG9jdW1lbnQuVjHKAhhNeXN0aWtvXENvcmVcRG9jdW1lbnRcVjHiAiRNeXN0aWtvXENvcmVcRG9jdW1lbnRcVjFcR1BCTWV0YWRhdGHqAhtNeXN0aWtvOjpDb3JlOjpEb2N1bWVudDo6VjFiBnByb3RvMw',
  );

/**
 * @generated from message mystiko.core.document.v1.Account
 */
export type Account = Message<'mystiko.core.document.v1.Account'> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: uint64 created_at = 2;
   */
  createdAt: bigint;

  /**
   * @generated from field: uint64 updated_at = 3;
   */
  updatedAt: bigint;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string shielded_address = 5;
   */
  shieldedAddress: string;

  /**
   * @generated from field: string public_key = 6;
   */
  publicKey: string;

  /**
   * @generated from field: string encrypted_secret_key = 7;
   */
  encryptedSecretKey: string;

  /**
   * @generated from field: string wallet_id = 9;
   */
  walletId: string;

  /**
   * @generated from field: optional string scanned_to_id = 10;
   */
  scannedToId?: string;
};

/**
 * Describes the message mystiko.core.document.v1.Account.
 * Use `create(AccountSchema)` to create a new message.
 */
export const AccountSchema: GenMessage<Account> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_document_v1_account, 0);
