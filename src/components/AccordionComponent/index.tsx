/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { AccordionProps } from './types';

export default function AccordionComponent({ title, content }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row m-1 justify-between w-full py-4 px-4 border-b border-slate-200" onClick={() => setIsActive(!isActive)}>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-primary">
          {isActive
            ? <FontAwesomeIcon icon={faChevronUp} />
            : <FontAwesomeIcon icon={faChevronDown} />}
        </div>
      </div>
      {isActive && <div className="text-xs py-2 px-4">{content}</div>}
    </div>
  );
}
