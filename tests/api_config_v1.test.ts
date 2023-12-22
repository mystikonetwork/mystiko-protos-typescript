import { api, common, config } from '../src';

const { ContractType, ProviderType, TransactionType, AssetType, BridgeType, CircuitType } = common.v1;
const { BridgeConfig } = config.bridge.v1;
const { ContractConfig, DepositContractConfig, PoolContractConfig } = config.contract.v1;
const { AssetConfig, ProviderConfig, ChainConfig, CircuitConfig, MystikoConfig } = config.v1;
const {
  FindDefaultCircuitRequest,
  FindCircuitRequest,
  FindChainRequest,
  FindPeerChainsRequest,
  FindAssetSymbolsRequest,
  FindBridgesRequest,
  FindBridgeRequest,
  FindDepositContractRequest,
  FindDepositContractByAddressRequest,
  FindPoolContractRequest,
  FindPoolContractsRequest,
  FindPoolContractByAddressRequest,
  FindContractByAddressRequest,
  GetTransactionUrlRequest,
} = api.config.v1;
const {
  GetConfigResponse,
  FindDefaultCircuitResponse,
  FindCircuitResponse,
  FindChainResponse,
  FindPeerChainsResponse,
  FindAssetSymbolsResponse,
  FindBridgesResponse,
  FindBridgeResponse,
  FindDepositContractResponse,
  FindDepositContractByAddressResponse,
  FindPoolContractResponse,
  FindPoolContractsResponse,
  FindPoolContractByAddressResponse,
  FindContractByAddressResponse,
  GetTransactionUrlResponse,
} = api.config.v1;

