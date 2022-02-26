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
import c2img1 from '../Images/carousel2banner/cashebanner.jpeg'
import WooCommerceAPI from 'woocommerce-api'
import tcllogo from '../Images/brands/tclcropped.jpg'
import samsunglogo from '../Images/brands/Samsung-Symbol.png'
import xiaomilogo from '../Images/brands/Xiaomi-Logo.png'
import realmelogo from '../Images/brands/1200px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png'
import vivologo from '../Images/brands/vivo logo.png'
import oppologo from '../Images/brands/OPPO_LOGO_2019.png'
import Loading from './Lottie/Loading'
import {ReactComponent as NewArrivals} from '../Images/icons/new-product-1.svg'
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import HeadphonesBatteryRoundedIcon from '@mui/icons-material/HeadphonesBatteryRounded';
import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Home(props) {
    const [smartphone,setSmartPhone]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [ledtv,setLedtv]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [laptop,setLaptop]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [Accessories,setAccessories]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [shoes,setShoes]=React.useState([])
    const [smartwatch,setSmartWatch]=React.useState({batch1:[],batch2:[],batch3:[]})
    const [men,setMen]=React.useState([])
    const [women,setWomen]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [newArrivals,setNewArrivals]=React.useState({batch1:[],batch2:[],batch3:[]})

    React.useState(()=>{
        //setLoading(true)
        var WooCommerce = new WooCommerceAPI({
            url: 'https://shop.hellomitr.com/',
            consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
            consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
            wpAPI: true,
            version: 'wc/v1'
          });
          //WooCommerce.getAsync("products?category=126&per_page=100&category=193include")
          WooCommerce.getAsync("products?orderby=date&order=desc&per_page=12")
            .then((result) => {
            let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            console.log("abc",a,b,c)
            setNewArrivals({batch1:a,batch2:b,batch3:c})
            })
          WooCommerce.getAsync("products?category=126&per_page=12")
            .then((result) => {
                let arr = JSON.parse(result.toJSON().body)
                let a = arr.slice(0,4) //index to n-1
                let b = arr.slice(4,8)
                let c = arr.slice(8,12)
                console.log("abc",a,b,c)
            setSmartPhone({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=181&per_page=12")
            .then((result) => {
                let arr = JSON.parse(result.toJSON().body)
                let a = arr.slice(0,4) //index to n-1
                let b = arr.slice(4,8)
                let c = arr.slice(8,12)
                console.log("abc",a,b,c)
            setLedtv({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=97&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            console.log("abc",a,b,c)
            setLaptop({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            WooCommerce.getAsync("products?category=193&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            console.log("abc",a,b,c)
            setAccessories({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            
            WooCommerce.getAsync("products?category=103&per_page=12")
            .then((result) => {
             let arr = JSON.parse(result.toJSON().body)
            let a = arr.slice(0,4) //index to n-1
            let b = arr.slice(4,8)
            let c = arr.slice(8,12)
            console.log("abc",a,b,c)
            setSmartWatch({batch1:a,batch2:b,batch3:c})
            })
            .catch((error) => {
            console.log(error.result.data);
            });
            // WooCommerce.getAsync("products?search=men&per_page=6")
            // .then((result) => {
            // console.log(JSON.parse(result.toJSON().body))
            // setMen(JSON.parse(result.toJSON().body))
            // })
            // .catch((error) => {
            // console.log(error.result.data);
            // });
            // WooCommerce.getAsync("products?search=women&per_page=6")
            // .then((result) => {
            // console.log(JSON.parse(result.toJSON().body))
            // setWomen(JSON.parse(result.toJSON().body))
            // //setLoading(false)
            // })
            // .catch((error) => {
            // console.log(error.result.data);
            // //setLoading(false)
            // });
    },[])


    return (
        loading?<Loading />:<div className="home">
            <Header id="1" />
            <SubHeader />
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

            <section className="dod">
                <h2><NewArrivals /> New Arrivals</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch1.length>0?(
                        newArrivals.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch2.length>0?(
                        newArrivals.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    newArrivals.batch3.length>0?(
                        newArrivals.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
                

            </section>


            <section className="shadow-sm brands">
            <h1>Shop by Brands</h1>
            <div className="row m-auto justify-content-center align-items-center">
                <div className="col-3">
                    <img src={tcllogo} alt="applelogo" />
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




            <section className="trending">
                <h2><SmartphoneRoundedIcon className="icon" /> Smartphones</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch1.length>0?(
                        smartphone.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch2.length>0?(
                        smartphone.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartphone.batch3.length>0?(
                        smartphone.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
            </section>

            {/* popular section carousal */}


            <section className="shadow-sm popularitems" style={{textAlign:"center"}}>
                    <h1>Check Your Eligibility</h1>
                    <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={25}
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






            <section className="trending">
                <h2><TvRoundedIcon className="icon" /> LED TVs</h2>
                 <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch1.length>0?(
                        ledtv.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch2.length>0?(
                        ledtv.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    ledtv.batch3.length>0?(
                        ledtv.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
            </section>









            <section className="trending">
                <h2><LaptopMacRoundedIcon className="icon" /> Laptop</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch1.length>0?(
                        laptop.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch2.length>0?(
                        laptop.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    laptop.batch3.length>0?(
                        laptop.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
            </section>









            <section className="trending">
                <h2><HeadphonesBatteryRoundedIcon className="icon" /> Accessories</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch1.length>0?(
                        Accessories.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch2.length>0?(
                        Accessories.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    Accessories.batch3.length>0?(
                        Accessories.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
            </section>




            <section className="trending">
                <h2><WatchRoundedIcon className="icon" /> Smartwatch</h2>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={38}
                totalSlides={3}
                >
                <Slider>
                    
                <Slide index={0}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch1.length>0?(
                        smartwatch.batch1.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={1}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch2.length>0?(
                        smartwatch.batch2.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>

                 <Slide index={2}>
                <div className="row m-auto justify-content-around">

                {
                    smartwatch.batch3.length>0?(
                        smartwatch.batch3.map((item,index)=>(
                            <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                            <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                            </div>            
                    ))
                    ):null
                }
                </div>
                 </Slide>
                </Slider>
                
                <div className="row carousalbtncont justify-content-between">
                    <ButtonBack className="carousalbtn"><ArrowBackIosIcon sx={{ml:.5}} /></ButtonBack>
                    <ButtonNext className="carousalbtn"><ArrowForwardIosIcon /></ButtonNext>
                </div>
            </CarouselProvider>
            </section>

        

           

            <Footer />
        </div>
    )
}

export default Home
