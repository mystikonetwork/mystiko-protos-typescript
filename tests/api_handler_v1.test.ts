import { api, core, storage } from '../src';

const { Condition, ConditionOperator, Order, OrderBy, QueryFilter, SubFilter, SubFilterOperator } =
  storage.v1;
const { Wallet, Account } = core.document.v1;
const { CreateWalletOptions, CreateAccountOptions } = core.handler.v1;
const {
  CreateWalletRequest,
  CheckCurrentRequest,
  CheckPasswordRequest,
  UpdatePasswordRequest,
  ExportMnemonicPhraseRequest,
  CreateAccountRequest,
  CountAccountRequest,
  FindAccountRequest,
  FindAccountByIdentifierRequest,
  UpdateAccountRequest,
  UpdateEncryptionRequest,
  ExportSecretKeyRequest,
} = api.v1;
const {
  CreateWalletResponse,
  CheckCurrentResponse,
  CheckPasswordResponse,
  UpdatePasswordResponse,
  ExportMnemonicPhraseResponse,
  CreateAccountResponse,
  CountAccountResponse,
  FindAccountResponse,
  FindAccountByIdentifierResponse,
  UpdateAccountResponse,
  UpdateEncryptionResponse,
  ExportSecretKeyResponse,
} = api.v1;

test('test request', () => {
  const createWalletRequest = new CreateWalletRequest({
    options: new CreateWalletOptions({
      password: 'test password',
      mnemonicPhrase: '123',
    }),
  });
  expect(
    CreateWalletRequest.equals(
      createWalletRequest.fromJson(createWalletRequest.toJson()),
      createWalletRequest,
    ),
  ).toBe(true);
  const checkCurrentRequest = new CheckCurrentRequest({});
  expect(
    CheckCurrentRequest.equals(
      checkCurrentRequest.fromJson(checkCurrentRequest.toJson()),
      checkCurrentRequest,
    ),
  ).toBe(true);
  const checkPasswordRequest = new CheckPasswordRequest({
    password: 'test password',
  });
  expect(
    CheckPasswordRequest.equals(
      checkPasswordRequest.fromJson(checkPasswordRequest.toJson()),
      checkPasswordRequest,
    ),
  ).toBe(true);
  const updatePasswordRequest = new UpdatePasswordRequest({
    oldPassword: 'old password',
    newPassword: 'new password',
  });
  expect(
    UpdatePasswordRequest.equals(
      updatePasswordRequest.fromJson(updatePasswordRequest.toJson()),
      updatePasswordRequest,
    ),
  ).toBe(true);
  const exportMnemonicPhraseRequest = new ExportMnemonicPhraseRequest({
    password: 'test password',
  });
  expect(
    ExportMnemonicPhraseRequest.equals(
      exportMnemonicPhraseRequest.fromJson(exportMnemonicPhraseRequest.toJson()),
      exportMnemonicPhraseRequest,
    ),
  ).toBe(true);
  const createAccountRequest = new CreateAccountRequest({
    options: new CreateAccountOptions({
      walletPassword: 'password',
      name: 'name',
      secretKey: 'secret key',
    }),
  });
  expect(
    CreateAccountRequest.equals(
      createAccountRequest.fromJson(createAccountRequest.toJson()),
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
      countAccountRequest.fromJson(countAccountRequest.toJson()),
      countAccountRequest,
    ),
  ).toBe(true);
  const accountRequest = new FindAccountRequest({
    condition: {
      value: queryFilter,
      case: 'filter',
    },
  });
  expect(FindAccountRequest.equals(accountRequest.fromJson(accountRequest.toJson()), accountRequest)).toBe(
    true,
  );
  const accountByIdentifierRequest = new FindAccountByIdentifierRequest({
    identifier: { value: '123', case: 'id' },
  });
  expect(
    FindAccountByIdentifierRequest.equals(
      accountByIdentifierRequest.fromJson(accountByIdentifierRequest.toJson()),
      accountByIdentifierRequest,
    ),
  ).toBe(true);
  const updateAccountRequest = new UpdateAccountRequest({
    identifier: { value: '123', case: 'id' },
  });
  expect(
    UpdateAccountRequest.equals(
      updateAccountRequest.fromJson(updateAccountRequest.toJson()),
      updateAccountRequest,
    ),
  ).toBe(true);
  const updateEncryptionRequest = new UpdateEncryptionRequest({
    oldWalletPassword: 'new',
    newWalletPassword: 'old',
  });
  expect(
    UpdateEncryptionRequest.equals(
      updateEncryptionRequest.fromJson(updateEncryptionRequest.toJson()),
      updateEncryptionRequest,
    ),
  ).toBe(true);
  const exportSecretKeyRequest = new ExportSecretKeyRequest({
    identifier: { value: '123', case: 'id' },
  });
  expect(
    ExportSecretKeyRequest.equals(
      exportSecretKeyRequest.fromJson(exportSecretKeyRequest.toJson()),
      exportSecretKeyRequest,
    ),
  ).toBe(true);
});

