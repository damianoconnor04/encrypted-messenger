import React from 'react'

interface ButtonProps {
  variant?: 'sso' | 'primary' | 'secondary' | 'tertiary'
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  onClick?: () => void
  danger?: boolean
  disabled?: boolean
  icon?: boolean
  sm?: boolean
}
const Button: React.FC<ButtonProps> = ({ variant, type, children, onClick, danger, disabled, icon, sm }) => {
  let className = 'gap-2 items-center px-4 font-medium rounded-full border w-full h-[38px] transition-all duration-200 ' //leave space at the end
  if (variant === 'sso') className += 't-s-button-bg t-s-button-text flex items-center justify-center gap-2 hover:opacity-90 dark:border-d-border border-l-border' 
  else if (variant === 'primary') className += 'bg-sky-400 text-white rounded-full border-sky-400 hover:bg-sky-500 hover:border-sky-500 transition-colors delay-400'
  else if (variant === 'secondary') className += 'bg-inherit text-sky-500 rounded-full dark:border-d-border border-l-border hover:bg-sky-500/[0.15] hover:border-sky-500/50 transition-colors delay-400'
  else if (variant === 'tertiary') className += 'bg-inherit dark:text-white text-black font-medium dark:border-d-border border-l-border w-full h-[38px] hover:bg-white/[0.15] transition-colors'
  if (danger) className = 'px-4 font-medium rounded-full border w-full h-[38px] duration-200 bg-gradient-to-r from-rose-400 via-rose-400/85 to-rose-400/70 text-white dark:border-d-border border-l-border hover:border-rose-400/50 transition-colors'
  if (icon) className += ' flex justify-center items-center gap-2'
  if (sm) className += '!h-[30px] !gap-0.5 !px-0 !py-0'

  return <button onClick={onClick} type={type} disabled={disabled} className={className}>{children}</button>
}


export default Button