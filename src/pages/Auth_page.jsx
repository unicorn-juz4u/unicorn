import React, { useState } from 'react'
import TwoChoiceInput from '../components/auth/TwoChoiceInput'
import { useNavigate, useParams } from 'react-router-dom'

export default function Auth_page()
{

  const { action } = useParams();
  const [activeTab, setActiveTab] = useState(action || 'join-us'); // Set initial tab based on URL
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/auth/${tab}`);
  };
  
  return (
    <div className="font-bold">
      {/* If data found in, login else signup */}
      <div className="auth_card">
        <h2 className="text-3xl font-bold mx-auto text-center py-2 px-4 rounded-md">
          {activeTab === 'join-us' ? 'New to Unicorn\'s' : 'Welcome back, Unicorn'}
        </h2>
        <h3 className="text-center">{activeTab === 'join-us' ? 'Join Us' : 'Access'}</h3>

        {/* ... rest of your form content ... */}
        <TwoChoiceInput />

        <button type="submit" className='flex justify-center items-center border mx-auto px-4 py-2' onClick={() => navigate('/profile-page')}>Submit</button>

      {/* Active tab on top, non-active tab on bottom */}
      <div className="auth_tags">
        <div className="flex justify-around">
          <p className={activeTab !== 'join-us' ? 'active' : 'hidden'}>New to Unicorn's</p>
          <span className={activeTab !== 'join-us' ? 'active' : 'hidden'} onClick={() => handleTabClick('join-us')}>Join Us</span>
        </div>

        <div className="flex justify-around">
          <p className={activeTab !== 'access' ? 'active' : 'hidden'}>Already A Unicorn. </p>
          <span className={activeTab !== 'access' ? 'active' : 'hidden'} onClick={() => handleTabClick('access')}>Lets Access</span>
        </div>
      </div>
      </div>
    </div>
  )
}
