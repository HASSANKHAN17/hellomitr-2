import React from 'react'
import "./Menu.scss"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { withRouter } from 'react-router-dom';
function Menu({id,history}) {
  return (
    <div className="shadow-sm menu">
        <p className="container-heading">Dashboard</p>
        <div onClick={()=>history.push("/orders")} className={id===1?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><ShoppingBagOutlinedIcon /></div>
            <div className="heading"><p>Orders</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div>

        {/* <div className={id===2?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><FavoriteBorderOutlinedIcon /></div>
            <div className="heading"><p>Wishlist</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div> */}

        <div className={id===3?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><HeadsetMicOutlinedIcon /></div>
            <div className="heading"><p>Support tickets</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div>

        <p className="container-heading">Account Settings</p>
        <div onClick={()=>history.push("/myprofile")} className={id===4?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><PersonIcon /></div>
            <div className="heading"><p>Profile Info</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div>

        <div onClick={()=>history.push("/addresses")} className={id===5?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><AddLocationAltOutlinedIcon /></div>
            <div className="heading"><p>Addresses</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div>

        <div className={id===6?"row  align-items-center link-container active":"row  align-items-center link-container"}>
            <div className="icon"><PaymentOutlinedIcon /></div>
            <div className="heading"><p>Payment Methods</p></div>
            <div className="ml-auto total"><p>15</p></div>
        </div>
    </div>
  )
}

export default withRouter(Menu)