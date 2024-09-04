// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file mystiko/config/v1/provider.proto (package mystiko.config.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1';
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1';
import type { Message } from '@bufbuild/protobuf';

/**
 * Describes the file mystiko/config/v1/provider.proto.
 */
export const file_mystiko_config_v1_provider: GenFile =
  /*@__PURE__*/
  fileDesc(
    'CiBteXN0aWtvL2NvbmZpZy92MS9wcm92aWRlci5wcm90bxIRbXlzdGlrby5jb25maWcudjEiXwoOUHJvdmlkZXJDb25maWcSCwoDdXJsGAEgASgJEhIKCnRpbWVvdXRfbXMYAiABKA0SFQoNbWF4X3RyeV9jb3VudBgDIAEoDRIVCg1xdW9ydW1fd2VpZ2h0GAQgASgNQpABChluZXR3b3JrLm15c3Rpa28uY29uZmlnLnYxQg1Qcm92aWRlclByb3RvUAGiAgNNQ1iqAhFNeXN0aWtvLkNvbmZpZy5WMcoCEU15c3Rpa29cQ29uZmlnXFYx4gIdTXlzdGlrb1xDb25maWdcVjFcR1BCTWV0YWRhdGHqAhNNeXN0aWtvOjpDb25maWc6OlYxYgZwcm90bzM',
  );

/**
 * @generated from message mystiko.config.v1.ProviderConfig
 */
export type ProviderConfig = Message<'mystiko.config.v1.ProviderConfig'> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: uint32 timeout_ms = 2;
   */
  timeoutMs: number;

  /**
   * @generated from field: uint32 max_try_count = 3;
   */
  maxTryCount: number;

  /**
   * @generated from field: uint32 quorum_weight = 4;
   */
  quorumWeight: number;
};

/**
 * Describes the message mystiko.config.v1.ProviderConfig.
 * Use `create(ProviderConfigSchema)` to create a new message.
 */
export const ProviderConfigSchema: GenMessage<ProviderConfig> =
  /*@__PURE__*/
  messageDesc(file_mystiko_config_v1_provider, 0);
