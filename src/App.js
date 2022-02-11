import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
