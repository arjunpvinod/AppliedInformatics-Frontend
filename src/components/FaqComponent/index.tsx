import React from 'react';
// import Accordion from '../AccordionComponent';

export default function FaqComponent() {
  return (
    <div className="bg-white h-96 w-screen">
      <div className="rounded overflow-hidden flex flex-column text-left mx-auto sm-m-none max-w-xl my-14 px-auto py-6 px-4">
        {/* <Accordion title="sdd" content="fsdfsdfsdsfd" /> */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
              <button
                className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">
                Placeholder content for this accordion, which is intended to demonstrate
              </div>
            </div>
          </div>
          <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingTwo">
              <button
                className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">
                Placeholder content for this accordion, which is intended to demonstrate
              </div>
            </div>
          </div>
          <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingThree">
              <button
                className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to demons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
