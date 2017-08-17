import React, { Component } from 'react'
import PropTypes from 'prop-types'

const radioStyle = {
  display: 'none',
  position: 'absolute',
  marginLeft: -9999
};


export default class StarRating extends Component {

  onChange = (value) => {
    const { editing } = this.props;

    if (!editing) {
      return;
    }

  }

  renderStars() {
    const { value, editing } = this.props;

    const selectStarStyle = (i) => ({
      float: 'left',
      cursor: editing ? 'pointer' : 'default',
      color: value >= i ? '#ffb400' : '#333'
    });

    const nodes = [];
    for (let i = 1; i <= 5; i++) {
      const starInput = (
        <input
          key={`star_${i}`}
          style={radioStyle}
          type="radio"
          value={i}
          checked={value === i}
          readOnly={!editing}
        />
      );
      const starLabel = (
        <label
          key={`label_${i}`}
          style={selectStarStyle(i)}
        ><i style={{fontStyle: 'normal', fontSize: '1.5em'}}>&#9733;</i></label>
      );
      nodes.push(starInput);
      nodes.push(starLabel)
    }
    return nodes;
  }

  render() {
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        {this.renderStars()}
      </div>
    )

  }
}

StarRating.propTypes = {
  value: PropTypes.number,
  editing: PropTypes.bool,
}