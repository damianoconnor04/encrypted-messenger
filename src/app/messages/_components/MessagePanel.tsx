import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const MessagePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className='p-4 flex flex-col max-w-xs w-full border-r border-slate-600'>
      <div className='flex items-center justify-between text-xl t-text'>
        <span className='h-9 flex items-center justify-center font-bold'>Messages</span>
        <div>
          <AiOutlineUsergroupAdd />
        </div>
      </div>
    </aside>
  )
}

export default MessagePanel