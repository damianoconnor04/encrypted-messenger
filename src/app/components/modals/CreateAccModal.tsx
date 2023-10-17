import React, { useEffect } from 'react'
import Modal from './Modal'
import Input from '../ui/input/Input'
import { FieldValues, useForm } from 'react-hook-form'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Button from '../ui/Button'

const CreateAccModal = ({ isOpen, onClose }: { isOpen?: boolean; onClose: () => void }) => {
  useEffect(() => { if (isOpen) { } }, [isOpen])
  const { register, formState: { errors } } = useForm<FieldValues>({ defaultValues: { email: "", password: "", confirmPassword: "" } })
  const checksCompleted = 0
  const pwdProgress = (25 * checksCompleted) + "%"
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Create your account' maxW="2xl">
      {/* <h3 className='text-3xl dark:text-white text-black font-bold px-6 md:hidden'>Create your account</h3> */}
      <form className='p-6 flex flex-col justify-between md:justify-normal h-full'>
        <div className='space-y-3'>
          <Input id='email' placeholder='Email' errors={errors} register={register} />
          <Input id='username' placeholder='Username' errors={errors} register={register} />
          <div className='flex items-center gap-4 relative'>
            {checksCompleted > 0 && (
              <div className='absolute w-[calc(50%_-_0.5rem)] -bottom-4 h-1.5 rounded-full border dark:border-d-border border-l-border bg-black'>
                <div style={{ width: pwdProgress }} className={`absolute -bottom-[1px] h-1.5 rounded-full bg-green-400`} />
              </div>
            )}
            <Input id='password' type='password' placeholder='Password' errors={errors} register={register} />
            <Input id='confirmPassword' type='password' placeholder='Confirm Password' errors={errors} register={register} />
          </div>
        </div>
        <div className='md:mt-8'>
          <Button type='submit' variant='primary' onClick={() => {}}>Sign up</Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateAccModal

