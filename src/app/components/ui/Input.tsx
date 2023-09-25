'use client'
import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
  placeholder?: string
  nocolors?: boolean
}
const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled, placeholder, nocolors }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-100">{label}</label>
            <input placeholder={placeholder} id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required })} className={`block w-full border-0 p-1.5 text-neutral-100 outline-none focus-visible:outline-1 focus-visible:outline-green-300 placeholder:text-neutral-400 sm:text-sm sm:leading-6
                ${errors[id] && "focus-visible:ring-rose-500"} 
                ${disabled && "opacity-50 cursor-default"}
                ${nocolors ? 'rounded-full bg-transparent' : 'rounded-md bg-neutral-700/50 shadow-sm'}
                `}
            />
        </div>
    )
}

export default Input