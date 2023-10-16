import Modal from '@/app/components/modals/Modal';
import Button from '@/app/components/ui/Button';
import CustomToolTip from '@/app/components/ui/CustomToolTip';
import UserImg from '@/app/components/ui/UserImg'
import React, { useState } from 'react'
import { IoTrash, IoTrashOutline } from 'react-icons/io5';

const ConvPanel = ({ name, time }: { name: string; time: string }) => {
  const [showFriendModal, setShowFriendModal] = useState(false)
  return (
    <div className='pr-1 w-full h-full dark:bg-d-panelbg bg-l-panelbg'>
      <div className='w-full h-full p-3 flex flex-col justify-between'>
        <button onClick={() => setShowFriendModal(true)} className='min-w-0 w-full flex items-center gap-1 lg:gap-2 max-h-9'>
          <div className='max-sm:block xl:block hidden'><UserImg letter={name.charAt(0)} size='md' /></div>
          <div className='sm:max-xl:block hidden'><UserImg letter={name.charAt(0)} size='sm' /></div>
          <div className='flex flex-col items-start'>
            <h6 className='dark:text-white text-black md:text-sm lg:text-base xl:text-lg font-medium tracking-tight'>{name.split(' ')[0] + (' ') + name.split(' ')[1].charAt(0)}</h6>
            <span className='dark:text-d-soft-text text-l-soft-text md:text-[0.625rem] lg:text-xs'>Last seen <time>{time}</time></span>
          </div>
        </button>

        <div className='text-white text-xs text-center'>
          <CustomToolTip id='del' content='Permanently delete data for both users'><Button danger icon>Clear data</Button></CustomToolTip>
        </div>
      </div>
      <Modal title={name} maxW='sm' isOpen={showFriendModal} onClose={() => setShowFriendModal(false)}>
        <Button variant='secondary'>Remove friend</Button>
      </Modal>
    </div>
  )
}

export default ConvPanel