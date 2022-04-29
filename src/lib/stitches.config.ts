import { createStitches, CSS as StitchesCSS } from '@stitches/react'
import {
  BorderStyles,
  BorderWidths,
  Colors,
  FontSizes,
  FontWeights,
  Fonts,
  LetterSpacings,
  LineHeights,
  Radii,
  Shadows,
  Sizes,
  Space,
  Transitions,
  ZIndices,
} from '@lib/theme/tokens'

const { config, css, getCssText, keyframes, styled, theme } = createStitches({
  theme: {
    borderStyles: BorderStyles,
    borderWidths: BorderWidths,
    colors: Colors,
    fontSizes: FontSizes,
    fontWeights: FontWeights,
    fonts: Fonts,
    letterSpacings: LetterSpacings,
    lineHeights: LineHeights,
    radii: Radii,
    shadows: Shadows,
    sizes: Sizes,
    space: Space,
    transitions: Transitions,
    zIndices: ZIndices,
  },
})

// Types
export type CSS = StitchesCSS<typeof config>
export type { VariantProps } from '@stitches/react'
export { config, css, getCssText, keyframes, styled, theme }
