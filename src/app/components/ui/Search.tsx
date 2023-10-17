import React, { ChangeEvent, useEffect, useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'
import CustomToolTip from './CustomToolTip'

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
      <div className={`top-1/2 -translate-y-1/2 absolute ${clickedSearch ? '-translate-x-[calc(1.25rem_+_6px)]' : 'right-0'}`}>
        <CustomToolTip id='search' content='Search'><button type='button' onClick={handleClickedSearch} className={`p-1.5 rounded-full transition-all hover:text-sky-400/95`}><IoSearch /></button></CustomToolTip>
      </div>
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