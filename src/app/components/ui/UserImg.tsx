import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { IoChatbubbleSharp } from 'react-icons/io5'

const UserImg = ({ letter, color, size, variant, highlight }: { letter: string, color?: string, size?: 'xs' | 'sm' | 'md' | 'lg', variant?: 'edit' | 'notification', highlight?: boolean }) => {
  return (
    <div className={`text-white group aspect-square bg-blue-500 rounded-full flex justify-center items-center relative
    ${size === 'xs' ? 'w-3 h-3 text-xs p-2' : size === 'sm' ? 'w-6 h-6 text-sm p-3' : size ==='md' ? 'w-8 h-8 text-base p-3' : 'w-12 h-12 text-base p-4'}
    ${color}
    ${variant === 'edit' && 'transition-colors cursor-pointer'}
    `}>
      {variant === 'edit' && <FiEdit className='absolute opacity-0 group-hover:opacity-100' />}
      <span className={`font-bold leading-3 ${size === 'md' && 'text-sm'}`}>{letter}</span>
      {variant === 'notification' && <span className={`absolute -bottom-0.5 -right-0.5 text-white`}><IoChatbubbleSharp className='text-lg' /></span>}
    </div>
  )
}

export default UserImg