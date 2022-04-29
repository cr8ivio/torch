import { ThemeRadiiValue } from '@lib/theme/utils/utils.types'

const BorderRadius = {
  // An abbreviated property for border-radius
  br: (value: ThemeRadiiValue) => ({
    borderRadius: value,
  }),
}
export default BorderRadius
