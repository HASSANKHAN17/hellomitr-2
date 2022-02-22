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
import {addToCart,increaseItemCount,decreaseItemCount,removeFromCart} from '../redux/cart/cartActions'
import {connect} from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'
import RemoveIcon from '@mui/icons-material/Remove';
function ItemDetail(props) {
  let details = props.location.state;
    const [image,setImage]=React.useState(details.images[0].src)
    const [value, setValue] = React.useState('1');
    const [inCart,setInCart] = React.useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderOff = ()=>{
    console.log("pof",details.price/details.regular_price*100)
    return Math.ceil(100-(details.price/details.regular_price*100))
  }
  React.useEffect(()=>{
    if(props.cart.length>0){
      let av = props.cart.filter(item=>item.id===details.id)
      if(av.length>0){
        setInCart(av)
      }
    }else{
      setInCart([])
    }
  },[props.cart])
console.log(props)
  return (
    <div>
    <Header id="1" />
    <SubHeader />
    <div className="row m-auto justify-content-between itemdetail">
        <div className="col-6 imagediv">
            <img src={image} alt="watch" className="mainimg" />
            <div className="row ml-auto mt-5 justify-content-between">
            {
              details.images.map((item,index)=><img key={index} src={item.src} onClick={()=>setImage(item.src)} alt="watch" className="subimg" />)
            }
            </div>
        </div>

        <div className='col-6 productdetail'>
            <h1>{details.name}</h1>
            <p>
                <span className="ratingdiv">{details.average_rating} <StarIcon /></span>
                <span className="ratingreview">({details.rating_count} Ratings & Reviews)</span>
            </p>

            <section className="pricerow m-auto row align-items-center">
                <div className="price">₹{details.price}</div>
                <div className="mrp">{details.regular_price}</div>
                <div className="poff">{renderOff()}% off</div>
            </section>

            <p className='mt-3'>You Save: ₹{details.regular_price-details.price} <br />
            (Inclusive of all taxes)
            </p>

            {inCart.length<=0?<div className="row m-auto">
                <Button onClick={()=>props.addToCart(details)} variant="contained">Add to cart</Button>
                <Button variant="contained" className="ml-3">Buy Now</Button>
            </div>:
            <div className="row m-auto align-items-center">
              <IconButton  onClick={()=>inCart[0].count===1?props.removeFromCart(details):props.decreaseItemCount(details.id)} color="primary" className="iconbutton">
                <RemoveIcon />
              </IconButton>
              <div className="count">
                <h2>{inCart[0].count}</h2>
              </div>
              <IconButton onClick={()=>props.increaseItemCount(details.id)} color="primary" className="iconbutton">
                <AddIcon />
              </IconButton>
            </div>
            }
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
          {/* item specification section */}
            <h1 className="spec">Specification:</h1>
            <div className="specificationdiv">
            <p dangerouslySetInnerHTML={{__html: details.description}} />
            </div>


            {/* atributes section */}
            <section className="attributes"> 
                {
                  details.attributes.map((item,index)=>(
                    <div className="row">
                    <p className="col-4 key">{item.name}</p>
                    <p className="col-8 value">{item.options.map(op=><p>{op}</p>)}</p>
                    </div>
                  ))
                }

            
            </section>





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

const mapStateToProps = ({cart})=>{
  return {
    cart
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    removeFromCart:(item)=>dispatch(removeFromCart(item)),
    addToCart:(item)=>dispatch(addToCart(item)),
    increaseItemCount:(id)=>dispatch(increaseItemCount(id)),
    decreaseItemCount:(id)=>dispatch(decreaseItemCount(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail)