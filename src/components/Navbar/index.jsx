import React from 'react'
import "./style.css"
import Search_bar from './Search_Bar'
import Profile_card from './Profile_card'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar ">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className=" nav-logo ">logo</div>
        <ul className="nav-icons ">
          <Link to="feeds" className=" ">
            <span className="nav-icon"></span>
            <p className=""> FEED </p>
          </Link>
          <li className="">
            <span className="nav-icon"></span>
            <p className=""> NETWORK</p>
          </li>
          <li className="">
            <span className="nav-icon"></span>
            <p className=""> JOBS</p>
          </li>
          <Link to="chats" className="">
            <span className="nav-icon"></span>
            <p className=""> CHATS</p>
          </Link>
          <li className="">
            <span className="nav-icon"></span>
            <p className=""> NOTICES</p>
          </li>
        </ul>
        <div className="search-bar">
          <Search_bar />
        </div>
        <div className="nav-profile">
          <Link to="profile-page">
            <Profile_card />
          </Link>
        </div>

        <div className="nav-others-actions ">
          <span className="">Others...</span>
        </div>
      </div>
    </div>
  )
}
