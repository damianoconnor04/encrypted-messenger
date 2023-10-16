

// WORK IN PROGRESS FOR PORFILE SETTINGS MODAL


'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
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
  username?: string
  setInputChanged: (value: boolean) => void
}
const InputS: React.FC<InputProps> = ({ username, id, type, required, register, errors, disabled, setInputChanged }) => {
  const [inputValue, setInputValue] = useState<string>('David Lee')
  const [isValid, setIsValid] = useState<boolean>(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value); (inputValue !== username) ? setInputChanged(true) : setInputChanged(false)
  useEffect(() => { if (inputValue.length > 3) { setIsValid(true) } else { setIsValid(false) } }, [inputValue])
  
  return (
    <div className="w-fit flex">
      <input id={id} type={type} autoComplete='none' disabled={disabled} {...register(id, { required })} onChange={handleInputChange} className={`
        text-center peer w-min bg-inherit text-xl font-medium border-transparent leading-3 border-b-2 focus-visible:outline-none focus-visible:border-sky-400
        ${errors[id] && 'focus-visible:!border-rose-500'}
        ${disabled && 'opacity-50 cursor-default'}
        ${inputValue && isValid && inputValue !== username && '!border-green-400'}
        ${inputValue && !isValid && '!border-rose-400 animate-shake'}
      `} />
    </div> 
  )
}

export default InputS