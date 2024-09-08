import React, { useEffect, useState } from 'react'
import Inp, {Btn} from '../components/Inp'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom';
const YourName = () => {
    const [InputValue, setInputValue] = useState('');
  return (
    <div className='w-full h-screen flex justify-center bg-slate-800 text-white items-center flex-col'>
        <h1 className='mb-10 '>
            <ReactTyped className='font-Poppins text-3xl' strings={[`Heiii ${InputValue}`, "Did you know?", "I like you btw"]} typeSpeed={90} backSpeed={20} loop></ReactTyped>
            </h1>
      <Inp plc="Your Name" value={InputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <Link to="/Page1">
      <Btn name="Start"/>
      </Link>
    </div>
  )
}

export default YourName
