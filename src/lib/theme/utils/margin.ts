import type * as Stitches from '@stitches/react'
import { ThemeSpaceValue } from '@lib/theme/utils/utils.types'

const Margin = {
  // Abbreviated margin properties
  m: (value: ThemeSpaceValue) => ({
    margin: value,
  }),
  mt: (value: ThemeSpaceValue) => ({
    marginBlockStart: value,
  }),
  mr: (value: ThemeSpaceValue) => ({
    marginInlineEnd: value,
  }),
  mb: (value: ThemeSpaceValue) => ({
    marginBlockEnd: value,
  }),
  ml: (value: ThemeSpaceValue) => ({
    marginInlineStart: value,
  }),
  mx: (value: ThemeSpaceValue) => ({
    marginInlineStart: value,
    marginInlineEnd: value,
  }),
  my: (value: ThemeSpaceValue) => ({
    marginBlockStart: value,
    marginBlockEnd: value,
  }),
}
export default Margin
