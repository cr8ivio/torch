const path = require('path')
const packageJson = require('./package.json')

const SRC_DIR = path.resolve(__dirname, '..', 'src')
const OUT_BASE_DIR = path.resolve(__dirname, '..')
const ESM_OUT_DIR = path.resolve(OUT_BASE_DIR, 'dist', 'esm')
const CJS_OUT_DIR = path.resolve(OUT_BASE_DIR, 'dist', 'cjs')
const SRC_ENTRY_POINT = path.resolve(SRC_DIR, 'index.ts')
const TARGET = 'esnext'

const commonBuildConfig = {
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
  },
  outbase: OUT_BASE_DIR,
  bundle: true,
  jsxFactory: 'createElement',
  jsxFragment: 'Fragment',
  target: [TARGET],
  logLevel: 'debug',
  external: [...Object.keys(packageJson.peerDependencies || {})],
}

module.exports = {
  commonConfig: commonBuildConfig,
  constants: {
    OUT_BASE_DIR,
    ESM_OUT_DIR,
    CJS_OUT_DIR,
    TARGET,
    SRC_ENTRY_POINT,
  },
}
