import { createStitches, CSS as StitchesCSS } from '@stitches/react'

const { config, css, getCssText, keyframes, styled, theme } = createStitches()

// Types
export type CSS = StitchesCSS<typeof config>
export type { VariantProps } from '@stitches/react'
export { config, css, getCssText, keyframes, styled, theme }
