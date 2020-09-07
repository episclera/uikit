/* eslint-disable import/no-extraneous-dependencies */
const {
  commonEslintConfig,
  monorepoEslintConfig,
  mergeConfigs,
} = require('@episclera/toolkit')

module.exports = mergeConfigs(commonEslintConfig, monorepoEslintConfig)
