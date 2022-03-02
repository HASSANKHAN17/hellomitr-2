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
import WooCommerceAPI from 'woocommerce-api'
import Pagination from '@mui/material/Pagination';
import Loading from '../Lottie/Loading'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material'
import dataJ from './dataJ.json'
function Categories(props) {


    







    console.log("category props",props)
    const [data,setData]=React.useState([])
    const [actualData,setActualData]=React.useState([])
    const [onsale,setOnSale]=React.useState(false)
    const [instock,setInStock]=React.useState(false)
    const [featured,setFeatured]=React.useState(false)
    const [count,setCount]=React.useState(0)
    const [loading,setLoading]=React.useState(false)
    const [pagenumber,setPageNumber]=React.useState(1)
    const [classN,setClass]=React.useState("")
    const [filterkeys,setFilterKeys]=React.useState({on_sale:false,in_stock:false,featured:false,star5:false,star4:false,star3:false,star2:false,star1:false})
    const [flag,setFlag]=React.useState(false)
    var WooCommerce = new WooCommerceAPI({
        url: 'https://shop.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1'
      });

    const getProducts =(page)=>{
        setPageNumber(page)
        setLoading(true)
        WooCommerce.getAsync(`products${props.location.search}&page=${page}&per_page=15`)
        .then((result) => {
        console.log("phone",JSON.parse(result.toJSON().body))
        setData(JSON.parse(result.toJSON().body))
        setActualData(JSON.parse(result.toJSON().body))
        setLoading(false)
        })
        .catch((error) => {
        setLoading(false)
        console.log(error.result.data);
        });
    }


    React.useEffect(()=>{
            setLoading(true)
            if(props.location.search!==""){
                WooCommerce.getAsync(`products${props.location.search}&per_page=15`)
                .then((result) => {
                console.log("phone",JSON.parse(result.toJSON().body))
                setData(JSON.parse(result.toJSON().body))
                setActualData(JSON.parse(result.toJSON().body))
               })
                .catch((error) => {
                console.log(error.result.data);
                setLoading(false)
                });
                WooCommerce.getAsync(`products/categories/${props.location.search.split("=")[1]}`)
                .then((response) => {
                    console.log(JSON.parse(response.toJSON().body));
                    setCount(JSON.parse(response.toJSON().body).count)
                    setLoading(false)
    
                })
                .catch((error) => {
                    console.log(error.response.data);
                    setLoading(false)
                });
            }else{
                WooCommerce.getAsync(`products?search=${props.location.state}`)
                .then((result) => {
                console.log("search",JSON.parse(result.toJSON().body))
                setLoading(false)
                setData(JSON.parse(result.toJSON().body))
                setActualData(JSON.parse(result.toJSON().body))
               })
                .catch((error) => {
                console.log(error.result.data);
                setLoading(false)
                });
            }
          
    },[props.location.search,props.location.state])
    const handleChange =(key,value)=>{
        // console.log(value);
        // if(onsale){
        // let d = actualData.filter((item)=>item.on_sale && item[key]===value)
        // setData(d)
        // }else if(onsale && instock){
        //     let d = data.filter((item)=>item.on_sale && item.in_stock && item[key]===value)
        // setData(d)
        // }else if(onsale && instock && featured){
        //     let d = data.filter((item)=>item[key]===value)
        // setData(d)
        // }else{
        //     let d = data.filter((item)=>item[key]===value)
        // setData(d)
        // }
    //    if(key==="in_stock" && value===true){
    //        console.log(data);
    //        let item = data.filter(item=>item.stock_status==="instock")
    //         console.log(item)
    //         setData(item)
    //    }else if(key==="in_stock"&& value===false){
    //         let item = actualData.filter(item=>item.stock_status)
    //         setData(item)
    //    }
    //setFilterKeys({...filterkeys,[key]:value})
    }

    const handleFilter = ()=>{
        console.log(filterkeys);
    }

  return (
    <div>
        <Header />
        <SubHeader />
    <section className="row  categories" >
            <div className={classN?"shadow-sm col-6 col-sm-6 col-xs-6 col-md-6 col-lg-3 col-xl-3 filtersactive":"shadow-sm col-6 col-sm-6 col-xs-6 col-md-6 col-lg-3 col-xl-3 filters"}>
            <IconButton className="burger" onClick={()=>setClass(!classN)}>
            <CloseIcon />
            </IconButton>
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
                <FormControlLabel control={<Checkbox onChange={(e)=>{
                    
                    handleChange("on_sale",e.target.checked)
                    handleFilter()
                }} />} label="On Sale" />
                <FormControlLabel control={<Checkbox onChange={(e)=>{
                    
                    handleChange("in_stock",e.target.checked)
                    handleFilter()
                    }} />} label="In Stock" />
                <FormControlLabel control={<Checkbox onChange={(e)=>{
                    
                    handleChange("featured",e.target.checked)
                    handleFilter()
                    
                    }} />} label="Featured" />
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

            <div className="shadow-sm col-12 col-sm-12 col-xs-12 col-md-12 col-lg-8 col-xl-8 products ">
            <IconButton className="burger" onClick={()=>setClass(!classN)}>
            <MenuIcon />
            </IconButton>
               <section className="row">
               {
                   data.length>0?data.map((item,index)=>(
                    <div key={index} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cursor-pointer" onClick={()=>props.history.push("itemdetail",item)}>
                        <Item cid={193} item={item} name={item.name} rating={item.average_rating} regularPrice={item.regular_price} price={item.price} image={item.images[0].src} />
                    
                    </div>
                   )):null
               }
               </section>
            {/* <div className="ml-auto my-4">
            <Pagination page={pagenumber} onChange={(e,pagenumber)=>getProducts(pagenumber)} count={count} />
            </div> */}

            </div>
        </section>

        {/* <Footer /> */}
    </div>
  )
}

export default Categories