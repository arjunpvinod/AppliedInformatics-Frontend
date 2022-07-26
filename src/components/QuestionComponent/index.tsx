import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function QuestionComponent() {
  return (
    <div className="bg-white h-96 w-screen">
      <div className="rounded overflow-hidden flex text-left mx-auto sm-m-none max-w-xl bg-primary my-14 px-auto py-6 px-4">
        <div className="px-6 py-4">
          <div className="text-white text-lg font-bold mb-2 text-left">Let&apos;s find out if you are eligible for this study.</div>
          {' '}
          <br />
          <p className="text-white text-tiny text-base text-left">Take up this questionnaire to help us determine if you have symptoms that are common for MDS and anemia. If you have the common symptoms, you may be eligible to take part in the study.</p>
          <br />
          <br />
          <button className="bg-white rounded-sm text-slate-500 text-sm font-semibold px-4 py-2" type="button">
            Start answering
            {' '}
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </div>
  );
}
