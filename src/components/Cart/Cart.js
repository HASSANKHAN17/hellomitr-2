import React from 'react'
import "./Cart.scss"
import Header from '../Header/Header'
import Subheader from '../Header/SubHeader'
import Footer from '../Footer/Footer'

function Cart() {
  return (
    <div>
        <Header />
        <Subheader />

        <div className="cart">
        <h1>Shopping Cart</h1>

        <div className="row m-auto">

        <section className="col-10 row m-auto cart-item">
            <div className="col-3">
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

            <div className="col-3">
                <p>Close</p>
                <p>Quantity</p>
            </div>
        </section>

        <section className="col-2">
            total : 3020
        </section>


        </div>


        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Cart