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
import img1 from '../Images/carousel1banner/slider1.jpeg'
import img2 from '../Images/carousel1banner/slider2.jpeg'
import img3 from '../Images/carousel1banner/slider3.jpeg'
import c2img1 from '../Images/carousel2banner/Group 23.png'
import WooCommerceAPI from 'woocommerce-api'
import applelogo from '../Images/brands/applelogo.png'
import samsunglogo from '../Images/brands/Samsung-Symbol.png'
import xiaomilogo from '../Images/brands/Xiaomi-Logo.png'
import realmelogo from '../Images/brands/1200px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png'
import vivologo from '../Images/brands/vivo logo.png'
import oppologo from '../Images/brands/OPPO_LOGO_2019.png'
import Loading from './Lottie/Loading'

function Home(props) {
    const [smartphone,setSmartPhone]=React.useState([])
    const [ledtv,setLedtv]=React.useState([])
    const [laptop,setLaptop]=React.useState([])
    const [Accessories,setAccessories]=React.useState([])
    const [shoes,setShoes]=React.useState([])
    const [smartwatch,setSmartWatch]=React.useState([])
    const [men,setMen]=React.useState([])
    const [women,setWomen]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [newArrivals,setNewArrivals]=React.useState([])

    React.useState(()=>{
        setLoading(true)
        var WooCommerce = new WooCommerceAPI({
            url: 'https://shop.hellomitr.com/',
            consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
            consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
            wpAPI: true,
            version: 'wc/v1'
          });
          //WooCommerce.getAsync("products?category=126&per_page=100&category=193include")
          WooCommerce.getAsync("products?orderby=date&order=desc&per_page=6")
            .then((result) => {
            console.log("new arr",JSON.parse(result.toJSON().body))
            setNewArrivals(JSON.parse(result.toJSON().body))
            })
          WooCommerce.getAsync("products?category=126&per_page=6")
            .then((result) => {
            console.log("phone",JSON.parse(result.toJSON().body))
            setSmartPhone(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=181&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setLedtv(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=97&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setLaptop(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=193&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setAccessories(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?search=shoes&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setShoes(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?search=smartwatch&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setSmartWatch(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?search=men&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setMen(JSON.parse(result.toJSON().body))
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?search=women&per_page=6")
            .then((result) => {
            console.log(JSON.parse(result.toJSON().body))
            setWomen(JSON.parse(result.toJSON().body))
            setLoading(false)
            })
            .catch((error) => {
            console.log(error.result.data);
            setLoading(false)
            });
    },[])


    return (
        loading?<Loading />:<div className="home">
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
                naturalSlideHeight={22}
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
                <h2><CardGiftcardIcon className="icon" /> New Arrivals</h2>
                <div className="row m-auto">
                {
                    newArrivals.length>0?(
                        newArrivals.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>


            <section className="shadow-sm brands">
            <h1>Shop by brands</h1>
            <div className="row m-auto justify-content-center align-items-center">
                <div className="col-3">
                    <img src={applelogo} alt="applelogo" />
                </div>

                <div className="col-3">
                    <img src={samsunglogo} alt="samsunglogo" />
                </div>

                <div className="col-3">
                    <img src={oppologo} alt="oppologo" />
                </div>

                
            </div>


            <div className="row m-auto justify-content-center align-items-center">
            <div className="col-3">
                    <img src={vivologo} alt="vivologo" />
                </div>

                <div className="col-3">
                    <img src={xiaomilogo} alt="xiaomilogo" />
                </div>

                <div className="col-3">
                    <img src={realmelogo} alt="realmelogo" />
                </div>

            </div>
              
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Smartphones</h2>
                <div className="row m-auto">
                
                {
                    smartphone.length>0?(
                        smartphone.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

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


            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> LED TVs</h2>
                <div className="row m-auto">
                {
                    ledtv.length>0?(
                        ledtv.map((item,index)=>(
                            <div key={index}  className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Laptop</h2>
                <div className="row m-auto">
                {
                    laptop.length>0?(
                        laptop.map((item,index)=>(
                            <div  key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Accessories</h2>
                <div className="row m-auto">
                {
                    Accessories.length>0?(
                        Accessories.map((item,index)=>(
                            <div class key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Shoes</h2>
                <div className="row m-auto">
                {
                    shoes.length>0?(
                        shoes.map((item,index)=>(
                            <div key={index}  className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>


            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Smartwatch</h2>
                <div className="row m-auto">
                {
                    smartwatch.length>0?(
                        smartwatch.map((item,index)=>(
                            <div clas key={index} className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Men</h2>
                <div className="row m-auto">
                {
                    men.length>0?(
                        men.map((item,index)=>(
                            <div key={index}  className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Women</h2>
                <div className="row m-auto">
                {
                    women.length>0?(
                        women.map((item,index)=>(
                            <div key={index}  className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2" onClick={()=>props.history.push("/itemdetail",item)}>
                            <Item name={item.name} rating={item.average_rating} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }

                </div>
            </section>

           

            <Footer />
        </div>
    )
}

export default Home
