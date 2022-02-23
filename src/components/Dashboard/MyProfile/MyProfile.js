import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import "./MyProfile.scss"
import PersonIcon from '@mui/icons-material/Person';
import {connect} from 'react-redux'

function MyProfile(props) {
    let {user} = props;
  return (
    <div>
        <Header />
        <SubHeader />
        <div className="row dashboard-container">
            <div className="col-3">
                <Menu id={4} />
            </div>
            <div className="col-8 dashboard-subcontainer myprofile">
                <h1><PersonIcon /> My Profile</h1>
                <div className="row section1 align-items-center justify-content-around">
                        <div className="col-4">
                            <img src={user.avatar_url} alt="useravtar" /> 
                        </div>
                        <div className="shadow-sm cont col-2">
                            <h3>{user.orders_count}</h3>
                            <p>Total Orders</p>
                        </div>
                        <div className="shadow-sm cont col-3">
                            <h3>{user.total_spent}</h3>
                            <p>Total Spent</p>
                        </div>
                        <div className="shadow-sm cont col-2">
                            <h3>{user.last_order.id?user.last_order.id:"-"}</h3>
                            <p>Last Order</p>
                        </div>
                </div>

                <div className="shadow-sm row justify-content-between section2">
                    <div className="">
                        <p className="key">Firstname</p>
                        <p className="value">{user.first_name?user.first_name:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Lastname</p>
                        <p className="value">{user.last_name?user.last_name:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Email</p>
                        <p className="value">{user.email?user.email:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Phone</p>
                        <p className="value">{user.phone?user.phone:"-"}</p>
                    </div>
                    <div className="">
                    <p className="key">Username</p>
                        <p className="value">{user.username?user.username:"-"}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

const mapStateToProps = ({user})=>{
return {
    user:user.user
}
}

export default connect(mapStateToProps)(MyProfile)