/**
 * Created by rob on 8/15/17.
 */
import React from 'react';
import request from '../utils/request';
import MyRouter from '../components/MyRouter';
import { getBeerIndex } from '../utils/beerDataUtils';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      beers: null,
      error: null,
    };
  }

  async componentWillMount() {
    try {
      this.setState({
        loading: true,
        error: null,
      });
      const data = await request('/api/beers');
      this.setState({
        beers: data.beers,
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: 'Failed loading all the delicious beers. Please try again later',
        loading: false,
      });
    }
  }

  changeRating = async (id, rating) => {
    const { beers } = this.state;
    const oldBeers = beers.slice();
    const newBeers = beers.slice();

    // Update our local beer data optimistically
    const beerIndex = getBeerIndex(beers, id);
    newBeers[beerIndex].rating = rating;
    this.setState({ beers: newBeers });

    // handle update on server
    try {
      await request(`/api/beers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating }),
      });
    } catch (err) {
      // Set error and rollback to our old beer array
      this.setState({
        error: 'Failed updating beer rating',
        beers: oldBeers,
      });
    }
  };

  render() {
    const { beers, loading, error } = this.state;
    return (
      <div className="main">
        {error && <div>{error}</div>}
        {loading && <div className="loading">
          <div className="spinner" />
        </div>}
        {beers && <MyRouter beers={beers} changeRating={this.changeRating} />}
      </div>);
  }
}
