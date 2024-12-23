import { api, core } from '../src';

const { ScannerScanRequest, ScannerResetRequest, BalanceRequest, AssetsRequest, ChainAssetsRequest } =
  api.scanner.v1;
const { ScannerScanResponse, ScannerResetResponse, BalanceResponse, AssetsResponse, ChainAssetsResponse } =
  api.scanner.v1;
const { ScannerScanOptions, ScannerResetOptions, BalanceOptions, AssetsOptions } = core.scanner.v1;
const {
  ScannerScanResult,
  ScannerResetResult,
  BalanceResult,
  Balance,
  AssetsByChain,
  AssetsByBridge,
  AssetsBySymbol,
} = core.scanner.v1;

test('test request', () => {
  const scanRequest = new ScannerScanRequest({
    options: new ScannerScanOptions({
      walletPassword: 'test password',
      concurrency: 1,
    }),
  });
  expect(ScannerScanRequest.equals(ScannerScanRequest.fromJson(scanRequest.toJson()), scanRequest)).toBe(
    true,
  );
  expect(ScannerScanRequest.equals(ScannerScanRequest.fromBinary(scanRequest.toBinary()), scanRequest)).toBe(
    true,
  );

  const resetRequest = new ScannerResetRequest({
    options: new ScannerResetOptions({
      resetToId: 'id',
    }),
  });
  expect(ScannerResetRequest.equals(ScannerResetRequest.fromJson(resetRequest.toJson()), resetRequest)).toBe(
    true,
  );
  expect(
    ScannerResetRequest.equals(ScannerResetRequest.fromBinary(resetRequest.toBinary()), resetRequest),
  ).toBe(true);

  const balanceRequest = new BalanceRequest({
    options: new BalanceOptions({
      withSpent: false,
      shieldedAddresses: ['address1'],
    }),
  });
  expect(BalanceRequest.equals(BalanceRequest.fromJson(balanceRequest.toJson()), balanceRequest)).toBe(true);
  expect(BalanceRequest.equals(BalanceRequest.fromBinary(balanceRequest.toBinary()), balanceRequest)).toBe(
    true,
  );

  const assetsRequest = new AssetsRequest({
    options: new AssetsOptions({
      shieldedAddresses: ['address1'],
    }),
  });
  expect(AssetsRequest.equals(AssetsRequest.fromJson(assetsRequest.toJson()), assetsRequest)).toBe(true);
  expect(AssetsRequest.equals(AssetsRequest.fromBinary(assetsRequest.toBinary()), assetsRequest)).toBe(true);

  const chainAssetsRequest = new ChainAssetsRequest({
    chainId: BigInt(1),
    options: new AssetsOptions({
      shieldedAddresses: ['address1'],
    }),
  });
  expect(
    ChainAssetsRequest.equals(ChainAssetsRequest.fromJson(chainAssetsRequest.toJson()), chainAssetsRequest),
  ).toBe(true);
  expect(
    ChainAssetsRequest.equals(
      ChainAssetsRequest.fromBinary(chainAssetsRequest.toBinary()),
      chainAssetsRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const scanResponse = new ScannerScanResponse({
    result: new ScannerScanResult({
      totalCount: BigInt(1),
      ownedCount: BigInt(1),
    }),
  });
  expect(ScannerScanResponse.equals(ScannerScanResponse.fromJson(scanResponse.toJson()), scanResponse)).toBe(
    true,
  );
  expect(
    ScannerScanResponse.equals(ScannerScanResponse.fromBinary(scanResponse.toBinary()), scanResponse),
  ).toBe(true);

  const resetResponse = new ScannerResetResponse({
    result: new ScannerResetResult({}),
  });
  expect(
    ScannerResetResponse.equals(ScannerResetResponse.fromJson(resetResponse.toJson()), resetResponse),
  ).toBe(true);
  expect(
    ScannerResetResponse.equals(ScannerResetResponse.fromBinary(resetResponse.toBinary()), resetResponse),
  ).toBe(true);

  const balanceResponse = new BalanceResponse({
    result: new BalanceResult({
      balances: [
        new Balance({
          unspent: 1,
          pending: 1,
        }),
      ],
    }),
  });
  expect(BalanceResponse.equals(BalanceResponse.fromJson(balanceResponse.toJson()), balanceResponse)).toBe(
    true,
  );
  expect(
    BalanceResponse.equals(BalanceResponse.fromBinary(balanceResponse.toBinary()), balanceResponse),
  ).toBe(true);

  const assetsResponse = new AssetsResponse({
    results: [
      new AssetsByChain({
        chainId: BigInt(1),
        bridges: [
          new AssetsByBridge({
            symbols: [
              new AssetsBySymbol({
                assetSymbol: 'MTT',
              }),
            ],
          }),
        ],
      }),
    ],
  });
  expect(AssetsResponse.equals(AssetsResponse.fromJson(assetsResponse.toJson()), assetsResponse)).toBe(true);
  expect(AssetsResponse.equals(AssetsResponse.fromBinary(assetsResponse.toBinary()), assetsResponse)).toBe(
    true,
  );

  const chainAssetsResponse = new ChainAssetsResponse({
    result: new AssetsByChain({
      chainId: BigInt(1),
      bridges: [
        new AssetsByBridge({
          symbols: [
            new AssetsBySymbol({
              assetSymbol: 'MTT',
            }),
          ],
        }),
      ],
    }),
  });
  expect(
    ChainAssetsResponse.equals(
      ChainAssetsResponse.fromJson(chainAssetsResponse.toJson()),
      chainAssetsResponse,
    ),
  ).toBe(true);
  expect(
    ChainAssetsResponse.equals(
      ChainAssetsResponse.fromBinary(chainAssetsResponse.toBinary()),
      chainAssetsResponse,
    ),
  ).toBe(true);
});
