import React from 'react';

const SocialMediaButtons = () => {
  return (
    <div className="">
      <hr className="w-full border-t border-gray-700 my-2" />
      <div className="flex items-center justify-around space-x-4 mt-4">
        <button className="flex flex-col justify-center items-center  text-gray-400 hover:text-white   w-3/12">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="text-sm text-gray-400">Like</p>
        </button>
        <button className="   flex flex-col items-center  text-gray-400 hover:text-white w-3/12">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="text-sm text-gray-400">Comment</p>
        </button>
        <button className="  flex flex-col items-center  text-gray-400 hover:text-white w-3/12">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="text-sm text-gray-400">Share</p>
        </button>
        <button className="  flex flex-col justify-center items-center text-gray-400 hover:text-white w-3/12">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="text-sm text-gray-400">Send</p>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaButtons;