'use client'
import Link from 'next/link'
import React from 'react'
import { SiDatadog } from 'react-icons/si'
import { NavContent } from './NavContent'
import { usePathname } from 'next/navigation'
import CustomToolTip from '../ui/CustomToolTip'

const DesktopNav = () => {
  const pathname = usePathname()

  return (
    <aside className='flex flex-col h-full justify-between items-center border-r border-slate-600 p-4'>
      <nav className='flex flex-col items-center'>
        <Link href="/home" className='text-4xl t-text'><SiDatadog /></Link>
        <ul className='t-text mt-4 flex flex-col gap-4'>
          {NavContent.map((item, idx) => {
            const isActive = pathname === item.slug
            const Icon = isActive ? item.filledIcon : item.icon
            return (
              <Link href={`${item.slug}`} key={idx}>
                <CustomToolTip id={JSON.stringify(idx)} content={item.label} place='right'>
                <li className='text-2xl p-2.5 rounded-full hover:bg-white/10 transition-colors'>
                  <Icon />
                </li>
                </CustomToolTip>
              </Link>
            )
          })}
        </ul>
      </nav>
      
      <div className='p-4 bg-blue-500 rounded-full flex justify-center items-center w-12 h-12'>
        <span className='text-white text-base font-bold leading-3'>D</span>
      </div>
    </aside>
  )
}

export default DesktopNav
