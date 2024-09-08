import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../components/Inp'

const Err = () => {
  return (
    <div className='flex-col w-screen h-screen flex justify-center items-center'>
      <p className='font-Poppins'>HAYOOOO MAU LARI KEMANAAAAA DARI PERTANYAANKU</p>
      <Link to="/YourName">
      <Btn name="Back To Home"/>
      </Link>
    </div>
  )
}

export default Err
