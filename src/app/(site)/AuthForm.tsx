'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { SiDatadog } from 'react-icons/si'
import { modak } from '../fonts'
import SignInModal from '../components/modals/SignInModal'
import CreateAccModal from '../components/modals/CreateAccModal'
import Button from '../components/ui/Button'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const session = useSession()
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)

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

  const divRef = useRef<HTMLDivElement>(null)
  const mainDivRef = useRef<HTMLDivElement>(null)
  useEffect(() => { if (divRef.current && mainDivRef.current) mainDivRef.current.style.width = `${divRef.current.offsetWidth}px` }, [])
  return (
    <div className='h-[calc(100%_-_2.5rem)] md:flex md:items-center w-full overflow-hidden'>
      <div className='md:h-full px-4 sm:px-12 md:pr-0 md:pb-6 pt-6 flex md:flex-col justify-between flex-1 t-text text-4xl md:text-8xl w-full'>
        <SiDatadog />
        <span className={`${modak.className}`}>datadog</span>
      </div>

      <div className='md:pr-12 md:py-6 md:h-full flex flex-col justify-end md:justify-center items-center md:items-end flex-1'>
        <div className='px-4 sm:px-12 pt-6 md:p-0 md:max-w-sm w-full'>
          <h3 className={`text-[1.5rem] t-text font-bold mb-5`}>Join today</h3>

          <div className='flex flex-col gap-y-2'>
            <Button variant='sso'><span className='text-lg'><FcGoogle /></span>Sign up with Google</Button>
            <Button variant='sso'><span className='text-lg'><FaApple /></span>Sign up with Apple</Button>
          </div>

          <div className='flex items-center justify-center w-full gap-x-2 my-2'>
            <div className='h-[1px] bg-slate-400 w-1/2' />
            <p className='t-text uppercase'>or</p>
            <div className='h-[1px] bg-slate-400 w-1/2' />
          </div>

          <Button variant='primary' onClick={() => setShowCreateModal(true)}>Create account</Button>
          <p className='text-xs text-gray-500 leading-tight'>By signing up, you agree to the <a href='' className='text-sky-400'>Terms of Service</a> and <a href='' className='text-sky-400'>Privacy Policy</a>, including <a href='' className='text-sky-400'>Cookie Use</a>.</p>
        </div>

        <div className='md:mt-10 mt-4 px-4 sm:px-12 md:px-0 md:max-w-sm w-full'>
          <h3 className={`text-[1.25rem] t-text font-bold mb-5`}>Already have an account?</h3>
          <Button variant='secondary' onClick={() => setShowSignInModal(true)}>Sign in</Button>
        </div>
      </div>
      <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
      <CreateAccModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} />
    </div>
  )
}

export default AuthForm