import React from 'react'
import "./movingssstyle.css"
import Marquee from 'react-fast-marquee'


const Marque = () => {
  return (
    <div className='marq'>
        <div className='title'>
            Complete mobile and web solution
        </div>
        <div>
            <Marquee direction="right" speed={100} delay={5}>
                <div className='image_wrapper'>
                    <img src="https://schoolmagica.com/slider/screenshot/screen-11.png" alt="" />
                </div>
                <div className='image_wrapper'>
                    <img src="https://schoolmagica.com/slider/screenshot/screen-08.png" alt="" />
                </div>
                <div className='image_wrapper'>
                    <img src="https://schoolmagica.com/slider/screenshot/screen-04.png" alt="" />
                </div>
                <div className='image_wrapper'>
                    <img src="https://schoolmagica.com/slider/screenshot/screen-02.png" alt="" />
                </div>
            </Marquee>
        </div>

    </div>
  )
}

export default Marque