import type { HTMLAttributes, ForwardedRef } from 'react'

export type StandardButtonVariant = 'filled' | 'outline' | 'text'
export type ButtonSizeVariant = 'large' | 'medium' | 'small'

interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  as?: ForwardedRef<HTMLButtonElement>
  type?: 'button' | 'reset' | 'submit'
}

export interface MainButtonProps extends BaseButtonProps {
  variant?: StandardButtonVariant
  size?: ButtonSizeVariant
}

export type ButtonProps<T> = MainButtonProps & T
