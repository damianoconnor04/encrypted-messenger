import UserImg from '@/app/components/ui/UserImg'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ConvPanel = ({ name, time }: { name: string; time: string }) => {
  type Mode = 'light' | 'dark'
  const [mode, setMode] = useState<Mode>('light')
  const handleClick = () => setMode(mode === 'light' ? 'dark' : 'light'); console.log('pressed')

  return (
    <div className='w-full ml-auto h-full p-3 flex flex-col dark:bg-d-panelbg bg-l-panelbg'>
      <div className='min-w-0 w-full flex flex-col items-center'>
        <UserImg letter={name.charAt(0)} size='lg' />
        <h6 className='dark:text-white text-black text-lg font-medium tracking-tight truncate'>{name}</h6>
        <span className='dark:text-d-soft-text text-l-soft-text text-xs'>Last online <time>{time}</time></span>

        <div className='w-14 h-6 p-1 rounded-full bg-blue-500' onClick={handleClick}>
          <motion.div animate={{ translateX: mode === 'dark' ? '200%' : '0%' }}
            transition={{ duration: 0.3 }}
            className='w-4 h-4 bg-red-500 rounded-full'
          />
        </div>

      </div>
    </div>
  )
}

export default ConvPanel