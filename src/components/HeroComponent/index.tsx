import React from 'react';

export default function HeroComponent() {
  return (
    <div className="bg-[url('./images/bg-1.jpg')] flex bg-cover bg-no-repeat bg-center h-auto w-screen">
      <div className="max-w-lg rounded overflow-hidden lg:ml-52 lg:my-48 sm:mx-auto sm-my-auto">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2 text-left">A clinical research study for people with myelodysplastic syndromes with anemia.</div>
          <p className="text-black-100 text-sm text-base text-left">The study to compare the effectiveness of a study drug versus a standard-of-care therapy. Individuals will be evaluated to determine their eligibility to participate. Each person who qualifies will receive either the study drug or standard-of-care therapy, study-related medical exams, and study-related laboratory tests at no cost.</p>
          <div className="mt-3 text-left">
            <button className="text-white h-8 text-sm font-semibold px-5 bg-primary rounded-sm focus:shadow-outline hover:bg-primary-dark" type="button">
              Check my eligibility
            </button>
            <button className="ml-3 h-8 border border-primary text-sm font-semibold px-5 text-primary bg-transparent-500 rounded-sm focus:shadow-outline hover:bg-slate-200" type="button">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
