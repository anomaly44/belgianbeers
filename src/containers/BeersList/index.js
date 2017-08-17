import React from 'react'
import {
  Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import StarRating from '../StarRating'

const renderBeer = (data) => (
  <Card key={data.id} className="col-xs-6 col-md-2">
    <CardImg top width="100%" src={data.thumb_image_url} alt={data.name}/>
    <CardBlock>
      <CardTitle>{data.name}</CardTitle>
      <CardSubtitle><StarRating editing={false} value={data.rating}/></CardSubtitle>
      <Button
        tag={Link}
        to={`/beers/${data.id}`}
      >
        Details
      </Button>
    </CardBlock>
  </Card>
);

export default ({ beers }) => {
  return (<div className="container">
    <h1>Belgian Beers</h1>
    <div className="row">
      {beers.map(renderBeer)}
    </div>
  </div>)

}