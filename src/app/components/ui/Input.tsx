'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
  placeholder?: string
}
const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled, placeholder }) => {
    return (
        <div>
            <label htmlFor={id} className=''>{label}</label>
            <input placeholder={placeholder} id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required })} className={`
                ${errors[id] && 'focus-visible:ring-rose-500'} 
                ${disabled && 'opacity-50 cursor-default'}
                `}
            />
        </div>
    )
}

export default Input