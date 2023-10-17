import UserImg from '@/app/components/ui/UserImg'
import React from 'react'

interface NotificationBoxProps {
  title: string
  message: string
  time: string
  wasOpened: boolean
}

const NotificationBox:React.FC<NotificationBoxProps> = ({ title, message, time, wasOpened }) => {
  const getRandomColor = () => { 
    const colors = ['bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-orange-400', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-teal-500', 'bg-teal-700', 'bg-blue-500', 'bg-blue-700', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className={`flex items-center p-3 ${wasOpened ? 'dark:bg-d-accent bg-l-accent' : 'dark:bg-d-hoverbg2 bg-d-hoverbg2'} mb-1 gap-x-3 rounded-xl`}>
      {wasOpened 
        ? <div className='aspect-square ml-3 w-2 h-2 bg-neutral-500 rounded-full' /> 
        : <div className='aspect-square ml-3 w-1.5 h-1.5 bg-sky-400 animate-pulse rounded-full border border-sky-600/20' />
      }
      <UserImg letter={title.charAt(0)} color={getRandomColor()} size='md' />
      <div className='flex flex-col items-start w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-sm font-medium'>{title} sent a message</p>
          <p className='text-sm font-medium'>{time}</p>
        </div>

        <p className='text-xs font-light italic'>"{message}"</p>
      </div>
    </div>
  )
}

export default NotificationBox