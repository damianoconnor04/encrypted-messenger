import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-black bg-white fixed bottom-0 overflow-hidden whitespace-nowrap w-full'>
        <div className='flex justify-end pr-12 uppercase dark:text-d-soft-text text-l-soft-text text-xs'>
          <span>© 2023 datadog</span>
        </div>
    </div>
  )
}

export default Footer