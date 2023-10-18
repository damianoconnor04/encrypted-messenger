'use client'
import UserImg from '@/app/components/ui/UserImg'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCloseOutline, IoTrashBinOutline } from 'react-icons/io5'

interface NotificationBoxProps {
  name: string
  message: string
  time: string
  wasOpened: boolean
}

const NotificationBox:React.FC<NotificationBoxProps> = ({ name, message, time, wasOpened }) => {
  const [hover, setHover] = useState<boolean>(false)
  const [removed, setRemoved] = useState<boolean>(false)

  const getRandomColor = () => { 
    const colors = ['bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-orange-400', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-teal-500', 'bg-teal-700', 'bg-blue-500', 'bg-blue-700', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} href="/notifications" className={`relative flex items-center justify-center w-full gap-2 p-3 rounded-xl dark:bg-d-hoverbg bg-l-hoverbg ${wasOpened && 'hidden'} ${removed && 'hidden'}`}>
      <UserImg highlight={!wasOpened} variant='notification' letter={name.charAt(0)} color={getRandomColor()} size='lg' />
      <div className='flex flex-col dark:text-white text-black w-full'>
        <div className="flex items-center justify-between">
          <h6 className='font-bold tracking-tight text-lg'>{name}</h6>
          <time className='dark:text-d-soft-text text-l-soft-text'>{time}</time>
        </div>
        <span className='uppercase leading-3 text-xs pt-0.5 dark:text-d-soft-text text-l-soft-text'>messages</span>
        <div className='flex items-center justify-between dark:text-white text-black w-full'>
          <p className={`font-medium ${wasOpened && 'dark:text-d-soft-text text-l-soft-text'}`}>{message}</p>
          <div className='w-2.5 h-2.5 bg-sky-400 animate-pulse rounded-full border border-sky-600/20' />
        </div>
      </div>
      {hover &&
        <button onClick={() => setRemoved(true)} className='absolute aspect-square top-0 bottom-0 right-0 rounded-r-xl p-1 text-3xl flex items-center justify-center bg-rose-400 hover:bg-rose-500 transition-colors'>
          <IoTrashBinOutline />
        </button>
      }
    </Link>
  )
}

export default NotificationBox