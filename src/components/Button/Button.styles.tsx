import { styled, theme } from '@lib/stitches.config'

export const StyledButton = styled('button', {
  /** Custom Properties - used by utils */
  '--ring-offset-width': theme.borderWidths['0'],
  /**  Base Styles */
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '$sm',
  br: '$md',
  transition: 'all 200ms ease-out',
  '&:focus': {
    outline: 'none',
  },
  /**  Variants  */
  variants: {
    variant: {
      filled: {
        color: '$white',
        bg: '$blue-500',
        '&:hover:not(:disabled),&:active:not(:disabled)': {
          bg: '$blue-600',
        },
        '&:focus': {
          bg: '$blue-500',
          ringColor: '$blue-300',
          ring: '$3',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      outline: {
        borderWidth: '$DEFAULT',
        borderColor: '$lightGray-200',
        color: '$darkGray-200',
        bg: '$white',
        '&:hover:not(:disabled)': {
          bg: '$lightGray-50',
        },
        '&:active:not(:disabled)': {
          bg: '$lightGray-200',
          borderColor: '$transparent',
        },
        '&:focus': {
          ringColor: '$blue-300',
          ring: '$3',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
      text: {
        color: '$darkGray-200',
        bg: '$white',
        '&:hover:not(:disabled)': {
          bg: '$lightGray-50',
        },
        '&:active:not(:disabled)': {
          bg: '$lightGray-200',
          borderColor: '$transparent',
        },
        '&:focus': {
          ringColor: '$blue-300',
          ring: '$3',
        },
        '&:disabled': {
          opacity: 0.5,
        },
      },
    },
    size: {
      large: {
        height: 40,
        py: '$2',
        px: '$4',
      },
      medium: {
        height: 32,
        py: '$1',
        px: '$3',
      },
      small: {
        height: 24,
        py: '$0',
        px: '$2',
      },
    },
  },
  /**  Default Variants  */
  defaultVariants: {
    variant: 'filled',
    size: 'large',
  },
})
