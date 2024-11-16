import React, { useState } from 'react';

function TwoChoiceInput() {
  const [selectedOption, setSelectedOption] = useState('mobile'); // Set default to 'mobile'

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <input
          type="text"
          className={`border rounded-md px-4 py-2 w-full ${
            selectedOption === 'mobile' ? 'flex' : 'hidden'
          }`}
          placeholder={`Enter your ${selectedOption}`}
        />
        <input
          type="text"
          className={`border rounded-md px-4 py-2 w-full ${
            selectedOption === 'email' ? 'flex' : 'hidden'
          }`}
          placeholder={`Enter your ${selectedOption}`}
        />
      </div>
      <div className="relative flex items-center justify-center">
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            selectedOption === 'mobile' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleOptionChange('mobile')}
          style={{ display: selectedOption === 'mobile' ? 'none' : 'block' }}
        >
          Mobile
        </button>
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${
            selectedOption === 'email' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleOptionChange('email')}
          style={{ display: selectedOption === 'email' ? 'none' : 'block' }}
        >
          Email
        </button>
      </div>
    </div>
  );
}

export default TwoChoiceInput;