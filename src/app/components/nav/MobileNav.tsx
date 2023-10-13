'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavContent } from './NavContent'
import { usePathname } from 'next/navigation'
import CustomToolTip from '../ui/CustomToolTip'
import UserImg from '../ui/UserImg'
import ProfileSettingsModal from '../modals/ProfileSettingsModal'

const MobileNav = () => {
  const pathname = usePathname()
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <aside className='z-[999] fixed bottom-0 t-bg w-full border-t t-border'>
      <ul className='t-text flex justify-evenly items-center'>
        {NavContent.map((item, idx) => {
          const isActive = pathname === item.slug
          const Icon = isActive ? item.filledIcon : item.icon
          return (
            <Link href={`${item.slug}`} key={idx} className='w-full t-bg-hover2 transition-colors flex justify-center items-center'>
              <CustomToolTip id={JSON.stringify(idx)} content={item.label} place='right'>
                <li className='text-2xl p-2.5 rounded-full'>
                  <Icon />
                </li>
              </CustomToolTip>
            </Link>
          )
        })}
        <li onClick={() => setShowProfileModal(true)} className='cursor-pointer w-full t-bg-hover2 transition-colors flex justify-center items-center py-2.5'>
          <UserImg letter='D' size='sm' />
        </li>
      </ul>
      <ProfileSettingsModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </aside>
  )
}

export default MobileNav
