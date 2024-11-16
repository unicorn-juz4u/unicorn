import React from 'react'
import { Link } from 'react-router-dom'

export default function  Home_page() {
  return (
    <div className="text-3xl flex justify-around gap-6 items-center w-full h-[100%] py-auto">
      <div className="h-[70vh] flex justify-center items-center flex-col">
        <h2 className="mb-6 underline">Home_page</h2>
        <p className="">You have to route to profile page manually</p>
        <p className="">By Clicking this...</p>
        <Link to="profile-page" className='px-8 py-3 bg-sky-600 my-6 rounded-md'>Profile page</Link>
      </div>
    </div>
  )
}
