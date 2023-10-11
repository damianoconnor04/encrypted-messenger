import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ type, fullWidth, children, onClick, secondary, danger, disabled }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`
        ${ disabled && 'opacity-50 cursor-default'} 
        ${ fullWidth && 'w-full'} 
        ${ secondary && ''} 
        ${ danger && 'bg-rose-400 hover:bg-rose-600 focus-visible:outline-rose-600'} 
        ${ !secondary && !danger && 'bg-neutral-100  focus-visible:outline-purple-400'}`}
    >
        {children}
    </button>
  )
}

export default Button