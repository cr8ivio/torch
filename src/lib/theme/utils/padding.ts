import { ThemeSpaceValue } from '@lib/theme/utils/utils.types'

const Padding = {
  // Abbreviated padding properties
  p: (value: ThemeSpaceValue) => ({
    padding: value,
  }),
  pt: (value: ThemeSpaceValue) => ({
    paddingBlockStart: value,
  }),
  pr: (value: ThemeSpaceValue) => ({
    paddingInlineEnd: value,
  }),
  pb: (value: ThemeSpaceValue) => ({
    paddingBlockEnd: value,
  }),
  pl: (value: ThemeSpaceValue) => ({
    paddingInlineStart: value,
  }),
  px: (value: ThemeSpaceValue) => ({
    paddingInlineStart: value,
    paddingInlineEnd: value,
  }),
  py: (value: ThemeSpaceValue) => ({
    paddingBlockStart: value,
    paddingBlockEnd: value,
  }),
}
export default Padding
