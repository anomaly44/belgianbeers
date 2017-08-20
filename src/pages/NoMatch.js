import React from 'react';
import { Link } from 'react-router-dom';

export default () => (<div className="container" style={{ marginTop: '20vh' }}>
  <h2>Oops! There is nothing here.</h2>
  <p>Click <Link to="/">here</Link> to go back to our beers.</p>
</div>);
