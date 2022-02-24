import React from 'react'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import "./Transaction.scss"
import {emptyCart} from '../redux/cart/cartActions'
import hellomitrlogo from '../../Images/logo.png'
import checked from './checked.png'
import cancel from './cancel.png'
let seconds = 5

function Transaction(props) {
    var WooCommerce = new WooCommerceAPI({
        url: 'https://shop.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1'
      });
      //const [seconds, setSeconds] = React.useState(5);
    
     
      const [transactionStatus,setTransactionStatus]= React.useState(true)
    React.useEffect(()=>{
     
        let transactionId = props.location.search.split("?")[2]
        let addressNo = props.location.search.split("?")[1]
        let line_items = props.cart.map(item=>({product_id:item.id,quantity:item.count}))
        transactionId = transactionId.split("&")[0]
        let payment_method = props.location.state?"razorpay":"cashe"
        console.log(addressNo,transactionId,payment_method)



        if(transactionId==="transactionId=null"){
            //failed transaction
            setTransactionStatus(false)
                  
        }else if(transactionId.length>20){
            console.log("transactionsuccess")
            if(addressNo === "address=1"){
                //billing
                    const data = {
                            payment_method: "razor pay",
                            payment_method_title: "Bank Transfer",
                            set_paid: true,
                            billing: props.user.billing,
                            customer_id:props.user.id,
                            line_items
                        
                          };
                        
                          WooCommerce.postAsync("orders", data)
                            .then((response) => {
                              console.log(JSON.parse(response.toJSON().body));
                              setTimeout(() => {
                                props.emptyCart()
                                window.location.href = `http://localhost:3000/orders`;
                              }, 2000);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
            }else{
                //shipping
                const data = {
                    payment_method: "razor pay",
                    payment_method_title: "Bank Transfer",
                    set_paid: true,
                    shipping: props.user.shipping,
                    customer_id:props.user.id,
                    line_items
                
                  };
                
                  WooCommerce.postAsync("orders", data)
                    .then((response) => {
                      console.log(JSON.parse(response.toJSON().body));
                      setTimeout(() => {
                        props.emptyCart()
                        window.location.href = `http://localhost:3000/orders`;
                      }, 2000);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
            }
        

        }
    },[])
  return (
    <div>
        {
            transactionStatus?<div className="success-container">
              <div className="row m-auto align-items-center justify-content-center">
              <img src={hellomitrlogo} alt="logo" />
              <h2>Payment</h2>
              </div>
              <h1>Payment Successfull</h1>
              <img className="checked" src={checked} alt="checked" />
              <p>We have successfully received payment</p>
              <p><b>Redirecting ...</b></p>
            </div>:<div className="success-container">
              <div className="row m-auto align-items-center justify-content-center">
              <img src={hellomitrlogo} alt="logo" />
              <h2>Payment</h2>
              </div>
              <h1>Payment Failed</h1>
              <img className="checked" src={cancel} alt="checked" />
              <p>We have failedy received payment</p>
              <p><b>Redirecting ...</b></p>
            </div>
        }
    </div>
  )
}
const mapStateToProps = ({cart,user})=>{
    return{
        cart,
        user:user.user
    }
    }
    const mapDispatchToProps =(dispatch)=>{
      return {
        emptyCart:()=>dispatch(emptyCart())
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Transaction)