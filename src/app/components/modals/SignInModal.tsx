import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Input from '../ui/Input'
import { FieldValues, useForm } from 'react-hook-form'

const SignInModal = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  useEffect(() => { if (isOpen) {} }, [isOpen])
  const { register, formState: { errors } } = useForm<FieldValues>({ defaultValues: { email: "" } })
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxW="md">
      <h3 className='text-3xl t-text font-bold mb-5 px-6'>Sign in to Chat</h3>
      <form className='md:py-0 p-6'>
        <div className='flex flex-col gap-y-2'>
          <button className='t-s-button-bg px-4 t-s-button-text font-medium text-sm rounded-full border border-slate-400 w-full h-[38px] hover:opacity-75 transition-opacity flex items-center justify-center gap-2'><span className='text-lg'><FcGoogle /></span>Sign in with Google</button>
          <button className='t-s-button-bg px-4 t-s-button-text font-medium text-sm rounded-full border border-slate-400 w-full h-[38px] hover:opacity-75 transition-opacity flex items-center justify-center gap-2'><span className='text-lg'><FaApple /></span>Sign in with Apple</button>
        </div>

        <div className='flex items-center justify-center w-full gap-x-2 my-2'>
          <div className='h-[1px] bg-slate-400 w-1/2' />
          <p className='t-text'>or</p>
          <div className='h-[1px] bg-slate-400 w-1/2' />
        </div>

        <Input id='email' placeholder='Email or username' errors={errors} register={register} />
        <div className='mt-4'>
          <button className='bg-sky-400 px-4 text-white font-medium rounded-full border border-sky-400 w-full h-[38px] hover:bg-sky-500 hover:border-sky-500 transition-colors duration-200 mb-2'>Continue</button>
          <button className='bg-inherit px-4 t-text font-medium rounded-full border border-slate-400 w-full h-[38px] hover:bg-white/[0.15] transition-colors'>Forgot password?</button>
        </div>

        <div className='mt-8 pb-14'>
          <span className='text-sm text-neutral-500'>Don't have an account? <button className='text-sky-400 hover:underline'>Sign up</button></span>
        </div>
      </form>
    </Modal>
  )
}

export default SignInModal