import Link from 'next/link'
import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import MessageBox from './MessageBox'
import { MessageContent } from './MessageContent'
import Resizable from '@/app/components/resize/Resizable'

const MessagePanel = () => {
  const sortedMessages = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <Resizable maxW='320' minW='230'>
      <aside className='overflow-auto t-bg-messagePanel flex flex-col md:max-w-xs w-full'>
        <div className='p-3 flex items-center justify-between text-xl t-text'>
          <span className='h-9 flex items-center justify-center font-bold'>Messages</span>
          <div className='flex items-center'>
            <button className='p-1.5 rounded-full t-bg-hover transition-colors'><IoSettingsOutline /></button>
            <button className='p-1.5 rounded-full t-bg-hover transition-colors'><AiOutlineUsergroupAdd /></button>
          </div>
        </div>
        <div className='pl-1 overflow-y-scroll hide-scroll'>
          {sortedMessages.map((item, idx) => {
            return <MessageBox key={idx} name={item.name} message={item.message} time={item.time} isRead={item.isRead} />
          })}
        </div>
      </aside>
    </Resizable>
  )
}

export default MessagePanel