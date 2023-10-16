import React, { ChangeEvent, useEffect, useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'

interface SearchProps {
  label?: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
  placeholder?: string
}

const Search: React.FC<SearchProps> = ({ id, type, required, register, errors, disabled }) => {
  const [clickedSearch, setClickedSearch] = useState<boolean>(false)
  const handleClickedSearch = () => {
    setClickedSearch(true)
  }
  return (
    <div className='relative'>
      <button type='button' onClick={handleClickedSearch} className={`absolute p-1.5 rounded-full transition-all hover:text-sky-400/95 top-1/2 -translate-y-1/2 ${clickedSearch ? '-translate-x-[calc(1.25rem_+_6px)]' : 'right-0'}`}><IoSearch /></button>
      {clickedSearch && (
        <input id={id} type={type} autoComplete={type} disabled={disabled} {...register(id, { required })} className={`
        text-sm bg-inherit border-b focus-visible:outline-none focus-visible:border-sky-400
        ${errors[id] && 'focus-visible:!ring-rose-500'}
        ${disabled && 'opacity-50 cursor-default'}
      `} />
      )}
    </div>
  )
}

export default Search