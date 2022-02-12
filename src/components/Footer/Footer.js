import React from 'react'
import "./Footer.scss"
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../Images/logo.png'
function Footer() {
  return (
    <div className="footer row m-auto justify-content-between">
        <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <img src={Logo} alt="logo" />
            <p className="subtitle">Desh ka online marketplace</p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>About Company</h2>
            <p><Link className="link">About Us</Link></p>
            <p><Link className="link">Contact Us</Link></p>
            <p><Link className="link">ISO 9001 2015 Certified</Link></p>
            <p><Link className="link">Startup Certified 2020</Link></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>Legal Policy</h2>
            <p><Link className="link">Delivery Information</Link></p>
            <p><Link className="link">Disclaimer</Link></p>
            <p><Link className="link">Terms & Conditions</Link></p>
            <p><Link className="link">Privacy Policy</Link></p>
            <p><Link className="link">Seller Policy</Link></p>
            <p><Link className="link">Return Policy</Link></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2> Helpdesk</h2>
            <p><Link className="link">FAQs</Link></p>
            <p><Link className="link">Help Center</Link></p>
            <p><Link className="link">How to Buy</Link></p>
            <p><Link className="link">Track Your Order</Link></p>
            <p><Link className="link">Corporate & Bulk Purchasing</Link></p>
        </div>
        <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <h2>Contact Us</h2>
            <p>
              Noval Tech Park <br />
              #46/3, 4, GB Palya Hosur Road,<br />
              Bengaluru Karnataka 560068
            </p>
            <p>Email: helpline@hellomitr.com</p>
            <p>Phone: 1800 - 572 - 8211</p> 
            <div className="row m-auto">
              <IconButton color="secondary">
                <FacebookRoundedIcon />
              </IconButton>

              <IconButton color="secondary">
                <TwitterIcon />
              </IconButton>

              <IconButton color="secondary">
                <YouTubeIcon />
              </IconButton>

              <IconButton color="secondary">
                <InstagramIcon />
              </IconButton>
            </div>


        </div>
    </div>
  )
}

export default Footer