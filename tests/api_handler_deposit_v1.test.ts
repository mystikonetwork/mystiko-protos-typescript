import { api, core, storage, service } from '../src';

const {
  ColumnValuePair,
  CountDepositRequest,
  CountDepositResponse,
  CreateDepositRequest,
  CreateDepositResponse,
  DeleteDepositBatchRequest,
  DeleteDepositByFilterRequest,
  DeleteDepositRequest,
  FindDepositByIdRequest,
  FindDepositRequest,
  FindDepositResponse,
  FindOneDepositResponse,
  QuoteRequest,
  QuoteResponse,
  SendRequest,
  SendResponse,
  SendWithGrpcRequest,
  SummaryRequest,
  SummaryResponse,
  UpdateAllDepositRequest,
  UpdateDepositBatchRequest,
  UpdateDepositBatchResponse,
  UpdateDepositByFilterRequest,
  UpdateDepositRequest,
  UpdateDepositResponse,
} = api.v1;
const { Deposit } = core.document.v1;
const { CreateDepositOptions, DepositQuote, DepositSummary, QuoteDepositOptions, SendDepositOptions } =
  core.handler.v1;
const { ClientOptions } = service.v1;
const { Condition, ConditionOperator, Order, OrderBy, QueryFilter, SubFilter, SubFilterOperator } =
  storage.v1;

