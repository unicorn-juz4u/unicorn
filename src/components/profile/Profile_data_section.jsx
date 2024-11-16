import React, { useState } from 'react';
// import Profile_data_buttons from './Profile_data_buttons';
// import About_us_card from './About_us_card';
// import Projects_card from './Projects_card';

const Profile_data_section = () =>
{
  const [activeComponent, setActiveComponent] = useState('profile');

  const handleButtonClick = (componentName) =>
  {
    setActiveComponent(componentName);
  };

  return (
    <div className="w-[75%]">
      {/* <Profile_data_buttons handleButtonClick={handleButtonClick} />
      {activeComponent === 'profile' && <About_us_card />}
      {activeComponent === 'activity' && <Projects_card />}
      {activeComponent === 'projects' && <Profile_data_buttons />} */}
    </div>
  );
};

export default Profile_data_section;