import Margin from './margin'
import LinearGradient from './linearGradient'
import BorderRadius from './borderRadius'
import Padding from '@lib/theme/utils/padding'
import Background from '@lib/theme/utils/background'
import RingWidth from '@lib/theme/utils/RingWidth'
import RingColor from '@lib/theme/utils/RingColor'

const Utils = {
  ...Margin,
  ...Padding,
  ...LinearGradient,
  ...BorderRadius,
  ...Background,
  ...RingWidth,
  ...RingColor,
}

export default Utils