test('test request', () => {
  const quoteRequest = new QuoteRequest({
    options: new QuoteDepositOptions({
      assetSymbol: 'MTT',
    }),
  });
  expect(QuoteRequest.equals(QuoteRequest.fromJson(quoteRequest.toJson()), quoteRequest)).toBe(true);
  expect(QuoteRequest.equals(QuoteRequest.fromBinary(quoteRequest.toBinary()), quoteRequest)).toBe(true);

  const summaryRequest = new SummaryRequest({
    options: new CreateDepositOptions({
      assetSymbol: 'MTT',
      shieldedAddress: 'address',
    }),
  });
  expect(SummaryRequest.equals(SummaryRequest.fromJson(summaryRequest.toJson()), summaryRequest)).toBe(true);
  expect(SummaryRequest.equals(SummaryRequest.fromBinary(summaryRequest.toBinary()), summaryRequest)).toBe(
    true,
  );

  const depositRequest = new CreateDepositRequest({
    options: new CreateDepositOptions({
      assetSymbol: 'MTT',
      shieldedAddress: 'address',
    }),
  });
  expect(
    CreateDepositRequest.equals(CreateDepositRequest.fromJson(depositRequest.toJson()), depositRequest),
  ).toBe(true);
  expect(
    CreateDepositRequest.equals(CreateDepositRequest.fromBinary(depositRequest.toBinary()), depositRequest),
  ).toBe(true);

  const sendRequest = new SendRequest({
    options: new SendDepositOptions({
      depositId: '123',
      privateKey: '456',
    }),
  });
  expect(SendRequest.equals(SendRequest.fromJson(sendRequest.toJson()), sendRequest)).toBe(true);
  expect(SendRequest.equals(SendRequest.fromBinary(sendRequest.toBinary()), sendRequest)).toBe(true);

  const sendWithGrpcRequest = new SendWithGrpcRequest({
    sendOptions: new SendDepositOptions({
      depositId: '123',
      privateKey: '456',
    }),
    clientOptions: new ClientOptions({
      host: 'host',
      port: 21122,
    }),
  });
  expect(
    SendWithGrpcRequest.equals(
      SendWithGrpcRequest.fromJson(sendWithGrpcRequest.toJson()),
      sendWithGrpcRequest,
    ),
  ).toBe(true);
  expect(
    SendWithGrpcRequest.equals(
      SendWithGrpcRequest.fromBinary(sendWithGrpcRequest.toBinary()),
      sendWithGrpcRequest,
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
  const findDepositRequest = new FindDepositRequest({
    filter: queryFilter,
  });
  expect(
    FindDepositRequest.equals(FindDepositRequest.fromJson(findDepositRequest.toJson()), findDepositRequest),
  ).toBe(true);
  expect(
    FindDepositRequest.equals(
      FindDepositRequest.fromBinary(findDepositRequest.toBinary()),
      findDepositRequest,
    ),
  ).toBe(true);

  const findDepositByIdRequest = new FindDepositByIdRequest({
    id: '123',
  });
  expect(
    FindDepositByIdRequest.equals(
      FindDepositByIdRequest.fromJson(findDepositByIdRequest.toJson()),
      findDepositByIdRequest,
    ),
  ).toBe(true);
  expect(
    FindDepositByIdRequest.equals(
      FindDepositByIdRequest.fromBinary(findDepositByIdRequest.toBinary()),
      findDepositByIdRequest,
    ),
  ).toBe(true);

  const countDepositRequest = new CountDepositRequest({
    filter: queryFilter,
  });
  expect(
    CountDepositRequest.equals(
      CountDepositRequest.fromJson(countDepositRequest.toJson()),
      countDepositRequest,
    ),
  ).toBe(true);
  expect(
    CountDepositRequest.equals(
      CountDepositRequest.fromBinary(countDepositRequest.toBinary()),
      countDepositRequest,
    ),
  ).toBe(true);

  const updateDepositRequest = new UpdateDepositRequest({
    deposit: new Deposit({
      id: '123',
      contractAddress: 'address',
    }),
  });
  expect(
    UpdateDepositRequest.equals(
      UpdateDepositRequest.fromJson(updateDepositRequest.toJson()),
      updateDepositRequest,
    ),
  ).toBe(true);
  expect(
    UpdateDepositRequest.equals(
      UpdateDepositRequest.fromBinary(updateDepositRequest.toBinary()),
      updateDepositRequest,
    ),
  ).toBe(true);

  const updateDepositsRequest = new UpdateDepositBatchRequest({
    deposits: [
      new Deposit({
        id: '123',
        contractAddress: 'address',
      }),
    ],
  });
  expect(
    UpdateDepositBatchRequest.equals(
      UpdateDepositBatchRequest.fromJson(updateDepositsRequest.toJson()),
      updateDepositsRequest,
    ),
  ).toBe(true);
  expect(
    UpdateDepositBatchRequest.equals(
      UpdateDepositBatchRequest.fromBinary(updateDepositsRequest.toBinary()),
      updateDepositsRequest,
    ),
  ).toBe(true);

  const updateDepositByFilterRequest = new UpdateDepositByFilterRequest({
    filter: queryFilter,
  });
  expect(
    UpdateDepositByFilterRequest.equals(
      UpdateDepositByFilterRequest.fromJson(updateDepositByFilterRequest.toJson()),
      updateDepositByFilterRequest,
    ),
  ).toBe(true);
  expect(
    UpdateDepositByFilterRequest.equals(
      UpdateDepositByFilterRequest.fromBinary(updateDepositByFilterRequest.toBinary()),
      updateDepositByFilterRequest,
    ),
  ).toBe(true);

  const updateAllDepositRequest = new UpdateAllDepositRequest({
    columnValues: [
      new ColumnValuePair({
        column: 'test',
      }),
    ],
  });
  expect(
    UpdateAllDepositRequest.equals(
      UpdateAllDepositRequest.fromJson(updateAllDepositRequest.toJson()),
      updateAllDepositRequest,
    ),
  ).toBe(true);
  expect(
    UpdateAllDepositRequest.equals(
      UpdateAllDepositRequest.fromBinary(updateAllDepositRequest.toBinary()),
      updateAllDepositRequest,
    ),
  ).toBe(true);

  const deleteDepositRequest = new DeleteDepositRequest({
    deposit: new Deposit({
      id: '123',
    }),
  });
  expect(
    DeleteDepositRequest.equals(
      DeleteDepositRequest.fromJson(deleteDepositRequest.toJson()),
      deleteDepositRequest,
    ),
  ).toBe(true);
  expect(
    DeleteDepositRequest.equals(
      DeleteDepositRequest.fromBinary(deleteDepositRequest.toBinary()),
      deleteDepositRequest,
    ),
  ).toBe(true);

  const deleteDepositBatchRequest = new DeleteDepositBatchRequest({
    deposits: [
      new Deposit({
        id: '123',
      }),
    ],
  });
  expect(
    DeleteDepositBatchRequest.equals(
      DeleteDepositBatchRequest.fromJson(deleteDepositBatchRequest.toJson()),
      deleteDepositBatchRequest,
    ),
  ).toBe(true);
  expect(
    DeleteDepositBatchRequest.equals(
      DeleteDepositBatchRequest.fromBinary(deleteDepositBatchRequest.toBinary()),
      deleteDepositBatchRequest,
    ),
  ).toBe(true);

  const deleteDepositByFilterRequest = new DeleteDepositByFilterRequest({
    filter: queryFilter,
  });
  expect(
    DeleteDepositByFilterRequest.equals(
      DeleteDepositByFilterRequest.fromJson(deleteDepositByFilterRequest.toJson()),
      deleteDepositByFilterRequest,
    ),
  ).toBe(true);
  expect(
    DeleteDepositByFilterRequest.equals(
      DeleteDepositByFilterRequest.fromBinary(deleteDepositByFilterRequest.toBinary()),
      deleteDepositByFilterRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const quoteResponse = new QuoteResponse({
    quote: new DepositQuote({
      assetSymbol: 'MTT',
    }),
  });
  expect(QuoteResponse.equals(QuoteResponse.fromJson(quoteResponse.toJson()), quoteResponse)).toBe(true);
  expect(QuoteResponse.equals(QuoteResponse.fromBinary(quoteResponse.toBinary()), quoteResponse)).toBe(true);

  const summaryResponse = new SummaryResponse({
    summary: new DepositSummary({
      assetSymbol: 'MTT',
      assetDecimals: 18,
    }),
  });
  expect(SummaryResponse.equals(SummaryResponse.fromJson(summaryResponse.toJson()), summaryResponse)).toBe(
    true,
  );
  expect(
    SummaryResponse.equals(SummaryResponse.fromBinary(summaryResponse.toBinary()), summaryResponse),
  ).toBe(true);

  const depositResponse = new CreateDepositResponse({
    deposit: new Deposit({
      assetAddress: '0x123',
      assetDecimals: 18,
    }),
  });
  expect(
    CreateDepositResponse.equals(CreateDepositResponse.fromJson(depositResponse.toJson()), depositResponse),
  ).toBe(true);
  expect(
    CreateDepositResponse.equals(
      CreateDepositResponse.fromBinary(depositResponse.toBinary()),
      depositResponse,
    ),
  ).toBe(true);

  const sendResponse = new SendResponse({
    deposit: new Deposit({
      assetAddress: '0x123',
      assetDecimals: 18,
    }),
  });
  expect(SendResponse.equals(SendResponse.fromJson(sendResponse.toJson()), sendResponse)).toBe(true);
  expect(SendResponse.equals(SendResponse.fromBinary(sendResponse.toBinary()), sendResponse)).toBe(true);

  const findResponse = new FindDepositResponse({
    deposits: [
      new Deposit({
        assetAddress: '0x123',
        assetDecimals: 18,
      }),
    ],
  });
  expect(FindDepositResponse.equals(FindDepositResponse.fromJson(findResponse.toJson()), findResponse)).toBe(
    true,
  );
  expect(
    FindDepositResponse.equals(FindDepositResponse.fromBinary(findResponse.toBinary()), findResponse),
  ).toBe(true);

  const findOneResponse = new FindOneDepositResponse({
    deposit: new Deposit({
      assetAddress: '0x123',
      assetDecimals: 18,
    }),
  });
  expect(
    FindOneDepositResponse.equals(FindOneDepositResponse.fromJson(findOneResponse.toJson()), findOneResponse),
  ).toBe(true);
  expect(
    FindOneDepositResponse.equals(
      FindOneDepositResponse.fromBinary(findOneResponse.toBinary()),
      findOneResponse,
    ),
  ).toBe(true);

  const countResponse = new CountDepositResponse({
    count: BigInt(1),
  });
  expect(
    CountDepositResponse.equals(CountDepositResponse.fromJson(countResponse.toJson()), countResponse),
  ).toBe(true);
  expect(
    CountDepositResponse.equals(CountDepositResponse.fromBinary(countResponse.toBinary()), countResponse),
  ).toBe(true);

  const updateResponse = new UpdateDepositResponse({
    deposit: new Deposit({
      assetAddress: '0x123',
      assetDecimals: 18,
    }),
  });
  expect(
    UpdateDepositResponse.equals(UpdateDepositResponse.fromJson(updateResponse.toJson()), updateResponse),
  ).toBe(true);
  expect(
    UpdateDepositResponse.equals(UpdateDepositResponse.fromBinary(updateResponse.toBinary()), updateResponse),
  ).toBe(true);

  const updateBatchResponse = new UpdateDepositBatchResponse({
    deposits: [
      new Deposit({
        assetAddress: '0x123',
        assetDecimals: 18,
      }),
    ],
  });
  expect(
    UpdateDepositBatchResponse.equals(
      UpdateDepositBatchResponse.fromJson(updateBatchResponse.toJson()),
      updateBatchResponse,
    ),
  ).toBe(true);
  expect(
    UpdateDepositBatchResponse.equals(
      UpdateDepositBatchResponse.fromBinary(updateBatchResponse.toBinary()),
      updateBatchResponse,
    ),
  ).toBe(true);
});
