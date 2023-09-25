'use client'
import Input from '@/app/components/ui/Input'
import Button from '@/app/components/ui/Button'
import React, { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const session = useSession()
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session?.status === 'authenticated') { router.push('/chat') }
  }, [session?.status, router])

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') { setVariant('REGISTER') }
    else { setVariant('LOGIN') }
  }, [variant])

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
  }

  return (
    <div className='sm:mx-auto w-full sm:max-w-sm'>
      <div className='bg-neutral-700/25 backdrop-blur-[7px] p-4 shadow-lg sm:rounded-lg'>
        <h2 className=' text-center text-2xl font-bold tracking-tight text-green-400'>
          {variant === 'LOGIN' ? 'Log in' : 'Create an account'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-6'>
            {variant === 'REGISTER' && <Input id='name' label='Name' register={register} errors={errors} disabled={isLoading} />}
            <Input id='email' label='Email' register={register} errors={errors} disabled={isLoading} />
            <Input id='password' label='Password' register={register} errors={errors} disabled={isLoading} />
            <Button disabled={isLoading} type='submit' fullWidth>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className='w-full h-[1px] bg-neutral-700 rounded-full my-4' />
        <div className='flex gap-2 justify-center text-xs px-2 text-gray-100'>
          {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
          <button onClick={toggleVariant} className='underline underline-offset-4 cursor-pointer text-green-400'>
            {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm