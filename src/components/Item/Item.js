import React from 'react'
import "./Item.scss"
import smartwatch from '../../Images/subheader/smartwatch.png'
import Rating from '@mui/material/Rating';

function Item() {
  return (
    <div className="shadow item" >
       <span className="discount">
            50% off
        </span>
        <div className=" info">
        
            <img src = {smartwatch} alt="smartwatch" />
            <p className="heading">JBL 3.5mm earhpnes</p>
            <div className="rating">
            <Rating name="read-only" value={4} readOnly />
            </div>
            <p><span className="total">₹255</span> <span className="mrp">255</span></p>

        </div>
    </div>
  )
}

export default Item