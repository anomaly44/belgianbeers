import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
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
      <div className="col-xs-9" style={{marginLeft: 30}}>
        <h3>{beer.name}</h3>
        <StarRating editing={false} value={beer.rating}/>
      </div>
    </div>
  </ListGroupItem>
);

export default ({ beers }) => {
  return (
    <div className="container" style={styles.container}>
      <h1>Belgian Beers</h1>
      <div className="row">
        <ListGroup className="col-xs-12" >
          {beers.map(renderBeer)}
        </ListGroup>
      </div>
    </div>)

}

