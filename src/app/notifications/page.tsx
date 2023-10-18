'use client'
import React from 'react'
import NotificationsPanel from './_components/NotificationsPanel'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'


const Notifications = () => {
  return (
    <>
      <div className='w-full xl:block hidden'>
        <PanelGroup direction='horizontal'>
          
          <Panel defaultSize={22} minSize={18} maxSize={22}>
            <NotificationsPanel />
          </Panel>
          <PanelResizeHandle className='w-1 dark:bg-d-panelbg bg-l-panelbg dark:border-d-border border-l-border border-r cursor-e-resize transition-colors hover:!border-sky-400/50' />
          <Panel defaultSize={78}>
            <div className='w-full h-full bg-slate-800' />
          </Panel>
        
        </PanelGroup>
      </div>
      <div className='w-full xl:hidden block h-[calc(100%_-_2.75rem)]'>
        <NotificationsPanel />
      </div>
    </>
  )
}

export default Notifications