import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import SubHeader from './Header/SubHeader'
import Item from './Item/Item'
function Home() {
    return (
        <div className="home">
            <Header id="1" />
            <SubHeader />

            <section className="shadow-sm dod">
                <h2>Deals of the day</h2>
                <Item />
            </section>
        </div>
    )
}

export default Home
