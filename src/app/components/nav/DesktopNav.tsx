'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { SiDatadog } from 'react-icons/si'
import { NavContent } from './NavContent'
import { usePathname } from 'next/navigation'
import CustomToolTip from '../ui/CustomToolTip'
import UserImg from '../ui/UserImg'
import ProfileSettingsModal from '../modals/ProfileSettingsModal'

const DesktopNav = () => {
  const pathname = usePathname()
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <aside className='t-bg flex flex-col h-full justify-between items-center md:border-r t-border p-3'>
      <nav className='flex flex-col items-center'>
        <Link href="/home" className='text-4xl t-text'><SiDatadog /></Link>
        <ul className='t-text mt-3 flex flex-col gap-3'>
          {NavContent.map((item, idx) => {
            const isActive = pathname === item.slug
            const Icon = isActive ? item.filledIcon : item.icon
            return (
              <Link href={`${item.slug}`} key={idx}>
                <CustomToolTip id={JSON.stringify(idx)} content={item.label} place='right'>
                <li className='text-2xl p-2.5 rounded-full t-bg-hover2 transition-colors'>
                  <Icon />
                </li>
                </CustomToolTip>
              </Link>
            )
          })}
        </ul>
      </nav>
      
      <div onClick={() => setShowProfileModal(true)} className='cursor-pointer'><UserImg letter='D' size='md' /></div>
      <ProfileSettingsModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </aside>
  )
}

export default DesktopNav
