import { styled } from '@lib/stitches.config'

export const StyledButton = styled('button', {
  /**  Base Styles */
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  py: '$2',
  px: '$4',
  br: '$md',
  /**  Variants  */
  variants: {
    variant: {
      filled: {
        color: '$white',
        bg: '$blue-500',
        '&:hover': {
          bg: '$blue-600',
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
