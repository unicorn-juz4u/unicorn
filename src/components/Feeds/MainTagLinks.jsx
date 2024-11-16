import React from 'react';

const MainTagLinks = () => {
  return (
    <div className=" p-6 rounded-lg">
      <div className="w-full h-auto flex items-center justify-center">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" className="" />
      </div>
      
      <div className="flex justify-between my-4 ">
        <h2 className="text-2xl font-semibold text-white">Advert.. 1</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Subscribe</button>      
      </div>
      
      <div className="flex items-center mb-4">
        <div>
          <p className="text-sm text-gray-400">Senior Software Engineer at Acme Corp</p>
          <p className="text-sm text-gray-400">Bengaluru, India | Software Engineering</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


      {/* Activity Feed */}
      <div className="mt-4">
        {/* ... Activity feed items */}
      </div>
    </div>
  );
};

export default MainTagLinks;