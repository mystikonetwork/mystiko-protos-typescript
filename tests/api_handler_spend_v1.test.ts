import { api, core, storage, service } from '../src';

const {
  ColumnValuePair,
  SpendQuoteRequest,
  SpendSummaryRequest,
  CreateSpendRequest,
  SendSpendRequest,
  SendSpendWithGrpcRequest,
  FindSpendRequest,
  FindSpendByIdRequest,
  CountSpendsRequest,
  UpdateSpendRequest,
  UpdateSpendBatchRequest,
  UpdateSpendByFilterRequest,
  UpdateAllSpendRequest,
  DeleteSpendRequest,
  DeleteSpendBatchRequest,
  DeleteSpendByFilterRequest,
  SpendQuoteResponse,
  SpendSummaryResponse,
  CreateSpendResponse,
  SendSpendResponse,
  FindSpendsResponse,
  FindOneSpendResponse,
  CountSpendsResponse,
  UpdateSpendResponse,
  UpdateSpendBatchResponse,
} = api.handler.v1;
const { Transaction, LegacyTransaction } = core.v1;
const { QuoteSpendOptions, CreateSpendOptions, SendSpendOptions, SpendQuote, SpendSummary } = core.handler.v1;
const { Spend } = core.document.v1;
const { ClientOptions } = service.v1;
const { Condition, ConditionOperator, Order, OrderBy, QueryFilter, SubFilter, SubFilterOperator } =
  storage.v1;

