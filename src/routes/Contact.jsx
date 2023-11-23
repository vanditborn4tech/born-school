import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Cont from '../components/cont'
import Subscrip from '../components/subscrip'


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="Contact us"
        title2=""
        text=""
        btntext="Start free trial"
        url="/signup"
        btnClass="hide"
        />
        <Cont/>
        <Subscrip/>
         <Footer/>
      


    </div>
  )
}

export default Contact