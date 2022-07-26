import React from 'react';

export default function BottomComponent() {
  return (
    <div className="flex justify-left overflow-hidden lg:mx-auto sm-m-none max-w-2xl mt-8 mb-16 mx-4">
      <div className="flex flex-col">
        <div className="flex flex-row max-w-sm">
          <div className="flex flex-col justify-left max-w-sm mr-12 ">
            <h5 className="text-slate-900 font-semibold text-left my-4">Address</h5>
            <p className="text-left text-slate-700 text-sm">350 5th Ave, New York, NY</p>
            <p className="text-left text-slate-700 text-sm">10118, USA</p>
          </div>
          <div className="flex flex-col justify-left max-w-sm mr-12">
            <h5 className="text-slate-900 font-semibold text-left my-4">Links</h5>
            <a className="text-primary text-left text-sm" href="#about">About</a>
            <a className="text-primary text-left text-sm" href="#FAQ">FAQ</a>
            <a className="text-primary text-left text-sm" href="#eligibility">Eligibility</a>
            <a className="text-primary text-left text-sm" href="#features">Features</a>
            <a className="text-primary text-left text-sm" href="#journey">Journey</a>
          </div>
        </div>
        <div className="flex flex-col justify-left max-w-sm mr-12">
          <h5 className="text-slate-900 font-semibold text-left my-4">Contacts</h5>
          <p className="text-left text-slate-700 text-sm">support@iconnect.com</p>
          <p className="text-left text-slate-700 text-sm">+1 (0) 000 0000 001</p>
          <p className="text-left text-slate-700 text-sm">+1 (0) 000 0000 002</p>
        </div>
      </div>
    </div>
  );
}
