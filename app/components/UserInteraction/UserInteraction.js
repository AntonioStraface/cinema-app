import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class userInteraction extends React.Component {
  render() {
    const {stars, hanlderOnWatched, handlerOnLike, detailsOfUser, handlerOnStar} = this.props;

    const likeClass = detailsOfUser.piace ? 'fas' : 'far';
    const watchClass = detailsOfUser.visto ? 'fas' : 'far';
    const voteClass = detailsOfUser.voto > 0 ? 'userInteraction__votes--active' : '';

    return (
      <section className="userInteraction">
        <button
          title="visto"
          className={`userInteraction__watched ${watchClass} fa-eye`}
          type="button"
          onClick={hanlderOnWatched}
        />
        <section title="voto" className={`userInteraction__votes ${voteClass}`}>
          {stars.map((star) => {
            return detailsOfUser.voto >= star ? (
              <button
                className={`star-${star} fas fa-star`}
                key={`star-${star}`}
                onClick={handlerOnStar}
                type="button"
                data-value={star}
              />
            ) : (
              <button
                className={`star-${star} far fa-star`}
                key={`star-${star}`}
                onClick={handlerOnStar}
                type="button"
                data-value={star}
              />
            );
          })}
        </section>
        <button
          title="piace"
          className={`userInteraction__like ${likeClass} fa-thumbs-up`}
          type="button"
          onClick={handlerOnLike}
        />
      </section>
    );
  }
}

userInteraction.defaultProps = {
  stars: [1, 2, 3, 4, 5],
  detailsOfUser: {
    visto: false,
    piace: false,
    voto: 0
  }
};

userInteraction.propTypes = {
  stars: PropTypes.array,
  hanlderOnWatched: PropTypes.func,
  detailsOfUser: PropTypes.object,
  handlerOnLike: PropTypes.func,
  handlerOnStar: PropTypes.func
};

export default userInteraction;
