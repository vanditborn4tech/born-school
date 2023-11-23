import React from 'react'
import "./Herostyle.css"

const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img  className="bnnimg" src={props.heroImg} alt="heroimg" />
        <div className='hero-text'>
            <h1>{props.title1} </h1>
            <h1>{props.title2} </h1>
            <p>{props.text} </p>
            <a href={props.url} className={props.btnClass}>{props.btntext} </a>
        </div>
    </div>
  )
}

export default Hero