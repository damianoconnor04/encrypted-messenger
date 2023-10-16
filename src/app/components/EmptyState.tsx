import React from 'react'

const EmptyState = () => {
  return (
    <div className='dark:bg-black bg-white w-full h-full grid place-items-center'>
      <h3 className='dark:text-white text-black font-medium text-2xl tracking-wide cursor-default'>Select a chat or start a new one</h3>
    </div>
  )
}

export default EmptyState