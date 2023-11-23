import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Marque from '../components/movingss'
import Services from '../components/services'
import Subscrip from '../components/subscrip'
import Reccomd from '../components/reccom'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://as2.ftcdn.net/v2/jpg/02/11/57/45/1000_F_211574559_1khyEBcSRCU7UBH2WyXHTC7jeS7JaxnR.jpg"
        title1="Where Learning Begins."
        title2="Just ask Student Alert"
        text="Rising to justice learning with joy building our future."
        btntext="Start free trial"
        url="/signup"
        btnClass="show"
        />
        <Marque/>
        <Services/>
        <Reccomd/>
        <Subscrip/>

        <Footer/>
        </div>
  )
}

export default Home