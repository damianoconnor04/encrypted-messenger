import React, { useEffect } from 'react'
import Modal from './Modal'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Input from '../ui/Input'
import { FieldValues, useForm } from 'react-hook-form'
import Button from '../ui/Button'

const SignInModal = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  useEffect(() => { if (isOpen) { } }, [isOpen])
  const { register, formState: { errors } } = useForm<FieldValues>({ defaultValues: { email: "" } })
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Sign in to Datadog' maxW="md">
      {/* <h3 className='text-3xl t-text font-bold md:hidden px-6'>Sign in to Datadog</h3> */}
      <form className='p-6 flex flex-col justify-between md:justify-normal h-full'>
        <div>
          <div className='flex max-[449px]:flex-col md:flex-col gap-2'>
            <Button variant='sso'><span className='text-lg'><FcGoogle /></span>Sign in with Google</Button>
            <Button variant='sso'><span className='text-lg'><FaApple /></span>Sign in with Apple</Button>
          </div>
          <div className='flex items-center justify-center w-full gap-x-2 my-2'>
            <div className='h-[1px] bg-slate-400 w-1/2' />
            <p className='t-text uppercase'>or</p>
            <div className='h-[1px] bg-slate-400 w-1/2' />
          </div>
          <Input id='email' placeholder='Email or username' errors={errors} register={register} />

          <div className='mt-4'>
            <div className='hidden md:block mb-1.5'><Button variant='primary' onClick={() => { }}>Continue</Button></div>
            <Button variant='tertiary'>Forgot password?</Button>
          </div>
          <div className='my-6 md:mb-0'>
            <span className='text-sm text-neutral-500'>Don't have an account? <button className='text-sky-400 hover:underline'>Sign up</button></span>
          </div>
        </div>

        <div className='block md:hidden'><Button variant='primary' onClick={() => { }}>Continue</Button></div>
      </form>
    </Modal>
  )
}

export default SignInModal