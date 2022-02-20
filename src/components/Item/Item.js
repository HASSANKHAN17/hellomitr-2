import React from 'react'
import "./Item.scss"
import smartwatch from '../../Images/subheader/smartwatch.png'
import Rating from '@mui/material/Rating';

function Item(props) {
  return (
    <div className="shadow item" >
       <span className="discount">
            50% off
        </span>
        <div className=" info">
        
            <img src = {props.image?props.image:smartwatch} alt="smartwatch" />
            <p className="heading">{props.name?props.name:"JBL 3.5mm earhpnes"}</p>
            <div className="rating">
            <Rating name="read-only" value={props.rating?parseInt(props.rating):4} readOnly />
            </div>
            <p><span className="total">₹{props.price?props.price:205}</span> <span className="mrp">255</span></p>

        </div>
    </div>
  )
}

export default Item