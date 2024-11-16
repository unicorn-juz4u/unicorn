import React from 'react'

const Feed_card = () => {
  return (
    <div className='mt-6'>
      <div className="flex justify-around items-center gap-3">
        <div className="w-9 h-9 bg-white rounded-full px-4"></div>
        <div className="items-center">
           <h2 className=" text-md font-bold">Client Name</h2>
           <h3 className="font-bold text-sm">Client headline</h3>
        </div> 
        <button className='px-4 py-2 border rounded-lg'>Track</button>
      </div>
       <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
       
    </div>
  )
}

export default Feed_card