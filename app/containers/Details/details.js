/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import Header from 'components/Header';

import './style.scss';

export default class Details extends React.PureComponent {
  componentDidMount() {
    const {getFilmDetails, match} = this.props;
    getFilmDetails(match.params.id);
  }

  render() {
    const {detailOfFilm} = this.props;

    console.log(detailOfFilm);

    return (
      <React.Fragment>
        <Helmet>
          <title>Details Page</title>
          <meta name="description" content="Detail of film" />
        </Helmet>
        <Header showIcons />
        <div className="detail" />
      </React.Fragment>
    );
  }
}

Details.propTypes = {
  getFilmDetails: PropTypes.func,
  match: PropTypes.object,
  detailOfFilm: PropTypes.object
};
