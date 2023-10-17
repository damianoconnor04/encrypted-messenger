import React, { Dispatch, SetStateAction } from 'react'
import ConvHeader from './ConvHeader'
import ConvBody from './ConvBody'
import ConvFooter from './ConvFooter'

interface ConversationProps {
  name: string
  message: string
  time: string
  setPanelOpen?: Dispatch<SetStateAction<boolean>>
  panelOpen?: boolean
}

const Conversation: React.FC<ConversationProps> = ({ name, message, time, setPanelOpen, panelOpen }) => {

  return (
    <div className='w-full h-full flex flex-col dark:bg-black bg-white'>
        {setPanelOpen !== undefined && panelOpen !== undefined
          ? <ConvHeader name={name} setPanelOpen={setPanelOpen} panelOpen={panelOpen} />
          : <ConvHeader name={name} />
        }
        <ConvBody name={name} message={message} time={time} />
        <ConvFooter />
    </div>
  )
}

export default Conversation