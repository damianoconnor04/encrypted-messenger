'use client'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoAdd, IoNotificationsOffOutline, IoNotificationsOutline, IoRemove } from 'react-icons/io5'
import NotificationBox from './NotificationBox'
import { MessageContent } from '@/app/messages/_components/messages/MessageContent'
import { motion, AnimatePresence, VariantLabels, TargetAndTransition } from 'framer-motion'

const NotificationsPanel = () => {
  type Tabs = 'pinned' | 'unread' | 'read' | null
  const [activeTab, setActiveTab] = useState<Tabs>(null)
  const [notifications, toggleNotifications] = useState<boolean>(true)

  const tabRefs = {
    pinned: useRef<HTMLButtonElement>(null),
    unread: useRef<HTMLButtonElement>(null),
    read: useRef<HTMLButtonElement>(null),
  }
  const prevTabRef = useRef<Tabs>(null)
  useEffect(() => { prevTabRef.current = activeTab }, [activeTab])

  const animate = (): VariantLabels | TargetAndTransition | undefined => {
    if (activeTab) {
      return {
        width: tabRefs[activeTab].current?.offsetWidth,
        x: tabRefs[activeTab].current?.offsetLeft,
        transition: { duration: 0.2 },
        opacity: 1
      }
    }
    return undefined
  };

  const sortedNotifications = [...MessageContent].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1
  })

  return (
    <aside className='p-3 xl:pb-3 xl:px-1.5 xl:!pr-0.5 h-full dark:bg-d-panelbg bg-l-panelbg dark:text-white text-black max-h-full overflow-hidden'>

      {/* HEADER */}
      <div className='pb-7 p-4 xl:pt-0 xl:pb-3 flex items-center justify-between'>
        <Link href="/notifications" className='flex items-center justify-center font-bold text-2xl tracking-tight'>Notifications</Link>
        <div className='flex items-center gap-2'>
          <CustomToolTip id='silence' content='Silence alerts'>
            <button onClick={() => toggleNotifications(!notifications)} className='p-1.5 dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 transition-colors rounded-full'>
              {notifications ? <IoNotificationsOutline className='text-2xl transition-colors text-white' /> : <IoNotificationsOffOutline className='text-2xl transition-colors dark:!text-d-soft-text !text-l-soft-text' />}
            </button>
          </CustomToolTip>
        </div>
      </div>

      {/* TAB BUTTONS */}
      <div className="relative flex w-full items-start">
        <button ref={tabRefs['pinned']} onClick={() => setActiveTab(activeTab === 'pinned' ? null : 'pinned')} className='w-full px-4 flex items-center justify-between'>
          <h4 className='py-2 font-bold text-lg tracking-tight'>Pinned</h4>
          {activeTab === 'pinned' ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
        </button>
        <button ref={tabRefs['unread']} onClick={() => setActiveTab(activeTab === 'unread' ? null : 'unread')} className='w-full px-4 flex items-center justify-between'>
          <h4 className='py-2 font-bold text-lg tracking-tight'>Unread</h4>
          {activeTab === 'unread' ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
        </button>
        <button ref={tabRefs['read']} onClick={() => setActiveTab(activeTab === 'read' ? null : 'read')} className='w-full px-4 flex items-center justify-between'>
          <h4 className='py-2 font-bold text-lg tracking-tight'>Read</h4>
          {activeTab === 'read' ? <IoRemove className='text-xl' /> : <IoAdd className='text-xl' />}
        </button>
        <motion.div
          initial={{ width: '33%', opacity: 0 }}
          animate={animate()}
          transition={{ ease: "linear" }}
          className='absolute bottom-0 rounded-xl h-1 bg-sky-400'
        />
      </div>

      {/* BODY */}
      <div className='w-full flex flex-col max-h-full'>
        <AnimatePresence>
          <motion.div
            key={activeTab === 'pinned' ? 'pinned' : undefined}
            initial={{ height: 0, opacity: 0 }}
            animate={activeTab === 'pinned' ? { height: 'fit-content', opacity: 1 } : { height: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.3 }}
            className='space-y-1 dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
          >
            {sortedNotifications.map((item, idx) => {
              return <NotificationBox type='flagged' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
            })}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={activeTab === 'unread' ? 'unread' : undefined}
            initial={{ height: 0, opacity: 0 }}
            animate={activeTab === 'unread' ? { height: 'fit-content', opacity: 1 } : { height: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.3, height: { duration: 0.3 } }}
            className='space-y-1 h-full dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
          >
            {sortedNotifications.map((item, idx) => {
              return <NotificationBox type='unread' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
            })}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={activeTab === 'read' ? 'read' : undefined}
            initial={{ height: 0, opacity: 0 }}
            animate={activeTab === 'read' ? { height: 'fit-content', opacity: 1 } : { height: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.3 }}
            className='space-y-1 h-full dark:bg-d-panelbg bg-l-panelbg overflow-y-scroll hide-scroll'
          >
            {sortedNotifications.map((item, idx) => {
              return <NotificationBox type='read' id={idx} key={idx} name={item.name} message={item.message} time={item.time} wasOpened={item.isRead} />
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </aside>
  )
}

export default NotificationsPanel