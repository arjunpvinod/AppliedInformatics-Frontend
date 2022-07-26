import React from 'react';
import CardComponent from '../CardComponent';
import cardData from './constants';
import './style.css';

export default function HighlightsComponent() {
  return (
    <div className="highlights">
      <div className="bg-[url('./images/bg-2.jpg')] bg-bottom bg-cover bg-no-repeat bg-center bg-no-repeat h-3/5 w-screen px-auto py-14 ">
        <h3 className="text-white font-semibold text-2xl">About the study</h3>
        <p className="text-white text-xs">Here are some key highlights of our study</p>
        <div className="max-w-3xl flex flex-wrap mx-auto my-4 items-center justify-center">
          {cardData.map((card) => (
            <CardComponent title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
