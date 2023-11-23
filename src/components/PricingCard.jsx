import React from "react";
import "./PricingCardStyle.css";
const PricingCard = ({ icon,title, price, storage, users, sendUp }) => {
  return (
    <div className="PricingCard">
      <header>
        <i className={icon}></i>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} users in total</div>
        <div className="card-send-up">Send up to {sendUp}</div>
      </div>
      <button className="card-btn">READ MORE</button>
    </div>
  );
};

export default PricingCard;