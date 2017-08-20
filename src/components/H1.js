import React from 'react';
import PropTypes from 'prop-types';

const H1 = props => (
  <h1 style={{
    fontSize: '2em',
    marginBottom: 25,
  }}
  >
    {props.children}
  </h1>
);

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default H1;
