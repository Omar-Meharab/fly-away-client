import './App.css';
import Homepage from './components/Homepage/Homepage';
import Bookings from './components/Bookings/Bookings';
import Login from './components/Login/Login';
import AddDestinations from './components/AddDestinations/AddDestinations';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/Login/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <PrivateRoute path="/bookings">
            <Bookings />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addDestinations">
            <AddDestinations />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
