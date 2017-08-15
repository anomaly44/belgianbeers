/**
 * Created by rob on 8/15/17.
 */
import React from 'react';
import request from '../utils/request'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: null
    };
  }


  componentDidMount() {
    request('/api/beers')
      .then(response => this.setState({ beers: response.beers }));
  }

  render() {
    const { beers } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Belgian Beers</h1>
        <p>{beers && JSON.stringify(beers)}</p>
      </div>);
  }
}
