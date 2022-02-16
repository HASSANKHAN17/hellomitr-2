import React from 'react'
import Header from '../Header/Header'
import SubHeader from '../Header/SubHeader'
import "./ItemDetail.scss"
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '../Footer/Footer'
import Item from './Item'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function ItemDetail(props) {
    const [image,setImage]=React.useState("/assets/images/products/apple-watch-0.png")
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Header id="1" />
    <SubHeader />
    <div className="row m-auto justify-content-between itemdetail">
        <div className="col-6 imagediv">
            <img src={image} alt="watch" className="mainimg" />
            <div className="row ml-auto mt-5 justify-content-between">
            <img src="/assets/images/products/apple-watch-1.png" onClick={()=>setImage("/assets/images/products/apple-watch-1.png")} alt="watch" className="subimg" />
            <img src="/assets/images/products/apple-watch-2.png" onClick={()=>setImage("/assets/images/products/apple-watch-2.png")} alt="watch" className="subimg" />
            <img src="/assets/images/products/apple-watch-3.png" onClick={()=>setImage("/assets/images/products/apple-watch-3.png")} alt="watch" className="subimg" />
            </div>
        </div>

        <div className='col-6 productdetail'>
            <h1>boAt Xtend Smartwatch</h1>
            <p>
                <span className="ratingdiv">0.00 <StarIcon /></span>
                <span className="ratingreview">(0 Ratings & Reviews)</span>
            </p>

            <section className="pricerow m-auto row align-items-center">
                <div className="price">Rs 689</div>
                <div className="mrp">752</div>
                <div className="poff">0.00% off</div>
            </section>

            <p className='mt-3'>You Save: Rs 0.00 <br />
            (Inclusive of all taxes)
            </p>

            <div className="row m-auto">
                <Button variant="contained">Add to cart</Button>
                <Button variant="contained" className="ml-3">Buy Now</Button>
            </div>
            <p className="mt-3">Sold by: Hellomitr outlook</p>
        </div>
    </div>

    <Box className="descriptionreviewtab" sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Review" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <h1 className="spec">Specification:</h1>
            <p>
            Brand: Beats <br />
            Model: S450 <br />
            Wireless Bluetooth Headset <br />
            FM Frequency Response: 87.5 – 108 MHz <br />
            Feature: FM Radio, Card Supported (Micro SD / TF) <br />
            Made in China
            </p>
            <section className="mt-5 dod">
                <h2><CardGiftcardIcon className="icon" /> New Arrivals</h2>
                <div className="row m-auto">
                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail")}>
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>
        </TabPanel>
        <TabPanel value="2">

                <div className="review-container">
                    <div className="row m-auto">
                        <div className=" imgcontainer">
                        <Avatar alt="Remy Sharp" className="avatar" src="assets/images/avatars/001-man.svg" />
                        </div>
                        <div className=" detailcontainer">
                            <p className="name">John Schemen</p>
                            <div className="row mx-auto">
                            <Rating name="read-only" value={4.6} readOnly />
                            <p className="rating">4.6</p>
                            <p className="timeline">2.6 years ago</p>
                            </div>
                        </div>
                    </div>
                    <p className="review">Non in ex veniam dolore. Cupidatat voluptate minim consequat ullamco laboris. Sit culpa veniam esse labore elit irure eiusmod ullamco laborum qui ut fugiat. Sint ullamco nulla dolore est anim consectetur incididunt dolor deserunt nisi dolore et officia. Amet consectetur aute pariatur nulla pariatur Lorem nostrud id minim sunt sint irure.</p>
                </div>



        <section className="mt-5 dod">
                <h2><CardGiftcardIcon className="icon" /> New Arrivals</h2>
                <div className="row m-auto">
                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail")}>
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>
        </TabPanel>
      </TabContext>
    </Box>




    <Footer />

    </div>
  )
}

export default ItemDetail