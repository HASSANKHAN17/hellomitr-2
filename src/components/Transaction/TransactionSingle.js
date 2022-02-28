import React from 'react'
import WooCommerceAPI from 'woocommerce-api'
import {connect} from 'react-redux'
import "./Transaction.scss"
import {emptySingleItem} from '../redux/SingleItem/singleItemActions'
import hellomitrlogo from '../../Images/logo.png'
import checked from './checked.png'
import Success from '../Lottie/Success'
import Failure from '../Lottie/Failure'
import cancel from './cancel.png'
let seconds = 5

function TransactionSingle(props) {
    console.log("transactionsingleprops",props)
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
        transactionId=transactionId.split("=")[1]
        let addressNo = props.location.search.split("?")[1]
        let line_items = [{product_id:props.singleItem.id,quantity:1,images:props.singleItem.images}]
        transactionId = transactionId.split("&")[0]
        let payment_method = props.location.state?"razorpay":"cashe"
        console.log(addressNo,transactionId,payment_method)



        if(transactionId==="null"){
          //failed transaction
          setTransactionStatus(false)
          props.history.push("/checkout")
                  
        }else{
            console.log("transactionsuccess")
            if(addressNo === "address=1"){
                //billing
                
                    const data = {
                            payment_method: "razor pay",
                            payment_method_title: "Bank Transfer",
                            set_paid: true,
                            billing: props.user.billing,
                            customer_id:props.user.id,
                            line_items,
                            transaction_id:transactionId
                        
                          };
                          console.log("inside billing")        
                          WooCommerce.postAsync("orders", data)
                            .then((response) => {
                              console.log(JSON.parse(response.toJSON().body));
                              props.emptySingleItem()
                                window.location.href = `${process.env.REACT_APP_DEVELOPMENT}/orders`;
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
                    line_items,
                    transaction_id:transactionId
                
                  };
                  console.log("inside shippin")
                  WooCommerce.postAsync("orders", data)
                    .then((response) => {
                      console.log(JSON.parse(response.toJSON().body));
                        props.emptySingleItem()
                        window.location.href = `${process.env.REACT_APP_DEVELOPMENT}/orders`;
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
              </div>
              <h1>Payment Successful</h1>
              <Success />
              <p>We have successfully received payment</p>
              <p><b>Redirecting ...</b></p>
            </div>:<div className="success-container">
              <div className="row m-auto align-items-center justify-content-center">
              <img src={hellomitrlogo} alt="logo" />
              </div>
              <h1>Payment Failed</h1>
              <Failure />
              <p>We haven't received the payment</p>
              <p><b>Redirecting ...</b></p>
            </div>
        }
    </div>
  )
}
const mapStateToProps = ({cart,user,singleItem})=>{
    return{
        cart,
        user:user.user,
        singleItem
    }
    }
    const mapDispatchToProps =(dispatch)=>{
      return {
        emptySingleItem:()=>dispatch(emptySingleItem())
      }
    }
export default connect(mapStateToProps,mapDispatchToProps)(TransactionSingle)