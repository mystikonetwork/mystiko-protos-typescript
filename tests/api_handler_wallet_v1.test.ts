import { api, core } from '../src';

const { Wallet } = core.document.v1;
const { CreateWalletOptions } = core.handler.v1;
const { CreateWalletRequest, CheckPasswordRequest, UpdatePasswordRequest, ExportMnemonicPhraseRequest } =
  api.v1;
const {
  CreateWalletResponse,
  CheckCurrentResponse,
  CheckPasswordResponse,
  UpdatePasswordResponse,
  ExportMnemonicPhraseResponse,
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
      CreateWalletRequest.fromJson(createWalletRequest.toJson()),
      createWalletRequest,
    ),
  ).toBe(true);
  expect(
    CreateWalletRequest.equals(
      CreateWalletRequest.fromBinary(createWalletRequest.toBinary()),
      createWalletRequest,
    ),
  ).toBe(true);
  const checkPasswordRequest = new CheckPasswordRequest({
    password: 'test password',
  });
  expect(
    CheckPasswordRequest.equals(
      CheckPasswordRequest.fromJson(checkPasswordRequest.toJson()),
      checkPasswordRequest,
    ),
  ).toBe(true);
  expect(
    CheckPasswordRequest.equals(
      CheckPasswordRequest.fromBinary(checkPasswordRequest.toBinary()),
      checkPasswordRequest,
    ),
  ).toBe(true);
  const updatePasswordRequest = new UpdatePasswordRequest({
    oldPassword: 'old password',
    newPassword: 'new password',
  });
  expect(
    UpdatePasswordRequest.equals(
      UpdatePasswordRequest.fromJson(updatePasswordRequest.toJson()),
      updatePasswordRequest,
    ),
  ).toBe(true);
  expect(
    UpdatePasswordRequest.equals(
      UpdatePasswordRequest.fromBinary(updatePasswordRequest.toBinary()),
      updatePasswordRequest,
    ),
  ).toBe(true);
  const exportMnemonicPhraseRequest = new ExportMnemonicPhraseRequest({
    password: 'test password',
  });
  expect(
    ExportMnemonicPhraseRequest.equals(
      ExportMnemonicPhraseRequest.fromJson(exportMnemonicPhraseRequest.toJson()),
      exportMnemonicPhraseRequest,
    ),
  ).toBe(true);
  expect(
    ExportMnemonicPhraseRequest.equals(
      ExportMnemonicPhraseRequest.fromBinary(exportMnemonicPhraseRequest.toBinary()),
      exportMnemonicPhraseRequest,
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
      CreateWalletResponse.fromJson(createWalletResponse.toJson()),
      createWalletResponse,
    ),
  ).toBe(true);
  expect(
    CreateWalletResponse.equals(
      CreateWalletResponse.fromBinary(createWalletResponse.toBinary()),
      createWalletResponse,
    ),
  ).toBe(true);
  const checkCurrentResponse = new CheckCurrentResponse({
    wallet,
  });
  expect(
    CheckCurrentResponse.equals(
      CheckCurrentResponse.fromJson(checkCurrentResponse.toJson()),
      checkCurrentResponse,
    ),
  ).toBe(true);
  expect(
    CheckCurrentResponse.equals(
      CheckCurrentResponse.fromBinary(checkCurrentResponse.toBinary()),
      checkCurrentResponse,
    ),
  ).toBe(true);
  const checkPasswordResponse = new CheckPasswordResponse({
    wallet,
  });
  expect(
    CheckPasswordResponse.equals(
      CheckPasswordResponse.fromJson(checkPasswordResponse.toJson()),
      checkPasswordResponse,
    ),
  ).toBe(true);
  expect(
    CheckPasswordResponse.equals(
      CheckPasswordResponse.fromBinary(checkPasswordResponse.toBinary()),
      checkPasswordResponse,
    ),
  ).toBe(true);
  const updatePasswordResponse = new UpdatePasswordResponse({
    wallet,
  });
  expect(
    UpdatePasswordResponse.equals(
      UpdatePasswordResponse.fromJson(updatePasswordResponse.toJson()),
      updatePasswordResponse,
    ),
  ).toBe(true);
  expect(
    UpdatePasswordResponse.equals(
      UpdatePasswordResponse.fromBinary(updatePasswordResponse.toBinary()),
      updatePasswordResponse,
    ),
  ).toBe(true);
  const exportMnemonicPhraseResponse = new ExportMnemonicPhraseResponse({
    mnemonicPhrase: 'abc',
  });
  expect(
    ExportMnemonicPhraseResponse.equals(
      ExportMnemonicPhraseResponse.fromJson(exportMnemonicPhraseResponse.toJson()),
      exportMnemonicPhraseResponse,
    ),
  ).toBe(true);
  expect(
    ExportMnemonicPhraseResponse.equals(
      ExportMnemonicPhraseResponse.fromBinary(exportMnemonicPhraseResponse.toBinary()),
      exportMnemonicPhraseResponse,
    ),
  ).toBe(true);
});
