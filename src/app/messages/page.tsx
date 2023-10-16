'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import MessagePanel from './_components/messages/MessagePanel'
import Conversation from './_components/conversation/Conversation'
import ConvPanel from './_components/conversation/ConvPanel'
import EmptyState from '../components/EmptyState'


const Messages = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const message = searchParams.get('message')
  const time = searchParams.get('time')

  return (
    <>
      <div className='w-full md:block hidden'>
      <PanelGroup direction='horizontal'>
        <Panel defaultSize={25} minSize={20} maxSize={25}>
          <MessagePanel />
        </Panel>
        <PanelResizeHandle className='w-1.5 dark:bg-d-panelbg bg-l-panelbg dark:border-d-border border-l-border border-r cursor-e-resize transition-colors hover:!border-sky-400/50' />
        {name && message && time
          ? <>
            <Panel defaultSize={55} minSize={50}>
              <Conversation name={name} message={message} time={time} />
            </Panel>
            <PanelResizeHandle className='w-1.5 dark:border-d-border border-l-border border-l dark:bg-d-panelbg bg-l-panelbg cursor-e-resize transition-colors hover:!border-sky-400/50' />
            <Panel maxSize={20} defaultSize={12} minSize={12}>
              <ConvPanel name={name} time={time} />
            </Panel>
          </>
          : <Panel defaultSize={75}>
            <div className='hidden md:block w-full h-full'><EmptyState /></div>
          </Panel>
        }
      </PanelGroup>
      </div>
      <div className='md:hidden block w-full h-[calc(100%_-_2.75rem)]'>
        {!name && !message && !time && <MessagePanel />}
        {name && message && time && <Conversation name={name} message={message} time={time} />}
      </div>
      </>
  )
}

export default Messages