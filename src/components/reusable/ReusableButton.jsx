import React from 'react'

function ReusableButton(props){
  return(
    <button onClick={props.onClick} style={props.style}>{props.title}</button>
  )
}

export default ReusableButton