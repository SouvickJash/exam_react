import React from 'react'

const Button = (props) => {
  return (
    <div>
       <div>{props.children}</div>
      <button onClick={props.handleClick}>
         {props.text}
      </button>
    </div>
  )
}

export default Button 


// first step: props passing parent to child 
