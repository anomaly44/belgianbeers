import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// # Components
import BeersList from '../BeersList'
import NoMatch from '../NoMatch'
import BeerDetail from '../BeerDetail'

export default function MyRouter (props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <BeersList beers={props.beers}/>
          )}/>
          <Route exact path="/beers/:id" render={({match}) => (
            <BeerDetail beers={props.beers} changeRating={props.changeRating} match={match} />
          )}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

MyRouter.propTypes = {
  beers: PropTypes.array.isRequired,
  changeRating: PropTypes.func.isRequired,
};
