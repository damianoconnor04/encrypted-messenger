'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { LuCat } from 'react-icons/lu'
import { modak } from '../fonts'
import Marquee from '../components/ui/Marquee'

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

  const divRef = useRef<HTMLDivElement>(null)
  const mainDivRef = useRef<HTMLDivElement>(null)
  useEffect(() => { if (divRef.current && mainDivRef.current) mainDivRef.current.style.width = `${divRef.current.offsetWidth}px` }, [])
  return (
    <div className='h-full md:flex md:items-center w-full overflow-hidden'>
      <div className={`${modak.className} md:h-full px-12 md:pr-0 md:pb-12 pt-12 flex md:flex-col justify-between flex-1 t-text text-4xl md:text-8xl w-full`}>
        <LuCat />
        <span className='md:max-w-[6ch] md:whitespace-normal w-fit whitespace-nowrap'>lorem ipsum</span>
      </div>

      <div className='md:pr-12 md:py-12 md:h-full flex flex-col justify-end md:justify-center items-center md:items-end flex-1'>
        <div className='px-12 pt-12 md:p-0 md:max-w-md w-full'>
          <h3 className={`text-[1.5rem] t-text font-bold mb-5`}>Join today</h3>

          <div className='flex flex-col gap-y-2'>
            <button className='bg-inherit px-4 t-text font-medium text-sm rounded-full border border-slate-400 w-full h-[40px] hover:opacity-75 transition-opacity duration-200 flex items-center justify-center gap-2'><span className='text-lg'><FcGoogle /></span>Sign up with Google</button>
            <button className='bg-inherit px-4 t-text font-medium text-sm rounded-full border border-slate-400 w-full h-[40px] hover:opacity-75 transition-opacity duration-200 flex items-center justify-center gap-2'><span className='text-lg'><FaApple /></span>Sign up with Apple</button>
          </div>

          <div className='flex items-center justify-center w-full gap-x-2 my-2'>
            <div className='h-[1px] bg-slate-400 w-1/2' />
            <p className='t-text'>or</p>
            <div className='h-[1px] bg-slate-400 w-1/2' />
          </div>

          <button className='bg-sky-400 px-4 text-white font-medium rounded-full border border-sky-400 w-full h-[40px] hover:bg-sky-500 transition-colors duration-200 mb-2'>Create account</button>
          <p className='text-xs text-gray-500 leading-tight'>By signing up, you agree to the <a href='' className='text-sky-400'>Terms of Service</a> and <a href='' className='text-sky-400'>Privacy Policy</a>, including <a href='' className='text-sky-400'>Cookie Use</a>.</p>
        </div>

        <div className='md:mt-10 mt-5 px-12 md:px-0 md:max-w-md w-full'>
          <h3 className={`text-[1.25rem] t-text font-bold mb-5`}>Already have an account?</h3>
          <button className='bg-inherit px-4 text-sky-500 font-medium rounded-full border border-slate-400 w-full h-[40px] hover:bg-sky-500/[0.15] transition-colors duration-200'>Sign in</button>
        </div>
      </div>

      <Marquee />
    </div>
  )
}

export default AuthForm

// return (
//   <div className=''>
//     <div className=''>
//       <h2 className=''>{variant === 'LOGIN' ? 'Log in' : 'Create an account'}</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className=''>
//           {variant === 'REGISTER' && <Input id='name' label='Name' register={register} errors={errors} disabled={isLoading} />}
//           <Input id='email' label='Email' register={register} errors={errors} disabled={isLoading} />
//           <Input id='password' label='Password' register={register} errors={errors} disabled={isLoading} />
//           <Button disabled={isLoading} type='submit' fullWidth>
//             {variant === 'LOGIN' ? 'Sign in' : 'Create account'}
//           </Button>
//         </div>
//       </form>
//       <div className='w-full h-[1px] bg-neutral-700 rounded-full' />
//       <div className=''>
//         <span className=''>{variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}</span>
//         <button onClick={toggleVariant} className=''>{variant === 'LOGIN' ? 'Create an account' : 'Log in'}</button>
//       </div>
//     </div>
//   </div>
// )