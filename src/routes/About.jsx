import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Services from '../components/services'
import Value from '../components/values'
import Subscrip from '../components/subscrip'
import Value2 from '../components/values2'


const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://wallpaperaccess.com/full/3124512.jpg"
        title1="About Us."
        title2=""
        text=""
        btntext="Start free trial"
        url="/signup"
        btnClass="hide"
        />
        <Services/>
        <Value2/>
        <Subscrip/>
        <Footer/>
        </div>
  )
}

export default About