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
import { withRouter } from 'react-router-dom';
import "./Header.scss"

import {compose} from "redux";

const Header = (props) => {
	const [searchItem,setSearchItem]=React.useState("")
	const handleSubmit = (e)=>{
		e.preventDefault()
		props.history.push("/categories",searchItem)
	}
	return (
      <div className="header row ">

		  <div className="row imgdiv m-auto align-items-center justify-content-center">
			<div>
		  <img onClick={()=>props.history.push("/")} className="cursor-pointer" src={iconImage} alt="img" />
		  </div>
		  <p>Deliver to 431001</p>
		  </div>

		  <div className="inputdiv m-auto">
			<form onSubmit={handleSubmit}>
			<input placeholder="search for items.." value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
			</form>
		  </div>

		  <div className="icondiv m-auto row justify-content-end">

		  <Link to="cart">
		  <Badge badgeContent={props.cart.length} color="primary">
			<IconButton className="icon-bg" color="tertiary">
				<ShoppingBagIcon className="icon" />
			</IconButton>
			</Badge>
			</Link>

			<Link to="signup">
			<IconButton className="icon-bg" color="tertiary">
				<AccountCircleIcon className="icon" />
			</IconButton>
			</Link>
			
		  </div>
	  </div>
    );

}
const mapStateToProps =({user,cart})=>{
	return {
		userToken:user.user,
		cart
	}
	}
	export default compose(
		withRouter,
		connect(mapStateToProps)
	  )(Header);