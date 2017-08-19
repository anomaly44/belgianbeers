import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Label,
  FormGroup
} from 'reactstrap'
import { Link } from 'react-router-dom'

// # Components
import StarRating from '../components/StarRating'
import H1 from '../components/H1'
import H2 from '../components/H2'

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  listItem: {
    padding: 5
  },
  beerContainer: {
    border: '1px solid #B6B6B6',
    borderRadius: 5,
    padding: 20
  }
};

const renderBeer = (beer) => (
  <div
    key={beer.id}
    className="col-xs-12 col-md-6 col-xl-4"
    style={styles.listItem}
  >
    <div style={styles.beerContainer}>
      <div className="row">
        <div className="col-xs-3">
          <img src={beer.thumb_image_url} alt={beer.name} height={100} width={100}/>
        </div>
        <div className="col-xs-7 offset-1">
          <H2><Link to={`/beers/${beer.id}`}>{beer.name}</Link></H2>
          { beer.rating ?
            <StarRating editing={false} value={beer.rating}/> :
            <p>This beer is not rated yet.</p>}
        </div>
      </div>
    </div>
  </div>
);


export default class BeersList extends Component {

  state = {
    selectFilterValue: 0
  };

  handleFilterChange = (event) => {
    this.setState({ selectFilterValue: event.target.value * 1 });
  };

  filterBeerIfNecessary = (beer) => {
    const { selectFilterValue } = this.state;

    if (selectFilterValue === 0) {
      return true;
    }

    return !!beer.rating;
  };

  render() {
    const { beers } = this.props;
    const { selectFilterValue } = this.state;

    return (
      <div className="container" style={styles.container}>
        <div className="row">
          <div className="col-xs-12">
            <H1>Belgian Beers</H1>
            <FormGroup>
              <Label for="selectFilter">Show:</Label>
              <Input
                type="select"
                name="selectFilter"
                id="selectFilter"
                value={selectFilterValue}
                onChange={this.handleFilterChange}
              >
                <option value={0}>All beers</option>
                <option value={1}>Only rated beers</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          {beers
            .filter(this.filterBeerIfNecessary)
            .map(renderBeer)}
        </div>
      </div>
    );
  }
}

BeersList.propTypes = {
  beers: PropTypes.array.isRequired
};
