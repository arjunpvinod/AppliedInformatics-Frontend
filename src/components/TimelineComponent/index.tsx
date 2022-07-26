import React from 'react';
import { TimeLineProps } from './types';

export default function TimelineComponent({
  position, title, content, end,
}: TimeLineProps) {
  return (
    <ol className={`relative ${!end ? 'border-l border-gray-200' : ''}`}>
      <li className="mb-10 ml-4">
        <div className="absolute w-8 h-8 bg-white border-2 border-slate-300 rounded-full -left-4 text-center align-center py-1 ">{position}</div>
        <h3 className="text-base ml-4 font-medium text-gray-900 dark:text-white">{title}</h3>
        <br />
        <p className="mb-4 ml-4 text-sm font-normal text-black-400" dangerouslySetInnerHTML={{ __html: content }} />
      </li>
    </ol>
  );
}
