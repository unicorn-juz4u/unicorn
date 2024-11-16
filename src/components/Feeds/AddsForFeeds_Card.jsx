import React from 'react'
import Feed_card from './Feed_card';

const AddsForFeeds_Card = () => {
   return (
    <div className="bg-black p-4 rounded-lg mb-6 ">
      <div className="flex justify-between mb-4">
        <p className="">Add to your feed</p>
        <span className=" text-center bg-white italic text-black px-2">i</span>
      </div>
      <Feed_card />
      <Feed_card />
      <Feed_card />
     </div>
  );
}

export default AddsForFeeds_Card