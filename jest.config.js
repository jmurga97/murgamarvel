const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",

};

module.exports = createJestConfig(config)
