import { core } from '../src';
import { ConfigOptions } from '../src/gen/mystiko/common/v1/config_pb';
import { LoaderConfig } from '../src/gen/mystiko/loader/v1/loader_pb';

const { MystikoOptions } = core.v1;

test('test core v1', () => {
  const configRequest = new MystikoOptions({
    configOptions: new ConfigOptions({
      filePath: 'file path',
    }),
    loaderConfig: new LoaderConfig({}),
    dbPath: 'db path',
  });
  expect(MystikoOptions.equals(MystikoOptions.fromJson(configRequest.toJson()), configRequest)).toBe(true);
  expect(MystikoOptions.equals(MystikoOptions.fromBinary(configRequest.toBinary()), configRequest)).toBe(
    true,
  );
});
