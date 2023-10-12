import React, { useEffect } from 'react'
import Modal from './Modal'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Input from '../ui/Input'
import { FieldValues, useForm } from 'react-hook-form'

const CreateAccModal = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  useEffect(() => { if (isOpen) { } }, [isOpen])
  const { register, formState: { errors } } = useForm<FieldValues>({ defaultValues: { email: "", password: "", confirmPassword: "" } })
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Create your account' maxW="2xl">
      {/* <h3 className='text-3xl t-text font-bold mb-5 px-6'>Create your account</h3> */}
      <form className='p-6'>
        <div className='space-y-3'>
          <Input id='email' placeholder='Email' errors={errors} register={register} />
          <Input id='username' placeholder='Username' errors={errors} register={register} />
          <div className='flex items-center gap-4'>
            <Input id='password' type='password' placeholder='Password' errors={errors} register={register} />
            <Input id='confirmPassword' type='password' placeholder='Confirm Password' errors={errors} register={register} />
          </div>
        </div>
        <div className='pt-10'>
          <button className='bg-sky-400 px-4 text-white font-medium rounded-full border border-sky-400 w-full h-[38px] hover:bg-sky-500 hover:border-sky-500 transition-colors duration-200 mb-2'>Sign up</button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateAccModal

