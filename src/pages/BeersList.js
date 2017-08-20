import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  FormGroup,
  Form
} from 'reactstrap'

// # Components
import H1 from '../components/H1'
import BeersListItem from '../components/BeersListItem'


const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  filterSelect: {
    display: 'inline-block',
    marginRight: 10 
  },
  sortSelect: {
    display: 'inline-block',
    marginLeft: 10
  }
};


export default class BeersList extends Component {

  state = {
    selectFilterValue: 0,
    selectSortValue: 'alphabet'
  };

  handleFilterChange = (event) => {
    this.setState({ selectFilterValue: event.target.value * 1 });
  };

  handleSortChange = (event) => {
    this.setState({ selectSortValue: event.target.value });
  };

  filterBeerIfNecessary = (beer) => {
    const { selectFilterValue } = this.state;

    if (selectFilterValue === 0) {
      return true;
    }

    return !!beer.rating;

  };

  sortBeers = (beerA, beerB) => {
    const { selectSortValue } = this.state;

    // when sorting alphabetically:
    if (selectSortValue === 'alphabet') {
      return beerA.name > beerB.name ? 1 : -1;
    }

    // when sorting by rating
    return (beerB.rating || 0) - (beerA.rating || 0);

  };

  render() {
    const { beers } = this.props;
    const { selectFilterValue, selectSortValue } = this.state;

    return (
      <div className="container" style={styles.container}>
        <div className="row justify-content-md-center justify-content-xs-center">
          <div className="col-xs-12" style={{textAlign: 'center'}}>
            <H1>Belgian Beers</H1>
            <Form>
              <FormGroup style={styles.filterSelect}>
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
              <FormGroup style={{ display: 'inline-block', marginLeft: 10 }}>
                <Input
                  type="select"
                  name="selectSort"
                  id="selectSort"
                  value={selectSortValue}
                  onChange={this.handleSortChange}
                >
                  <option value="alphabet">Alphabetically</option>
                  <option value="rating">By rating</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="row">
          {beers
            .filter(this.filterBeerIfNecessary)
            .sort(this.sortBeers)
            .map(beer => <BeersListItem beer={beer} key={beer.id} />)}
        </div>
      </div>
    );
  }
}

BeersList.propTypes = {
  beers: PropTypes.array.isRequired
};
