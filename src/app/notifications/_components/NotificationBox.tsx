'use client'
import UserImg from '@/app/components/ui/UserImg'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoFlagOutline, IoMailOpenOutline, IoTrashBinOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

interface NotificationBoxProps {
  name: string
  message: string
  time: string
  wasOpened: boolean
  type: 'read' | 'unread' | 'flagged'
  id: number
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ name, message, time, wasOpened, type, id }) => {
  const [removed, setRemoved] = useState<boolean>(false)
  const [hover, setHover] = useState<boolean>(false)
  const [rightHover, setRightHover] = useState<boolean>(false)
  const [midHover, setMidHover] = useState<boolean>(false)
  const [leftHover, setLeftHover] = useState<boolean>(false)
  const [read, setRead] = useState<boolean>(false)
  const [flagged, setFlagged] = useState<boolean>(false)

  const getRandomColor = () => {
    const colors = ['bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-orange-400', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-teal-500', 'bg-teal-700', 'bg-blue-500', 'bg-blue-700', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const pinned = () => {
    if (type === 'flagged') {
      if (id === 5) return true
      else return false
    } else return true
  }

  return (
    <>
      {!removed && !(id > 6) && pinned() && (
        <motion.a transition={{ ease: "linear", duration: 0.3, y: { duration: 0.5 } }} exit={{ y: '-100%' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} initial={{ paddingRight: '0.75rem' }} whileHover={!rightHover && !midHover && !leftHover ? { paddingRight: '3.25rem' } : { paddingRight: '8.5rem' }} href="#" className={`border relative overflow-hidden flex items-center justify-center max-w-full gap-2 p-3 rounded-xl ${type === 'read' && '!border-transparent'} ${flagged || id === 5 ? 'border-orange-400' : 'border-transparent'} ${read || type === 'read' ? '' : 'dark:bg-d-hoverbg/5 bg-l-hoverbg/5'} ${wasOpened && type === 'unread' ? 'hidden' : !wasOpened && type === 'read' && 'hidden'}`}>
          <UserImg variant='notification' letter={name.charAt(0)} color={getRandomColor()} size='lg' />
          <div className={`min-w-0 flex flex-col dark:text-white text-black w-full`}>

            <div className="min-w-0 flex w-full items-center justify-between">
              <span className='uppercase leading-3 text-xs text-sky-400'>messages</span>
              <time className='dark:text-d-soft-text text-sm text-l-soft-text'>{time}</time>
            </div>

            <h6 className={`leading-5 font-bold tracking-tight text-lg truncate ${read || type === 'read' && 'font-medium'}`}>{name}</h6>

            <div className='min-w-0 flex w-full items-center justify-between'>
              <p className={`leading-5 pt-0.5 font-medium truncate ${read || type === 'read' && 'font-normal dark:text-d-soft-text text-l-soft-text'}`}>{message}</p>
              {!wasOpened && <div className='ml-4 aspect-square w-2.5 h-2.5 bg-sky-400 animate-pulse rounded-full border border-sky-600/20' />}
            </div>

          </div>

          {hover &&
            <div className='text-white'>
              <motion.button
                onClick={() => setRemoved(true)}
                onHoverStart={() => setRightHover(true)}
                onHoverEnd={() => setRightHover(false)}
                transition={{ ease: "linear", duration: 0.15 }}
                initial={{ opacity: 0, width: 0, padding: '0.5rem', right: 0 }}
                whileHover={{ width: 100 }}
                animate={{ opacity: 1, }}
                className='z-[9999] absolute top-0 bottom-0 rounded-r-xl text-3xl flex items-center justify-center bg-rose-500 transition-colors'
              >
                <IoTrashBinOutline />
              </motion.button>
              <motion.button
                onClick={() => setRead(!read)}
                onHoverStart={() => setMidHover(true)}
                onHoverEnd={() => setMidHover(false)}
                transition={{ ease: "linear", duration: 0.15 }}
                initial={{ opacity: 0, width: 0, padding: '0.5rem', right: '1rem' }}
                whileHover={{ width: 100 }}
                animate={rightHover ? { opacity: 1, right: '6.25rem' } : { opacity: 1 }}
                className='z-[9998] absolute top-0 bottom-0 text-3xl flex items-center justify-center bg-blue-400 transition-colors'
              >
                <IoMailOpenOutline />
              </motion.button>
              <motion.button
                onClick={() => {setFlagged(!flagged); if (type === 'flagged') id === 5 && setRemoved(true) }}
                onHoverStart={() => setLeftHover(true)}
                onHoverEnd={() => setLeftHover(false)}
                transition={{ ease: "linear", duration: 0.15 }}
                initial={{ opacity: 0, width: 0, padding: '0.5rem', right: '2rem' }}
                whileHover={{ width: 100 }}
                animate={rightHover ? { opacity: 1, right: '7.25rem' } : midHover ? { opacity: 1, right: '7.25rem' } : { opacity: 1 }}
                className='z-[9997] absolute top-0 bottom-0 text-3xl flex items-center justify-center bg-orange-400 transition-colors'
              >
                <IoFlagOutline />
              </motion.button>
            </div>
          }
        </motion.a>
      )}
    </>
  )
}

export default NotificationBox