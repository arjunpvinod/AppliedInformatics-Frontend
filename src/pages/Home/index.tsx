import React, { Fragment } from 'react';
import Navbar from '../../components/NavBar';
import HeroComponent from '../../components/HeroComponent';
import IntroComponent from '../../components/IntroComponent';
import HighlightsComponent from '../../components/HighlightsComponent';
import QuestionComponent from '../../components/QuestionComponent';
import FaqComponent from '../../components/FaqComponent';
import BrowseComponent from '../../components/BrowseComponent';
import TimelineComponent from '../../components/TimelineComponent';
import timeLineData from '../../components/TimelineComponent/constants';
import { introText1, introText2 } from '../../components/IntroComponent/constants';
import browseData from '../../components/BrowseComponent/constants';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <div className="bg-white w-screen">
        <IntroComponent
          styled={false}
          caption={introText1.caption}
          paragraph={introText1.paragraph}
        />
      </div>
      <HighlightsComponent />
      <div className="bg-white h-96 w-screen">
        <IntroComponent styled caption={introText2.caption} paragraph={introText2.paragraph} />
      </div>
      <QuestionComponent />
      <FaqComponent />
      {browseData.map((browse) => (
        <BrowseComponent
          bgImg={browse.bgImg}
          cardImg={browse.cardImg}
          title={browse.title}
          content={browse.content}
          cardPosition={browse.cardPosition}
        />
      ))}
      <div className="bg-white h-96 w-screen">
        <div className="rounded overflow-hidden flex flex-col text-left mx-auto sm-m-auto max-w-xl bg-white my-14 px-auto py-6 px-4">
          <h3 className="text-xl font-semibold text-black mb-3 text-center"> Patient Journey</h3>
          {timeLineData.map((timeline) => (
            <TimelineComponent
              position={timeline.position}
              title={timeline.title}
              content={timeline.content}
              end={timeline.end}
            />
          ))}
        </div>
      </div>
    </>
  );
}
