import React from 'react'
import Chat_User from './Chat_User'

const Chat_list = ({ users, onUserSelect }) =>
{
    return (
    <div className="chat-list">
      {users.map((user) => (
        <div key={user.id} className="chat-list-item my-4 px-2"
          onClick={() => onUserSelect(user.id)}
        >
          <Chat_User name={user.name} />
        </div>
      ))}
    </div>
  
  )
}

export default Chat_list