// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/config/contract/v1/deposit.proto (package mystiko.config.contract.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { BridgeType, ContractType } from '../../../common/v1/types_pb';
import { file_mystiko_common_v1_types } from '../../../common/v1/types_pb';
import type { AssetConfig } from '../../v1/asset_pb';
import { file_mystiko_config_v1_asset } from '../../v1/asset_pb';
import type { PoolContractConfig } from './pool_pb';
import { file_mystiko_config_contract_v1_pool } from './pool_pb';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/config/contract/v1/deposit.proto.
 */
export const file_mystiko_config_contract_v1_deposit: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CihteXN0aWtvL2NvbmZpZy9jb250cmFjdC92MS9kZXBvc2l0LnByb3RvEhpteXN0aWtvLmNvbmZpZy5jb250cmFjdC52MSLMBgoVRGVwb3NpdENvbnRyYWN0Q29uZmlnEg8KB3ZlcnNpb24YASABKA0SDAoEbmFtZRgCIAEoCRIPCgdhZGRyZXNzGAMgASgJEhMKC3N0YXJ0X2Jsb2NrGAQgASgEEhAKCGRpc2FibGVkGAUgASgIEhIKCm1pbl9hbW91bnQYBiABKAkSEgoKbWF4X2Ftb3VudBgHIAEoCRJMChRwb29sX2NvbnRyYWN0X2NvbmZpZxgIIAEoCzIuLm15c3Rpa28uY29uZmlnLmNvbnRyYWN0LnYxLlBvb2xDb250cmFjdENvbmZpZxIyCgticmlkZ2VfdHlwZRgJIAEoDjIdLm15c3Rpa28uY29tbW9uLnYxLkJyaWRnZVR5cGUSNgoNY29udHJhY3RfdHlwZRgKIAEoDjIfLm15c3Rpa28uY29tbW9uLnYxLkNvbnRyYWN0VHlwZRIbCg5taW5fYnJpZGdlX2ZlZRgLIAEoCUgAiAEBEh0KEG1pbl9leGVjdXRvcl9mZWUYDCABKAlIAYgBARIYCgtzZXJ2aWNlX2ZlZRgNIAEoDUgCiAEBEiAKE3NlcnZpY2VfZmVlX2RpdmlkZXIYDiABKA1IA4gBARJEChdicmlkZ2VfZmVlX2Fzc2V0X2NvbmZpZxgPIAEoCzIeLm15c3Rpa28uY29uZmlnLnYxLkFzc2V0Q29uZmlnSASIAQESRgoZZXhlY3V0b3JfZmVlX2Fzc2V0X2NvbmZpZxgQIAEoCzIeLm15c3Rpa28uY29uZmlnLnYxLkFzc2V0Q29uZmlnSAWIAQESGgoNcGVlcl9jaGFpbl9pZBgRIAEoBEgGiAEBEiIKFXBlZXJfY29udHJhY3RfYWRkcmVzcxgSIAEoCUgHiAEBQhEKD19taW5fYnJpZGdlX2ZlZUITChFfbWluX2V4ZWN1dG9yX2ZlZUIOCgxfc2VydmljZV9mZWVCFgoUX3NlcnZpY2VfZmVlX2RpdmlkZXJCGgoYX2JyaWRnZV9mZWVfYXNzZXRfY29uZmlnQhwKGl9leGVjdXRvcl9mZWVfYXNzZXRfY29uZmlnQhAKDl9wZWVyX2NoYWluX2lkQhgKFl9wZWVyX2NvbnRyYWN0X2FkZHJlc3NCvQEKIm5ldHdvcmsubXlzdGlrby5jb25maWcuY29udHJhY3QudjFCDERlcG9zaXRQcm90b1ABogIDTUNDqgIaTXlzdGlrby5Db25maWcuQ29udHJhY3QuVjHKAhpNeXN0aWtvXENvbmZpZ1xDb250cmFjdFxWMeICJk15c3Rpa29cQ29uZmlnXENvbnRyYWN0XFYxXEdQQk1ldGFkYXRh6gIdTXlzdGlrbzo6Q29uZmlnOjpDb250cmFjdDo6VjFiBnByb3RvMw',
    [file_mystiko_common_v1_types, file_mystiko_config_v1_asset, file_mystiko_config_contract_v1_pool],
  );

/**
 * @generated from message mystiko.config.contract.v1.DepositContractConfig
 */
export type DepositContractConfig = Message<'mystiko.config.contract.v1.DepositContractConfig'> & {
  /**
   * @generated from field: uint32 version = 1;
   */
  version: number;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * @generated from field: uint64 start_block = 4;
   */
  startBlock: bigint;

  /**
   * @generated from field: bool disabled = 5;
   */
  disabled: boolean;

  /**
   * @generated from field: string min_amount = 6;
   */
  minAmount: string;

  /**
   * @generated from field: string max_amount = 7;
   */
  maxAmount: string;

  /**
   * @generated from field: mystiko.config.contract.v1.PoolContractConfig pool_contract_config = 8;
   */
  poolContractConfig?: PoolContractConfig;

  /**
   * @generated from field: mystiko.common.v1.BridgeType bridge_type = 9;
   */
  bridgeType: BridgeType;

  /**
   * @generated from field: mystiko.common.v1.ContractType contract_type = 10;
   */
  contractType: ContractType;

  /**
   * @generated from field: optional string min_bridge_fee = 11;
   */
  minBridgeFee?: string;

  /**
   * @generated from field: optional string min_executor_fee = 12;
   */
  minExecutorFee?: string;

  /**
   * @generated from field: optional uint32 service_fee = 13;
   */
  serviceFee?: number;

  /**
   * @generated from field: optional uint32 service_fee_divider = 14;
   */
  serviceFeeDivider?: number;

  /**
   * @generated from field: optional mystiko.config.v1.AssetConfig bridge_fee_asset_config = 15;
   */
  bridgeFeeAssetConfig?: AssetConfig;

  /**
   * @generated from field: optional mystiko.config.v1.AssetConfig executor_fee_asset_config = 16;
   */
  executorFeeAssetConfig?: AssetConfig;

  /**
   * @generated from field: optional uint64 peer_chain_id = 17;
   */
  peerChainId?: bigint;

  /**
   * @generated from field: optional string peer_contract_address = 18;
   */
  peerContractAddress?: string;
};

/**
 * Describes the message mystiko.config.contract.v1.DepositContractConfig.
 * Use `create(DepositContractConfigSchema)` to create a new message.
 */
export const DepositContractConfigSchema: GenMessage<DepositContractConfig> =
  /*@__PURE__*/
  messageDesc(file_mystiko_config_contract_v1_deposit, 0);
