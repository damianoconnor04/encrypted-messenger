'use client'
import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import MessageBox from './MessageBox'
import { MessageContent } from './MessageContent'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import Link from 'next/link'

const MessagePanel = () => {
  const sortedMessages = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <aside className='h-full p-3 dark:bg-d-panelbg bg-l-panelbg border-b dark:border-d-border border-l-border'>
      <div className='h-9 max-h-9 px-1.5 pb-3 xl:pb-0 flex items-center justify-between dark:text-white text-black'>
      <Link href="/messages" className='flex items-center justify-center font-bold pl-3 text-xl'>Messages</Link>
        <div className='flex items-center text-xl'>
          <CustomToolTip id='settings' content='Settings'><button className='p-1.5 rounded-full transition-colors dark:hover:bg-d-hoverbg hover:bg-l-hoverbg'><IoSettingsOutline /></button></CustomToolTip>
          <CustomToolTip id='mkgroup' content='Create group'><button className='p-1.5 rounded-full transition-colors dark:hover:bg-d-hoverbg hover:bg-l-hoverbg'><AiOutlineUsergroupAdd /></button></CustomToolTip>
        </div>
      </div>
      <div className='h-full dark:bg-d-panelbg bg-l-panelbg px-1 pb-1 xl:pr-0 overflow-y-scroll hide-scroll'>
        {sortedMessages.map((item, idx) => {
          return <MessageBox key={idx} name={item.name} message={item.message} time={item.time} isRead={item.isRead} />
        })}
      </div>
    </aside>
  )
}

export default MessagePanel