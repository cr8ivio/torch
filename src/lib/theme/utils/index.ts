import Margin from './margin'
import LinearGradient from './linearGradient'
import BorderRadius from './borderRadius'
import Padding from '@lib/theme/utils/padding'
import Background from '@lib/theme/utils/background'

const Utils = {
  ...Margin,
  ...Padding,
  ...LinearGradient,
  ...BorderRadius,
  ...Background,
}

export default Utils
