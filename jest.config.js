// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: [
    "src/app/_components/**/*.{ts,tsx}",
    "src/app/_utilities/**/*.{ts,tsx}",
    "!**/node_modules/**",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
        isolatedModules: true,
      },
    ],
  },
  coverageThreshold: {
    global: {
      statements: 45,
      branches: 35,
      lines: 45,
      functions: 45,
    },
  },
};