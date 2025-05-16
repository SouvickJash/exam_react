import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName]=useState('')
  return (
    <>
        {/* <h1>This is parent component</h1>  */}
        <Child name={name} setName={setName}/>
        <p>(parent)i am inside parent component and value of name is:  {name}</p>
    </>
  )
}

export default Parent
