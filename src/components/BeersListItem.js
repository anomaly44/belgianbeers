import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// # Components
import StarRating from './StarRating'
import H2 from './H2'

const styles = {
  beerContainer: {
    border: '1px solid #B6B6B6',
    borderRadius: 5,
    padding: 20,
    height: '100%'
  },
  listItem: {
    padding: 5
  },
};

const BeersListItem = ({beer}) => {
  return (
    <div
      className="col-xs-12 col-md-6 col-xl-4"
      style={styles.listItem}
    >
      <div style={styles.beerContainer}>
        <div className="row">
          <div className="col-xs-3">
            <img src={beer.thumb_image_url} alt={beer.name} height={100} width={100}/>
          </div>
          <div className="col-xs-7 col-md-7 offset-1">
            <H2><Link to={`/beers/${beer.id}`}>{beer.name}</Link></H2>
            {beer.brewery && <p>{beer.brewery.name}</p>}
            { beer.rating ?
              <StarRating editing={false} value={beer.rating}/> :
              <p>Not rated yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

BeersListItem.propTypes = {
  beer: PropTypes.object.isRequired
};

export default BeersListItem;
