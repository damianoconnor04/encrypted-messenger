import React from 'react'
import NotificationsPanel from './_components/NotificationsPanel'


const Notifications = () => {
  return (
    <div className='w-full xl:h-full h-[calc(100%_-_2.75rem)] dark:text-white text-black dark:bg-black bg-white'>
      <NotificationsPanel />
    </div>
  )
}

export default Notifications