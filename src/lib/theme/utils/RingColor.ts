import { ThemeColorsValue } from '@lib/theme/utils/utils.types'

const RingColor = {
  ringColor: (value: ThemeColorsValue) => ({
    '--ring-color': `$colors${value}`,
  }),
}
export default RingColor
