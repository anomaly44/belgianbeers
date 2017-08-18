import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ListGroup,
  ListGroupItem,
  Input,
  Label,
  FormGroup
} from 'reactstrap'
import { Link } from 'react-router-dom'
import StarRating from '../StarRating'

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  listItem: {
    paddingLeft: 35,
    paddingRight: 35,
  }
};

const renderBeer = (beer) => (
  <ListGroupItem
    key={beer.id}
    tag={Link}
    to={`/beers/${beer.id}`}
    style={styles.listItem}
  >
    <div className="row">
      <div className="col-xs-3">
        <img src={beer.thumb_image_url} alt={beer.name} height={100} width={100}/>
      </div>
      <div className="col-xs-9" style={{ marginLeft: 30 }}>
        <h3>{beer.name}</h3>
        { beer.rating ?
          <StarRating editing={false} value={beer.rating}/> :
          <p>This beer is not rated yet.</p>}
      </div>
    </div>
  </ListGroupItem>
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
        <h1>Belgian Beers</h1>
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
        <ListGroup>
          {beers
            .filter(this.filterBeerIfNecessary)
            .map(renderBeer)}
        </ListGroup>
      </div>);
  }
}

BeersList.propTypes = {
  beers: PropTypes.array.isRequired
};
