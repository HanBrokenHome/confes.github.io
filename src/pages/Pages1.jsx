import React from 'react'
import { btnYes } from '../components/Inp'
import { Btn, BtnClose, ContainerName } from '../components/Inp'
import { Link } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
const page1 = () => {
  return (
    <div className='h-screen flex justify-center items-center w-screen bg-slate-500'>
        <div className="w-96 h-96 bg-white rounded">
            <nav className='w-fill flex justify-between h-12'>
              <ContainerName name="Confes To You"/>
              <Link to="/YourName">
                <BtnClose/> 
              </Link>
            </nav>
            <main className='font-Poppins w-full px-2 mt-6 h-56'>
              <ReactTyped className='text-center m-5' strings={["I like you" , "and do you like me too?", "I've liked you since I was in class X, and I've never met a girl before so I'm nervous to confess to you mwehehehehehe 😿", "I apologize if after I said it you cringe "]} typeSpeed={90} backSpeed={20} loop/>
            </main>
            <footer className='flex justify-evenly'>
              <Link to="/Pages2">  
            <button className='w-36 h-10 bg-green-500 hover:bg-green-400 active:bg-green-600 rounded'>Yes, i like you too</button>
              </Link>
              <Link to="/NotLikeYou">  
            <button className='w-36 h-10 bg-red-500 hover:bg-red-400 active:bg-red-600 rounded'>No, i not like a you</button>
              </Link>
            </footer>
        </div>
    </div>
  )
}

export default page1;
export const useData = () =>useContext(dataContext)
