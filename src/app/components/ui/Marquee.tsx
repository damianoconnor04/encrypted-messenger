import Link from 'next/link'
import React from 'react'

const Marquee = () => {
  return (
    <div className='marquee-div md:p-2 font-medium overflow-hidden whitespace-nowrap w-full dark:bg-d-accent bg-l-accent'>
      <div className='inline-block marquee w-[200%] lg:w-full'>
        <ul className='flex justify-between uppercase dark:text-white text-black'>&nbsp;
          <Link href="/">no metadata</Link>
          <Link href="/">privacy rights</Link>
          <Link href="/">blog</Link>
        </ul>
      </div>
      <div className='inline-block marquee2 w-[200%] lg:w-full '>
        <ul className='flex justify-between uppercase dark:text-white text-black'>&nbsp;
          <Link href="/">no metadata</Link>
          <Link href="/">privacy rights</Link>
          <Link href="/">blog</Link>
        </ul>
      </div>
    </div>
  )
}

export default Marquee