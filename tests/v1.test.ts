import { ChainData, Commitment, CommitmentStatus, ContractData, Nullifier } from '../src/data/v1';

test('test serde', () => {
  const commitment = new Commitment({
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
  });
  expect(Commitment.equals(Commitment.fromJson(commitment.toJson()), commitment)).toBe(true);
  expect(Commitment.equals(Commitment.fromJsonString(commitment.toJsonString()), commitment)).toBe(true);
  expect(Commitment.equals(Commitment.fromBinary(commitment.toBinary()), commitment)).toBe(true);
  const nullifier = new Nullifier({
    nullifier: new Uint8Array([0xba, 0xad, 0xba, 0xbe]),
    blockNumber: BigInt(10003),
    transactionHash: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
  });
  expect(Nullifier.equals(Nullifier.fromJson(nullifier.toJson()), nullifier)).toBe(true);
  expect(Nullifier.equals(Nullifier.fromJsonString(nullifier.toJsonString()), nullifier)).toBe(true);
  expect(Nullifier.equals(Nullifier.fromBinary(nullifier.toBinary()), nullifier)).toBe(true);
  const contract_data = new ContractData({
    contractAddress: new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xba, 0xbe]),
    commitments: [commitment],
    nullifiers: [nullifier],
  });
  expect(ContractData.equals(ContractData.fromJson(contract_data.toJson()), contract_data)).toBe(true);
  expect(ContractData.equals(ContractData.fromJsonString(contract_data.toJsonString()), contract_data)).toBe(true);
  expect(ContractData.equals(ContractData.fromBinary(contract_data.toBinary()), contract_data)).toBe(true);
  const chain_data = new ChainData({
    startBlock: BigInt(10000),
    endBlock: BigInt(10004),
    contractData: [contract_data],
  });
  expect(ChainData.equals(ChainData.fromJson(chain_data.toJson()), chain_data)).toBe(true);
  expect(ChainData.equals(ChainData.fromJsonString(chain_data.toJsonString()), chain_data)).toBe(true);
  expect(ChainData.equals(ChainData.fromBinary(chain_data.toBinary()), chain_data)).toBe(true);
});
