/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import Header from 'components/Header';

import ArticleDetails from 'components/ArticleDetails';
import UserInteraction from 'components/UserInteraction';

import './style.scss';

export default class Details extends React.PureComponent {
  componentWillMount() {
    const {getFilmDetails, match} = this.props;

    getFilmDetails(match.params.id);
  }

  render() {
    const {handlerOnStar, hanlderOnWatched, handlerOnLike, detailOfFilm, detailsOfUser, showForm} = this.props;

    const detail = detailOfFilm.Ratings !== undefined ? <ArticleDetails item={detailOfFilm} /> : null;

    return (
      <React.Fragment>
        <Helmet>
          <title>Details Page</title>
          <meta name="description" content="Detail of film" />
        </Helmet>
        <Header showForm={showForm} />
        <div className="wrapper-details">
          {detail}
          <UserInteraction
            handlerOnStar={handlerOnStar}
            hanlderOnWatched={hanlderOnWatched}
            handlerOnLike={handlerOnLike}
            detailsOfUser={detailsOfUser}
          />
        </div>
      </React.Fragment>
    );
  }
}

Details.defaultProps = {
  showForm: false
};

Details.propTypes = {
  handlerOnStar: PropTypes.func,
  hanlderOnWatched: PropTypes.func,
  handlerOnLike: PropTypes.func,
  getFilmDetails: PropTypes.func,
  match: PropTypes.object,
  detailOfFilm: PropTypes.object,
  detailsOfUser: PropTypes.object,
  showForm: PropTypes.bool
};
