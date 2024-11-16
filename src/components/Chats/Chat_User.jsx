import React from 'react'

const Chat_User = ({ name }) =>
{
  const latest_message = "latest Message"
  const time = "Dec.09.2022"
  const last_Chated_by = "user"
  return (
    <div className='flex items-center cursor-pointer'>
      <div className="w-9 h-9 bg-white">
      </div>
      <div className="flex flex-col w-9/12 px-2">
        <div className="flex justify-between">
          <span className="">{name}</span>
          <span className="">{time}</span>
        </div>
        <div className="flex text-sm justify-between">
          <span className="">{last_Chated_by}</span>
          <span className="">:</span>
          <p className="">{latest_message}</p>
        </div>
      </div>
    </div>
  )
}

export default Chat_User