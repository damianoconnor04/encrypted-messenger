import React from 'react'
import { IoClose } from 'react-icons/io5'
import CustomToolTip from '../ui/CustomToolTip';

const Modal = ({ isOpen, onClose, children, title, maxW }: { isOpen?: boolean; onClose: () => void; children: React.ReactNode; title?: string; maxW: string }) => {
  const handleClose = () => onClose()

  return (
    <>
      {isOpen && (
        <div className='fixed z-50 inset-0'>
          <main className='flex items-center justify-center min-h-screen p-12 md:p-0'>
            <div className='t-bg-overlay animate-overlay absolute inset-0' onClick={handleClose} />
            <div className={`absolute inset-0 md:relative z-[9999] t-bg animate-grow md:rounded-2xl p-2 ${maxW === "2xl" && 'md:max-w-2xl'} ${maxW === "md" && 'md:max-w-md'} w-full t-text`}>
              <div className='flex items-center justify-between'>
                <h3 className='cursor-default font-bold text-xl p-2'>{title}</h3>
                <CustomToolTip id='modal-close' content='Close' delay={1000}>
                  <button onClick={handleClose} className='p-1 md:p-2 text-2xl hover:bg-white/10 transition-colors duration-200 rounded-full text-rose-400'><IoClose /></button>
                </CustomToolTip>
              </div>
              <div className='h-full flex flex-col justify-center'>
                <div className='p-2 w-full'>
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

