import React from 'react'
import mobile from '../../Images/subheader/smartphone (2).png'
import ledtv from '../../Images/subheader/tv-monitor (1).png'
import Laptop from '../../Images/subheader/laptop.png'
import Accessories from '../../Images/subheader/bags (1).png'
import Smartwatch from '../../Images/subheader/smartwatch.png'
import Furniture from '../../Images/subheader/furnitures.png'
import "./SubHeader.scss"

function SubHeader() {
  return (
    <div className="shadow-sm subheader row m-auto justify-content-between">
        <div className="itemcontainer">
            <img src={mobile} alt="mobile" />
            <h5>Mobile</h5>
        </div>

        <div className="itemcontainer">
            <img src={ledtv} alt="ledtv" />
            <h5>LED TVs</h5>
        </div>

        <div className="itemcontainer">
            <img src={Laptop} alt="mobile" />
            <h5>Laptop</h5>
        </div>

        <div className="itemcontainer">
            <img src={Accessories} alt="mobile" />
            <h5>Accessories</h5>
        </div>

        <div className="itemcontainer">
            <img src={Smartwatch} alt="mobile" />
            <h5>Smartwatch</h5>
        </div>

        <div className="itemcontainer">
            <img src={Furniture} alt="mobile" />
            <h5>Furniture</h5>
        </div>
    </div>
  )
}

export default SubHeader