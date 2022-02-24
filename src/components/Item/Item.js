import React from 'react'
import "./Item.scss"
import smartwatch from '../../Images/subheader/smartwatch.png'
import Rating from '@mui/material/Rating';
import FlashOnIcon from '@mui/icons-material/FlashOn';
function Item(props) {
  return (
    <div className="shadow-sm item" >
       <span className="discount">
           <FlashOnIcon color="primary" /> Flash Sale
        </span>
        <div className=" info">
        
            <img src = {props.image?props.image:smartwatch} alt="smartwatch" />
            <p className="heading">{props.name?props.name:"JBL 3.5mm earhpnes"}</p>
            <div className="rating">
            <Rating name="read-only" value={props.rating?parseInt(props.rating):4} readOnly />
            </div>
            <p>
              <span className="total">₹{props.price?props.price:205}</span> <span className="mrp">{props.regularPrice?props.regularPrice:props.price}</span>
              <span className="off">10% off</span>
              </p>

        </div>
    </div>
  )
}

export default Item