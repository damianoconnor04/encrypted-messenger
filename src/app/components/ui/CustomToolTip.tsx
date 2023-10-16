import React from 'react';
import { Tooltip } from 'react-tooltip';

interface ToolTipProps {
  id: string;
  content: string;
  delay?: number;
  children?: React.ReactNode;
  place?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
}

const CustomToolTip: React.FC<ToolTipProps> = ({ id, content, delay, children, place }) => {
  if (!delay) delay = 1000
  if (!place) place = 'top'
  return (
    <div>
      <div data-tooltip-id={id} data-tooltip-content={content} data-tooltip-delay-show={delay} data-tooltip-place={place} data-tooltip-delay-hide={200}>
        {children}
      </div>
      <span className='text-base'><Tooltip id={id} /></span>
    </div>
  );
};

export default CustomToolTip;
