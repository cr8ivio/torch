import { styled, theme } from '@lib/stitches.config'

export const StyledButton = styled('button', {
  /** Custom Properties - used by utils */
  '--ring-offset-width': theme.borderWidths['0'],
  /**  Base Styles */
  display: 'inline-flex',
  alignItems: 'center',
  height: 40,
  py: '$2',
  px: '$4',
  br: '$md',
  transition: 'all 200ms ease-out',
  /**  Variants  */
  variants: {
    variant: {
      filled: {
        color: '$white',
        bg: '$blue-500',
        '&:hover,&:active': {
          bg: '$blue-600',
        },
        '&:focus': {
          bg: '$blue-500',
          ringColor: '$blue-300',
          ring: '$3',
        },
      },
      outline: {},
      text: {},
    },
    size: {
      large: {},
      medium: {},
      small: {},
    },
  },
  /**  Default Variants  */
  defaultVariants: {
    variant: 'filled',
    size: 'large',
  },
})
