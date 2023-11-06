module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/{components,utils,hooks}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
};
