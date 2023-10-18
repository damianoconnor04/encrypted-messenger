'use client'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoNotificationsOffOutline, IoNotificationsOutline } from 'react-icons/io5'
import { PiListBulletsLight, PiListChecksLight, PiListLight } from 'react-icons/pi'
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
    <aside className='xl:max-w-lg p-3 xl:pb-3 xl:px-1.5 h-full dark:bg-d-panelbg bg-l-panelbg max-h-full overflow-hidden'>
      <div className='pb-7 p-4 xl:pt-0 xl:pb-3 !pr-0 flex items-center justify-between dark:text-white text-black'>
        <Link href="/notifications" className='flex items-center justify-center font-bold text-2xl'>Notifications</Link>
        <div className='flex items-center gap-2'>
          <CustomToolTip id='silence' content='Silence alerts'>
            <button onClick={() => toggleNotifications(!notifications)} className='p-1.5 dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 transition-colors rounded-full'>
              {notifications ? <IoNotificationsOutline className='text-2xl transition-colors text-white' /> : <IoNotificationsOffOutline className='text-2xl transition-colors dark:!text-d-soft-text !text-l-soft-text' />}
            </button>
          </CustomToolTip>
          <CustomToolTip id='read' content='Mark all as read'>
            <button disabled={cleared} onClick={() => toggleCleared(true)} className={`p-1.5 dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 disabled:hover:bg-inherit transition-colors rounded-full ${cleared ? 'dark:text-d-soft-text text-l-soft-text' : 'text-sky-400'}`}>
              {cleared ? <PiListBulletsLight className='text-2xl' /> : <PiListChecksLight className='text-2xl' />}
            </button>
          </CustomToolTip>
        </div>
      </div>
      <div className="space-y-1 h-full dark:bg-d-panelbg bg-l-panelbg px-1 pb-1 overflow-y-scroll hide-scroll">
        {!cleared && sortedNotifications.map((item, idx) => {
          return <NotificationBox key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
        })}
      </div>
    </aside>
  )
}

export default NotificationsPanel