import React, { Component } from 'react';
import PropTypes from 'prop-types';

const radioStyle = {
  display: 'none',
  position: 'absolute',
  marginLeft: -9999,
};

export default class StarRating extends Component {
  handleStarClick = (index) => {
    const { editing, onRatingChange } = this.props;

    if (!editing) {
      return;
    }

    onRatingChange(index);
  };

  renderStars() {
    const { value, editing, large } = this.props;
    const selectStarStyle = i => ({
      float: 'left',
      cursor: editing ? 'pointer' : 'default',
      color: value >= i ? '#ffb400' : '#6D6D6D',
    });
    const nodes = [];

    for (let i = 1; i <= 5; i += 1) {
      const starInput = (
        <input
          key={`star_${i}`}
          style={radioStyle}
          type="radio"
          value={i}
          checked={value === i}
          readOnly={!editing}
          onChange={() => null}
          id={`star_${i}`}
        />
      );
      const starLabel = (
        <label
          key={`label_${i}`}
          style={selectStarStyle(i)}
          onClick={() => this.handleStarClick(i)}
          htmlFor={`star_${i}`}
        ><i style={{ fontStyle: 'normal', fontSize: large ? '3em' : '1.5em' }}>&#9733;</i></label>
      ); // eslint-disable-line
      nodes.push(starInput);
      nodes.push(starLabel);
    }
    return nodes;
  }

  render() {
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        {this.renderStars()}
      </div>
    );
  }
}

StarRating.defaultProps = {
  value: 0,
  editing: false,
  large: false,
  onRatingChange: null,
};

StarRating.propTypes = {
  value: PropTypes.number,
  editing: PropTypes.bool,
  large: PropTypes.bool,
  onRatingChange: PropTypes.func,
};
