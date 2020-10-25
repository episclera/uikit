const {
  commonJestConfig,
  monorepoJestConfig,
  mergeConfigs,
} = require('@episclera/toolkit')

module.exports = mergeConfigs(commonJestConfig, monorepoJestConfig, {
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 30,
      functions: 60,
      lines: 60,
    },
  },
})
