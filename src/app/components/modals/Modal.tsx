import React from 'react'
import { IoClose } from 'react-icons/io5'
import CustomToolTip from '../ui/CustomToolTip';

const Modal = ({ isOpen, onClose, children, title, maxW }: { isOpen?: boolean; onClose: () => void; children: React.ReactNode; title?: string; maxW: string }) => {
  const handleClose = () => onClose()

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-[9999]'>
          <main className='flex items-center justify-center min-h-screen p-12 md:p-0'>
            <div className='dark:bg-d-overlay bg-l-overlay animate-overlay absolute inset-0' onClick={handleClose} />
            <div className={`absolute inset-0 md:relative z-[9999] dark:bg-black bg-white animate-grow md:rounded-2xl ${maxW === 'xs' ? 'md:max-w-xs' : maxW === 'sm' ? 'md:max-w-sm' : maxW === 'md' ? 'md:max-w-md' : maxW === 'lg' ? 'md:max-w-lg' : maxW === 'xl' ? 'md:max-w-xl' : maxW === '2xl' ? 'max-w-2xl' : 'max-w-full'} w-full dark:text-white text-black`}>
              <div className='w-full flex items-center justify-between md:rounded-t-2xl p-2 md:border-b dark:border-d-border border-l-border dark:bg-black bg-white'>
                <h3 className='tracking-tighter cursor-default font-bold text-2xl md:text-xl p-2'>{title}</h3>
                <CustomToolTip id='modal-close' content='Close' delay={1000}>
                  <button onClick={handleClose} className='p-1 md:p-2 text-2xl hover:bg-white/[0.09] transition-colors duration-200 rounded-full text-rose-400'><IoClose /></button>
                </CustomToolTip>
              </div>
              <div className='h-[calc(100%_-_3.5rem)] flex flex-col justify-start'>
                <div className='p-2 w-full h-full md:h-fit'>
                  {children}
                </div>
              </div>

            </div>
          </main>
        </div>
      )}
    </>
  )
}

export default Modal

