import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import Placeholder from '../../images/placeholder.png';

class ArticleDetails extends React.Component {
  render() {
    const {item} = this.props;

    return (
      <article className="articleDetails" key={item.imdbID}>
        <div className="articleDetails__first-block">
          <div className="articleDetails__image">
            <img alt={item.Title} src={item.Poster !== 'N/A' ? item.Poster : Placeholder} />
          </div>
          <div className="articleDetails__info">
            <section className="articleDetails__description">
              <h3>{item.Title}</h3>
              <span>{item.Year}</span>
              <span>{item.Director}</span>
              <span>{item.Genre}</span>
            </section>
            <ul className="articleDetails__votes">
              {item.Ratings.map((vote) => (
                <li key={vote.Source} title={vote.Source}>
                  <i />
                  <span>{vote.Value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="articleDetails__plot">{item.Plot}</p>
      </article>
    );
  }
}

ArticleDetails.defaultProps = {
  item: {
    Title: '',
    Poster: '',
    imdbID: '',
    Year: '',
    Director: '',
    Genre: '',
    Plot: '',
    Ratings: []
  }
};

ArticleDetails.propTypes = {
  item: PropTypes.object
};

export default ArticleDetails;
