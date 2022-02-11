import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import iconImage from '../../Images/logo.png'
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton'
import "./Header.scss"


const Header = (props) => {

	return (
      <div className="header row ">

		  <div className="imgdiv m-auto">
		  <img src={iconImage} alt="img" />
		  </div>

		  <div className="inputdiv m-auto">
			<input placeholder="search for items.." />
		  </div>

		  <div className="icondiv m-auto row justify-content-end">

			<IconButton color="secondary">
				<ShoppingBagIcon className="icon" />
			</IconButton>

			<IconButton color="secondary">
				<AccountCircleIcon className="icon" />
			</IconButton>
			
		  </div>
	  </div>
    );

}
const mapStateToProps =({EventUser})=>{
	return {
		userToken:EventUser.user
	}
	}
export default connect(mapStateToProps)(Header);