import React from 'react';
import { IntroData } from './types';

export default function IntroComponent({ styled, caption, paragraph }: IntroData) {
  return (
    <div className={`rounded overflow-hidden mx-auto sm-m-none ${styled ? 'max-w-xl bg-slate-100 border-l-2 border-primary my-14' : 'max-w-2xl my-12'}`}>
      <div className="px-6 py-4">
        <div className={` ${styled ? 'text-lg' : 'text-xl'} font-bold mb-2 text-left`}>{caption}</div>
        {paragraph.map((para) => (
          <>
            <p className="text-black-100 text-sm text-base text-left">{para}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
