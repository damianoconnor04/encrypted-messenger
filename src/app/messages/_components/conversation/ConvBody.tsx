import Button from '@/app/components/ui/Button'
import React, { useEffect, useState } from 'react'
import { fakeMsgs } from './_fakemsg'

interface ConvBodyProps {
  name: string
  message: string
  time: string
}

const ConvBody: React.FC<ConvBodyProps> = ({ name, message, time }) => {
  const [numMessages, setNumMessages] = useState(1)
  const [messages, setMessages] = useState([message])

  useEffect(() => {
    setMessages([message]);
  }, [message]);

  const handleCreateChat = () => {
    const randomIndex = Math.floor(Math.random() * fakeMsgs.length)
    const newMessage = fakeMsgs[randomIndex]
    setMessages([...messages, newMessage])
    setNumMessages(numMessages + 1)
  }

  return (
    <div className='dark:text-white text-black flex-1 flex flex-col p-3 space-y-2 relative overflow-y-auto hide-scroll'>
      <span className='p-0.5 text-xs font-medium self-center dark:text-d-soft-text text-l-soft-text cursor-default'>{time}</span>
      <div className="fixed left-1/2 top-0.5"><Button onClick={handleCreateChat} variant='primary'>Generate chat</Button></div>
      {messages.map((msg, idx) => (
        <p key={idx} className={`z-0 max-w-[55%] cursor-default w-fit p-2.5 rounded-lg ${idx % 2 === 0 ? 'bg-neutral-200 text-black dark:text-white dark:bg-neutral-800 self-start' : 'bg-sky-500 self-end text-white'}`}>{msg}</p>
      ))}
    </div>
  )
}

export default ConvBody
