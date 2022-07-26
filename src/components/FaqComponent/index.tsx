import React from 'react';
import AccordionComponent from '../AccordionComponent';
import accordionData from './constants';

export default function FaqComponent() {
  return (
    <div className="bg-white w-screen">
      <div className="rounded overflow-hidden flex flex-col text-left mx-auto sm-m-none max-w-xl my-14">
        <h1 className="text-center text-lg mb-4 font-semibold">Frequently Asked Questions</h1>
        {accordionData.map(({ title, content }) => (
          <AccordionComponent title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
