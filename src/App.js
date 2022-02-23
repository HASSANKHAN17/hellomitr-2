import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/Auth/SignUp'
import LogIn from './components/Auth/LogIn'
import ItemDetail from './components/Item/ItemDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Cart/Checkout'
import MyProfile from './components/Dashboard/MyProfile/MyProfile'
import Categories from './components/Categories/Categories'
import Orders from './components/Dashboard/Orders/Orders'
import Addresses from './components/Dashboard/Addresses/Addresses'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/itemdetail" component={ItemDetail} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/cart" component={Cart} />
      <Route path="/categories" component={Categories} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/myprofile" component={MyProfile} />
      <Route path="/orders" component={Orders} />
      <Route path="/addresses" component={Addresses} />

    </Switch>
  );
}

export default App;
