'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  label?: string
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
    <div className='flex flex-col'>
      <label htmlFor={id} className=''>{label}</label>
      <div className='relative'>
        <input id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required })} className={`
          peer w-full bg-inherit ring-1 ring-slate-400 rounded-lg px-2 pb-2 pt-4 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-sky-400 focus-visible:outline-none
          ${errors[id] && 'focus-visible:ring-rose-500'} 
          ${disabled && 'opacity-50 cursor-default'}
        `}/>
        <label htmlFor={id} className='cursor-text text-neutral-400 peer-focus-visible:text-sky-400 peer-focus-visible:text-xs peer-focus-visible:top-2.5 absolute left-0 top-1/2 -translate-y-1/2 ml-2 transition-all duration-300'>{placeholder}</label>
      </div>
    </div>
  )
}

export default Input