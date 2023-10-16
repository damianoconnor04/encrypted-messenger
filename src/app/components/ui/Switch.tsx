import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Switch = () => {
  type Mode = 'light' | 'dark'
  const [mode, setMode] = useState<Mode>('light')
  const handleClick = () => setMode(mode === 'light' ? 'dark' : 'light'); console.log('pressed')
  return (
    <div className='w-14 h-6 p-1 rounded-full bg-blue-500' onClick={handleClick}>
      <motion.div animate={{ translateX: mode === 'dark' ? '200%' : '0%' }}
        transition={{ duration: 0.3 }}
        className='w-4 h-4 bg-red-500 rounded-full'
      />
    </div>
  )
}

export default Switch