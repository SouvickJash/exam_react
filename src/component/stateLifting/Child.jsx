import React from 'react'

const Child = (props) => {
  return (
    <>
       <h2>This is child component</h2>
       <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
       <p>details=   {props.name}</p>
    </>
  )
}

export default Child
