import { api, core } from '../src';

const {
  ChainSyncedBlockRequest,
  ContractSyncedBlockRequest,
  SynchronizerStatusRequest,
  SynchronizerSyncRequest,
  SynchronizerResetRequest,
} = api.synchronizer.v1;
const { ChainSyncedBlockResponse, ContractSyncedBlockResponse, SynchronizerStatusResponse } =
  api.synchronizer.v1;
const {
  SynchronizerSyncOptions,
  SynchronizerResetOptions,
  ResetChainOptions,
  SynchronizerStatus,
  ChainStatus,
  ContractStatus,
} = core.synchronizer.v1;

test('test request', () => {
  const chainSyncedBlockRequest = new ChainSyncedBlockRequest({
    chainId: BigInt(1),
  });
  expect(
    ChainSyncedBlockRequest.equals(
      ChainSyncedBlockRequest.fromJson(chainSyncedBlockRequest.toJson()),
      chainSyncedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ChainSyncedBlockRequest.equals(
      ChainSyncedBlockRequest.fromBinary(chainSyncedBlockRequest.toBinary()),
      chainSyncedBlockRequest,
    ),
  ).toBe(true);

  const contractSyncedBlockRequest = new ContractSyncedBlockRequest({
    chainId: BigInt(1),
    contractAddress: '0x123',
  });
  expect(
    ContractSyncedBlockRequest.equals(
      ContractSyncedBlockRequest.fromJson(contractSyncedBlockRequest.toJson()),
      contractSyncedBlockRequest,
    ),
  ).toBe(true);
  expect(
    ContractSyncedBlockRequest.equals(
      ContractSyncedBlockRequest.fromBinary(contractSyncedBlockRequest.toBinary()),
      contractSyncedBlockRequest,
    ),
  ).toBe(true);

  const statusRequest = new SynchronizerStatusRequest({
    withContracts: false,
  });
  expect(
    SynchronizerStatusRequest.equals(
      SynchronizerStatusRequest.fromJson(statusRequest.toJson()),
      statusRequest,
    ),
  ).toBe(true);
  expect(
    SynchronizerStatusRequest.equals(
      SynchronizerStatusRequest.fromBinary(statusRequest.toBinary()),
      statusRequest,
    ),
  ).toBe(true);

  const syncRequest = new SynchronizerSyncRequest({
    options: new SynchronizerSyncOptions({
      chainIds: [BigInt(1)],
      disableDatapackerFetcher: false,
    }),
  });
  expect(
    SynchronizerSyncRequest.equals(SynchronizerSyncRequest.fromJson(syncRequest.toJson()), syncRequest),
  ).toBe(true);
  expect(
    SynchronizerSyncRequest.equals(SynchronizerSyncRequest.fromBinary(syncRequest.toBinary()), syncRequest),
  ).toBe(true);

  const resetRequest = new SynchronizerResetRequest({
    options: new SynchronizerResetOptions({
      chains: [
        new ResetChainOptions({
          chainId: BigInt(1),
          contractAddresses: ['0x123'],
        }),
      ],
    }),
  });
  expect(
    SynchronizerResetRequest.equals(SynchronizerResetRequest.fromJson(resetRequest.toJson()), resetRequest),
  ).toBe(true);
  expect(
    SynchronizerResetRequest.equals(
      SynchronizerResetRequest.fromBinary(resetRequest.toBinary()),
      resetRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const chainSyncedBlockResponse = new ChainSyncedBlockResponse({
    result: BigInt(1),
  });
  expect(
    ChainSyncedBlockResponse.equals(
      ChainSyncedBlockResponse.fromJson(chainSyncedBlockResponse.toJson()),
      chainSyncedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ChainSyncedBlockResponse.equals(
      ChainSyncedBlockResponse.fromBinary(chainSyncedBlockResponse.toBinary()),
      chainSyncedBlockResponse,
    ),
  ).toBe(true);

  const contractSyncedBlockResponse = new ContractSyncedBlockResponse({
    result: BigInt(1),
  });
  expect(
    ContractSyncedBlockResponse.equals(
      ContractSyncedBlockResponse.fromJson(contractSyncedBlockResponse.toJson()),
      contractSyncedBlockResponse,
    ),
  ).toBe(true);
  expect(
    ContractSyncedBlockResponse.equals(
      ContractSyncedBlockResponse.fromBinary(contractSyncedBlockResponse.toBinary()),
      contractSyncedBlockResponse,
    ),
  ).toBe(true);

  const statusResponse = new SynchronizerStatusResponse({
    status: new SynchronizerStatus({
      chains: [
        new ChainStatus({
          targetBlock: BigInt(1),
          contracts: [
            new ContractStatus({
              contractAddress: '0x123',
              syncedBlock: BigInt(1),
            }),
          ],
        }),
      ],
    }),
  });
  expect(
    SynchronizerStatusResponse.equals(
      SynchronizerStatusResponse.fromJson(statusResponse.toJson()),
      statusResponse,
    ),
  ).toBe(true);
  expect(
    SynchronizerStatusResponse.equals(
      SynchronizerStatusResponse.fromBinary(statusResponse.toBinary()),
      statusResponse,
    ),
  ).toBe(true);
});
