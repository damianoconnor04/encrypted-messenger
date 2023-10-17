'use client'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoNotificationsOffOutline, IoNotificationsOutline } from 'react-icons/io5'
import NotificationBox from './NotificationBox'
import { MessageContent } from '@/app/messages/_components/messages/MessageContent'

const NotificationsPanel = () => {
  const [notifications, toggleNotifications] = useState<boolean>(true)
  const [cleared, toggleCleared] = useState<boolean>(false)
  const sortedNotifications = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <aside className='h-full p-3 dark:bg-d-panelbg bg-l-panelbg max-h-full overflow-hidden'>
      <div className='h-9 max-h-9 px-1.5 pb-3 xl:pb-0 flex items-center justify-between dark:text-white text-black'>
        <Link href="/notifications" className='flex items-center justify-center font-bold pl-3 text-xl'>Notifications</Link>
        <div className='flex items-center gap-2'>
          <CustomToolTip id='silence' content='Silence alerts'>
            <button onClick={() => toggleNotifications(!notifications)} className='p-1.5 dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 transition-colors rounded-full'>
              {notifications ? <IoNotificationsOutline className='text-2xl text-sky-400 transition-colors' /> : <IoNotificationsOffOutline className='text-2xl transition-colors dark:text-d-soft-text text-l-soft-text' />}
            </button>
          </CustomToolTip>
          <button onClick={() => toggleCleared(true)} className={`p-1.5 dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 transition-colors rounded-lg ${cleared ? 'dark:text-d-soft-text text-l-soft-text' : 'text-sky-400'} text-lg`}>
            Clear All
          </button>
        </div>
      </div>
      <div className="p-0 xl:p-3 h-full px-1 pb-1 xl:pr-0 overflow-y-scroll hide-scroll dark:bg-d-panelbg bg-l-panelbg">
        <div className="flex items-center gap-2 mb-4 py-3">
          {cleared 
            ? <div className='ml-3.5 w-2 h-2 bg-neutral-400 border dark:border-d-border border-l-border rounded-full' />
            : <div className='ml-3.5 w-1.5 h-1.5 bg-sky-400 animate-pulse rounded-full border border-sky-600/20' />
          }
          <p className={`${cleared ? 'dark:text-d-soft-text text-l-soft-text' : 'text-sky-400'} text-sm`}>You have {cleared ? 0 : 4} unread notifications</p>
        </div>
        {!cleared && sortedNotifications.map((item, idx) => {
          return <NotificationBox key={idx} title={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
        })}
      </div>
    </aside>
  )
}

export default NotificationsPanel