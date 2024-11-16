import React, { useState } from 'react'
import Search_messages from './Search_messages'
import Chat_list from './Chat_list'

const Messages = () =>
{

  return (
      <div className="flex justify-between items-center">
        <p className="font-bold italic">Messages</p>
        <div className="flex items-center justify-around w-[30%]">
          <span className="mb-3 text-2xl mx-2">...</span>
          <span className='fontbold italic text-2xl mx-2' >i</span>
        </div>
      </div> 
  )
}

export default Messages