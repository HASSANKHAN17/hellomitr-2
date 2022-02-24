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
import {connect} from 'react-redux'
import {removeFromCart,increaseItemCount,decreaseItemCount} from '../redux/cart/cartActions'
import emptycart from './empty-cart.png'

function Cart(props) {
    const renderTotal = ()=>{
        let total = 0
        props.cart.map((item)=>{
            total = total + parseInt(item.price)*item.count
        })
        return total
    }
    const renderOff = (details)=>{
        console.log(details)
        console.log("pof",details.price/details.regular_price*100)
        return Math.ceil(100-(details.price/details.regular_price*100))
      }
  return (
    <div>
        <Header />
        <Subheader />

        <div className="cart">

        {props.cart.length<=0?
        <div className="emptycart">
            <img src={emptycart} alt="emptycart" />
            <h1>Cart is empty</h1>
        </div>
        :<div className="row cart-container">


        <div className="col-8">
        {
                props.cart.map((item,index)=>(
                    <section className="shadow-sm  row m-auto cart-item" key={index}>
            <div className="col-3 imgdiv">
                <img src={item.images[0].src} alt="product" />
            </div>

            <div className="col-6 productdetail">
                <h3>{item.name}</h3>
            <section className="pricerow m-auto row align-items-center">
                <div className="price">Rs {item.price}</div>
                <div className="mrp">{item.regular_price}</div>
                {item.regular_price&&item.price?<div className="poff">{renderOff(item)}% off</div>:null}
            </section>
            </div>

            <div className="col-2 closequantity">
                <IconButton onClick={()=>props.removeFromCart(item)}>
                    <CloseIcon />
                </IconButton>
                <div className="row m-auto align-items-center justify-content-between">
              <IconButton disabled={item.count===1?true:false} onClick={()=>props.decreaseItemCount(item.id)} color="primary" className="iconbutton">
                <RemoveIcon />
              </IconButton>
              <div className="count">
                <h2>{item.count}</h2>
              </div>
              <IconButton onClick={()=>props.increaseItemCount(item.id)} color="primary" className="iconbutton">
                <AddIcon />
              </IconButton>
            </div>
            </div>
        </section>
                ))
        }
        </div>


        <section className="shadow-sm col-3 total-container">
            <p>Total :  <span className="total">INR {renderTotal()}</span></p>
            <hr />
            <Button onClick={()=>!props.user?props.history.push("/signup",true):props.history.push("checkout")} className="btn" fullWidth variant="contained">checkout</Button>
        </section>


        </div>}


        </div>
        {/* <Footer /> */}
    </div>
  )
}

const mapStateToProps = ({cart,user})=>{
return {
    cart,
    user:user.user
}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        removeFromCart:(item)=>dispatch(removeFromCart(item)),
        increaseItemCount:(id)=>dispatch(increaseItemCount(id)),
        decreaseItemCount:(id)=>dispatch(decreaseItemCount(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)