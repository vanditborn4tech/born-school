import React from "react";
import "./contstyle.css";

const Cont = () => {
  return (
    <div className="cont1">
      <div className="contactus">
        <div className="title5">
          <h2>Get in touch</h2>
        </div>
        <div className="box5">
          <div className="contact form5">
            <h3>Send a messagee</h3>
            <form action="">
              <div className="formbox">
                <div className="row50">
                  <div className="inputbox">
                    <span>First Name:</span>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="inputbox">
                    <span>Last Name:</span>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputbox">
                    <span>Email:</span>
                    <input type="email" placeholder="doejogn@email.com" />
                  </div>
                  <div className="inputbox">
                    <span>Mobile:</span>
                    <input type="number" placeholder="+91 9876543210" />
                  </div>
                  
                </div>
                <div className="row100">
                    <div className="inputbox">
                      <span>Message:</span>
                      <textarea
                        placeholder="Write your message here.."></textarea>
                    </div>
                  </div>
                  <div className="row100">
                    <div className="inputbox">
                     <input className="submitbtn" type="submit" />
                    </div>
                  </div> 
              </div>
            </form>
          </div>
          <div className="contact info5">
            <h3>Contact Info</h3>
            <div className="infobox">
                <div>
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    <p>abc place , xhhh xity <br />India</p>
                </div>

                <div>
                    <span><i className="fa-regular fa-envelope"></i></span>
                    <a href="mailto:abc@email.com">abc@email.com</a>
                </div>

                <div>
                    <span><i className="fa-solid fa-phone-volume"></i></span>
                    <a href="tel:+919876543210">+91 987 654 3210</a>
                </div>

                <ul className="sci">
                    <li><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
          </div>
          <div className="contact map5">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1286157166414!2d77.11453447471655!3d28.74557667560314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019747be0b05%3A0xe46514432984139f!2sDTU%20Main%20Gate!5e0!3m2!1sen!2sin!4v1700046605590!5m2!1sen!2sin" 
          width="600"
           height="450" 
           style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;
