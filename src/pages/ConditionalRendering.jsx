import React, { useState } from 'react'
import Juancok from './Juancok'
const ConditionalRendering = () => {
    const [inpValue, setInpValue] = useState('');
    const handleAll = (e) =>{
        setInpValue(e.target.value)
    }
  return (
    <div>
        <input type="text" id="" onChange={handleAll}/>
      <Juancok Nama={inpValue} isLogin={true}/>
      <button onClick={handleAll} type='button'>Start</button>
    </div>
  )
}

export default ConditionalRendering
