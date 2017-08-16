import React from 'react'

const renderBeer = (data) => (
  <li key={data.id}>{data.name}</li>
);

export default ({beers}) => {
  return (<div>
    <ul>
      {beers.map(renderBeer)}
    </ul>
  </div>)

}