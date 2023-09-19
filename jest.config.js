/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: {
          esModuleInterop: true,
        },
      },
    ],
  },
  moduleNameMapper: {
    '^(.+)_pb\\.js$': '$1_pb',
    '^(.+)_connect\\.js$': '$1_connect',
  },
};
