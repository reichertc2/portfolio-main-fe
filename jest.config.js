// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: [
    //"src/app/_api/**/*.{ts,tsx}",
    "src/app/_components/**/*.{ts,tsx}",
    "src/app/_utilities/**/*.{ts,tsx}",
    //"src/app/_views/**/*.{ts,tsx}",
    "!**/node_modules/**",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
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
