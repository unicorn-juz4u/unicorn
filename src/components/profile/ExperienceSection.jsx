import React from 'react';

const ExperienceCard = ({ color, title, company, timePeriod, description }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <div className={`w-6 h-6 rounded-full bg-${color}-500`} />
        <h3 className="text-lg font-semibold text-white ml-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-400">{company}</p>
      <p className="text-sm text-gray-400">{timePeriod}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      color: 'orange',
      title: 'Freelance UX/UI Designer',
      company: 'Lorem ipsum',
      timePeriod: 'Jun 2022 - Present (1 yr 2 mos)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum.',
    },
    {
      color: 'blue',
      title: 'UX/UI Designer',
      company: 'Lorem ipsum',
      timePeriod: 'Jun 2022 - Present (1 yr 2 mos)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum.',
    },
  ];

  return (
    <div className="bg-black my-4 p-4 rounded-lg ">
      <h2 className=" mb-4 text-xl font-semibold text-white">Experience</h2>
      <div className=''>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;