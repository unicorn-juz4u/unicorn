import React from 'react';

const FeedsStats = () => {
  return (
    <div className="flex justify-around items-center space-x-4 mt-4">
      <button className="text-gray-400  hover:text-white flex flex-col  justify-center items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.293 0l-3.197 2.132a1 1 0 001.293 1.293l3.197-2.132v7.664a1 1 0 001.293.707l3.197 2.132a1 1 0 001.293-.707v-7.664z" />
        </svg>
        <p className="text-sm text-gray-400">1025</p>
      </button>

      <button className="text-gray-400 hover:text-white flex flex-col  justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.087 8-9 8a9 9 0 01-9-9 9 9 0 019-9z" />
        </svg>
        <p className="text-sm text-gray-400">753 comments</p>
      </button>

      <button className="text-gray-400 hover:text-white flex flex-col  justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H7m4 0 4 4m-4-4H7" />
        </svg>
        <p className="text-sm text-gray-400">234 shares</p>
      </button>
      
    </div>
  );
};

export default FeedsStats;