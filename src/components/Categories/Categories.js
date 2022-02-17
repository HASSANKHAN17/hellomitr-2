import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import "./Categories.scss"
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Item from '../Item/Item'
function Categories(props) {
  return (
    <div>
        <Header />
        <SubHeader />
        <section className="row  categories" >
            <div className="shadow-sm col-3 filters">

                <div className="section1">
                <h3>Brand Products</h3>
                <p>F Series</p>
                <p>Reno Series</p>
                <p>A Series</p>
                <p>IoT products</p>
                <hr />

                </div>

                
                <div className="pt-3 section2">
                    <h3>Price Range</h3>
                    <div className="row mx-auto justify-content-between align-items-center">
                        <TextField className="textfield" variant="outlined" id="outlined-basics" label="From" />
                        -
                        <TextField className="textfield" variant="outlined" id="outlined-basics" label="To" />
                    </div>
                <hr />

                </div>

                <div className='pt-3 section3'>

                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="On Sale" />
                <FormControlLabel control={<Checkbox />} label="In Stock" />
                <FormControlLabel control={<Checkbox />} label="Featured" />
                </FormGroup>
                <hr />
                </div>

                <div className="pt-3 section4">
                    <h3>Ratings</h3>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={5} readOnly />} />
                    <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={4} readOnly />} />
                    <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={3} readOnly />} />
                    <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={2} readOnly />} />
                    <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={1} readOnly />} />
                    </FormGroup>
                    <hr />
                </div>


            </div>

            <div className="shadow-sm col-8 products row">
                <div className="col-4" onClick={()=>props.history.push("itemdetail")}>
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
                <div className="col-4">
                    <Item />
                </div>
            </div>
        </section>

        {/* <Footer /> */}
    </div>
  )
}

export default Categories