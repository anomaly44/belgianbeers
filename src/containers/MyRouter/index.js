import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// # Components
import BeersList from '../BeersList'

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/beers/3">to beers</Link>
  </div>
);

const Beers = () => (
  <div>
    <h2>Beers</h2>
  </div>
);

export default (props) => (
  <Router>
    <div>
      <Route exact path="/" render={() => (
        <BeersList beers={props.beers} />
      )}/>
      <Route exact path="/beers/:id" component={Beers}/>
    </div>
  </Router>
);
