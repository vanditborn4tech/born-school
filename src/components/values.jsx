import React from "react";
import "./valuestyle.scss";

const Value = () => {
  return (
    <div className="val">
    <div className="head3">
            <h1>Values that define us</h1>
        </div>
      <div className="container2">
        
        <div className="card2">
          <div className="face face1">
            <div className="content2">
            <span className="conicon"> <i className="fa-regular fa-star"></i></span> 
              <h3>Customer Obsession</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content2">
              <p>
                We believe that if our users are happy, everything else will
                fall in place.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="face face1">
            <div className="content2">
            <span className="conicon"> <i className="fa-solid fa-user-check"></i> </span>
              <h3>Better ourselves, every day</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content2">
              <p>
                We exhibit a strong will to outdo ourselves and to better our
                performance in every aspect.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="face face1">
            <div className="content2">
            <span className="conicon">  <i className="fa-solid fa-heart"></i></span>
             
              <h3>Respect everyone</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content2">
              <p>
                We value our people, our customers, and hold the utmost regard
                for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="face face1">
            <div className="content2">
            <span className="conicon"> <i className="fa-solid fa-crown"></i> </span>
             
              <h3>Be an owner</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content2">
              <p>We hold ourselves accountable and delegate responsibility.</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="face face1">
            <div className="content2">
            <span className="conicon">  <i className="fa-solid fa-thumbs-up"></i></span>
             
              <h3>Do the right thing</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content2">
              <p>
                Consistently making ethical decisions and acting with integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
