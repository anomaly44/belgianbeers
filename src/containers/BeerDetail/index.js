import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText } from 'reactstrap'
import StarRating from '../StarRating'
import {getBeer} from '../../utils/beerDataUtils'

export default class BeerDetail extends Component {

  getBeerId = () => {
    // grab id param and cast to int
    return this.props.match && this.props.match.params.id * 1;
  };

  getSelectedBeer = () => {
    const { beers } = this.props;
    return getBeer(beers, this.getBeerId());
  };

  changeBeerRating = (rating) => {
    const {changeRating} = this.props;
    changeRating(this.getBeerId(), rating);
  };

  render() {
    const beer = this.getSelectedBeer();
    const brewery = beer.brewery;
    return (
      <div className="container">
        <h2 style={{ marginTop: 20, marginBottom: 20 }}>
          {beer.name}
        </h2>
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{textAlign: 'center'}}>
            <img src={beer.image_url} alt={beer.name}/>
          </div>
          { brewery && <div className="col-xs-12 col-md-6">
            <Card style={{ padding: 20 }}>
              <CardTitle>
                {brewery.name}
              </CardTitle>
              <CardText>
                {brewery.address} <br/>
                {brewery.city}
              </CardText>
            </Card>
            <div>
              <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                {beer.rating ? 'Change the rating of this beer:' : 'Rate this beer'}
              </h3>
              <StarRating
                value={beer.rating}
                onRatingChange={this.changeBeerRating}
                editing
                large
              />
            </div>
          </div>}
        </div>

      </div>)
  }
}

BeerDetail.propTypes = {
  beers: PropTypes.array.isRequired,
  changeRating: PropTypes.func.isRequired
};
