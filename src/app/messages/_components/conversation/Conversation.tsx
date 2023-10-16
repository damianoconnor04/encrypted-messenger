import React from 'react'
import ConvHeader from './ConvHeader'
import ConvBody from './ConvBody'
import ConvFooter from './ConvFooter'

interface ConversationProps {
  name: string
  message: string
  time: string
}

const Conversation: React.FC<ConversationProps> = ({ name, message, time }) => {

  return (
    <div className='w-full h-full flex flex-col dark:bg-black bg-white'>
        <ConvHeader name={name} />
        <ConvBody name={name} message={message} time={time} />
        <ConvFooter />
    </div>
  )
}

export default Conversation