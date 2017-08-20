import React from 'react';
import PropTypes from 'prop-types';

const H2 = props => (
  <h2 style={{
    fontSize: '1.5em',
    marginBottom: 15,
  }}
  >
    {props.children}
  </h2>
);

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default H2;
