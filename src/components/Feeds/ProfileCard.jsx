import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-black p-4 rounded-lg ">
      <div className="relative">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" className="w-24 h-24 rounded-full" />
        <div className="absolute -top-10 -right-10 bg-gray-800 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3 17m3-5l6 6m-6-6l6-6" />
          </svg>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-white mt-4">USERNAME</h2>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm text-gray-400">Contacts</p>
          <p className="text-sm font-semibold text-white">50</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Profile Views</p>
          <p className="text-sm font-semibold text-white">3</p>
        </div>
      </div>

      <div className="bg-yellow-300 text-black p-2 rounded-md my-4">
        Try Premium for free
      </div>

      <a href="#" className="text-blue-400 hover:underline mt-4">My Elements</a>
    </div>
  );
};

export default ProfileCard;