import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class userInteraction extends React.Component {
  render() {
    const {stars, hanlderOnWatched} = this.props;

    return (
      <section className="userInteraction">
        <i className="userInteraction__watched far fa-eye" onClick={hanlderOnWatched} />
        <ul className="userInteraction__votes">
          {stars.map((star) => (
            <li className={`star-${star} far fa-star`} key={`star-${star}`} />
          ))}
        </ul>
        <i className="userInteraction__like far fa-thumbs-up" />
      </section>
    );
  }
}

userInteraction.defaultProps = {
  stars: [1, 2, 3, 4, 5]
};

userInteraction.propTypes = {
  stars: PropTypes.array,
  hanlderOnWatched: PropTypes.func
};

export default userInteraction;