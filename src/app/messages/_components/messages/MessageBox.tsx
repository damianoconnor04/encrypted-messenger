'use client'
import UserImg from '@/app/components/ui/UserImg'
import Link from 'next/link'
import React from 'react'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

interface MessageBoxProps {
  name: string
  message: string
  time: string
  isRead: boolean
}

const MessageBox:React.FC<MessageBoxProps> = ({ name, message, time, isRead }) => {
  const getRandomColor = () => { 
    const colors = ['bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-orange-400', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-teal-500', 'bg-teal-700', 'bg-blue-500', 'bg-blue-700', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <Link href={`?name=${name}&message=${message}&time=${time}`} className='z-10 dark:hover:bg-d-hoverbg hover:bg-l-hoverbg flex items-center max-h-full gap-2 p-3 rounded-lg transition-colors'>
      <UserImg letter={name.charAt(0)} color={getRandomColor()} size='lg' />
      <div className='dark:text-white text-black min-w-0 flex flex-col justify-between w-full'> {/* min-w-0 is magic fix for truncate */}
        <div className='flex items-center justify-between'>
          <p className={`text-base truncate ${isRead ? 'font-light' : 'font-medium'}`}>{name}</p>
          <div className={`text-xs min-w-[10%] flex justify-end items-center ${isRead ? 'font-light' : 'font-medium'}`}><time>{time}</time></div> {/* time is wrapped in min-w for truncate too */}
        </div>
        <div className='flex items-center justify-between'>
          <p className={`text-sm truncate ${isRead && 'font-light dark:text-d-soft-text text-l-soft-text'}`}>{message}</p>
          <div className='min-w-[10%] flex justify-end'>
            { isRead && <span className='text-green-400'><IoCheckmarkDoneOutline /></span> }
            { !isRead && <div className='w-1.5 h-1.5 bg-sky-400 animate-pulse rounded-full border border-sky-600/20' /> }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MessageBox