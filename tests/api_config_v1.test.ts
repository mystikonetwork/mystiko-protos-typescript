import { api, common, config } from '../src';

const { ContractType, ProviderType, TransactionType, AssetType, BridgeType, CircuitType } = common.v1;
const { BridgeConfig } = config.bridge.v1;
const { ContractConfig, DepositContractConfig, PoolContractConfig } = config.contract.v1;
const { AssetConfig, ProviderConfig, ChainConfig, CircuitConfig, MystikoConfig } = config.v1;
const {
  GetConfigRequest,
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
} = api.v1;
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
} = api.v1;

test('test config request', () => {
  const configRequest = new GetConfigRequest({});
  expect(GetConfigRequest.equals(configRequest.fromJson(configRequest.toJson()), configRequest)).toBe(true);
  expect(GetConfigRequest.equals(configRequest.fromBinary(configRequest.toBinary()), configRequest)).toBe(true);
  const circuitRequestDefault = new FindDefaultCircuitRequest({
    circuitType: CircuitType.ROLLUP_1,
  });
  expect(
    FindDefaultCircuitRequest.equals(
      circuitRequestDefault.fromJson(circuitRequestDefault.toJson()),
      circuitRequestDefault,
    ),
  ).toBe(true);
  expect(
    FindDefaultCircuitRequest.equals(
      circuitRequestDefault.fromBinary(circuitRequestDefault.toBinary()),
      circuitRequestDefault,
    ),
  ).toBe(true);
  const circuitRequest = new FindCircuitRequest({
    circuitName: 'rollup1',
  });
  expect(FindCircuitRequest.equals(circuitRequest.fromJson(circuitRequest.toJson()), circuitRequest)).toBe(
    true,
  );
  expect(FindCircuitRequest.equals(circuitRequest.fromBinary(circuitRequest.toBinary()), circuitRequest)).toBe(
    true,
  );
  const chainRequest = new FindChainRequest({
    chainId: BigInt(1),
  });
  expect(FindChainRequest.equals(chainRequest.fromJson(chainRequest.toJson()), chainRequest)).toBe(true);
  expect(FindChainRequest.equals(chainRequest.fromBinary(chainRequest.toBinary()), chainRequest)).toBe(true);
  const peerChainRequest = new FindPeerChainsRequest({
    chainId: BigInt(1),
  });
  expect(
    FindPeerChainsRequest.equals(peerChainRequest.fromJson(peerChainRequest.toJson()), peerChainRequest),
  ).toBe(true);
  expect(
    FindPeerChainsRequest.equals(peerChainRequest.fromBinary(peerChainRequest.toBinary()), peerChainRequest),
  ).toBe(true);
  const assetSymbolsRequest = new FindAssetSymbolsRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
  });
  expect(
    FindAssetSymbolsRequest.equals(
      assetSymbolsRequest.fromJson(assetSymbolsRequest.toJson()),
      assetSymbolsRequest,
    ),
  ).toBe(true);
  expect(
    FindAssetSymbolsRequest.equals(
      assetSymbolsRequest.fromBinary(assetSymbolsRequest.toBinary()),
      assetSymbolsRequest,
    ),
  ).toBe(true);
  const bridgesRequest = new FindBridgesRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
    assetSymbol: 'USDC',
  });
  expect(FindBridgesRequest.equals(bridgesRequest.fromJson(bridgesRequest.toJson()), bridgesRequest)).toBe(
    true,
  );
  expect(FindBridgesRequest.equals(bridgesRequest.fromBinary(bridgesRequest.toBinary()), bridgesRequest)).toBe(
    true,
  );
  const bridgeRequest = new FindBridgeRequest({
    bridgeType: BridgeType.LOOP,
  });
  expect(FindBridgeRequest.equals(bridgeRequest.fromJson(bridgeRequest.toJson()), bridgeRequest)).toBe(true);
  expect(FindBridgeRequest.equals(bridgeRequest.fromBinary(bridgeRequest.toBinary()), bridgeRequest)).toBe(true);
  const depositContractRequest = new FindDepositContractRequest({
    chainId: BigInt(1),
    peerChainId: BigInt(56),
    assetSymbol: 'USDC',
    bridgeType: BridgeType.TBRIDGE,
  });
  expect(
    FindDepositContractRequest.equals(
      depositContractRequest.fromJson(depositContractRequest.toJson()),
      depositContractRequest,
    ),
  ).toBe(true);
  expect(
    FindDepositContractRequest.equals(
      depositContractRequest.fromBinary(depositContractRequest.toBinary()),
      depositContractRequest,
    ),
  ).toBe(true);
  const depositContractByAddressRequest = new FindDepositContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindDepositContractByAddressRequest.equals(
      depositContractByAddressRequest.fromJson(depositContractByAddressRequest.toJson()),
      depositContractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindDepositContractByAddressRequest.equals(
      depositContractByAddressRequest.fromBinary(depositContractByAddressRequest.toBinary()),
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
      poolContractRequest.fromJson(poolContractRequest.toJson()),
      poolContractRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractRequest.equals(
      poolContractRequest.fromBinary(poolContractRequest.toBinary()),
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
      poolContractsRequest.fromJson(poolContractsRequest.toJson()),
      poolContractsRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractsRequest.equals(
      poolContractsRequest.fromBinary(poolContractsRequest.toBinary()),
      poolContractsRequest,
    ),
  ).toBe(true);
  const poolContractByAddressRequest = new FindPoolContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindPoolContractByAddressRequest.equals(
      poolContractByAddressRequest.fromJson(poolContractByAddressRequest.toJson()),
      poolContractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindPoolContractByAddressRequest.equals(
      poolContractByAddressRequest.fromBinary(poolContractByAddressRequest.toBinary()),
      poolContractByAddressRequest,
    ),
  ).toBe(true);
  const contractByAddressRequest = new FindContractByAddressRequest({
    chainId: BigInt(1),
    address: '0x',
  });
  expect(
    FindContractByAddressRequest.equals(
      contractByAddressRequest.fromJson(contractByAddressRequest.toJson()),
      contractByAddressRequest,
    ),
  ).toBe(true);
  expect(
    FindContractByAddressRequest.equals(
      contractByAddressRequest.fromBinary(contractByAddressRequest.toBinary()),
      contractByAddressRequest,
    ),
  ).toBe(true);
  const transactionUrlRequest = new GetTransactionUrlRequest({
    chainId: BigInt(1),
    txHash: '0x',
  });
  expect(
    GetTransactionUrlRequest.equals(
      transactionUrlRequest.fromJson(transactionUrlRequest.toJson()),
      transactionUrlRequest,
    ),
  ).toBe(true);
  expect(
    GetTransactionUrlRequest.equals(
      transactionUrlRequest.fromBinary(transactionUrlRequest.toBinary()),
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
  expect(GetConfigResponse.equals(configResponse.fromJson(configResponse.toJson()), configResponse)).toBe(
    true,
  );
  expect(GetConfigResponse.equals(configResponse.fromBinary(configResponse.toBinary()), configResponse)).toBe(
    true,
  );
  const defaultCircuitResponse = new FindDefaultCircuitResponse({
    config: circuitConfig,
  });
  expect(
    FindDefaultCircuitResponse.equals(
      defaultCircuitResponse.fromJson(defaultCircuitResponse.toJson()),
      defaultCircuitResponse,
    ),
  ).toBe(true);
  expect(
    FindDefaultCircuitResponse.equals(
      defaultCircuitResponse.fromBinary(defaultCircuitResponse.toBinary()),
      defaultCircuitResponse,
    ),
  ).toBe(true);
  const circuitResponse = new FindCircuitResponse({
    config: circuitConfig,
  });
  expect(
    FindCircuitResponse.equals(circuitResponse.fromJson(circuitResponse.toJson()), circuitResponse),
  ).toBe(true);
  expect(
    FindCircuitResponse.equals(circuitResponse.fromBinary(circuitResponse.toBinary()), circuitResponse),
  ).toBe(true);
  const chainResponse = new FindChainResponse({
    config: chainConfig,
  });
  expect(FindChainResponse.equals(chainResponse.fromJson(chainResponse.toJson()), chainResponse)).toBe(true);
  expect(FindChainResponse.equals(chainResponse.fromBinary(chainResponse.toBinary()), chainResponse)).toBe(true);
  const peerChainsResponse = new FindPeerChainsResponse({
    configs: [chainConfig],
  });
  expect(
    FindPeerChainsResponse.equals(
      peerChainsResponse.fromJson(peerChainsResponse.toJson()),
      peerChainsResponse,
    ),
  ).toBe(true);
  expect(
    FindPeerChainsResponse.equals(
      peerChainsResponse.fromBinary(peerChainsResponse.toBinary()),
      peerChainsResponse,
    ),
  ).toBe(true);
  const assetSymbolsResponse = new FindAssetSymbolsResponse({
    assetSymbol: ['USDC', 'ETH'],
  });
  expect(
    FindAssetSymbolsResponse.equals(
      assetSymbolsResponse.fromJson(assetSymbolsResponse.toJson()),
      assetSymbolsResponse,
    ),
  ).toBe(true);
  expect(
    FindAssetSymbolsResponse.equals(
      assetSymbolsResponse.fromBinary(assetSymbolsResponse.toBinary()),
      assetSymbolsResponse,
    ),
  ).toBe(true);
  const bridgesResponse = new FindBridgesResponse({
    bridgeType: [BridgeType.TBRIDGE, BridgeType.LOOP],
  });
  expect(
    FindBridgesResponse.equals(bridgesResponse.fromJson(bridgesResponse.toJson()), bridgesResponse),
  ).toBe(true);
  expect(
    FindBridgesResponse.equals(bridgesResponse.fromBinary(bridgesResponse.toBinary()), bridgesResponse),
  ).toBe(true);
  const bridgeResponse = new FindBridgeResponse({
    config: bridgeConfig,
  });
  expect(FindBridgeResponse.equals(bridgeResponse.fromJson(bridgeResponse.toJson()), bridgeResponse)).toBe(
    true,
  );
  expect(FindBridgeResponse.equals(bridgeResponse.fromBinary(bridgeResponse.toBinary()), bridgeResponse)).toBe(
    true,
  );
  const depositContractResponse = new FindDepositContractResponse({
    config: depositConfig,
  });
  expect(
    FindDepositContractResponse.equals(
      depositContractResponse.fromJson(depositContractResponse.toJson()),
      depositContractResponse,
    ),
  ).toBe(true);
  expect(
    FindDepositContractResponse.equals(
      depositContractResponse.fromBinary(depositContractResponse.toBinary()),
      depositContractResponse,
    ),
  ).toBe(true);
  const depositContractByAddressResponse = new FindDepositContractByAddressResponse({
    config: depositConfig,
  });
  expect(
    FindDepositContractByAddressResponse.equals(
      depositContractByAddressResponse.fromJson(depositContractByAddressResponse.toJson()),
      depositContractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindDepositContractByAddressResponse.equals(
      depositContractByAddressResponse.fromBinary(depositContractByAddressResponse.toBinary()),
      depositContractByAddressResponse,
    ),
  ).toBe(true);
  const poolContractResponse = new FindPoolContractResponse({
    config: poolConfig,
  });
  expect(
    FindPoolContractResponse.equals(
      poolContractResponse.fromJson(poolContractResponse.toJson()),
      poolContractResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractResponse.equals(
      poolContractResponse.fromBinary(poolContractResponse.toBinary()),
      poolContractResponse,
    ),
  ).toBe(true);
  const poolContractsResponse = new FindPoolContractsResponse({
    config: [poolConfig],
  });
  expect(
    FindPoolContractsResponse.equals(
      poolContractsResponse.fromJson(poolContractsResponse.toJson()),
      poolContractsResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractsResponse.equals(
      poolContractsResponse.fromBinary(poolContractsResponse.toBinary()),
      poolContractsResponse,
    ),
  ).toBe(true);
  const poolContractByAddressResponse = new FindPoolContractByAddressResponse({
    config: poolConfig,
  });
  expect(
    FindPoolContractByAddressResponse.equals(
      poolContractByAddressResponse.fromJson(poolContractByAddressResponse.toJson()),
      poolContractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindPoolContractByAddressResponse.equals(
      poolContractByAddressResponse.fromBinary(poolContractByAddressResponse.toBinary()),
      poolContractByAddressResponse,
    ),
  ).toBe(true);
  const contractByAddressResponse = new FindContractByAddressResponse({
    config: contractConfig,
  });
  expect(
    FindContractByAddressResponse.equals(
      contractByAddressResponse.fromJson(contractByAddressResponse.toJson()),
      contractByAddressResponse,
    ),
  ).toBe(true);
  expect(
    FindContractByAddressResponse.equals(
      contractByAddressResponse.fromBinary(contractByAddressResponse.toBinary()),
      contractByAddressResponse,
    ),
  ).toBe(true);
  const transactionUrlResponse = new GetTransactionUrlResponse({
    url: 'url',
  });
  expect(
    GetTransactionUrlResponse.equals(
      transactionUrlResponse.fromJson(transactionUrlResponse.toJson()),
      transactionUrlResponse,
    ),
  ).toBe(true);
  expect(
    GetTransactionUrlResponse.equals(
      transactionUrlResponse.fromBinary(transactionUrlResponse.toBinary()),
      transactionUrlResponse,
    ),
  ).toBe(true);
});
