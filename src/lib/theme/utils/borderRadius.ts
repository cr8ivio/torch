import { ThemeRadiiValue } from '@lib/theme/utils/utils.types'
import type * as Stitches from '@stitches/react'

const BorderRadius = {
  // An abbreviated property for border-radius
  br: (value: ThemeRadiiValue | Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
}
export default BorderRadius
