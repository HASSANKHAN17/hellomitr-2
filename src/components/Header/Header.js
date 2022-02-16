import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import iconImage from '../../Images/logo.png'
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import "./Header.scss"


const Header = (props) => {

	return (
      <div className="header row ">

		  <div className="row imgdiv m-auto align-items-center justify-content-center">
			<div>
		  <img src={iconImage} alt="img" />
		  </div>
		  <p>Deliver to 431001</p>
		  </div>

		  <div className="inputdiv m-auto">
			<input placeholder="search for items.." />
		  </div>

		  <div className="icondiv m-auto row justify-content-end">

		  <Link to="cart">
		  <Badge badgeContent={4} color="primary">
			<IconButton color="tertiary">
				<ShoppingBagIcon className="icon" />
			</IconButton>
			</Badge>
			</Link>

			<Link to="signup">
			<IconButton color="tertiary">
				<AccountCircleIcon className="icon" />
			</IconButton>
			</Link>
			
		  </div>
	  </div>
    );

}
const mapStateToProps =({user})=>{
	return {
		userToken:user.user
	}
	}
export default connect(mapStateToProps)(Header);