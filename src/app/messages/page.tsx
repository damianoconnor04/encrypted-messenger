'use client'
import React from 'react'
import EmptyState from '../components/EmptyState'
import { useSearchParams } from 'next/navigation'
import Conversation from './_components/conversation/Conversation'
import MessagePanel from './_components/messages/MessagePanel'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import ConvPanel from './_components/conversation/ConvPanel'

const Messages = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const message = searchParams.get('message')
  const time = searchParams.get('time')

  return (
    <PanelGroup direction='horizontal'>
      <Panel defaultSize={20} minSize={14} maxSize={20}>
        <MessagePanel />
      </Panel>
      <PanelResizeHandle className='w-1.5 dark:bg-d-panelbg bg-l-panelbg dark:border-d-border border-l-border border-r cursor-e-resize transition-colors hover:!border-sky-400/50' />
      {name && message && time 
      ? <>
        <Panel defaultSize={65}>
          <Conversation name={name} message={message} time={time} />
        </Panel>
        <PanelResizeHandle className='w-1.5 dark:border-d-border border-l-border border-l dark:bg-d-panelbg bg-l-panelbg cursor-e-resize transition-colors hover:!border-sky-400/50' />
        <Panel defaultSize={15} minSize={15} maxSize={25}>
          <ConvPanel name={name} time={time} />
        </Panel>
      </>
      : <Panel defaultSize={80}><div className='hidden md:block w-full h-full'><EmptyState /></div></Panel>
      }
    </PanelGroup>
  )
}

export default Messages