import React, { useState } from 'react'
import "./planstyle.css"
import PricingCard from './PricingCard';

const Plan = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
      
        <div className="pricing-cards">
          <PricingCard
          icon="fa-solid fa-bicycle fa-xl"
            title="Essential"
            price={selectMonthly ? "20.99" : "188.9"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
           icon="fa-solid fa-car fa-xl"
            title="Deluxe"
            price={selectMonthly ? "34.99" : "349.9"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
           icon="fa-solid fa-plane fa-xl"
            title="Premium"
            price={selectMonthly ? "79.99" : "499.9"}
            storage="90 GB Storage"
            users="20"
          />
        </div>
      </div>
    </div>
  )
}

export default Plan