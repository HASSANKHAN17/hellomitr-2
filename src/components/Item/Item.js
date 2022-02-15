import React from 'react'
import "./Item.scss"
import smartwatch from '../../Images/subheader/smartwatch.png'
import Rating from '@mui/material/Rating';

function Item() {
  return (
    <div className="item" >
        <span className="discount">
            50%
        </span>
        <div className="shadow info">
            <img src = {smartwatch} alt="smartwatch" />
            <div>
            <Rating name="read-only" value={4} readOnly />
            </div>
            <p>JBL 3.5mm earhpnes</p>
        </div>
        <div className="price">
            <p><span className="mrp">255</span> <span className="total">255 INR</span></p>
        </div>
    </div>
  )
}

export default Item