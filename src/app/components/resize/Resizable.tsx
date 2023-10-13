'use client'
import React, { useState, useEffect, useRef } from 'react';

interface ResizableProps {
  children: React.ReactNode;
  maxW: string;
  minW?: string;
}

const Resizable: React.FC<ResizableProps> = ({ children, maxW, minW }) => {
  const [width, setWidth] = useState<string>(maxW)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [initialMouseX, setInitialMouseX] = useState<number>(0)
  const outerDivRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])
  
  const handleMouseDown = (e: React.MouseEvent) => { e.preventDefault(); setIsResizing(true) }
  const handleMouseUp = () => { setIsResizing(false) }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return
    if (!minW) minW = '0'
    if (outerDivRef.current) {
      const newWidth = e.clientX - outerDivRef.current.getBoundingClientRect().left
      const maxWValue = parseInt(maxW, 10)
      setWidth(newWidth > parseInt(minW) ? Math.min(newWidth, maxWValue).toString() + 'px' : minW)
    }
  }

  return (
    <div ref={outerDivRef} className={`flex`} style={{ width: width, maxWidth: maxW }}>
      {children}
      <div className='h-full w-1 t-bg-messagePanel border-r t-border cursor-e-resize' onMouseDown={handleMouseDown} />
    </div>
  );
};

export default Resizable;
