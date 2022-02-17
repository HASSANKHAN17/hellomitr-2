import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Checkout.scss"
import Button from '@mui/material/Button'
import axios from 'axios'
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
        <div className="shadow-sm checkout">
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
        {/* <Footer /> */}

    </div>
  )
}

export default Checkout