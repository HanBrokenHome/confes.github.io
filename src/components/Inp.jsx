import React,  {useState} from 'react'

const Inp = (props) => {
    const {name, plc, onChange, value} = props;
  return (
    <div>
        <label htmlFor={name}>{name}</label>
      <input className='text-black font-Poppins focus:outline-blue-500 text-sm w-64 h-10
       border rounded ' value={value} onChange={onChange} placeholder={plc} type="text" name={name} id={name} />
    </div>
  )
}

export default Inp

export const Btn = (props) =>{
    const {onClick, name} = props;
    return(
        <div>
            <button className='mt-6 font-Poppins bg-blue-500 rounded w-64 h-10 hover:bg-blue-400 active:bg-blue-600' type='button' onClick={onClick}>{name}</button>
        </div>
    )
}

export const BtnClose= (props) =>{
    const {onClick} = props;
    return(
        <div>
            <button onClick={onclick} className='bg-red-500 hover:bg-red-400 active:bg-red-600 w-20'>X</button>
        </div>
    )
}

export const ContainerName = (props) =>{
    const {name} = props;
    return(
        <>
        <div className='w-auto px-2 h-10 text-sm bg-black text-white py-2'>{name}</div>
        </>
    )
}

export const btnYes = (props) =>{
    const {name} = props;
    return(
        <div>
            <button className='w-36 h-10 bg-green-500'>{name}</button>
        </div>
    )
}
