import React, { useEffect } from 'react'
import globalStyles from '@lib/theme/styles/globalStyles'

const CssReset = () => {
  useEffect(() => {
    globalStyles()
  }, [])
  return null
}

export default CssReset
