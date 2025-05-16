import React, { useState } from 'react'

const Toggle = () => {
    const[item,setItem]=useState(false)
  return (
    <>
         <input type={item? `text`:`password`} placeholder='Enter the password'/>
         <button onClick={()=>setItem(!item)}>{item ? "Hide" : "Show"}</button>
    </>
  )
}

export default Toggle
