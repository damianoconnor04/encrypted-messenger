import React from 'react'

const Marquee = () => {
  return (
    <div className='marquee-div md:p-2 font-medium absolute top-0 overflow-hidden whitespace-nowrap w-full t-bg-accent'>
      <div className='inline-block marquee w-full'>
        <ul className='flex justify-between uppercase list-disc t-text'>&nbsp;
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>sit amet</li>
        </ul>
      </div>
      <div className='inline-block marquee2 w-full '>
        <ul className='flex justify-between uppercase list-disc t-text'>&nbsp;
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>sit amet</li>
        </ul>
      </div>
    </div>
  )
}

export default Marquee