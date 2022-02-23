import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Checkout.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
import GppGoodIcon from '@mui/icons-material/GppGood';
import safeandsecurep from './safeandsecurep.jpeg'
import {connect} from 'react-redux'
import WooCommerceAPI from 'woocommerce-api'
function Checkout(props) {
  const [selected,setSelected]=React.useState(0)
  const [address,setAddress]=React.useState(0)
  const [delivery,setDelivery]=React.useState(0)
  const [total,setTotal]=React.useState(0)
  var WooCommerce = new WooCommerceAPI({
    url: 'https://shop.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1'
  });
  const openPayModal = () => {
    const options = {
      key: 'rzp_test_Sn8RPLYLlLXlyD',
      amount: total*100, //  = INR 1
      name: 'Hellomitr',
      description: 'some description',
      image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
      handler: function(response) {
          console.log(response);
          // const data = {
          //   payment_method: selected===2?"razor pay":"cashe",
          //   payment_method_title: "Bank Transfer",
          //   set_paid: true,
          //   billing: {
          //     first_name: "John",
          //     last_name: "Doe",
          //     address_1: "969 Market",
          //     address_2: "",
          //     city: "San Francisco",
          //     state: "CA",
          //     postcode: "94103",
          //     country: "US",
          //     email: "john.doe@example.com",
          //     phone: "(555) 555-5555"
          //   },
          //   shipping: {
          //     first_name: "John",
          //     last_name: "Doe",
          //     address_1: "969 Market",
          //     address_2: "",
          //     city: "San Francisco",
          //     state: "CA",
          //     postcode: "94103",
          //     country: "US"
          //   },
          //   line_items: [
          //     {
          //       product_id: 93,
          //       quantity: 2
          //     },
          //     {
          //       product_id: 22,
          //       variation_id: 23,
          //       quantity: 1
          //     }
          //   ],
          //   shipping_lines: [
          //     {
          //       method_id: "flat_rate",
          //       method_title: "Flat Rate",
          //       total: "10.00"
          //     }
          //   ]
          // };
          
          // WooCommerce.post("orders", data)
          //   .then((response) => {
          //     console.log(response.data);
          //   })
          //   .catch((error) => {
          //     console.log(error.response.data);
          //   });
      },
      prefill: {
          name: 'Gaurav',
          contact: '9999999999',
          email: 'demo@demo.com'
      },
      notes: {
          address: 'some address'
      },
      theme: {
          color: 'blue',
          hide_topbar: false
      }
  };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
  };
  React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      let total = 0
      props.cart.map((item)=>{
          total = total + parseInt(item.price)
      })
      setTotal(total)
      // axios.get(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/fetchCASHePlans
      // /9665276786/10000`,{headers:{Authorization:'2MLFiopx+givx5mPf8CchQ=='}})
      // .then(res=>{
      //   console.log(res)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })
  }, []);

  const openCasheModal = ()=>{
    axios.post(`https://uat-paymentgateway.cashe.co.in/api/cashe/paymentgateway/customer/generateTransaction`,{amount:10000,tenure:3,mobilenumber:"9665276786",authKey:"2MLFiopx+givx5mPf8CchQ==",leafRefNo:"0142334456",merchantname:"Amazon",returnPageURL:"https://localhost:3000/orders"})
    .then(res=>{
      console.log(res);
      window.location.href = `https://secure.qapayments.cashe.co.in/Login?transaction=${res.data.entity}`;
    })
    .catch(err=>{
      console.log(err)
    })

  }

 

  return (
    <div>
        <Header />
        <SubHeader />
        <div className='row m-auto checkout justify-content-between'>
          <div className="col-8">

          <div className="shadow-sm paymentdetails">
            <h1>Delivery Details</h1>
            <p>Select address where you want to deliver your product</p>
            <div className="m-auto row justify-content-between">
            <h3>Shipping Address</h3>

              <div onClick={()=>setAddress(0)} className={address===0?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.shipping.first_name} {props.user.shipping.last_name}</h5>
                        <p>{props.user.shipping.phone}</p>
                        <p>{props.user.shipping.address_1}</p>
                        <p>{props.user.shipping.state}</p>
                        <p>{props.user.shipping.postcode}</p>
              </div>


              <h3>Billing Address</h3>

              <div onClick={()=>setAddress(1)} className={address===1?"col-12 pg active":"col-12 pg"}>
              <h5>{props.user.billing.first_name} {props.user.billing.last_name}</h5>
                        <p>{props.user.billing.phone}</p>
                        <p>{props.user.billing.address_1}</p>
                        <p>{props.user.billing.state}</p>
                        <p>{props.user.billing.postcode}</p>
              </div>


            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Delivery Mode</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setDelivery(0)} className={delivery===0?"col-5 pg active":"col-5 pg"}>
                <h5>Standard</h5>
                <p>Free</p>
              </div>

              <div onClick={()=>setDelivery(1)} className={delivery===1?"col-5 pg active":"col-5 pg"}>
                <h5>Instant</h5>
                <p>Additional INR499/- Only</p>
              </div>

            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Payment Details</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(3)} className={selected===3?"col-5 pg active":"col-5 pg"}>
                <h5>Cashe</h5>
                <p>EMI Tenure of 3 months</p>
              </div>

              <div onClick={()=>setSelected(6)} className={selected===6?"col-5 pg active":"col-5 pg"}>
                <h5>Cashe</h5>
                <p>EMI Tenure of 6 months</p>
              </div>

              <div onClick={()=>setSelected(2)} className={selected===2?"col-5 pg active":"col-5 pg"}>
                <h5>Razor Pay</h5>
                <p>Credit Card / Debit Card / Net Banking / UPI</p>
              </div>

            </div>
            <Button onClick={()=>selected===2?openPayModal():openCasheModal()} className="btn" variant="contained" fullWidth>Pay now</Button>
            </div>





          </div>

          <div className="col-3">

            <div className="shadow-sm totaldiv">
              <h5>Your order</h5>
              <div className="row m-auto justify-content-between">
                <p className="greytext">Subtotal:</p>
                <p><b>INR 1523</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Shipping:</p>
                <p><b>INR 23</b></p>
              </div>

              <div className="row m-auto justify-content-between">
                <p className="greytext">Discount:</p>
                <p><b>INR 1623</b></p>
              </div>

              <hr />
              <p className="total">INR {total}</p>
          </div>
        <div className="row">
          <div className="col-1">
            <GppGoodIcon />
          </div>
          <div className="col-10">
            <p>Safe and Secure Payments. Easy returns 100% Authentic product</p>
          </div>
        </div>

        </div>



        </div>


       
        {/* <Footer /> */}

    </div>
  )
}

const mapStateToProps = ({user,cart})=>{
return {
  user:user.user,
  cart
}
}

export default connect(mapStateToProps)(Checkout)