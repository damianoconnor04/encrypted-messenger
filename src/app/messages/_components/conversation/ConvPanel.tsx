import Modal from '@/app/components/modals/Modal'
import Button from '@/app/components/ui/Button'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import UserImg from '@/app/components/ui/UserImg'
import React, { ChangeEvent, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { IoNotificationsOffOutline, IoNotificationsOutline, IoTrashBin, IoWarning } from 'react-icons/io5'
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs'

const ConvPanel = ({ name, time }: { name: string; time: string }) => {
  const [clearDataModalOpen, setClearDataModalOpen] = useState<boolean>(false)
  
  const [clearOption, setClearOption] = useState<string>('device')
  const handleClearOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClearOption(e.target.value);
  }

  const [showFriendModal, setShowFriendModal] = useState<boolean>(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true)
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled)
  const [pinned, setPinned] = useState<boolean>(false)
  const togglePinned = () => setPinned(!pinned)

  return (
    <div className={`py-3 pr-3 w-full h-full dark:bg-d-panelbg bg-l-panelbg`}>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='mx-auto w-full'>
          <button onClick={() => []} className="transition-colors group h-9 max-h-9 flex items-center justify-center gap-2 mb-3 w-full dark:text-d-soft-text text-l-soft-text dark:hover:!text-sky-400/60 hover:!text-sky-400">
            <div className='h-[1px] dark:bg-l-accent bg-d-accent w-full group-hover:dark:bg-sky-400/60 group-hover:bg-sky-400' />
            <span className='text-sm whitespace-nowrap'>Hide panel</span>
            <div className='h-[1px] dark:bg-l-accent bg-d-accent w-full group-hover:dark:bg-sky-400/60 group-hover:bg-sky-400' />
          </button>        

          <button onClick={() => setShowFriendModal(true)} className='transition-colors min-w-0 w-full flex flex-col items-center p-2 rounded-lg dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2'>
            <UserImg letter={name.charAt(0)} size='md' />
            <h6 className='dark:text-white text-black md:text-sm lg:text-base xl:text-lg font-medium tracking-tight'>{name.split(' ')[0] + (' ') + name.split(' ')[1].charAt(0)}</h6>
            <span className='dark:text-d-soft-text text-l-soft-text md:text-[0.625rem] lg:text-xs'>Last seen <time>{time}</time></span>
          </button>
        </div>

        <div className='h-full flex flex-col gap-y-2 my-3'>
          {/* <h6 className='dark:text-white text-black tracking-tight font-medium'>Settings</h6>
          <div className='flex flex-col gap-y-1 mt-1'>
            <button className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg' onClick={toggleNotifications}>
              {notificationsEnabled ? <IoNotificationsOffOutline className='text-black dark:text-white text-xl' /> : <IoNotificationsOutline className='text-black dark:text-white text-xl' />}
              <p className='dark:text-white text-black text-sm'>{notificationsEnabled ? 'Mute' : 'Unmute'}</p>
            </button>
            <button className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg' onClick={togglePinned}>
              {pinned ? <BsPinAngleFill className='text-black dark:text-white text-xl' /> : <BsPinAngle className='text-black dark:text-white text-xl' />}
              <p className='dark:text-white text-black text-sm'>{pinned ? 'Unpin' : 'Pin'}</p>
            </button>
            <button className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg'>
              <IoWarningOutline className='text-black dark:text-white text-xl' />
              <p className='dark:text-white text-black text-sm'>Report User</p>
            </button>
            <button className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg'>
              <IoMdCloseCircleOutline className='text-black dark:text-white text-xl' />
              <p className='dark:text-white text-black text-sm'>Block User</p>
            </button>
          </div> */}
          <Button variant='tertiary' icon onClick={toggleNotifications}>
            {notificationsEnabled ? <IoNotificationsOffOutline className='text-xl' /> : <IoNotificationsOutline className='text-xl' />}
            <span className='text-sm'>{notificationsEnabled ? 'Mute' : 'Unmute'}</span>
          </Button>
          <Button variant='tertiary' icon onClick={togglePinned}>
            {pinned ? <BsPinAngleFill className='text-xl text-sky-400 transition-colors' /> : <BsPinAngle className='text-xl' />}
            <span className={`text-sm ${pinned && 'text-sky-400'} transition-colors`}>{pinned ? 'Unpin' : 'Pin'}</span>
          </Button>
        </div>

        <div className="flex flex-col gap-y-2">
          <Button danger icon>
            <IoMdCloseCircleOutline className='text-xl' />
            <span className='text-sm'>Block User</span>
          </Button>
          <Button danger icon>
            <IoTrashBin className='text-xl'/>
            <span className="text-sm">Clear Data</span>
          </Button>
        </div>
      </div>

      <Modal title={name} maxW='sm' isOpen={showFriendModal} onClose={() => setShowFriendModal(false)}>
        <Button variant='secondary'>Button</Button>
      </Modal>

      <Modal title='Clear All Data' maxW='sm' isOpen={clearDataModalOpen} onClose={() => setClearDataModalOpen(false)}>
        <form className="px-3 pb-3">
          <div className='pointer-events-none flex items-center justify-center gap-1.5 my-1 py-1 px-3 bg-rose-400/50 rounded-xl'>
            <IoWarning className='text-2xl' />
            <span className='font-medium tracking-tight'>This action cannot be undone</span>
          </div>

          <p className='dark:text-white text-black text-sm text-center'>This will permanently delete your chats and connection with {name}. Would you like to clear all data from this device only or for the entire network (including {name})?</p>
          
          <div className='flex flex-col gap-y-1 mt-1'>
            <label className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg'>
              <input className='accent-sky-400' type='radio' name='clearOption' value='device' checked={clearOption === 'device'} onChange={handleClearOptionChange} />
              <span className='dark:text-white text-black text-sm'>Device Only</span>
            </label>
            <label className='flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-lg'>
              <input className='accent-sky-400' type='radio' name='clearOption' value='network' checked={clearOption === 'network'} onChange={handleClearOptionChange} />
              <span className='dark:text-white text-black text-sm'>Device & Network</span>
            </label>
          </div>
          
          <div className='flex gap-x-2 mt-2'>
            <Button type='submit' danger>Clear Data</Button>
            <Button variant='secondary'>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ConvPanel