import React, { useState } from 'react'
import MainTagLinks from '../components/Feeds/MainTagLinks'
import Messages from '../components/Chats/Messages'
import Current_chat from '../components/Chats/Current_chat'
import Search_messages from '../components/Chats/Search_messages'
import Chat_list from '../components/Chats/Chat_list'

const Chats_page = () =>
{
      const [selectedUser, setSelectedUser] = useState(null);
      const [users] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        // ... more users
      ]);
      const messages = {
      1: [
        { senderId: 1, text: "Hi Bob, how are you?" },
        { senderId: 2, text: "I'm doing well, thanks. How about you?" },
        { senderId: 1, text: "I'm good too. What's up?" },
      ],
      2: [
        { senderId: 1, text: "Hey Charlie, long time no see!" },
        { senderId: 3, text: "Yeah, it has been a while. How's everything?" },
        { senderId: 1, text: "Not bad, just busy with work." },
      ],
    };

      const handleUserSelect = (userId) =>
      {
        console.log(userId, "userid")
        setSelectedUser(userId);
        
      };

  return (
    <div className="h-full w-10/12 mx-auto flex my-4">
      <div className=" w-9/12 bg-black text-gray-300 flex ">
        <div className="w-3/12 p-2">
          <Messages />
          <Search_messages />
          <Chat_list users={users} onUserSelect={handleUserSelect} />

        </div>
        <div className="w-[98] h-[1px] mx-auto border border-gray-400" />
        <div className="h-[98%] my-auto w-[1px] border border-gray-300"/>
        <div className="w-9/12 p-4">
          {/* { selectedUser && selectedUser} */}
          <Current_chat userId={selectedUser} messages={messages} />
        </div>
      </div>
      <div className="w-3/12">
        <MainTagLinks />
      </div>
    </div>
  )
}

export default Chats_page