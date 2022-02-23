import React from 'react'
import Header from '../../Header/Header'
import SubHeader from '../../Header/SubHeader'
import Menu from '../Menu/Menu'
function Orders() {
  return (
    <div>
    <Header />
    <SubHeader />
    <div className="row dashboard-container">
        <div className="col-3">
            <Menu id={1} />
        </div>
        <div className="col-8 dashboard-subcontainer">
            <h1>My Prorsdrfile</h1>
            <div className="row">
                    <div className="col-6">
                            user 
                    </div>
                    <div className="col-2">
                        orders
                    </div>
                    <div className="col-2">
                            awaiting shopments
                    </div>
                    <div className="col-2">
                        awaiting deliver
                    </div>
            </div>

            <div className="row">
                <div className="col-2">
                    firstname
                    ralph
                </div>
                <div className="col-2">
                    lastname
                    edwards
                </div>
                <div className="col-2">
                    Email
                    ralfedwards@email.com
                </div>
                <div className="col-2">
                    PHone
                    +1983649392983
                </div>
                <div className="col-2">
                    birthday
                    01 Jan, 1970
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Orders