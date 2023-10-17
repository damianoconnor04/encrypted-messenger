'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'

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
  const [inputValue, setInputValue] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value) }
  useEffect(() => { if (inputValue.length > 3) { setIsValid(true) } else { setIsValid(false) } }, [inputValue])
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={id} className=''>{label}</label>
      <div className='relative'>
        <input id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required })} onChange={handleInputChange} className={`
          peer w-full bg-inherit ring-1 ring-slate-400 rounded-lg px-2 pb-2 pt-4 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-sky-400 focus-visible:outline-none
          ${errors[id] && 'focus-visible:ring-rose-500'} 
          ${disabled && 'opacity-50 cursor-default'}
          ${inputValue && isValid && '!ring-green-400'}
          ${inputValue && !isValid && '!ring-rose-400 animate-shake'}
        `}/>
        {inputValue && isValid && type !== "password" && <div className='absolute text-green-400 top-1/2 -translate-y-1/2 right-2.5 text-lg'><IoIosCheckmarkCircle /></div>}
        {inputValue && isValid && type === "password" && <div className='absolute text-green-400 top-1/2 -translate-y-1/2 right-2.5 text-lg'><IoShieldCheckmarkSharp /></div>}
        {inputValue && !isValid && <div className='absolute text-rose-400 top-1/2 -translate-y-1/2 right-2.5 text-lg'><IoIosCloseCircle /></div>}
        <label htmlFor={id} className={`pointer-events-none cursor-text text-neutral-400 ${inputValue && 'text-xs top-2.5'} ${inputValue && isValid && '!text-green-400'} ${inputValue && !isValid && '!text-rose-400'} peer-focus-visible:text-sky-400 peer-focus-visible:text-xs peer-focus-visible:top-2.5 absolute left-0 top-1/2 -translate-y-1/2 ml-2 transition-all duration-300`}>{placeholder}</label>
      </div>
    </div>
  )
}

export default Input