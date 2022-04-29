import React, { ForwardedRef, forwardRef, Ref } from 'react'
import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = <T extends object>(
  props: ButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const { children, variant, size, as: Component, ...rest } = props
  return (
    // @ts-ignore
    <StyledButton
      variant={variant}
      ref={ref}
      size={size}
      as={Component}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.displayName = 'Button'

const ForwardedButton = forwardRef(Button)

const WrappedButton = <T,>({
  ref,
  ...rest
}: ButtonProps<T> & { ref?: Ref<HTMLButtonElement> }) => (
  <ForwardedButton ref={ref} {...rest} />
)

export default WrappedButton
