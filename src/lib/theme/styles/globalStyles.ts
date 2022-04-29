import { globalCss } from '@stitches/react'
import TailwindPreflight from '@lib/theme/styles/tailwindPreflight'

const globalStyles = globalCss({
  '@import': [TailwindPreflight()],
})
export default globalStyles
