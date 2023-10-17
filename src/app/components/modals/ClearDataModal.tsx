import React, { useState, ChangeEvent } from 'react'
import { IoWarning } from 'react-icons/io5'
import Modal from './Modal'
import Button from '../ui/Button'

const ClearDataModal = ({ isOpen, onClose, name }: { isOpen?: boolean, onClose: () => void, name: string }) => {
  const [clearOption, setClearOption] = useState<string>('device')
  const handleClearOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClearOption(e.target.value);
  }
  return (
    <Modal title='Clear All Data' maxW='sm' isOpen={isOpen} onClose={onClose}>
      <form className="px-3 pb-3">
        <div className='pointer-events-none flex items-center justify-center gap-1.5 my-1 py-1 px-3 bg-rose-400/50 rounded-xl'>
          <IoWarning className='text-2xl' />
          <span className='font-medium tracking-tight'>This action cannot be undone</span>
        </div>

        <p className='dark:text-white text-black text-sm tracking-tight font-light text-center mt-2'>This will permanently delete your chats and connection with {name}. Would you like to clear all data from this device only or from the entire network including {name}?</p>

        <div className='flex flex-col my-3 rounded-lg border dark:border-d-border border-l-border'>
          <label className='cursor-pointer flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-t-lg border-b dark:border-d-border border-l-border'>
            <input className='accent-sky-400' type='radio' name='clearOption' value='device' checked={clearOption === 'device'} onChange={handleClearOptionChange} />
            <span className='dark:text-white text-black text-sm p-2'>Device Only</span>
          </label>
          <label className='cursor-pointer flex items-center dark:hover:bg-d-hoverbg2 hover:bg-l-hoverbg2 gap-2 w-full px-2 py-1 rounded-b-lg'>
            <input className='accent-sky-400' type='radio' name='clearOption' value='network' checked={clearOption === 'network'} onChange={handleClearOptionChange} />
            <span className='dark:text-white text-black text-sm p-2'>Device & Network</span>
          </label>
        </div>

        <div className='flex gap-x-2 mt-2'>
          <Button type='submit' danger>Clear Data</Button>
          <Button type='button' onClick={onClose} variant='secondary'>Cancel</Button>
        </div>
      </form>
    </Modal>
  )
}

export default ClearDataModal