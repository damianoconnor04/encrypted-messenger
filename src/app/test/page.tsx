'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const MyComponent = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }} onClick={handleClick}>
      <motion.div
        animate={{ x: toggle ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
        style={{ width: '50px', height: '50px', background: 'red' }}
      />
    </div>
  )
}

export default MyComponent