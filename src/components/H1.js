import React from 'react'

export default (props) => (
  <h1 style={{
    fontSize: '3em',
    marginBottom: 25,
    textAlign: 'center'
  }}
  >
    {props.children}
  </h1>
);
