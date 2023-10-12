import React from 'react'

interface ButtonProps {
  variant?: 'sso' | 'primary' | 'secondary' | 'tertiary'
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  onClick?: () => void
  danger?: boolean
  disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ variant, type, children, onClick, danger, disabled }) => {
  let className = 'px-4 font-medium rounded-full border w-full h-[38px] transition-all duration-200 ' //leave space at the end
  if (variant === 'sso') className += 't-s-button-bg t-s-button-text flex items-center justify-center gap-2 hover:opacity-90 border-slate-400' 
  else if (variant === 'primary') className += 'bg-sky-400 text-white rounded-full border-sky-400 hover:bg-sky-500 hover:border-sky-500 transition-colors duration-200'
  else if (variant === 'secondary') className += 'bg-inherit text-sky-500 rounded-full border-slate-400 hover:bg-sky-500/[0.15] transition-colors duration-200'
  else if (variant === 'tertiary') className += 'bg-inherit t-text font-medium border-slate-400 w-full h-[38px] hover:bg-white/[0.15] transition-colors'
  if (danger) className = 'px-4 font-medium rounded-full border w-full h-[38px] transition-all duration-200 bg-rose-400 text-white border-rose-400'
  
  return <button onClick={onClick} type={type} disabled={disabled} className={className}>{children}</button>
}


export default Button