import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"


// Pages
import "./index.css"
import _c_unicorn_Router from './_c_unicorn_Router'

// import { isAuthorized } from './authUtils'; // Your authorization function




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={_c_unicorn_Router} />
  </React.StrictMode>
)