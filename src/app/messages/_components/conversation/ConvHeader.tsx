'use client'
import React from 'react'
import { RiUserAddLine } from 'react-icons/ri'
import { IoChevronBack, IoEllipsisHorizontal } from 'react-icons/io5'
import { FieldValues, useForm } from 'react-hook-form' 
import Search from '@/app/components/ui/Search'
import CustomToolTip from '@/app/components/ui/CustomToolTip'
import { useRouter } from 'next/navigation'

const ConvHeader = ({ name }: { name: string }) => {
  const router = useRouter()
  const { register, formState: { errors } } = useForm<FieldValues>({ defaultValues: { search: "" } })
  return (
    <div className='p-3 dark:text-white text-black border-b dark:border-d-border border-l-border'>
      <div className='max-h-9 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='xl:hidden block'><CustomToolTip delay={1250} id='more' content='More'><button onClick={() => router.back()} className='p-1.5 rounded-full transition-colors hover:text-sky-400/95'><IoChevronBack /></button></CustomToolTip></span>
        <div className='w-2 h-2 bg-neutral-400 border dark:border-d-border border-l-border rounded-full' />
        <h6 className='font-medium tracking-tight h-9 flex items-center justify-center cursor-default xl:text-lg'>{name}</h6>
      </div>
      <div className='flex items-center gap-1 lg:text-lg'>
        <form>
          <Search placeholder='Search' id='search' register={register} errors={errors} />
        </form>
        <CustomToolTip delay={1250} id='f' content='Add others'><button className='p-1.5 rounded-full transition-colors hover:text-sky-400/95'><RiUserAddLine /></button></CustomToolTip>
        <CustomToolTip delay={1250} id='more' content='More'><button className='p-1.5 rounded-full transition-colors hover:text-sky-400/95'><IoEllipsisHorizontal /></button></CustomToolTip>
      </div>
      </div>
    </div>
  )
}

export default ConvHeader