import React from 'react';

export default function EnquiryComponent() {
  return (
    <div className="highlights">
      <div className="bg-[url('./images/bg-2.jpg')] bg-cover bg-no-repeat bg-center bg-no-repeat h-3/5 w-screen px-auto py-14 ">
        <h3 className="text-white font-semibold text-2xl">Got a question?</h3>
        <div className="flex flex-col lg:max-w-md mx-4 md:mx-auto mt-4">
          <div className="flex flex-row justify-center w-full">
            <input className="w-1/2 mb-4 p-2 rounded-sm text-sm" type="text" placeholder="Name" />
            <input className="w-1/2 ml-2 mb-4 p-2 rounded-sm text-sm" type="email" placeholder="Email" />
          </div>
          <div>
            <textarea className="w-full p-2 rounded-sm text-sm" placeholder="Question" />
          </div>
          <div className="flex flex-row justify-center w-full">
            <button className="btn btn-primary p-2 my-2 mx-4 rounded-sm text-white font-semibold bg-primary" type="button">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
