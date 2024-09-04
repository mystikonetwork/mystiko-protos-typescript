// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/core/synchronizer/v1/reset.proto (package mystiko.core.synchronizer.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/core/synchronizer/v1/reset.proto.
 */
export const file_mystiko_core_synchronizer_v1_reset: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CihteXN0aWtvL2NvcmUvc3luY2hyb25pemVyL3YxL3Jlc2V0LnByb3RvEhxteXN0aWtvLmNvcmUuc3luY2hyb25pemVyLnYxIm0KEVJlc2V0Q2hhaW5PcHRpb25zEhAKCGNoYWluX2lkGAEgASgEEhoKEmNvbnRyYWN0X2FkZHJlc3NlcxgCIAMoCRIZCgxibG9ja19udW1iZXIYAyABKARIAIgBAUIPCg1fYmxvY2tfbnVtYmVyIlsKGFN5bmNocm9uaXplclJlc2V0T3B0aW9ucxI/CgZjaGFpbnMYASADKAsyLy5teXN0aWtvLmNvcmUuc3luY2hyb25pemVyLnYxLlJlc2V0Q2hhaW5PcHRpb25zQsUBCiRuZXR3b3JrLm15c3Rpa28uY29yZS5zeW5jaHJvbml6ZXIudjFCClJlc2V0UHJvdG9QAaICA01DU6oCHE15c3Rpa28uQ29yZS5TeW5jaHJvbml6ZXIuVjHKAhxNeXN0aWtvXENvcmVcU3luY2hyb25pemVyXFYx4gIoTXlzdGlrb1xDb3JlXFN5bmNocm9uaXplclxWMVxHUEJNZXRhZGF0YeoCH015c3Rpa286OkNvcmU6OlN5bmNocm9uaXplcjo6VjFiBnByb3RvMw',
  );

/**
 * @generated from message mystiko.core.synchronizer.v1.ResetChainOptions
 */
export type ResetChainOptions = Message<'mystiko.core.synchronizer.v1.ResetChainOptions'> & {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: repeated string contract_addresses = 2;
   */
  contractAddresses: string[];

  /**
   * @generated from field: optional uint64 block_number = 3;
   */
  blockNumber?: bigint;
};

/**
 * Describes the message mystiko.core.synchronizer.v1.ResetChainOptions.
 * Use `create(ResetChainOptionsSchema)` to create a new message.
 */
export const ResetChainOptionsSchema: GenMessage<ResetChainOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_synchronizer_v1_reset, 0);

/**
 * @generated from message mystiko.core.synchronizer.v1.SynchronizerResetOptions
 */
export type SynchronizerResetOptions = Message<'mystiko.core.synchronizer.v1.SynchronizerResetOptions'> & {
  /**
   * @generated from field: repeated mystiko.core.synchronizer.v1.ResetChainOptions chains = 1;
   */
  chains: ResetChainOptions[];
};

/**
 * Describes the message mystiko.core.synchronizer.v1.SynchronizerResetOptions.
 * Use `create(SynchronizerResetOptionsSchema)` to create a new message.
 */
export const SynchronizerResetOptionsSchema: GenMessage<SynchronizerResetOptions> =
  /*@__PURE__*/
  messageDesc(file_mystiko_core_synchronizer_v1_reset, 1);
