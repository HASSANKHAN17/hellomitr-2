import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/Auth/SignUp'
import LogIn from './components/Auth/LogIn'
import ItemDetail from './components/Item/ItemDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Cart/Checkout'
import Categories from './components/Categories/Categories'


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
    </Switch>
  );
}

export default App;
