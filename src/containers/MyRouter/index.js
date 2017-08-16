import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers/:id" component={Beers}/>
    </div>
  </Router>
);