test('test response', () => {
  const wallet = new Wallet({
    id: '123',
    encryptedEntropy: '123',
    hashedPassword: 'hash',
    accountNonce: 1,
  });
  const createWalletResponse = new CreateWalletResponse({
    wallet,
  });
  expect(
    CreateWalletResponse.equals(
      createWalletResponse.fromJson(createWalletResponse.toJson()),
      createWalletResponse,
    ),
  ).toBe(true);
  const checkCurrentResponse = new CheckCurrentResponse({
    wallet,
  });
  expect(
    CheckCurrentResponse.equals(
      checkCurrentResponse.fromJson(checkCurrentResponse.toJson()),
      checkCurrentResponse,
    ),
  ).toBe(true);
  const checkPasswordResponse = new CheckPasswordResponse({
    wallet,
  });
  expect(
    CheckPasswordResponse.equals(
      checkPasswordResponse.fromJson(checkPasswordResponse.toJson()),
      checkPasswordResponse,
    ),
  ).toBe(true);
  const updatePasswordResponse = new UpdatePasswordResponse({
    wallet,
  });
  expect(
    UpdatePasswordResponse.equals(
      updatePasswordResponse.fromJson(updatePasswordResponse.toJson()),
      updatePasswordResponse,
    ),
  ).toBe(true);
  const exportMnemonicPhraseResponse = new ExportMnemonicPhraseResponse({
    mnemonicPhrase: 'abc',
  });
  expect(
    ExportMnemonicPhraseResponse.equals(
      exportMnemonicPhraseResponse.fromJson(exportMnemonicPhraseResponse.toJson()),
      exportMnemonicPhraseResponse,
    ),
  ).toBe(true);

  const account = new Account({
    id: 'id',
    name: 'name',
  });
  const createAccountResponse = new CreateAccountResponse({ account });
  expect(
    CreateAccountResponse.equals(
      createAccountResponse.fromJson(createAccountResponse.toJson()),
      createAccountResponse,
    ),
  ).toBe(true);
  const countAccountResponse = new CountAccountResponse({ count: BigInt(1) });
  expect(
    CountAccountResponse.equals(
      countAccountResponse.fromJson(countAccountResponse.toJson()),
      countAccountResponse,
    ),
  ).toBe(true);
  const accountResponse = new FindAccountResponse({
    account: [account],
  });
  expect(
    FindAccountResponse.equals(accountResponse.fromJson(accountResponse.toJson()), accountResponse),
  ).toBe(true);
  const accountByIdentifierResponse = new FindAccountByIdentifierResponse({ account });
  expect(
    FindAccountByIdentifierResponse.equals(
      accountByIdentifierResponse.fromJson(accountByIdentifierResponse.toJson()),
      accountByIdentifierResponse,
    ),
  ).toBe(true);
  const updateAccountResponse = new UpdateAccountResponse({ account });
  expect(
    UpdateAccountResponse.equals(
      updateAccountResponse.fromJson(updateAccountResponse.toJson()),
      updateAccountResponse,
    ),
  ).toBe(true);
  const updateEncryptionResponse = new UpdateEncryptionResponse({ account: [account] });
  expect(
    UpdateEncryptionResponse.equals(
      updateEncryptionResponse.fromJson(updateEncryptionResponse.toJson()),
      updateEncryptionResponse,
    ),
  ).toBe(true);
  const exportSecretKeyResponse = new ExportSecretKeyResponse({ secretKey: 'secret' });
  expect(
    ExportSecretKeyResponse.equals(
      exportSecretKeyResponse.fromJson(exportSecretKeyResponse.toJson()),
      exportSecretKeyResponse,
    ),
  ).toBe(true);
});
