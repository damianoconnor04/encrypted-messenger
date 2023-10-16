'use client'
import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import MessageBox from './MessageBox'
import { MessageContent } from './MessageContent'
import CustomToolTip from '@/app/components/ui/CustomToolTip'

const MessagePanel = () => {
  const sortedMessages = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <aside className='overflow-auto dark:bg-d-panelbg bg-l-panelbg flex flex-col h-full'>
      <div className='py-3 px-1.5 flex items-center justify-between text-xl dark:text-white text-black'>
        <span className='h-9 flex items-center justify-center font-bold cursor-default pl-3'>Messages</span>
        <div className='flex items-center'>
          <CustomToolTip id='settings' content='Settings'><button className='p-1.5 rounded-full transition-colors dark:hover:bg-d-hoverbg hover:bg-l-hoverbg text-lg'><IoSettingsOutline /></button></CustomToolTip>
          <CustomToolTip id='mkgroup' content='Create group'><button className='p-1.5 rounded-full transition-colors dark:hover:bg-d-hoverbg hover:bg-l-hoverbg'><AiOutlineUsergroupAdd /></button></CustomToolTip>
        </div>
      </div>
      <div className='pl-1 overflow-y-scroll hide-scroll'>
        {sortedMessages.map((item, idx) => {
          return <MessageBox key={idx} name={item.name} message={item.message} time={item.time} isRead={item.isRead} />
        })}
      </div>
    </aside>
  )
}

export default MessagePanel