import React from 'react'
import "./subscripstyle.css"

const Subscrip = () => {
  return (
    <div className='subs'>
      <div className="sub">
       <div className="twelve">
       <h1>Subscription</h1> 
       </div>
     <div className="subhead">
    <h3> Always know what’s happening in the <br />
world of applications. Recieve all <br />
latest post in your inbox.</h3>
     </div>
     <div className="form-input">
      <label ></label>
      <input className='subsinp' type="email" placeholder="Your Email"/>
      <button className="subscribe-btn">Subscribe</button>
    </div>
        </div>
        </div>
  )
}

export default Subscrip