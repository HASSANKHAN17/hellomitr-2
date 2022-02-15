import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import ItemDetail from './components/Item/ItemDetail'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/itemdetail" component={ItemDetail} />
    </Switch>
  );
}

export default App;
