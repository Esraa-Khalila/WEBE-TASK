import React from 'react'
import './Services.css'

const ServicesItem = (props) => {
  return (
    <div>
        <img src={props.image}/>
        <p>{props.title}</p>
        <div className='line_service'></div>
        <p >{props.details_Services}</p>
    </div>
  )
}

export default ServicesItem