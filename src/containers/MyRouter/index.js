import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// # Components
import BeersList from '../BeersList'
import NoMatch from '../NoMatch'
import BeerDetail from '../BeerDetail'

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
      <Switch>
        <Route exact path="/" render={() => (
          <BeersList beers={props.beers}/>
        )}/>
        <Route exact path="/beers/:id" render={({match}) => (
          <BeerDetail beers={props.beers} match={match} />
        )}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);