test('test config request', () => {
  const circuitRequestDefault = new FindDefaultCircuitRequest({
    circuitType: CircuitType.ROLLUP_1,
  });
  expect(
    FindDefaultCircuitRequest.equals(
      FindDefaultCircuitRequest.fromJson(circuitRequestDefault.toJson()),
      circuitRequestDefault,
    ),
  ).toBe(true);
  expect(
    FindDefaultCircuitRequest.equals(
      FindDefaultCircuitRequest.fromBinary(circuitRequestDefault.toBinary()),
      circuitRequestDefault,
    ),
  ).toBe(true);
  const circuitRequest = new FindCircuitRequest({
    circuitName: 'rollup1',
  });
  expect(
    FindCircuitRequest.equals(FindCircuitRequest.fromJson(circuitRequest.toJson()), circuitRequest),
  ).toBe(true);
  expect(
    FindCircuitRequest.equals(FindCircuitRequest.fromBinary(circuitRequest.toBinary()), circuitRequest),
  ).toBe(true);
  const chainRequest = new FindChainRequest({
    chainId: BigInt(1),
  });
  expect(FindChainRequest.equals(FindChainRequest.fromJson(chainRequest.toJson()), chainRequest)).toBe(true);
  expect(FindChainRequest.equals(FindChainRequest.fromBinary(chainRequest.toBinary()), chainRequest)).toBe(
    true,
  );
  const peerChainRequest = new FindPeerChainsRequest({
    chainId: BigInt(1),
  });
  expect(
    FindPeerChainsRequest.equals(FindPeerChainsRequest.fromJson(peerChainRequest.toJson()), peerChainRequest),
  ).toBe(true);
  expect(
    FindPeerChainsRequest.equals(
      FindPeerChainsRequest.fromBinary(peerChainRequest.toBinary()),
      peerChainRequest,
    ),
  ).toBe(true);
  const assetSymbolsRequest = new FindAssetSymbolsRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
  });
  expect(
    FindAssetSymbolsRequest.equals(
      FindAssetSymbolsRequest.fromJson(assetSymbolsRequest.toJson()),
      assetSymbolsRequest,
    ),
  ).toBe(true);
  expect(
    FindAssetSymbolsRequest.equals(
      FindAssetSymbolsRequest.fromBinary(assetSymbolsRequest.toBinary()),
      assetSymbolsRequest,
    ),
  ).toBe(true);
  const bridgesRequest = new FindBridgesRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
    assetSymbol: 'USDC',
  });
  expect(
    FindBridgesRequest.equals(FindBridgesRequest.fromJson(bridgesRequest.toJson()), bridgesRequest),
  ).toBe(true);
  expect(
    FindBridgesRequest.equals(FindBridgesRequest.fromBinary(bridgesRequest.toBinary()), bridgesRequest),
  ).toBe(true);
  const bridgeRequest = new FindBridgeRequest({
    bridgeType: BridgeType.LOOP,
  });
  expect(FindBridgeRequest.equals(FindBridgeRequest.fromJson(bridgeRequest.toJson()), bridgeRequest)).toBe(
    true,
  );
  expect(
    FindBridgeRequest.equals(FindBridgeRequest.fromBinary(bridgeRequest.toBinary()), bridgeRequest),
  ).toBe(true);
  const depositContractRequest = new FindDepositContractRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
    assetSymbol: 'USDC',
    bridgeType: BridgeType.TBRIDGE,
  });
  expect(
    FindDepositContractRequest.equals(
      FindDepositContractRequest.fromJson(depositContractRequest.toJson()),
      depositContractRequest,
    ),
  ).toBe(true);
  expect(
    FindDepositContractRequest.equals(
      FindDepositContractRequest.fromBinary(depositContractRequest.toBinary()),
      depositContractRequest,
    ),
  ).toBe(true);
  const depositContractByAddressRequest = new FindDepositContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindDepositContractByAddressRequest.equals(
      FindDepositContractByAddressRequest.fromJson(depositContractByAddressRequest.toJson()),
      depositContractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindDepositContractByAddressRequest.equals(
      FindDepositContractByAddressRequest.fromBinary(depositContractByAddressRequest.toBinary()),
      depositContractByAddressRequest,
    ),
  ).toBe(true);
  const poolContractRequest = new FindPoolContractRequest({
    chainId: BigInt(1),
    assetSymbol: 'USDC',
    bridgeType: BridgeType.TBRIDGE,
    version: 1,
  });
  expect(
    FindPoolContractRequest.equals(
      FindPoolContractRequest.fromJson(poolContractRequest.toJson()),
      poolContractRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractRequest.equals(
      FindPoolContractRequest.fromBinary(poolContractRequest.toBinary()),
      poolContractRequest,
    ),
  ).toBe(true);
  const poolContractsRequest = new FindPoolContractsRequest({
    chainId: BigInt(1),
    assetSymbol: 'USDC',
    bridgeType: BridgeType.TBRIDGE,
  });
  expect(
    FindPoolContractsRequest.equals(
      FindPoolContractsRequest.fromJson(poolContractsRequest.toJson()),
      poolContractsRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractsRequest.equals(
      FindPoolContractsRequest.fromBinary(poolContractsRequest.toBinary()),
      poolContractsRequest,
    ),
  ).toBe(true);
  const poolContractByAddressRequest = new FindPoolContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindPoolContractByAddressRequest.equals(
      FindPoolContractByAddressRequest.fromJson(poolContractByAddressRequest.toJson()),
      poolContractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractByAddressRequest.equals(
      FindPoolContractByAddressRequest.fromBinary(poolContractByAddressRequest.toBinary()),
      poolContractByAddressRequest,
    ),
  ).toBe(true);
  const contractByAddressRequest = new FindContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindContractByAddressRequest.equals(
      FindContractByAddressRequest.fromJson(contractByAddressRequest.toJson()),
      contractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindContractByAddressRequest.equals(
      FindContractByAddressRequest.fromBinary(contractByAddressRequest.toBinary()),
      contractByAddressRequest,
    ),
  ).toBe(true);
  const transactionUrlRequest = new GetTransactionUrlRequest({
    chainId: BigInt(1),
    txHash: '0x',
  });
  expect(
    GetTransactionUrlRequest.equals(
      GetTransactionUrlRequest.fromJson(transactionUrlRequest.toJson()),
      transactionUrlRequest,
    ),
  ).toBe(true);
  expect(
    GetTransactionUrlRequest.equals(
      GetTransactionUrlRequest.fromBinary(transactionUrlRequest.toBinary()),
      transactionUrlRequest,
    ),
  ).toBe(true);
});

