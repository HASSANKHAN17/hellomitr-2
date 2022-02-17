import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Checkout.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
import GppGoodIcon from '@mui/icons-material/GppGood';
import safeandsecurep from './safeandsecurep.jpeg'
function Checkout() {
  const [selected,setSelected]=React.useState(0)
  const openPayModal = () => {
    const options = {
      key: 'rzp_test_Sn8RPLYLlLXlyD',
      amount: '1000', //  = INR 1
      name: 'Hellomitr',
      description: 'some description',
      image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
      handler: function(response) {
          console.log(response);
          // axios.post(`${process.env.REACT_APP_DEVELOPMENT}/razorpay`,{amount:1000})
          // .then(res=>{
          //   console.log(res);
          // })
          // .catch(err=>{
          //   console.log(err);
          // })
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
  }, []);
  return (
    <div>
        <Header />
        <SubHeader />
        <div className='row m-auto checkout justify-content-between'>
          <div className="col-8">

          <div className="shadow-sm paymentdetails">
            <h1>Delivery Details</h1>
            <p>Delivery Address</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(0)} className={selected===0?"col-5 pg active":"col-5 pg"}>
                <h5>John Dow</h5>
                <p>93 / Parshwakutir Perin Nariman St Bazar Gate Street Fort, Mumbai,Mumbai,400001,India</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Andrew Phase</h5>
                <p>Shop No.3 Swami Bldg Sec 5 Ambedkar Rd Charkop Kandivli, Mumbai,Adoni,400067,India</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Macdue Rad</h5>
                <p>36  Anand Sagar Nr Amar Gyan Estate Thane , Mumbai,Ahmedabad,400607,India</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Vanessa Fisher</h5>
                <p>7  Khassamwala Bldg bhandari Street Mandvi, Mumbai,Akola,400003,India</p>
              </div>


              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Marshall Soto</h5>
                <p>Shop No.3 Swami Bldg Sec 5 Ambedkar Rd Charkop Kandivli, Mumbai,Adoni,400067,India</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Marco Parks</h5>
                <p>Shop No.3 Swami Bldg Sec 5 Ambedkar Rd Charkop Kandivli, Mumbai,Adoni,400067,India</p>
              </div>

            </div>
            <Button onClick={()=>selected===1?openPayModal():null} className="btn" variant="contained" fullWidth>Pay now</Button>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Delivery Mode</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(0)} className={selected===0?"col-5 pg active":"col-5 pg"}>
                <h5>Standard</h5>
                <p>Free</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Instant</h5>
                <p>Additional INR499/- Only</p>
              </div>

            </div>
            </div>


            <div className="shadow-sm paymentdetails">
            <h1>Payment Details</h1>
            <p>Choose Payment Method for your Order</p>
            <div className="m-auto row justify-content-between">
              <div onClick={()=>setSelected(0)} className={selected===0?"col-5 pg active":"col-5 pg"}>
                <h5>Cashe</h5>
                <p>Esse qui magna Lorem aliquip veniam sint ut voluptate est eiusmod incididunt.</p>
              </div>

              <div onClick={()=>setSelected(1)} className={selected===1?"col-5 pg active":"col-5 pg"}>
                <h5>Razor Pay</h5>
                <p>Esse qui magna Lorem aliquip veniam sint ut voluptate est eiusmod incididunt.</p>
              </div>

            </div>
            <Button onClick={()=>selected===1?openPayModal():null} className="btn" variant="contained" fullWidth>Pay now</Button>
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
              <p className="total">INR 1623</p>
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

export default Checkout