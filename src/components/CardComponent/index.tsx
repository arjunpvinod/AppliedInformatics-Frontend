import React from 'react';
import { CardData } from './types';

export default function CardComponent({ title, content }: CardData) {
  return (
    <div className="bg-slate-100 h-28 w-80 px-6 py-4 rounded-sm ml-4 mt-4 overflow-hidden">
      <div className="font-semibold text-base mb-2 text-left">
        {title}
      </div>
      <p className="text-black-100 text-tiny text-base text-left">
        {content}
      </p>
    </div>
  );
}
