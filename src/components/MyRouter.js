import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// # Pages
import BeersList from '../pages/BeersList'
import NoMatch from '../pages/NoMatch'
import BeerDetail from '../pages/BeerDetail'

const MyRouter = (props) => {
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
};

MyRouter.propTypes = {
  beers: PropTypes.array.isRequired,
  changeRating: PropTypes.func.isRequired,
};

export default MyRouter;
