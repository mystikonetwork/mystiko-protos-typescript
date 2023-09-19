import { data, sequencer } from '../src';

const { Commitment, CommitmentStatus, Nullifier } = data.v1;

const {
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
  });
  const chainLoadedBlockResponse = new ChainLoadedBlockResponse({
    blockNumber: BigInt(100000000),
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