test('test request', () => {
  const quoteRequest = new SpendQuoteRequest({
    options: new QuoteSpendOptions({
      assetSymbol: 'MTT',
    }),
  });
  expect(SpendQuoteRequest.equals(SpendQuoteRequest.fromJson(quoteRequest.toJson()), quoteRequest)).toBe(
    true,
  );
  expect(SpendQuoteRequest.equals(SpendQuoteRequest.fromBinary(quoteRequest.toBinary()), quoteRequest)).toBe(
    true,
  );

  const summaryRequest = new SpendSummaryRequest({
    options: new CreateSpendOptions({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    SpendSummaryRequest.equals(SpendSummaryRequest.fromJson(summaryRequest.toJson()), summaryRequest),
  ).toBe(true);
  expect(
    SpendSummaryRequest.equals(SpendSummaryRequest.fromBinary(summaryRequest.toBinary()), summaryRequest),
  ).toBe(true);

  const createRequest = new CreateSpendRequest({
    options: new CreateSpendOptions({
      assetSymbol: 'MTT',
    }),
  });
  expect(CreateSpendRequest.equals(CreateSpendRequest.fromJson(createRequest.toJson()), createRequest)).toBe(
    true,
  );
  expect(
    CreateSpendRequest.equals(CreateSpendRequest.fromBinary(createRequest.toBinary()), createRequest),
  ).toBe(true);

  const sendRequest = new SendSpendRequest({
    options: new SendSpendOptions({
      spendId: '0x123',
      tx: new Transaction({
        transaction: {
          case: 'legacyTransaction',
          value: new LegacyTransaction({
            gasPrice: '1000000000',
          }),
        },
      }),
    }),
  });
  expect(SendSpendRequest.equals(SendSpendRequest.fromJson(sendRequest.toJson()), sendRequest)).toBe(true);
  expect(SendSpendRequest.equals(SendSpendRequest.fromBinary(sendRequest.toBinary()), sendRequest)).toBe(
    true,
  );

  const sendGrpcRequest = new SendSpendWithGrpcRequest({
    sendOptions: new SendSpendOptions({
      spendId: '0x123',
    }),
    clientOptions: new ClientOptions({
      host: '127.0.0.1',
    }),
  });
  expect(
    SendSpendWithGrpcRequest.equals(
      SendSpendWithGrpcRequest.fromJson(sendGrpcRequest.toJson()),
      sendGrpcRequest,
    ),
  ).toBe(true);
  expect(
    SendSpendWithGrpcRequest.equals(
      SendSpendWithGrpcRequest.fromBinary(sendGrpcRequest.toBinary()),
      sendGrpcRequest,
    ),
  ).toBe(true);

  const queryFilter = new QueryFilter({
    conditions: [
      new Condition({
        operator: ConditionOperator.AND,
        subFilters: [
          new SubFilter({
            operator: SubFilterOperator.EQUAL,
            column: 'test',
          }),
        ],
      }),
    ],
    conditionsOperator: ConditionOperator.AND,
    orderBy: new OrderBy({
      columns: ['test'],
      order: Order.ASC,
    }),
  });
  const findSpendRequest = new FindSpendRequest({
    filter: queryFilter,
  });
  expect(
    FindSpendRequest.equals(FindSpendRequest.fromJson(findSpendRequest.toJson()), findSpendRequest),
  ).toBe(true);
  expect(
    FindSpendRequest.equals(FindSpendRequest.fromBinary(findSpendRequest.toBinary()), findSpendRequest),
  ).toBe(true);

  const findSpendByIdRequest = new FindSpendByIdRequest({
    id: '0x123',
  });
  expect(
    FindSpendByIdRequest.equals(
      FindSpendByIdRequest.fromJson(findSpendByIdRequest.toJson()),
      findSpendByIdRequest,
    ),
  ).toBe(true);
  expect(
    FindSpendByIdRequest.equals(
      FindSpendByIdRequest.fromBinary(findSpendByIdRequest.toBinary()),
      findSpendByIdRequest,
    ),
  ).toBe(true);

  const countSpendsRequest = new CountSpendsRequest({
    filter: queryFilter,
  });
  expect(
    CountSpendsRequest.equals(CountSpendsRequest.fromJson(countSpendsRequest.toJson()), countSpendsRequest),
  ).toBe(true);
  expect(
    CountSpendsRequest.equals(
      CountSpendsRequest.fromBinary(countSpendsRequest.toBinary()),
      countSpendsRequest,
    ),
  ).toBe(true);

  const updateSpendRequest = new UpdateSpendRequest({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    UpdateSpendRequest.equals(UpdateSpendRequest.fromJson(updateSpendRequest.toJson()), updateSpendRequest),
  ).toBe(true);
  expect(
    UpdateSpendRequest.equals(
      UpdateSpendRequest.fromBinary(updateSpendRequest.toBinary()),
      updateSpendRequest,
    ),
  ).toBe(true);

  const updateSpendBatchRequest = new UpdateSpendBatchRequest({
    spends: [
      new Spend({
        assetSymbol: 'MTT',
      }),
    ],
  });
  expect(
    UpdateSpendBatchRequest.equals(
      UpdateSpendBatchRequest.fromJson(updateSpendBatchRequest.toJson()),
      updateSpendBatchRequest,
    ),
  ).toBe(true);
  expect(
    UpdateSpendBatchRequest.equals(
      UpdateSpendBatchRequest.fromBinary(updateSpendBatchRequest.toBinary()),
      updateSpendBatchRequest,
    ),
  ).toBe(true);

  const updateSpendByFilterRequest = new UpdateSpendByFilterRequest({
    filter: queryFilter,
  });
  expect(
    UpdateSpendByFilterRequest.equals(
      UpdateSpendByFilterRequest.fromJson(updateSpendByFilterRequest.toJson()),
      updateSpendByFilterRequest,
    ),
  ).toBe(true);
  expect(
    UpdateSpendByFilterRequest.equals(
      UpdateSpendByFilterRequest.fromBinary(updateSpendByFilterRequest.toBinary()),
      updateSpendByFilterRequest,
    ),
  ).toBe(true);

  const updateAllSpendRequest = new UpdateAllSpendRequest({
    columnValues: [
      new ColumnValuePair({
        column: 'test',
      }),
    ],
  });
  expect(
    UpdateAllSpendRequest.equals(
      UpdateAllSpendRequest.fromJson(updateAllSpendRequest.toJson()),
      updateAllSpendRequest,
    ),
  ).toBe(true);
  expect(
    UpdateAllSpendRequest.equals(
      UpdateAllSpendRequest.fromBinary(updateAllSpendRequest.toBinary()),
      updateAllSpendRequest,
    ),
  ).toBe(true);

  const deleteSpendRequest = new DeleteSpendRequest({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    DeleteSpendRequest.equals(DeleteSpendRequest.fromJson(deleteSpendRequest.toJson()), deleteSpendRequest),
  ).toBe(true);
  expect(
    DeleteSpendRequest.equals(
      DeleteSpendRequest.fromBinary(deleteSpendRequest.toBinary()),
      deleteSpendRequest,
    ),
  ).toBe(true);

  const deleteSpendBatchRequest = new DeleteSpendBatchRequest({
    spends: [
      new Spend({
        assetSymbol: 'MTT',
      }),
    ],
  });
  expect(
    DeleteSpendBatchRequest.equals(
      DeleteSpendBatchRequest.fromJson(deleteSpendBatchRequest.toJson()),
      deleteSpendBatchRequest,
    ),
  ).toBe(true);
  expect(
    DeleteSpendBatchRequest.equals(
      DeleteSpendBatchRequest.fromBinary(deleteSpendBatchRequest.toBinary()),
      deleteSpendBatchRequest,
    ),
  ).toBe(true);

  const deleteSpendByFilterRequest = new DeleteSpendByFilterRequest({
    filter: queryFilter,
  });
  expect(
    DeleteSpendByFilterRequest.equals(
      DeleteSpendByFilterRequest.fromJson(deleteSpendByFilterRequest.toJson()),
      deleteSpendByFilterRequest,
    ),
  ).toBe(true);
  expect(
    DeleteSpendByFilterRequest.equals(
      DeleteSpendByFilterRequest.fromBinary(deleteSpendByFilterRequest.toBinary()),
      deleteSpendByFilterRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const spendQuoteResponse = new SpendQuoteResponse({
    quote: new SpendQuote({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    SpendQuoteResponse.equals(SpendQuoteResponse.fromJson(spendQuoteResponse.toJson()), spendQuoteResponse),
  ).toBe(true);
  expect(
    SpendQuoteResponse.equals(
      SpendQuoteResponse.fromBinary(spendQuoteResponse.toBinary()),
      spendQuoteResponse,
    ),
  ).toBe(true);

  const spendSummaryResponse = new SpendSummaryResponse({
    summary: new SpendSummary({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    SpendSummaryResponse.equals(
      SpendSummaryResponse.fromJson(spendSummaryResponse.toJson()),
      spendSummaryResponse,
    ),
  ).toBe(true);
  expect(
    SpendSummaryResponse.equals(
      SpendSummaryResponse.fromBinary(spendSummaryResponse.toBinary()),
      spendSummaryResponse,
    ),
  ).toBe(true);

  const createSpendResponse = new CreateSpendResponse({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    CreateSpendResponse.equals(
      CreateSpendResponse.fromJson(createSpendResponse.toJson()),
      createSpendResponse,
    ),
  ).toBe(true);
  expect(
    CreateSpendResponse.equals(
      CreateSpendResponse.fromBinary(createSpendResponse.toBinary()),
      createSpendResponse,
    ),
  ).toBe(true);

  const sendSpendResponse = new SendSpendResponse({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    SendSpendResponse.equals(SendSpendResponse.fromJson(sendSpendResponse.toJson()), sendSpendResponse),
  ).toBe(true);
  expect(
    SendSpendResponse.equals(SendSpendResponse.fromBinary(sendSpendResponse.toBinary()), sendSpendResponse),
  ).toBe(true);

  const findSpendsResponse = new FindSpendsResponse({
    spends: [
      new Spend({
        assetSymbol: 'MTT',
      }),
    ],
  });
  expect(
    FindSpendsResponse.equals(FindSpendsResponse.fromJson(findSpendsResponse.toJson()), findSpendsResponse),
  ).toBe(true);
  expect(
    FindSpendsResponse.equals(
      FindSpendsResponse.fromBinary(findSpendsResponse.toBinary()),
      findSpendsResponse,
    ),
  ).toBe(true);

  const findOneSpendResponse = new FindOneSpendResponse({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    FindOneSpendResponse.equals(
      FindOneSpendResponse.fromJson(findOneSpendResponse.toJson()),
      findOneSpendResponse,
    ),
  ).toBe(true);
  expect(
    FindOneSpendResponse.equals(
      FindOneSpendResponse.fromBinary(findOneSpendResponse.toBinary()),
      findOneSpendResponse,
    ),
  ).toBe(true);

  const countSpendsResponse = new CountSpendsResponse({
    count: BigInt(1),
  });
  expect(
    CountSpendsResponse.equals(
      CountSpendsResponse.fromJson(countSpendsResponse.toJson()),
      countSpendsResponse,
    ),
  ).toBe(true);
  expect(
    CountSpendsResponse.equals(
      CountSpendsResponse.fromBinary(countSpendsResponse.toBinary()),
      countSpendsResponse,
    ),
  ).toBe(true);

  const updateSpendResponse = new UpdateSpendResponse({
    spend: new Spend({
      assetSymbol: 'MTT',
    }),
  });
  expect(
    UpdateSpendResponse.equals(
      UpdateSpendResponse.fromJson(updateSpendResponse.toJson()),
      updateSpendResponse,
    ),
  ).toBe(true);
  expect(
    UpdateSpendResponse.equals(
      UpdateSpendResponse.fromBinary(updateSpendResponse.toBinary()),
      updateSpendResponse,
    ),
  ).toBe(true);

  const updateSpendBatchResponse = new UpdateSpendBatchResponse({
    spends: [
      new Spend({
        assetSymbol: 'MTT',
      }),
    ],
  });
  expect(
    UpdateSpendBatchResponse.equals(
      UpdateSpendBatchResponse.fromJson(updateSpendBatchResponse.toJson()),
      updateSpendBatchResponse,
    ),
  ).toBe(true);
  expect(
    UpdateSpendBatchResponse.equals(
      UpdateSpendBatchResponse.fromBinary(updateSpendBatchResponse.toBinary()),
      updateSpendBatchResponse,
    ),
  ).toBe(true);
});
