import { styled } from '@lib/stitches.config'

export const StyledButton = styled('button', {
  /**  Base Styles */
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  padding: '8px 16px',
  borderRadius: '6px',
  /**  Variants  */
  variants: {
    variant: {
      filled: {
        color: '$white',
        backgroundColor: '$blue-500',
        '&:hover': {
          backgroundColor: '$blue-600',
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
