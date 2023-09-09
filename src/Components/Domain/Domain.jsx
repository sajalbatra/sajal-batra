import React from 'react'
import "./domain.css"

const Domain = (props) => {
  return (
    <div className='domain-main-div'>
        <img src={props.image} alt=''/>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Domain