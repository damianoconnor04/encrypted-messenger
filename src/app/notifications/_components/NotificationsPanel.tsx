'use client'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoAdd, IoNotificationsOffOutline, IoNotificationsOutline, IoRemove } from 'react-icons/io5'
import { PiListBulletsLight, PiListChecksLight, PiListLight } from 'react-icons/pi'
import NotificationBox from './NotificationBox'
import { MessageContent } from '@/app/messages/_components/messages/MessageContent'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

const NotificationsPanel = () => {
  const [notifications, toggleNotifications] = useState<boolean>(true)
  const [cleared, toggleCleared] = useState<boolean>(false)

  const [flaggedOpen, setFlaggedOpen] = useState<boolean>(false)
  const [unreadOpen, setUnreadOpen] = useState<boolean>(false)
  const [readOpen, setReadOpen] = useState<boolean>(false)

  const sortedNotifications = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <aside className='p-3 xl:pb-3 xl:px-1.5 xl:!pr-0.5 h-full dark:bg-d-panelbg bg-l-panelbg dark:text-white text-black max-h-full overflow-hidden'>
      <div className='pb-7 p-4 xl:pt-0 xl:pb-3 flex items-center justify-between'>
        <Link href="/notifications" className='flex items-center justify-center font-bold text-2xl tracking-tight'>Notifications</Link>
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

      <div className="flex flex-col w-full h-[calc(100%_-_2.75rem)]">
        <div className={`w-full overflow-y-scroll hide-scroll`}>
          <button onClick={() => setFlaggedOpen(!flaggedOpen)} className='w-full px-4 mb-1 flex items-center justify-between border-b dark:border-d-border border-l-border'>
            <h4 className='py-2 font-bold text-lg tracking-tight'>Pinned</h4>
            {flaggedOpen ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
          </button>
          <AnimatePresence>
            <motion.div
              key={flaggedOpen ? 'flagged' : undefined}
              initial={{ height: 0 }}
              animate={flaggedOpen ? { height: 'auto' } : { height: 0 }}
              exit={{ height: 0 }}
              className='space-y-1 dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
            >
              {sortedNotifications.map((item, idx) => {
                return <NotificationBox type='flagged' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={`w-full overflow-y-scroll hide-scroll`}>
          <button onClick={() => setUnreadOpen(!unreadOpen)} className='w-full px-4 mb-1 flex items-center justify-between border-b dark:border-d-border border-l-border'>
            <h4 className='py-2 font-bold text-lg tracking-tight'>Unread</h4>
            {unreadOpen ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
          </button>
          <AnimatePresence>
            <motion.div
              key={unreadOpen ? 'unread' : undefined}
              initial={{ height: 0 }}
              animate={unreadOpen ? { height: 'auto' } : { height: 0 }}
              exit={{ height: 0 }}
              className='space-y-1 h-full dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
            >
              {sortedNotifications.map((item, idx) => {
                return <NotificationBox type='unread' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={`w-full overflow-y-scroll hide-scroll`}>
          <button onClick={() => setReadOpen(!readOpen)} className='w-full px-4 mb-1 flex items-center justify-between border-b dark:border-d-border border-l-border'>
            <h4 className='py-2 font-bold text-lg tracking-tight'>Read</h4>
            {readOpen ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
          </button>
          <AnimatePresence>
            <motion.div
              key={readOpen ? 'read' : undefined}
              initial={{ height: 0 }}
              animate={readOpen ? { height: 'auto' } : { height: 0 }}
              exit={{ height: 0 }}
              className='space-y-1 h-full dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
            >
              {sortedNotifications.map((item, idx) => {
                return <NotificationBox type='read' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </aside>
  )
}

export default NotificationsPanel