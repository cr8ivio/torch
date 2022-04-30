const esbuild = require('esbuild')
const { globPlugin } = require('esbuild-plugin-glob')
const { commonConfig } = require('./common-build.config')

esbuild
  .build({
    ...commonConfig,
    minify: true,
    entryPoints: ['./src/index.ts'],
    outdir: './dist/cjs',
    format: 'cjs',
    banner: {
      js: "const { createElement, Fragment } = require('react');\n",
    },
  })
  .catch(() => process.exit(1))

esbuild
  .build({
    ...commonConfig,
    minify: true,
    entryPoints: [
      './src/index.ts',
      './src/components/**/index.tsx',
      './src/lib/stitches.config.ts',
    ],
    outdir: './dist/esm',
    splitting: true,
    format: 'esm',
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
    plugins: [globPlugin()],
  })
  .catch(() => process.exit(1))
