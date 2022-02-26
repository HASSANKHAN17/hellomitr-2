import React from 'react'
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button'
import "./Auth.scss"
import Alert from '@mui/material/Alert'
import {connect} from 'react-redux'
import {setUser} from '../redux/user/userActions'
import SMS from 'smsalert'

function Otp(props) {
    const [otp,setOtp]=React.useState("")
    const [gotp,setGotp]=React.useState("")
    const [error,setError]=React.useState("")

    const {user,checkout,mobile}=props.location.state

    React.useState(()=>{
        let val = Math.floor(1000 + Math.random() * 9000);
        setGotp(val)
        // const sms = new SMS( 'mannsoni07@gmail.com',  "Hellomitr@123@");
        // sms.send(+919665276786, `otp is ${gotp}`,"HELLOMITR19").then((responseMessage) => {
        // console.log(responseMessage);
        // });
    },[])

    const handleOtp=(o)=>{
        setOtp(o)
        if(o.length===4){
            console.log(o,gotp)
            if(otp==gotp){
                //verified
                props.setUser(user)
                if(checkout){
                    props.history.push("/checkout")
                }else{
                    props.history.push("/myprofile")
                }
            }else{
                setError("Invalid OTP")
            }
        }
        
    }

  return (
    <div className="shadow authcontainer otp">
        <h1>Enter otp {gotp}</h1>
        <p className="codesent">Code sent to <b>{mobile}</b></p>

        <section>
        <OtpInput
        separator={
            <span>
              <strong>.</strong>
            </span>
          }
          value={otp}
          shouldAutoFocus
          onChange={(o)=>handleOtp(o)}
          numInputs={4}
          inputStyle="otpinput"
          focusStyle={{border:"2px solid #FE6003"}}
      />
      </section>
      {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
      <Button onClick={()=>handleOtp(otp)} className="mt-2 mb-4" variant="contained">Validate</Button>
      <p className="recieve">Didn't receive the code? <Button variant='text'>resend</Button></p>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setUser:(user)=>dispatch(setUser(user))
    }
}

export default connect(null,mapDispatchToProps)(Otp)