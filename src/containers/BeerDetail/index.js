import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BeerDetail extends Component {

  getSelectedBeer = () => {
    const { beers } = this.props;

    // grab id param and cast to int
    const id = this.props.match && this.props.match.params.id * 1;

    return beers[beers.findIndex(beer => beer.id === id)];
  };

  render () {
    const beer = this.getSelectedBeer();

    return (
      <div className="container">
        <h2>{beer.name}</h2>
    </div>)
  }
}

BeerDetail.propTypes = {
  beers: PropTypes.array.isRequired
};
