import './App.css';
import Homepage from './components/Homepage/Homepage';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AddDestinations from './components/AddDestinations/AddDestinations';
import Checkout from './components/Checkout/Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addDestinations">
            <AddDestinations />
          </Route>
          <Route path="/checkout/:id">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
