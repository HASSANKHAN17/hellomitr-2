import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
import "./MyProfile.scss"
import PersonIcon from '@mui/icons-material/Person';

function MyProfile() {
  return (
    <div>
        <Header />
        <SubHeader />
        <div className="row dashboard-container">
            <div className="col-4">
                <Menu id={4} />
            </div>
            <div className="col-8 dashboard-subcontainer">
                <h1><PersonIcon /> My Profile</h1>
            </div>
        </div>
    </div>
  )
}

export default MyProfile