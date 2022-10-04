module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
    },
  },
};