test('test config response', () => {
  const bridgeConfig = new BridgeConfig({
    name: 'tbridge',
    bridgeType: BridgeType.TBRIDGE,
  });
  const circuitConfig = new CircuitConfig({
    name: 'rollup1',
    circuitType: CircuitType.ROLLUP_1,
  });
  const depositConfig = new DepositContractConfig({
    version: 1,
    contractType: ContractType.DEPOSIT,
    bridgeType: BridgeType.TBRIDGE,
  });
  const poolConfig = new PoolContractConfig({
    version: 1,
    contractType: ContractType.POOL,
    bridgeType: BridgeType.TBRIDGE,
  });
  const contractConfig = new ContractConfig({ version: 1 });
  const chainConfig = new ChainConfig({
    chainId: BigInt(1),
    name: 'Ethereum',
    mainAssetConfig: new AssetConfig({
      assetType: AssetType.MAIN,
    }),
    providerType: ProviderType.FAILOVER,
    transactionType: TransactionType.EIP1559,
    assetConfigs: {
      1: new AssetConfig({ assetType: AssetType.ERC20 }),
    },
    depositContractConfigs: { 1: depositConfig },
    poolContractConfigs: { 1: poolConfig },
    recommendedAmounts: ['123'],
    providerConfigs: [new ProviderConfig({ url: 'url' })],
    granularities: [BigInt(1000)],
  });
  const configResponse = new GetConfigResponse({
    config: new MystikoConfig({
      version: '1',
      chainConfigs: { 1: chainConfig },
      bridgeConfigs: { 1: bridgeConfig },
      gitRevision: 'abcd',
      sequencerConfig: undefined,
      packerConfig: undefined,
      countryBlacklist: [],
      circuitConfigs: [circuitConfig],
    }),
  });
  expect(GetConfigResponse.equals(GetConfigResponse.fromJson(configResponse.toJson()), configResponse)).toBe(
    true,
  );
  expect(
    GetConfigResponse.equals(GetConfigResponse.fromBinary(configResponse.toBinary()), configResponse),
  ).toBe(true);
  const defaultCircuitResponse = new FindDefaultCircuitResponse({
    config: circuitConfig,
  });
  expect(
    FindDefaultCircuitResponse.equals(
      FindDefaultCircuitResponse.fromJson(defaultCircuitResponse.toJson()),
      defaultCircuitResponse,
    ),
  ).toBe(true);
  expect(
    FindDefaultCircuitResponse.equals(
      FindDefaultCircuitResponse.fromBinary(defaultCircuitResponse.toBinary()),
      defaultCircuitResponse,
    ),
  ).toBe(true);
  const circuitResponse = new FindCircuitResponse({
    config: circuitConfig,
  });
  expect(
    FindCircuitResponse.equals(FindCircuitResponse.fromJson(circuitResponse.toJson()), circuitResponse),
  ).toBe(true);
  expect(
    FindCircuitResponse.equals(FindCircuitResponse.fromBinary(circuitResponse.toBinary()), circuitResponse),
  ).toBe(true);
  const chainResponse = new FindChainResponse({
    config: chainConfig,
  });
  expect(FindChainResponse.equals(FindChainResponse.fromJson(chainResponse.toJson()), chainResponse)).toBe(
    true,
  );
  expect(
    FindChainResponse.equals(FindChainResponse.fromBinary(chainResponse.toBinary()), chainResponse),
  ).toBe(true);
  const peerChainsResponse = new FindPeerChainsResponse({
    configs: [chainConfig],
  });
  expect(
    FindPeerChainsResponse.equals(
      FindPeerChainsResponse.fromJson(peerChainsResponse.toJson()),
      peerChainsResponse,
    ),
  ).toBe(true);
  expect(
    FindPeerChainsResponse.equals(
      FindPeerChainsResponse.fromBinary(peerChainsResponse.toBinary()),
      peerChainsResponse,
    ),
  ).toBe(true);
  const assetSymbolsResponse = new FindAssetSymbolsResponse({
    assetSymbol: ['USDC', 'ETH'],
  });
  expect(
    FindAssetSymbolsResponse.equals(
      FindAssetSymbolsResponse.fromJson(assetSymbolsResponse.toJson()),
      assetSymbolsResponse,
    ),
  ).toBe(true);
  expect(
    FindAssetSymbolsResponse.equals(
      FindAssetSymbolsResponse.fromBinary(assetSymbolsResponse.toBinary()),
      assetSymbolsResponse,
    ),
  ).toBe(true);
  const bridgesResponse = new FindBridgesResponse({
    bridgeType: [BridgeType.TBRIDGE, BridgeType.LOOP],
  });
  expect(
    FindBridgesResponse.equals(FindBridgesResponse.fromJson(bridgesResponse.toJson()), bridgesResponse),
  ).toBe(true);
  expect(
    FindBridgesResponse.equals(FindBridgesResponse.fromBinary(bridgesResponse.toBinary()), bridgesResponse),
  ).toBe(true);
  const bridgeResponse = new FindBridgeResponse({
    config: bridgeConfig,
  });
  expect(
    FindBridgeResponse.equals(FindBridgeResponse.fromJson(bridgeResponse.toJson()), bridgeResponse),
  ).toBe(true);
  expect(
    FindBridgeResponse.equals(FindBridgeResponse.fromBinary(bridgeResponse.toBinary()), bridgeResponse),
  ).toBe(true);
  const depositContractResponse = new FindDepositContractResponse({
    config: depositConfig,
  });
  expect(
    FindDepositContractResponse.equals(
      FindDepositContractResponse.fromJson(depositContractResponse.toJson()),
      depositContractResponse,
    ),
  ).toBe(true);
  expect(
    FindDepositContractResponse.equals(
      FindDepositContractResponse.fromBinary(depositContractResponse.toBinary()),
      depositContractResponse,
    ),
  ).toBe(true);
  const depositContractByAddressResponse = new FindDepositContractByAddressResponse({
    config: depositConfig,
  });
  expect(
    FindDepositContractByAddressResponse.equals(
      FindDepositContractByAddressResponse.fromJson(depositContractByAddressResponse.toJson()),
      depositContractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindDepositContractByAddressResponse.equals(
      FindDepositContractByAddressResponse.fromBinary(depositContractByAddressResponse.toBinary()),
      depositContractByAddressResponse,
    ),
  ).toBe(true);
  const poolContractResponse = new FindPoolContractResponse({
    config: poolConfig,
  });
  expect(
    FindPoolContractResponse.equals(
      FindPoolContractResponse.fromJson(poolContractResponse.toJson()),
      poolContractResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractResponse.equals(
      FindPoolContractResponse.fromBinary(poolContractResponse.toBinary()),
      poolContractResponse,
    ),
  ).toBe(true);
  const poolContractsResponse = new FindPoolContractsResponse({
    config: [poolConfig],
  });
  expect(
    FindPoolContractsResponse.equals(
      FindPoolContractsResponse.fromJson(poolContractsResponse.toJson()),
      poolContractsResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractsResponse.equals(
      FindPoolContractsResponse.fromBinary(poolContractsResponse.toBinary()),
      poolContractsResponse,
    ),
  ).toBe(true);
  const poolContractByAddressResponse = new FindPoolContractByAddressResponse({
    config: poolConfig,
  });
  expect(
    FindPoolContractByAddressResponse.equals(
      FindPoolContractByAddressResponse.fromJson(poolContractByAddressResponse.toJson()),
      poolContractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractByAddressResponse.equals(
      FindPoolContractByAddressResponse.fromBinary(poolContractByAddressResponse.toBinary()),
      poolContractByAddressResponse,
    ),
  ).toBe(true);
  const contractByAddressResponse = new FindContractByAddressResponse({
    config: contractConfig,
  });
  expect(
    FindContractByAddressResponse.equals(
      FindContractByAddressResponse.fromJson(contractByAddressResponse.toJson()),
      contractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindContractByAddressResponse.equals(
      FindContractByAddressResponse.fromBinary(contractByAddressResponse.toBinary()),
      contractByAddressResponse,
    ),
  ).toBe(true);
  const transactionUrlResponse = new GetTransactionUrlResponse({
    url: 'url',
  });
  expect(
    GetTransactionUrlResponse.equals(
      GetTransactionUrlResponse.fromJson(transactionUrlResponse.toJson()),
      transactionUrlResponse,
    ),
  ).toBe(true);
  expect(
    GetTransactionUrlResponse.equals(
      GetTransactionUrlResponse.fromBinary(transactionUrlResponse.toBinary()),
      transactionUrlResponse,
    ),
  ).toBe(true);
});
