import React, { useState } from 'react';

const Profile_data_buttons = () =>
{
  const [activeButton, setActiveButton] = useState('profile');

  const handleButtonClick = (buttonName) =>
  {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-[100%] my-6 flex flex-col mt-4">
      <div className="w-10/12 flex items-end text-center gap-1">
        <button
          className={`w-[33%] py-2 ${activeButton === 'profile' ? 'bg-sky-600 pt-4' : 'bg-black'
            } text-white hover:bg-sky-600`}
          onClick={() => handleButtonClick('profile')}
        >
          PROFILE
        </button>
        <button
          className={`w-[33%] py-2 ${activeButton === 'activity' ? 'bg-sky-600 pt-4' : 'bg-black'
            } text-white hover:bg-sky-600`}
          onClick={() => handleButtonClick('activity')}
        >
          Activity & interests
        </button>
        <button
          className={`w-[33%] py-2 ${activeButton === 'articles' ? 'bg-sky-600 pt-4' : 'bg-black'
            } text-white hover:bg-sky-600`}
          onClick={() => handleButtonClick('articles')}
        >
          Articles (3)
        </button>
      </div>
      <hr className="w-full border-gray-600" />
    </div>
  );
};

export default Profile_data_buttons;