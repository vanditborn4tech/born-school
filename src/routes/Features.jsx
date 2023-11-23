import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Featcards from '../components/featcard'
import Subscrip from '../components/subscrip'


const Features = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://t3.ftcdn.net/jpg/04/00/77/64/360_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg"
        title1="Features"
        title2=""
        text=""
        btntext="Start free trial"
        url="/signup"
        btnClass="hide"
        />
        <Featcards/>
        <Subscrip/>
         <Footer/>
        </div>
  )
}

export default Features