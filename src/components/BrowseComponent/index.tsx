import React from 'react';
import img1 from '../../images/img-1.jpg';
import './styles.css';

export default function BrowseComponent() {
  return (
    <div className="browse-component">
      <div className="bg-[url('./images/bg-1.jpg')] flex bg-cover bg-no-repeat bg-center h-3/5 w-screen">
        <div className="flex flex-row my-28 lg:mx-40">
          <div className="mx-10 my-12">
            <div className="font-bold text-lg mb-2 text-left">Research Facility</div>
            <p className="text-black-100 text-sm text-base text-left">The study to compare the effectiveness of a study drug versus a standard-of-care therapy.</p>
          </div>
          <img className="browse-image" src={img1} alt="img-1" />
        </div>
      </div>
    </div>
  );
}
