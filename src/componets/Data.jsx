import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const Data = (props) => {
  return (
    <div>
      {props.data.map((dat)=>(
       <div className= {dat.color} style={{paddingLeft:20,paddingRight:5,marginTop:20}}>
        <div className='id'> 
       <p>{dat.da}</p>
       <img className='image' src={dat.image}/>
       </div>
        <p className='p'>Case Study</p> 
        <h2>{dat.gift}</h2>
        <h2>{dat.pay}</h2>
        <div className='id'>
        <h4>{dat.method} </h4>
        <p className='r'><BsArrowRight/></p>
        </div>
        </div>

      ))}


    </div>
  )
}

export default Data