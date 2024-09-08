import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pages2 from './pages/Pages2'
import Juancok from './pages/Juancok'
import Page1 from './pages/Pages1'
import YourName from './pages/YourName'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ConditionalRendering from './pages/ConditionalRendering'
import Err from './pages/Err'
import JustFriend from './pages/JustFriend'
import { Contact } from './pages/YesLikeYou'
import { NotLikeYou } from './pages/NotLikeYou'

const router = createBrowserRouter([
  {
    path:"/YourName",
    element:<YourName/>
    
  },
  {
    path:"/Page1",
    element:<Page1/>
  },
  {
    path:"/Kondisi",
    element:<ConditionalRendering/>
  },
  {
    path:"/Tes1",
    element:<Juancok/>
  },
  {
    path:"*",
    element:<Err/>
  },
  {
    path:"/YesLikeYou",
    element:<Contact/>
  },
  {
    path:"/NotLikeYou",
    element:<NotLikeYou/>
  },
  {
    path:"/Pages2",
    element:<Pages2/>
  },
  {
    path:"/Pages3",
    element:<JustFriend/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
