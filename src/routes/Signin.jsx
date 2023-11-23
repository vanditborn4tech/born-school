import React from 'react'
import '../components/signinstyle.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const Signin = () => {
  return (
    <>
     <Navbar/>
    <div className='signbody'>
       
        <div className='signmain'> 
        <input type="checkbox" id="chk" aria-hidden="true" />
        
        <div className="signup" >
            <form action="">
                <label  className='lbl' htmlFor="chk" aria-hidden="true">Sign Up</label>
                <input type="text" className='signinp' placeholder='User Name' required=""/>
                <input type="email" className='signinp' placeholder='Email' required=""/>
                <input type="password" className='signinp' placeholder='Password' required=""/>
                <button className='signbtn'>Sign Up</button>
            </form>
        </div>

    <div className="login">
    <form action="">
                <label className='lbl'  htmlFor="chk" aria-hidden="true">Log In</label>
                {/* <input type="text" className='signinp' placeholder='User Name' required=""/> */}
                <input type="email" className='signinp' placeholder='Email' required=""/>
                <input type="password" className='signinp' placeholder='Password' required=""/>
                <button className='signbtn'>Log in</button>
            </form>
    </div>

        </div>
        

    </div>
    <Footer/>
    </>
  )
}

export default Signin