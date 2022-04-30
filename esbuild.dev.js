const esbuild = require('esbuild')
const { commonConfig, constants } = require('./common-build.config')

const { SRC_ENTRY_POINT, ESM_OUT_DIR } = constants

esbuild
  .build({
    ...commonConfig,
    entryPoints: ['./src/index.ts'],
    outdir: './dist/esm',
    sourcemap: true,
    format: 'esm',
    watch: true,
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
  })
  .catch(() => process.exit(1))
