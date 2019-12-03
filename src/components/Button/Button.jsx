import React from 'react'
import { Button as ButtonBase } from 'antd'

const Button = ({ children, htmlType, loading, size, type, onClick, ...props }) => {
  return (
    <ButtonBase
      {...props}
      htmlType={htmlType}
      loading={loading}
      size={size}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  )
}

export default Button
