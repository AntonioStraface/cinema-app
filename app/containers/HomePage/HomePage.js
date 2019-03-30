/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    const {
      handlerOpenSearch,searchStatus
    } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <Header handlerOpenSearch={handlerOpenSearch} searchStatus={searchStatus} />
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>
              A mikknimal <i>React-Redux</i> boilerplate with all the best practices
            </p>
          </section>
          <section>
            <h2>Try me!</h2>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  handlerOpenSearch: PropTypes.func,
  searchStatus: PropTypes.string
};
