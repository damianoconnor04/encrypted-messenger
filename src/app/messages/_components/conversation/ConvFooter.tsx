import CustomToolTip from '@/app/components/ui/CustomToolTip'
import React from 'react'
import { IoImageOutline, IoSend } from 'react-icons/io5'

const ConvFooter = () => {
  return (
    <div className='p-3 !pr-1.5 flex items-center justify-between text-lg dark:text-white text-black border-t dark:border-d-border border-l-border'>
      <div className='h-9 max-h-9 flex items-center w-full'>
        <CustomToolTip delay={1250} id='more' content='Add image'><button className='mr-3 rounded-full transition-colors hover:text-sky-400/95 text-3xl grid place-items-center'><IoImageOutline /></button></CustomToolTip>
        <input className='w-full bg-transparent border-b' />
        <CustomToolTip delay={1250} id='send' content='Send message'><button className='ml-1.5 rounded-full transition-colors text-sky-400/95 text-xl p-1.5 grid place-items-center'><IoSend /></button></CustomToolTip>
      </div>
    </div>
  )
}

export default ConvFooter