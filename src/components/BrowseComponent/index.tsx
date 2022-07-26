import React from 'react';
import './styles.css';
import { BrowseProps } from './types';

export default function BrowseComponent({
  bgImg, cardImg, title, content, cardPosition,
}: BrowseProps) {
  let mainClass = "bg-[url('";
  mainClass += bgImg.replace('"', '');
  mainClass += "')] flex bg-cover bg-no-repeat bg-center h-3/5 w-screen";
  return (
    <div className="browse-component">
      <div className={`${mainClass}`}>
        <div className={`my-28 lg:mx-40 flex ${cardPosition === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="mx-10 my-12">
            <div className="font-bold text-lg mb-2 text-left">{title}</div>
            <p className="text-black-100 text-sm text-base text-left">{content}</p>
          </div>
          <img className="browse-image" src={cardImg} alt="img-1" />
        </div>
      </div>
    </div>
  );
}
