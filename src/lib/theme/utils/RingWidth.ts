import { ThemeBorderWidthsValue } from '@lib/theme/utils/utils.types'
const RingWidth = {
  ring: (value: ThemeBorderWidthsValue) => ({
    $$width: `$borderWidths${value}`,
    boxShadow: `inset 0 0 0 calc($$width + var(--ring-offset-width)) var(--ring-color)`,
  }),
}
export default RingWidth
