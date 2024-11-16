import React, { useState } from 'react'

const Current_chat = ({ userId, messages }) =>
{
  console.log(userId, messages)
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Send the new message to the server or update the chat state
    setNewMessage('');
  };

  return (
    <div className="user-profile-chat h-full">
      {/* Render chat messages */}
      <div className="chat-messages h-[90%] w-full border border-gray-600 p-4 rounded-lg mb-2">
        Message
      </div>
      <div className="chat-input h-[10%] flex justify-around items-center gap-4">
        <input
          type="text"   
          className='bg-gray-400 rounded-lg w-10/12 py-2'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <div className=" text-gray-300 rounded-full text-2xl font-bold text-center pb-2 ">+</div>
        <button onClick={handleSendMessage} className=' px-3 py-1 rounded-md bg-sky-600 '>Send</button>
      </div>
    </div>
  );
};

export default Current_chat