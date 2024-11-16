import React from 'react';

const Visitors_card = () => {
  const visitors = [
    {
      name: 'Marie Clark',
      avatar: 'https://example.com/marie.jpg',
      info: 'User information',
    },
    {
      name: 'Kathleen Sink',
      avatar: 'https://example.com/kathleen.jpg',
      info: 'User information',
    },
    {
      name: 'Steve Korn',
      avatar: 'https://example.com/steve.jpg',
      info: 'User information',
    },
    {
      name: 'Tom Karen',
      avatar: 'https://example.com/tom.jpg',
      info: 'User information',
    },
    {
      name: 'Mark Seeds',
      avatar: 'https://example.com/mark.jpg',
      info: 'User information',
    },
  ];

  return (
    <div className="bg-black text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">VISITORS</h2>
        <button className="text-sm font-semibold text-blue-400 hover:underline">
          VIEW ALL
        </button>
      </div>
      <div className="space-y-4">
        {visitors.map((visitor, index) => (
          <div key={index} className="flex items-center">
            <img
              src={visitor.avatar}
              alt={visitor.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">{visitor.name}</p>
              <p className="text-sm">{visitor.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visitors_card;