import { api, core, storage } from '../src';

const { Condition, ConditionOperator, Order, OrderBy, QueryFilter, SubFilter, SubFilterOperator } =
  storage.v1;
const { Account } = core.document.v1;
const { CreateAccountOptions } = core.handler.v1;
const {
  CreateAccountRequest,
  CountAccountRequest,
  FindAccountRequest,
  FindAccountByIdentifierRequest,
  UpdateAccountRequest,
  UpdateEncryptionRequest,
  ExportSecretKeyRequest,
} = api.handler.v1;
const {
  CreateAccountResponse,
  CountAccountResponse,
  FindAccountResponse,
  FindAccountByIdentifierResponse,
  UpdateAccountResponse,
  UpdateEncryptionResponse,
  ExportSecretKeyResponse,
} = api.handler.v1;

test('test request', () => {
  const createAccountRequest = new CreateAccountRequest({
    options: new CreateAccountOptions({
      walletPassword: 'password',
      name: 'name',
      secretKey: 'secret key',
    }),
  });
  expect(
    CreateAccountRequest.equals(
      CreateAccountRequest.fromJson(createAccountRequest.toJson()),
      createAccountRequest,
    ),
  ).toBe(true);
  expect(
    CreateAccountRequest.equals(
      CreateAccountRequest.fromBinary(createAccountRequest.toBinary()),
      createAccountRequest,
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
    limit: BigInt(1),
    offset: BigInt(2),
    conditionsOperator: ConditionOperator.AND,
    orderBy: new OrderBy({
      columns: ['test'],
      order: Order.ASC,
    }),
  });
  const countAccountRequest = new CountAccountRequest({
    filter: queryFilter,
  });
  expect(
    CountAccountRequest.equals(
      CountAccountRequest.fromJson(countAccountRequest.toJson()),
      countAccountRequest,
    ),
  ).toBe(true);
  expect(
    CountAccountRequest.equals(
      CountAccountRequest.fromBinary(countAccountRequest.toBinary()),
      countAccountRequest,
    ),
  ).toBe(true);
  const accountRequest = new FindAccountRequest({
    filter: queryFilter,
  });
  expect(
    FindAccountRequest.equals(FindAccountRequest.fromJson(accountRequest.toJson()), accountRequest),
  ).toBe(true);
  expect(
    FindAccountRequest.equals(FindAccountRequest.fromBinary(accountRequest.toBinary()), accountRequest),
  ).toBe(true);
  const accountByIdentifierRequest = new FindAccountByIdentifierRequest({
    identifier: 'id123456',
  });
  expect(
    FindAccountByIdentifierRequest.equals(
      FindAccountByIdentifierRequest.fromJson(accountByIdentifierRequest.toJson()),
      accountByIdentifierRequest,
    ),
  ).toBe(true);
  expect(
    FindAccountByIdentifierRequest.equals(
      FindAccountByIdentifierRequest.fromBinary(accountByIdentifierRequest.toBinary()),
      accountByIdentifierRequest,
    ),
  ).toBe(true);
  const updateAccountRequest = new UpdateAccountRequest({
    identifier: 'id123456',
  });
  expect(
    UpdateAccountRequest.equals(
      UpdateAccountRequest.fromJson(updateAccountRequest.toJson()),
      updateAccountRequest,
    ),
  ).toBe(true);
  expect(
    UpdateAccountRequest.equals(
      UpdateAccountRequest.fromBinary(updateAccountRequest.toBinary()),
      updateAccountRequest,
    ),
  ).toBe(true);
  const updateEncryptionRequest = new UpdateEncryptionRequest({
    oldWalletPassword: 'new',
    newWalletPassword: 'old',
  });
  expect(
    UpdateEncryptionRequest.equals(
      UpdateEncryptionRequest.fromJson(updateEncryptionRequest.toJson()),
      updateEncryptionRequest,
    ),
  ).toBe(true);
  expect(
    UpdateEncryptionRequest.equals(
      UpdateEncryptionRequest.fromBinary(updateEncryptionRequest.toBinary()),
      updateEncryptionRequest,
    ),
  ).toBe(true);
  const exportSecretKeyRequest = new ExportSecretKeyRequest({
    identifier: 'id123456',
  });
  expect(
    ExportSecretKeyRequest.equals(
      ExportSecretKeyRequest.fromJson(exportSecretKeyRequest.toJson()),
      exportSecretKeyRequest,
    ),
  ).toBe(true);
  expect(
    ExportSecretKeyRequest.equals(
      ExportSecretKeyRequest.fromBinary(exportSecretKeyRequest.toBinary()),
      exportSecretKeyRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const account = new Account({
    id: 'id',
    name: 'name',
  });
  const createAccountResponse = new CreateAccountResponse({ account });
  expect(
    CreateAccountResponse.equals(
      CreateAccountResponse.fromJson(createAccountResponse.toJson()),
      createAccountResponse,
    ),
  ).toBe(true);
  expect(
    CreateAccountResponse.equals(
      CreateAccountResponse.fromBinary(createAccountResponse.toBinary()),
      createAccountResponse,
    ),
  ).toBe(true);
  const countAccountResponse = new CountAccountResponse({ count: BigInt(1) });
  expect(
    CountAccountResponse.equals(
      CountAccountResponse.fromJson(countAccountResponse.toJson()),
      countAccountResponse,
    ),
  ).toBe(true);
  expect(
    CountAccountResponse.equals(
      CountAccountResponse.fromBinary(countAccountResponse.toBinary()),
      countAccountResponse,
    ),
  ).toBe(true);
  const accountResponse = new FindAccountResponse({
    account: [account],
  });
  expect(
    FindAccountResponse.equals(FindAccountResponse.fromJson(accountResponse.toJson()), accountResponse),
  ).toBe(true);
  expect(
    FindAccountResponse.equals(FindAccountResponse.fromBinary(accountResponse.toBinary()), accountResponse),
  ).toBe(true);
  const accountByIdentifierResponse = new FindAccountByIdentifierResponse({ account });
  expect(
    FindAccountByIdentifierResponse.equals(
      FindAccountByIdentifierResponse.fromJson(accountByIdentifierResponse.toJson()),
      accountByIdentifierResponse,
    ),
  ).toBe(true);
  expect(
    FindAccountByIdentifierResponse.equals(
      FindAccountByIdentifierResponse.fromBinary(accountByIdentifierResponse.toBinary()),
      accountByIdentifierResponse,
    ),
  ).toBe(true);
  const updateAccountResponse = new UpdateAccountResponse({ account });
  expect(
    UpdateAccountResponse.equals(
      UpdateAccountResponse.fromJson(updateAccountResponse.toJson()),
      updateAccountResponse,
    ),
  ).toBe(true);
  expect(
    UpdateAccountResponse.equals(
      UpdateAccountResponse.fromBinary(updateAccountResponse.toBinary()),
      updateAccountResponse,
    ),
  ).toBe(true);
  const updateEncryptionResponse = new UpdateEncryptionResponse({ account: [account] });
  expect(
    UpdateEncryptionResponse.equals(
      UpdateEncryptionResponse.fromJson(updateEncryptionResponse.toJson()),
      updateEncryptionResponse,
    ),
  ).toBe(true);
  expect(
    UpdateEncryptionResponse.equals(
      UpdateEncryptionResponse.fromBinary(updateEncryptionResponse.toBinary()),
      updateEncryptionResponse,
    ),
  ).toBe(true);
  const exportSecretKeyResponse = new ExportSecretKeyResponse({ secretKey: 'secret' });
  expect(
    ExportSecretKeyResponse.equals(
      ExportSecretKeyResponse.fromJson(exportSecretKeyResponse.toJson()),
      exportSecretKeyResponse,
    ),
  ).toBe(true);
  expect(
    ExportSecretKeyResponse.equals(
      ExportSecretKeyResponse.fromBinary(exportSecretKeyResponse.toBinary()),
      exportSecretKeyResponse,
    ),
  ).toBe(true);
});
