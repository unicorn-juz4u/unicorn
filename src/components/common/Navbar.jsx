import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar h-16 flex bg-black text-white justify-between items-center">
      <div className="logo w-[5%] h-full border border-black flex justify-center items-center">logo</div>
      <ul className="nav-icons w-[40%] h-full flex justify-between items-center">
        <li className="">
          <span className="nav-icon"></span>
          <p className=""> FEED </p>
        </li>
        <li className="">
          <span className="nav-icon"></span>
          <p className=""> NETWORK</p>
        </li>
        <li className="">
          <span className="nav-icon"></span>
          <p className=""> JOBS</p>
        </li>
        <li className="">
          <span className="nav-icon"></span>
          <p className=""> CHATS</p>
        </li>
        <li className="">
          <span className="nav-icon"></span>
          <p className=""> NOTICES</p>
        </li>
      </ul>
      <div className="search-bar">search bar</div>
      <div className="nav-profile">Profile</div>
      <div className="nav-profile">Others</div>
    </div>
  )
}
