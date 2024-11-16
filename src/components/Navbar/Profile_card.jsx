import React from 'react'
import User from "../../assets/User.svg"

export default function Profile_card() {
  return (
    <div className="flex items-center gap-3 ">
      <div className=" w-10 h-10 rounded-full overflow-hidden flex justify-center items-center dark:bg-white hover:cursor-pointer border border-transparent hover:border-white hover:border-2 transition-all duration-100 ease-in-out">
        <div className="relative w-7 h-7 m-1 ">
          <img src={ User } alt="" className="" />
        </div>
      </div>

      <div className="">
        <p className=" font-bold text-sm text-gray-300">Username</p>
        <span className=" text-gray-400">217  views</span>
      </div>
    </div>
  )
}
