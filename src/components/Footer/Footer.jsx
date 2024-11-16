import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-32 space-x-4">
        <div className="flex items-center">
          <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn Logo" className="w-8 h-8 mr-4" />
          <p className="text-lg font-semibold">LinkedIn</p>
        </div>

        {/* <div className="flex justify-around px-32 mx-auto space-x-4"> */}
          <div className="">
            <p className="text-sm font-semibold mb-4">Navigation</p>
            <ul className="space-y-2  flex flex-col justify-around ">
              <li><a href="#" className="text-sm hover:underline">About</a></li>
              <li><a href="#" className="text-sm hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm hover:underline">Advertising</a></li>
            </ul>
          </div>

          <div className="">
            <p className="text-sm font-semibold mb-4">Talent Solutions</p>
            <ul className="space-y-2 flex flex-col justify-around ">
              <li><a href="#" className="text-sm hover:underline">Small Business</a></li>
              <li><a href="#" className="text-sm hover:underline">Marketing Solutions</a></li>
              <li><a href="#" className="text-sm hover:underline">Sales Solutions</a></li>
            </ul>
          </div>

          <div className="gap-3">
            <p className="text-sm font-semibold mb-4">Community Guidelines</p>
            <ul className="space-y-2 flex flex-col justify-around ">
              <li><a href="#" className="text-sm hover:underline">Privacy & Terms</a></li>
              <li><a href="#" className="text-sm hover:underline">Mobile App</a></li>
              <li><a href="#" className="text-sm hover:underline">Safety Center</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-around items-center text-center">
            <p className="text-sm font-semibold">Fast Access</p>
            {/* <ul className="space-y-2"> */}
            <a href="#" className="w-[8rem] text-sm hover:underline bg-sky-600 py-2 my-3 rounded-md">QUESTIONS?</a>
            <a href="#" className="w-[8rem] text-sm hover:underline bg-black py-2 my-3 border border-gray-300 rounded-md">SETTINGS</a>
            {/* </ul> */}
          </div>

          <div className=" text-center">
            <p className="text-sm font-semibold mb-4">Language</p>
            <div className="flex items-center">
              <select className="bg-gray-800 text-white border border-gray-700 rounded-md p-2">
                <option value="en">ENGLISH</option>
                {/* Add more language options here */}
              </select>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;