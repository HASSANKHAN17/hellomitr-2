import React from 'react'
import "./Cart.scss"
import Header from '../Header/Header'
import Subheader from '../Header/SubHeader'
import Footer from '../Footer/Footer'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart(props) {
  return (
    <div>
        <Header />
        <Subheader />

        <div className="cart">

        <div className="row cart-container">

        <section className="shadow-sm col-8 row m-auto cart-item">
            <div className="col-3 imgdiv">
                <img src="/assets/images/products/xiaomi-watch.png" alt="product" />
            </div>

            <div className="col-6 productdetail">
                <h3>Xiaomi smart watch 3.5mm</h3>
            <section className="pricerow m-auto row align-items-center">
                <div className="price">Rs 689</div>
                <div className="mrp">752</div>
                <div className="poff">0.00% off</div>
            </section>
            </div>

            <div className="col-2 closequantity">
                <IconButton>
                    <CloseIcon />
                </IconButton>
                <div className="row align-items-center justify-content-end ">
                <IconButton color="primary">
                    <RemoveIcon className="iconbutton" />
                </IconButton>
                    <span className="quantity">25</span>
                    <IconButton color="primary">
                    <AddIcon className="iconbutton" />
                </IconButton>
                </div>
            </div>
        </section>

        <section className="shadow-sm col-3 total-container">
            <p>Total :  <span className="total">INR 2543</span></p>
            <hr />
            <Button onClick={()=>props.history.push("checkout")} className="btn" fullWidth variant="contained">checkout</Button>
        </section>


        </div>


        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Cart