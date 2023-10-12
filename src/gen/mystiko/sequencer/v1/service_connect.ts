// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file mystiko/sequencer/v1/service.proto (package mystiko.sequencer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  ChainLoadedBlockRequest,
  ChainLoadedBlockResponse,
  ContractLoadedBlockRequest,
  ContractLoadedBlockResponse,
  FetchChainRequest,
  FetchChainResponse,
  GetCommitmentsRequest,
  GetCommitmentsResponse,
  GetNullifiersRequest,
  GetNullifiersResponse,
  HealthCheckRequest,
  HealthCheckResponse,
} from './service_pb.js';
import { MethodKind } from '@bufbuild/protobuf';

/**
 * @generated from service mystiko.sequencer.v1.SequencerService
 */
export const SequencerService = {
  typeName: 'mystiko.sequencer.v1.SequencerService',
  methods: {
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.FetchChain
     */
    fetchChain: {
      name: 'FetchChain',
      I: FetchChainRequest,
      O: FetchChainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.ChainLoadedBlock
     */
    chainLoadedBlock: {
      name: 'ChainLoadedBlock',
      I: ChainLoadedBlockRequest,
      O: ChainLoadedBlockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.ContractLoadedBlock
     */
    contractLoadedBlock: {
      name: 'ContractLoadedBlock',
      I: ContractLoadedBlockRequest,
      O: ContractLoadedBlockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.GetCommitments
     */
    getCommitments: {
      name: 'GetCommitments',
      I: GetCommitmentsRequest,
      O: GetCommitmentsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.GetNullifiers
     */
    getNullifiers: {
      name: 'GetNullifiers',
      I: GetNullifiersRequest,
      O: GetNullifiersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mystiko.sequencer.v1.SequencerService.HealthCheck
     */
    healthCheck: {
      name: 'HealthCheck',
      I: HealthCheckRequest,
      O: HealthCheckResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
