'use client'
import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import UserImg from '../ui/UserImg'
import Link from 'next/link'
import Button from '../ui/Button'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbLogout } from 'react-icons/tb'
import InputS from '../ui/InputS'
import { FieldValues, useForm } from 'react-hook-form'

const ProfileSettingsModal = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  const [isInputChanged, setInputChanged] = useState<boolean>(false)
  const { register, formState: { errors }, setValue } = useForm<FieldValues>({ defaultValues: { username: "David Lee", } })
  useEffect(() => { setValue('username', 'David Lee') }, [setValue])

  return (
    <Modal title='Profile settings' isOpen={isOpen} onClose={onClose} maxW='xs'>
      <div className='flex flex-col gap-3'>
        <form className="flex flex-col items-center">
          <div className='overlay translate-y-full'></div><UserImg letter='D' size='lg' variant='edit' />
          <div className='flex items-center justify-between'>
            <InputS username='David Lee' setInputChanged={setInputChanged} id='username' register={register} errors={errors} />
          </div>
          <Link href="#" className='text-sm text-sky-500 my-0.5'>@official_lee5</Link>
          <div className='space-y-1.5 mt-2 mb-1 w-full'>
            <Button icon variant='secondary'><IoSettingsOutline />Settings</Button>
            <Button icon variant='secondary'><AiOutlineUserAdd />Add account</Button>
            {isInputChanged && <Button variant='primary' type='submit'>Save</Button>}
            <Button icon danger><TbLogout />Log out</Button>
          </div>
        </form>
      </div>
    </Modal >
  )
}

export default ProfileSettingsModal