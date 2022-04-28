import { styled } from '@lib/stitches.config'
// import { type ReactNode } from 'react'

// TODO: figure out how to type a components props
// export interface ButtonProps {
//   children: ReactNode
// }

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

export default Button
