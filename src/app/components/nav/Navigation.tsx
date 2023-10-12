import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navigation = async ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='h-full md:flex hidden'><DesktopNav />{children}</div>
      <div className='h-full md:hidden block'><MobileNav />{children}</div>
    </div>
  )
}

export default Navigation