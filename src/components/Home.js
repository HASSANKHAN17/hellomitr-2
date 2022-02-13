import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import SubHeader from './Header/SubHeader'
import Item from './Item/Item'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import bannermid from '../Images/banners/bannermid.jpg'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from './Footer/Footer'
import bannerdiv1 from '../Images/banners/bannerdiv1.jpeg'
import bannerdiv2 from '../Images/banners/bannerdiv2.jpg'
//import CarouselCard1 from "./carousel-cards/CarouselCard1";
//import Carousel from "./carousel/Carousel";
import bannerdiv3 from '../Images/banners/bannerdiv3.jfif'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../Images/carousel1banner/img1.png'
import img2 from '../Images/carousel1banner/img2.png'
import img3 from '../Images/carousel1banner/img3.png'
import c2img1 from '../Images/carousel2banner/Group 23.png'
function Home() {
    return (
        <div className="home">
            <Header id="1" />
            <SubHeader />

            {/* corousal */}
                {/* <Carousel
                    totalSlides={5}
                    visibleSlides={1}
                    infinite={true}
                    autoPlay={true}
                    showDots={true}
                    showArrow={false}
                    spacing="0px"
                >
                    <CarouselCard1 />
                    <CarouselCard1 />
                    <CarouselCard1 />
                    <CarouselCard1 />
                    <CarouselCard1 />
                </Carousel> */}
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={30}
                totalSlides={3}
                isPlaying
                >
                <Slider>
                <Slide index={0}><img className="carousel1" src={img1} alt="img1" /></Slide>
                <Slide index={1}><img className="carousel1" src={img2} alt="img2" /></Slide>
                <Slide index={2}><img className="carousel1" src={img3} alt="img3" /></Slide>
                </Slider>
            </CarouselProvider>

            <section className="shadow-sm dod">
                <h2><CardGiftcardIcon className="icon" /> Deals of the day</h2>
                <div className="row m-auto">
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

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>


            <section className="discountsection">
            <img  src={bannermid} className="bannermid" alt="bannermid" />

            <div className="row abs justify-content-between m-auto">
                    <div className="shadow col-3">
                    <h1>70% off on electronics</h1>
                    <img src={bannerdiv1} alt="bannerdiv" />
                    </div>
                    <div className="shadow col-3">
                    <h1>High on demand</h1>
                    <img src={bannerdiv2} alt="bannerdiv" />
                    <p>
                    Samsung Galaxy M21 2021 Edition (Charcoal Black, 4GB RAM, 64GB Storage)
                    </p>
                    </div>
                    <div className="shadow col-3">
                    <h1>Most bought</h1>
                    <img src={bannerdiv3} alt="bannerdiv" />
                    <p>
                    Apple Watch Series 7 (GPS + Cellular, 41mm) - Midnight Aluminium Case with Midnight Sport Band - Regular
                    </p>
                    </div>
                </div>
              
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Trending Items</h2>
                <div className="row m-auto">
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

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>

            {/* popular section carousal */}

            <section className="shadow-sm popularitems" style={{textAlign:"center"}}>
                    <h1>Popular Items</h1>
                    <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={15}
                totalSlides={3}
                isPlaying
                >
                <Slider>
                <Slide index={0}><img className="c2" src={c2img1} alt="c12img1" /></Slide>
                <Slide index={1}><img className="c2" src={img2} alt="img2" /></Slide>
                <Slide index={2}><img className="c2" src={img3} alt="img3" /></Slide>
                </Slider>
            </CarouselProvider>
            </section>


            <section className="shadow-sm mostbought">
                <h2><WhatshotIcon className="icon" /> Most Bought</h2>
                <div className="row m-auto">
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

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
