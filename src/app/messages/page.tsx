'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import MessagePanel from './_components/messages/MessagePanel'
import Conversation from './_components/conversation/Conversation'
import ConvPanel from './_components/conversation/ConvPanel'
import EmptyState from '../components/EmptyState'


const Messages = () => {
  const [panelOpen, setPanelOpen] = useState<boolean>(true)
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const message = searchParams.get('message')
  const time = searchParams.get('time')

  return (
    <>
      <div className='w-full xl:block hidden'>
        <PanelGroup autoSaveId="conditional" direction='horizontal'>
          <Panel id="left" defaultSize={22} minSize={18} maxSize={22}>
            <MessagePanel />
          </Panel>
          <PanelResizeHandle className='w-1 dark:bg-d-panelbg bg-l-panelbg dark:border-d-border border-l-border border-r cursor-e-resize transition-colors hover:!border-sky-400/50' />
          {name && message && time ?
            <>
              <Panel id="middle" defaultSize={63} minSize={50}>
                <Conversation name={name} message={message} time={time} setPanelOpen={setPanelOpen} panelOpen={panelOpen} />
              </Panel>

              {panelOpen &&
                <>
                  <PanelResizeHandle className='w-3 dark:border-d-border border-l-border border-l dark:bg-d-panelbg bg-l-panelbg cursor-e-resize transition-colors hover:!border-sky-400/50' />
                  <Panel id="right" maxSize={20} defaultSize={15} minSize={15}>
                    <ConvPanel name={name} time={time} setPanelOpen={setPanelOpen} />
                  </Panel>
                </>
              }
            </>
            : <Panel id="right" defaultSize={78}>
              <div className='hidden xl:block w-full h-full'><EmptyState /></div>
            </Panel>
          }
        </PanelGroup>
      </div>
      <div className='xl:hidden block w-full h-[calc(100%_-_2.75rem)]'>
        {!name && !message && !time && <MessagePanel />}
        {name && message && time && <Conversation name={name} message={message} time={time} />}
      </div>
    </>
  )
}

export default Messages