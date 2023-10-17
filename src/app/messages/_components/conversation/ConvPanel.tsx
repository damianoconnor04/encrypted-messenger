import Modal from '@/app/components/modals/Modal'
import Button from '@/app/components/ui/Button'
import UserImg from '@/app/components/ui/UserImg'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { IoVolumeMuteOutline, IoVolumeHighOutline, IoPersonOutline, IoRemoveCircleOutline, IoTrashBin } from 'react-icons/io5'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'
import ClearDataModal from '@/app/components/modals/ClearDataModal'

const ConvPanel = ({ name, time, setPanelOpen }: { name: string, time: string, setPanelOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [clearDataModalOpen, setClearDataModalOpen] = useState<boolean>(false)

  const [showFriendModal, setShowFriendModal] = useState<boolean>(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true)
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled)
  const [pinned, setPinned] = useState<boolean>(false)
  const togglePinned = () => setPinned(!pinned)

  return (
    <div className={`py-3 pr-3 w-full h-full dark:bg-d-panelbg bg-l-panelbg`}>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='mx-auto w-full'>
          <button onClick={() => setPanelOpen(false)} className="transition-colors group h-9 max-h-9 flex items-center justify-center gap-2 mb-3 w-full dark:text-d-soft-text text-l-soft-text dark:hover:!text-sky-400/60 hover:!text-sky-400">
            <div className='h-[1px] dark:bg-l-accent bg-d-accent w-full group-hover:dark:bg-sky-400/60 group-hover:bg-sky-400' />
            <span className='text-sm whitespace-nowrap'>Hide panel</span>
            <div className='h-[1px] dark:bg-l-accent bg-d-accent w-full group-hover:dark:bg-sky-400/60 group-hover:bg-sky-400' />
          </button>
          <button onClick={() => setShowFriendModal(true)} className='transition-colors min-w-0 w-full flex flex-col items-center p-2 rounded-lg dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2'>
            <UserImg letter={name.charAt(0)} size='md' />
            <h6 className='dark:text-white text-black md:text-sm lg:text-base xl:text-lg font-medium tracking-tight'>{name.split(' ')[0] + (' ') + name.split(' ')[1].charAt(0)}</h6>
            <span className='dark:text-d-soft-text text-l-soft-text md:text-[0.625rem] lg:text-xs'>Last seen <time>{time}</time></span>
          </button>
          <div className='h-full flex gap-2 my-3'>
            <Button variant='tertiary' sm icon onClick={togglePinned}>
              {pinned ? <BsPinAngleFill className='text-sky-400 transition-colors' /> : <BsPinAngle className='transition-colors' />}
              <span className={`text-xs transition-colors ${pinned && 'text-sky-400'}`}>{pinned ? 'Unpin' : 'Pin'}</span>
            </Button>
            <Button variant='tertiary' sm icon onClick={toggleNotifications}>
              {notificationsEnabled ? <IoVolumeMuteOutline className='text-rose-400 transition-colors' /> : <IoVolumeHighOutline className='dark:!text-white !text-black transition-colors' />}
              <span className={`text-xs transition-colors text-rose-400 ${!notificationsEnabled && 'dark:!text-white !text-black'}`}>{notificationsEnabled ? 'Mute' : 'Unmute'}</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Button danger icon>
            <IoMdCloseCircleOutline className='text-xl' />
            <span className='text-sm'>Block User</span>
          </Button>
          <Button danger icon onClick={() => setClearDataModalOpen(true)}>
            <IoTrashBin className='text-xl' />
            <span className="text-sm">Clear Data</span>
          </Button>
        </div>
      </div>

      <Modal title={name} maxW='sm' isOpen={showFriendModal} onClose={() => setShowFriendModal(false)}>
        <div className='flex items-center px-2'>
          <span className='cursor-default dark:text-d-soft-text text-l-soft-text text-xs'>Connected since Oct 2023</span>
        </div>
        <div className='space-y-1.5 mt-2 mb-1 w-full'>
          <Button variant='tertiary' icon><IoPersonOutline className='text-lg' />View profile</Button>
          <Button variant='tertiary' sm icon onClick={togglePinned}>
              {pinned ? <BsPinAngleFill className='text-sky-400 transition-colors text-lg' /> : <BsPinAngle className='transition-colors text-lg' />}
              <span className={`ml-2 transition-colors ${pinned && 'text-sky-400'}`}>{pinned ? 'Unpin' : 'Pin'}</span>
          </Button>
          <Button variant='tertiary' sm icon onClick={toggleNotifications}>
              {notificationsEnabled ? <IoVolumeMuteOutline className='text-rose-400 transition-colors text-lg' /> : <IoVolumeHighOutline className='dark:!text-white !text-black transition-colors text-lg' />}
              <span className={`ml-2 transition-colors text-rose-400 ${!notificationsEnabled && 'dark:!text-white !text-black'}`}>{notificationsEnabled ? 'Mute' : 'Unmute'}</span>
          </Button>
          <Button variant='secondary' danger icon><IoRemoveCircleOutline className='text-lg' />Remove Friend</Button>
        </div>
      </Modal>

      <ClearDataModal isOpen={clearDataModalOpen} onClose={() => setClearDataModalOpen(false)} name={name} />
    </div>
  )
}

export default ConvPanel