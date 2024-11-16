import { createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Auth_page from "../pages/Auth_page"
import Profile_page from '../pages/Profile_page'
import Home_page from '../pages/Home_page'
import Footer from '../components/Footer/Footer'
import Feeds_page from '../pages/Feeds_page'
import Chats_page from '../pages/Chats_page'


const _c_unicorn_Router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div className='h-full flex flex-col '>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home_page />
        }, {
          path: "profile-page",
          element: <Profile_page />
        }, {
          path: "feeds",
          element: <Feeds_page />
        }, {
          path: "chats",
          element: <Chats_page />
        }
      ]
    },
    {
      path: "/auth/:action?",
      element: <Auth_page />,
    }
  ]
);

export default _c_unicorn_Router;