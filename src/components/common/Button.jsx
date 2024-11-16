import { useNavigate } from "react-router-dom";

import React from 'react'

export default function MyButton({ to })
{
    const navigate = useNavigate();
  return (
    <button className="my-button" onClick={() => 
        { navigate(`/${to}`) }}>
        Take me to {to === '' ? "home" : to}
    </button>  )
}
