import React from 'react'
import CustomToolTip from '../CustomToolTip'
import { IoAdd, IoAddCircle, IoImageOutline, IoSend } from 'react-icons/io5'

const InputM = () => {
  return (
    <form className='h-9 max-h-9 flex items-center w-full relative'>
      <button type='button' className='absolute left-0 hover:dark:bg-d-hoverbg2 hover:bg-l-hoverbg2 py-2 rounded-l-xl group'>
        <CustomToolTip delay={1250} id='img' content='Add image' place='top'>
          <span className='relative mx-1.5 rounded-full transition-colors group-hover:text-sky-400/95 text-3xl grid place-items-center'>
            <IoImageOutline />
            <span className='group-hover:scale-100 scale-50 transition-all p-[1px] bg-green-500 absolute -top-1 -right-1 w-[0.875rem] h-[0.875rem] flex items-center justify-center rounded-full text-transparent group-hover:text-white text-xs'>+</span>
          </span>
        </CustomToolTip>
      </button>
      <input className='dark:bg-d-accent2 bg-l-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl w-full py-3 px-12 text-base placeholder:dark:text-d-soft-text placeholder:text-l-soft-text' placeholder='Send a message...' />
      <button type='submit' className="absolute right-0 hover:dark:bg-d-hoverbg2 hover:bg-l-hoverbg2 py-2 rounded-r-xl group">
        <CustomToolTip delay={1250} id='send' content='Send'><span className='mx-1.5 rounded-full transition-colors text-sky-400/95 text-xl p-1.5 grid place-items-center'><IoSend /></span></CustomToolTip>
      </button>
    </form>
  )
}

export default InputM