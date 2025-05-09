import { api } from '../src';

const { ApiResponse, StatusCode } = api.v1;

test('test response', () => {
  const apiResponse = new ApiResponse({
    code: new StatusCode({
      success: true,
    }),
    result: { value: '123', case: 'errorMessage' },
  });
  expect(ApiResponse.equals(ApiResponse.fromJson(apiResponse.toJson()), apiResponse)).toBe(true);
  expect(ApiResponse.equals(ApiResponse.fromBinary(apiResponse.toBinary()), apiResponse)).toBe(true);
});
