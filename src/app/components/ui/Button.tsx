import React from "react"

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
    <button onClick={onClick} type={type} disabled={disabled} className={`flex justify-center items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300 ease-linear
        ${ disabled && "opacity-50 cursor-default hover:bg-inherit text-inherit"} 
        ${ fullWidth && "w-full"} 
        ${ secondary ? "text-white" : ""} 
        ${ danger && "bg-rose-400 hover:bg-rose-600 focus-visible:outline-rose-600"} 
        ${ !secondary && !danger && "bg-green-400  focus-visible:outline-green-300"}`}
    >
        {children}
    </button>
  )
}

export default Button