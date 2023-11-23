import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Subscrip from '../components/subscrip'
import Footer from '../components/Footer'
import Plan from '../components/plan'


const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://imageio.forbes.com/specials-images/imageserve/61e4ac9d20e173754e6b1dad/Change-concepts-with-yellow-paper-airplane-leading-among-white/960x0.jpg?format=jpg&width=960"
        title1="Pricing"
        title2=""
        text=""
        btntext="Start free trial"
        url="/signup"
        btnClass="hide"
        />
        <Plan/>
         <Subscrip/>
         <Footer/>
        </div>
  )
}

export default Pricing