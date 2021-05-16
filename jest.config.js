module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/src/modules/$1',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
}
