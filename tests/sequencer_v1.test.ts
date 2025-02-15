import { data, sequencer } from '../src';

const { Commitment, CommitmentStatus, Nullifier } = data.v1;

const {
  GetCommitmentsRequest,
  GetCommitmentsByTxHashRequest,
  GetCommitmentsResponse,
  GetCommitmentsByTxHashResponse,
  GetCommitmentHashesRequest,
  GetCommitmentHashesResponse,
  GetNullifiersRequest,
  GetNullifiersByTxHashRequest,
  GetNullifiersResponse,
  GetNullifiersByTxHashResponse,
  ChainLoadedBlockRequest,
  ChainLoadedBlockResponse,
  ContractLoadedBlockRequest,
  ContractLoadedBlockResponse,
  FetchChainRequest,
  FetchChainResponse,
  FetchContractRequest,
  FetchContractResponse,
  HealthCheckRequest,
  HealthCheckResponse,
} = sequencer.v1;

test('test serde', () => {
  const chainLoadedBlockRequest = new ChainLoadedBlockRequest({
    chainId: BigInt(1),
    withContracts: true,
  });
  const chainLoadedBlockResponse = new ChainLoadedBlockResponse({
    blockNumber: BigInt(100000000),
    contracts: [],
  });
  const contractLoadedBlockRequest = new ContractLoadedBlockRequest({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
  });
  const contractLoadedBlockResponse = new ContractLoadedBlockResponse({
    blockNumber: BigInt(100000000),
  });
  const fetchContractRequest = new FetchContractRequest({
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    startBlock: BigInt(100000000),
    targetBlock: BigInt(100000001),
  });
  const fetchChainRequest = new FetchChainRequest({
    chainId: BigInt(1),
    startBlock: BigInt(100000000),
    targetBlock: BigInt(100000001),
    contracts: [fetchContractRequest],
  });
  const fetchContractResponse = new FetchContractResponse({
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    startBlock: BigInt(100000000),
    endBlock: BigInt(100000001),
    commitments: [
      new Commitment({
        commitmentHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
        status: CommitmentStatus.QUEUED,
        blockNumber: BigInt(10001),
        includedBlockNumber: BigInt(10002),
        srcChainBlockNumber: BigInt(20001),
        leafIndex: BigInt(0),
        rollupFee: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        encryptedNote: new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xba, 0xbe]),
        queuedTransactionHash: new Uint8Array([0xde, 0xad]),
        includedTransactionHash: new Uint8Array([0xbe, 0xef]),
        srcChainTransactionHash: new Uint8Array([0xba, 0xbe]),
      }),
    ],
    nullifiers: [
      new Nullifier({
        nullifier: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        blockNumber: BigInt(10003),
        transactionHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
      }),
    ],
  });
  const fetchChainResponse = new FetchChainResponse({
    chainId: BigInt(1),
    contracts: [fetchContractResponse],
  });
  const getCommitmentsRequest = new GetCommitmentsRequest({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    commitmentHashes: [new Uint8Array([0xba, 0xad, 0xba, 0xbe])],
  });
  const getCommitmentsResponse = new GetCommitmentsResponse({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    commitments: [
      new Commitment({
        commitmentHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
        status: CommitmentStatus.QUEUED,
        blockNumber: BigInt(10001),
        includedBlockNumber: BigInt(10002),
        srcChainBlockNumber: BigInt(20001),
        leafIndex: BigInt(0),
        rollupFee: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        encryptedNote: new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xba, 0xbe]),
        queuedTransactionHash: new Uint8Array([0xde, 0xad]),
        includedTransactionHash: new Uint8Array([0xbe, 0xef]),
        srcChainTransactionHash: new Uint8Array([0xba, 0xbe]),
      }),
    ],
  });
  const getCommitmentsByTxHashRequest = new GetCommitmentsByTxHashRequest({
    chainId: BigInt(1),
    txHash: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
  });
  const getCommitmentsByTxHashResponse = new GetCommitmentsByTxHashResponse({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    commitments: [
      new Commitment({
        commitmentHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
        status: CommitmentStatus.QUEUED,
        blockNumber: BigInt(10001),
        includedBlockNumber: BigInt(10002),
        srcChainBlockNumber: BigInt(20001),
        leafIndex: BigInt(0),
        rollupFee: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        encryptedNote: new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xba, 0xbe]),
        queuedTransactionHash: new Uint8Array([0xde, 0xad]),
        includedTransactionHash: new Uint8Array([0xbe, 0xef]),
        srcChainTransactionHash: new Uint8Array([0xba, 0xbe]),
      }),
    ],
  });
  const getCommitmentHashesRequest = new GetCommitmentHashesRequest({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    status: CommitmentStatus.INCLUDED,
    fromLeafIndex: BigInt(0),
    toLeafIndex: BigInt(1),
  });
  const getCommitmentHashesResponse = new GetCommitmentHashesResponse({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    commitmentHashes: [new Uint8Array([0xba, 0xad, 0xba, 0xbe])],
    fromLeafIndex: BigInt(0),
    toLeafIndex: BigInt(1),
  });
  const getNullifierRequest = new GetNullifiersRequest({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    nullifierHashes: [new Uint8Array([0xba, 0xad, 0xba, 0xbe])],
  });
  const getNullifierResponse = new GetNullifiersResponse({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    nullifiers: [
      new Nullifier({
        nullifier: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        blockNumber: BigInt(10003),
        transactionHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
      }),
    ],
  });
  const getNullifiesByTxHashRequest = new GetNullifiersByTxHashRequest({
    chainId: BigInt(1),
    txHash: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
  });
  const getNullifiersByTxHashResponse = new GetNullifiersByTxHashResponse({
    chainId: BigInt(1),
    contractAddress: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    nullifiers: [
      new Nullifier({
        nullifier: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
        blockNumber: BigInt(10003),
        transactionHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
      }),
    ],
  });
  const healthCheckRequest = new HealthCheckRequest({});
  const healthCheckResponse = new HealthCheckResponse({});

  expect(
    ChainLoadedBlockRequest.equals(
      ChainLoadedBlockRequest.fromJson(chainLoadedBlockRequest.toJson()),
      chainLoadedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ChainLoadedBlockRequest.equals(
      ChainLoadedBlockRequest.fromJsonString(chainLoadedBlockRequest.toJsonString()),
      chainLoadedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ChainLoadedBlockRequest.equals(
      ChainLoadedBlockRequest.fromBinary(chainLoadedBlockRequest.toBinary()),
      chainLoadedBlockRequest,
    ),
  ).toBe(true);

  expect(
    ChainLoadedBlockResponse.equals(
      ChainLoadedBlockResponse.fromJson(chainLoadedBlockResponse.toJson()),
      chainLoadedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ChainLoadedBlockResponse.equals(
      ChainLoadedBlockResponse.fromJsonString(chainLoadedBlockResponse.toJsonString()),
      chainLoadedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ChainLoadedBlockResponse.equals(
      ChainLoadedBlockResponse.fromBinary(chainLoadedBlockResponse.toBinary()),
      chainLoadedBlockResponse,
    ),
  ).toBe(true);

  expect(
    ContractLoadedBlockRequest.equals(
      ContractLoadedBlockRequest.fromJson(contractLoadedBlockRequest.toJson()),
      contractLoadedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ContractLoadedBlockRequest.equals(
      ContractLoadedBlockRequest.fromJsonString(contractLoadedBlockRequest.toJsonString()),
      contractLoadedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ContractLoadedBlockRequest.equals(
      ContractLoadedBlockRequest.fromBinary(contractLoadedBlockRequest.toBinary()),
      contractLoadedBlockRequest,
    ),
  ).toBe(true);

  expect(
    ContractLoadedBlockResponse.equals(
      ContractLoadedBlockResponse.fromJson(contractLoadedBlockResponse.toJson()),
      contractLoadedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ContractLoadedBlockResponse.equals(
      ContractLoadedBlockResponse.fromJsonString(contractLoadedBlockResponse.toJsonString()),
      contractLoadedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ContractLoadedBlockResponse.equals(
      ContractLoadedBlockResponse.fromBinary(contractLoadedBlockResponse.toBinary()),
      contractLoadedBlockResponse,
    ),
  ).toBe(true);

  expect(
    FetchContractRequest.equals(
      FetchContractRequest.fromJson(fetchContractRequest.toJson()),
      fetchContractRequest,
    ),
  ).toBe(true);
  expect(
    FetchContractRequest.equals(
      FetchContractRequest.fromJsonString(fetchContractRequest.toJsonString()),
      fetchContractRequest,
    ),
  ).toBe(true);
  expect(
    FetchContractRequest.equals(
      FetchContractRequest.fromBinary(fetchContractRequest.toBinary()),
      fetchContractRequest,
    ),
  ).toBe(true);

  expect(
    FetchContractResponse.equals(
      FetchContractResponse.fromJson(fetchContractResponse.toJson()),
      fetchContractResponse,
    ),
  ).toBe(true);
  expect(
    FetchContractResponse.equals(
      FetchContractResponse.fromJsonString(fetchContractResponse.toJsonString()),
      fetchContractResponse,
    ),
  ).toBe(true);
  expect(
    FetchContractResponse.equals(
      FetchContractResponse.fromBinary(fetchContractResponse.toBinary()),
      fetchContractResponse,
    ),
  ).toBe(true);

  expect(
    FetchChainRequest.equals(FetchChainRequest.fromJson(fetchChainRequest.toJson()), fetchChainRequest),
  ).toBe(true);
  expect(
    FetchChainRequest.equals(
      FetchChainRequest.fromJsonString(fetchChainRequest.toJsonString()),
      fetchChainRequest,
    ),
  ).toBe(true);
  expect(
    FetchChainRequest.equals(FetchChainRequest.fromBinary(fetchChainRequest.toBinary()), fetchChainRequest),
  ).toBe(true);

  expect(
    FetchChainResponse.equals(FetchChainResponse.fromJson(fetchChainResponse.toJson()), fetchChainResponse),
  ).toBe(true);
  expect(
    FetchChainResponse.equals(
      FetchChainResponse.fromJsonString(fetchChainResponse.toJsonString()),
      fetchChainResponse,
    ),
  ).toBe(true);
  expect(
    FetchChainResponse.equals(
      FetchChainResponse.fromBinary(fetchChainResponse.toBinary()),
      fetchChainResponse,
    ),
  ).toBe(true);

  expect(
    GetCommitmentsRequest.equals(
      GetCommitmentsRequest.fromJson(getCommitmentsRequest.toJson()),
      getCommitmentsRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsRequest.equals(
      GetCommitmentsRequest.fromJsonString(getCommitmentsRequest.toJsonString()),
      getCommitmentsRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsRequest.equals(
      GetCommitmentsRequest.fromBinary(getCommitmentsRequest.toBinary()),
      getCommitmentsRequest,
    ),
  ).toBe(true);

  expect(
    GetCommitmentsResponse.equals(
      GetCommitmentsResponse.fromJson(getCommitmentsResponse.toJson()),
      getCommitmentsResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsResponse.equals(
      GetCommitmentsResponse.fromJsonString(getCommitmentsResponse.toJsonString()),
      getCommitmentsResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsResponse.equals(
      GetCommitmentsResponse.fromBinary(getCommitmentsResponse.toBinary()),
      getCommitmentsResponse,
    ),
  ).toBe(true);

  expect(
    GetCommitmentsByTxHashRequest.equals(
      GetCommitmentsByTxHashRequest.fromJson(getCommitmentsByTxHashRequest.toJson()),
      getCommitmentsByTxHashRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsByTxHashRequest.equals(
      GetCommitmentsByTxHashRequest.fromJsonString(getCommitmentsByTxHashRequest.toJsonString()),
      getCommitmentsByTxHashRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsByTxHashRequest.equals(
      GetCommitmentsByTxHashRequest.fromBinary(getCommitmentsByTxHashRequest.toBinary()),
      getCommitmentsByTxHashRequest,
    ),
  ).toBe(true);

  expect(
    GetCommitmentsByTxHashResponse.equals(
      GetCommitmentsByTxHashResponse.fromJson(getCommitmentsByTxHashResponse.toJson()),
      getCommitmentsByTxHashResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsByTxHashResponse.equals(
      GetCommitmentsByTxHashResponse.fromJsonString(getCommitmentsByTxHashResponse.toJsonString()),
      getCommitmentsByTxHashResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentsByTxHashResponse.equals(
      GetCommitmentsByTxHashResponse.fromBinary(getCommitmentsByTxHashResponse.toBinary()),
      getCommitmentsByTxHashResponse,
    ),
  ).toBe(true);

  expect(
    GetCommitmentHashesRequest.equals(
      GetCommitmentHashesRequest.fromJson(getCommitmentHashesRequest.toJson()),
      getCommitmentHashesRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentHashesRequest.equals(
      GetCommitmentHashesRequest.fromJsonString(getCommitmentHashesRequest.toJsonString()),
      getCommitmentHashesRequest,
    ),
  ).toBe(true);
  expect(
    GetCommitmentHashesRequest.equals(
      GetCommitmentHashesRequest.fromBinary(getCommitmentHashesRequest.toBinary()),
      getCommitmentHashesRequest,
    ),
  ).toBe(true);

  expect(
    GetCommitmentHashesResponse.equals(
      GetCommitmentHashesResponse.fromJson(getCommitmentHashesResponse.toJson()),
      getCommitmentHashesResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentHashesResponse.equals(
      GetCommitmentHashesResponse.fromJsonString(getCommitmentHashesResponse.toJsonString()),
      getCommitmentHashesResponse,
    ),
  ).toBe(true);
  expect(
    GetCommitmentHashesResponse.equals(
      GetCommitmentHashesResponse.fromBinary(getCommitmentHashesResponse.toBinary()),
      getCommitmentHashesResponse,
    ),
  ).toBe(true);

  expect(
    GetNullifiersRequest.equals(
      GetNullifiersRequest.fromJson(getNullifierRequest.toJson()),
      getNullifierRequest,
    ),
  ).toBe(true);
  expect(
    GetNullifiersRequest.equals(
      GetNullifiersRequest.fromJsonString(getNullifierRequest.toJsonString()),
      getNullifierRequest,
    ),
  ).toBe(true);
  expect(
    GetNullifiersRequest.equals(
      GetNullifiersRequest.fromBinary(getNullifierRequest.toBinary()),
      getNullifierRequest,
    ),
  ).toBe(true);

  expect(
    GetNullifiersResponse.equals(
      GetNullifiersResponse.fromJson(getNullifierResponse.toJson()),
      getNullifierResponse,
    ),
  ).toBe(true);
  expect(
    GetNullifiersResponse.equals(
      GetNullifiersResponse.fromJsonString(getNullifierResponse.toJsonString()),
      getNullifierResponse,
    ),
  ).toBe(true);
  expect(
    GetNullifiersResponse.equals(
      GetNullifiersResponse.fromBinary(getNullifierResponse.toBinary()),
      getNullifierResponse,
    ),
  ).toBe(true);

  expect(
    GetNullifiersByTxHashRequest.equals(
      GetNullifiersByTxHashRequest.fromJson(getNullifiesByTxHashRequest.toJson()),
      getNullifiesByTxHashRequest,
    ),
  ).toBe(true);
  expect(
    GetNullifiersByTxHashRequest.equals(
      GetNullifiersByTxHashRequest.fromJsonString(getNullifiesByTxHashRequest.toJsonString()),
      getNullifiesByTxHashRequest,
    ),
  ).toBe(true);
  expect(
    GetNullifiersByTxHashRequest.equals(
      GetNullifiersByTxHashRequest.fromBinary(getNullifiesByTxHashRequest.toBinary()),
      getNullifiesByTxHashRequest,
    ),
  ).toBe(true);

  expect(
    GetNullifiersByTxHashResponse.equals(
      GetNullifiersByTxHashResponse.fromJson(getNullifiersByTxHashResponse.toJson()),
      getNullifiersByTxHashResponse,
    ),
  ).toBe(true);
  expect(
    GetNullifiersByTxHashResponse.equals(
      GetNullifiersByTxHashResponse.fromJsonString(getNullifiersByTxHashResponse.toJsonString()),
      getNullifiersByTxHashResponse,
    ),
  ).toBe(true);
  expect(
    GetNullifiersByTxHashResponse.equals(
      GetNullifiersByTxHashResponse.fromBinary(getNullifiersByTxHashResponse.toBinary()),
      getNullifiersByTxHashResponse,
    ),
  ).toBe(true);

  expect(
    HealthCheckRequest.equals(HealthCheckRequest.fromJson(healthCheckRequest.toJson()), healthCheckRequest),
  ).toBe(true);
  expect(
    HealthCheckRequest.equals(
      HealthCheckRequest.fromJsonString(healthCheckRequest.toJsonString()),
      healthCheckRequest,
    ),
  ).toBe(true);
  expect(
    HealthCheckRequest.equals(
      HealthCheckRequest.fromBinary(healthCheckRequest.toBinary()),
      healthCheckRequest,
    ),
  ).toBe(true);

  expect(
    HealthCheckResponse.equals(
      HealthCheckResponse.fromJson(healthCheckResponse.toJson()),
      healthCheckResponse,
    ),
  ).toBe(true);
  expect(
    HealthCheckResponse.equals(
      HealthCheckResponse.fromJsonString(healthCheckResponse.toJsonString()),
      healthCheckResponse,
    ),
  ).toBe(true);
  expect(
    HealthCheckResponse.equals(
      HealthCheckResponse.fromBinary(healthCheckResponse.toBinary()),
      healthCheckResponse,
    ),
  ).toBe(true);
});
