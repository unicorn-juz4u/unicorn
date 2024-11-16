import React from 'react';

const SkillEndorsementCard = ({ name, endorsementCount, endorsers }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">{endorsementCount}</p>
      <div className="flex gap-2 mt-2">
        {endorsers.map((endorser, index) => (
          <img
            key={index}
            src={endorser.avatarUrl} // Replace with actual avatar URL
            alt={endorser.name}
            className="w-6 h-6 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

const SkillsAndEndorsements = () => {
  const skillsAndEndorsements = [
    {
      name: 'User 1',
      endorsementCount: 4,
      endorsers: [
        { avatarUrl: 'https://example.com/avatar1.jpg', name: 'User 1' },
        { avatarUrl: 'https://example.com/avatar2.jpg', name: 'User 2' },
        // ... other endorsers
      ],
    },
    {
      name: 'User 2',
      endorsementCount: 6,
      endorsers: [
        { avatarUrl: 'https://example.com/avatar3.jpg', name: 'User 3' },
        { avatarUrl: 'https://example.com/avatar4.jpg', name: 'User 4' },
        // ... other endorsers
      ],
    },
    // ... more skills and endorsements
  ];

  return (
    <div className="bg-black p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-white">Skills & Endorsements</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {skillsAndEndorsements.map((skillAndEndorsement, index) => (
          <SkillEndorsementCard key={index} {...skillAndEndorsement} />
        ))}
      </div>
      <button className="mt-4 text-blue-400 hover:underline">SHOW ALL (13)</button>
    </div>
  );
};

export default SkillsAndEndorsements;