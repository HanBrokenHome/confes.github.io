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
              <ContainerName name="Confes To You Step 2"/>
              <Link to="/YourName">
                <BtnClose/> 
              </Link>
            </nav>
            <main className='font-Poppins w-full px-2 mt-6 h-56'>
              <ReactTyped className='text-center m-5' strings={["So you wanna my gf?🥶🙀🙀🙀"]} typeSpeed={120} backSpeed={20} loop/>
            </main>
            <footer className='flex justify-evenly'>
              <Link to="/YesLikeYou">  
            <button className='w-36 h-10 bg-green-500 hover:bg-green-400 active:bg-green-600 rounded'>Yessssssssss ofc</button>
              </Link>
              <Link to="/Pages3">  
            <button className='w-36 h-10 bg-red-500 hover:bg-red-400 active:bg-red-600 rounded'>No, Just Friend</button>
              </Link>
            </footer>
        </div>
    </div>
  )
}

export default page1;
export const useData = () =>useContext(dataContext)
