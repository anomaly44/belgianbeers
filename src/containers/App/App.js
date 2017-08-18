/**
 * Created by rob on 8/15/17.
 */
import React from 'react';
import request from '../../utils/request'
import MyRouter from '../MyRouter'
import { getBeerIndex } from '../../utils/beerDataUtils'

import './App.scss'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      beers: null,
      error: null,
    };
  }

  changeRating = (id, rating) => {
    const { beers } = this.state;
    if (!this.state.beers) {
      return undefined
    }
    const beerIndex = getBeerIndex(beers, id);
    const newBeers = beers.slice();
    newBeers[beerIndex].rating = rating;
    this.setState({ beers: newBeers });

  };

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
        error: null,
      });
      const data = await request('/api/beers');
      this.setState({
        beers: data.beers,
        loading: false
      });
    } catch (err) {
      this.setState({
        error: 'Failed loading all the delicious beers. Please try again later',
        loading: false
      })
    }
  }

  render() {
    const { beers, loading, error } = this.state;
    return (
      <div className="main">
        {error && <div>{error}</div>}
        {loading && <div className="loading">
          <div className="spinner"></div>
        </div>}
        {beers && <MyRouter beers={beers} changeRating={this.changeRating} />}
      </div>);
  }
}
